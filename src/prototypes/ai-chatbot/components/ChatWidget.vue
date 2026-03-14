<template>
  <div class="chat-widget">
    <WidgetHeader :config="headerConfig" @close="$emit('close')" />

    <div ref="messagesRef" class="chat-messages">
      <template v-for="msg in visibleMessages" :key="msg.id">
        <!-- Bot / Agent message -->
        <BotMessage
          v-if="msg.sender === 'bot' || msg.sender === 'agent'"
          :sender="msg.sender"
          :sender-name="msg.senderName"
          :time="msg.time"
          :text="msg.text"
          :avatar-color="msg.sender === 'agent' ? '#F5A623' : '#E20074'"
          :is-new="msg.state === currentState && isAnimating"
        >
          <!-- Quick replies (state 1 welcome message) -->
          <QuickReplies
            v-if="msg.quickReplies"
            :options="QUICK_REPLY_OPTIONS"
            :selected-id="currentState >= 2 ? 'track' : null"
            :is-new="msg.state === currentState && isAnimating"
          />

          <!-- Source links -->
          <SourceLinks
            v-if="msg.sources"
            :links="SOURCE_LINKS"
            :is-new="msg.state === currentState && isAnimating"
          />

          <!-- Feedback row -->
          <div v-if="msg.feedback" class="feedback-row" :class="{ 'is-new': msg.state === currentState && isAnimating }">
            <span class="feedback-label">Was this helpful?</span>
            <button class="feedback-btn" aria-label="Thumbs up">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 6.5l2.5-5a1.5 1.5 0 011.5 1.5v3h3.17a1 1 0 01.98 1.2l-.83 4a1 1 0 01-.98.8H4m0-5.5v5.5m0-5.5H2.5a1 1 0 00-1 1v3.5a1 1 0 001 1H4" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="feedback-btn" aria-label="Thumbs down">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M10 7.5l-2.5 5a1.5 1.5 0 01-1.5-1.5v-3H2.83a1 1 0 01-.98-1.2l.83-4a1 1 0 01.98-.8H10m0 5.5V2m0 5.5h1.5a1 1 0 001-1V3a1 1 0 00-1-1H10" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </BotMessage>

        <!-- Customer message -->
        <CustomerMessage
          v-if="msg.sender === 'customer'"
          :time="msg.time"
          :text="msg.text"
          :is-new="msg.state === currentState && isAnimating"
        />

        <!-- Agent divider before state 6 messages -->
        <AgentDivider
          v-if="msg.id === 'handoff-ack' && currentState >= 5"
          :text="currentState >= 6 ? 'Connected with Scarlet' : 'Connecting to an agent...'"
          :connecting="currentState === 5"
          :is-new="currentState === 5 && isAnimating"
        />
      </template>

      <!-- Typing indicator -->
      <TypingIndicator
        v-if="showTyping"
        :sender="typingSender"
        :avatar-color="typingSender === 'agent' ? '#F5A623' : '#E20074'"
      />
    </div>

    <MessageComposer :preview-text="composerPreview" />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import WidgetHeader from './WidgetHeader.vue'
import MessageComposer from './MessageComposer.vue'
import BotMessage from './BotMessage.vue'
import CustomerMessage from './CustomerMessage.vue'
import QuickReplies from './QuickReplies.vue'
import SourceLinks from './SourceLinks.vue'
import TypingIndicator from './TypingIndicator.vue'
import AgentDivider from './AgentDivider.vue'
import {
  MESSAGES,
  QUICK_REPLY_OPTIONS,
  SOURCE_LINKS,
  HEADER_CONFIG,
  COMPOSER_PREVIEW,
  STATE_TIMING,
  TYPING_DURATION,
} from '../data/conversation.js'

defineEmits(['close'])

const props = defineProps({
  active: {
    type: Boolean,
    default: true,
  },
})

const currentState = ref(1)
const showTyping = ref(false)
const isAnimating = ref(true)
const isAutoPlaying = ref(false)
const messagesRef = ref(null)

// Track timeouts for cleanup
const timeouts = ref([])

const headerConfig = computed(() => {
  return currentState.value >= 6 ? HEADER_CONFIG.agent : HEADER_CONFIG.bot
})

const visibleMessages = computed(() => {
  return MESSAGES.filter(m => m.state <= currentState.value)
})

const composerPreview = computed(() => {
  return COMPOSER_PREVIEW[currentState.value] || ''
})

// Determine who is typing next based on upcoming state
const typingSender = computed(() => {
  const nextState = currentState.value + 1
  const nextMessages = MESSAGES.filter(m => m.state === nextState)
  if (nextMessages.length > 0) {
    const firstMsg = nextMessages[0]
    return firstMsg.sender === 'agent' ? 'agent' : 'bot'
  }
  return 'bot'
})

function scrollToBottom () {
  nextTick(() => {
    if (messagesRef.value) {
      messagesRef.value.scrollTo({
        top: messagesRef.value.scrollHeight,
        behavior: 'smooth',
      })
    }
  })
}

function goToState (state) {
  if (state < 1 || state > 6) return
  isAnimating.value = true
  currentState.value = state
  scrollToBottom()
  // Clear animation flag after animation completes
  const t = setTimeout(() => { isAnimating.value = false }, 400)
  timeouts.value.push(t)
}

function showTypingThenAdvance (nextState) {
  showTyping.value = true
  scrollToBottom()
  const t = setTimeout(() => {
    showTyping.value = false
    goToState(nextState)
  }, TYPING_DURATION)
  timeouts.value.push(t)
}

function startAutoPlay () {
  isAutoPlaying.value = true
  let state = 1
  goToState(1)

  function scheduleNext () {
    if (!isAutoPlaying.value || state >= 6) {
      isAutoPlaying.value = false
      return
    }
    const delay = STATE_TIMING[state] || 2000
    const t = setTimeout(() => {
      if (!isAutoPlaying.value) return
      state++
      showTypingThenAdvance(state)
      // Schedule the next state after typing + message animation
      const t2 = setTimeout(() => {
        scheduleNext()
      }, TYPING_DURATION + 500)
      timeouts.value.push(t2)
    }, delay)
    timeouts.value.push(t)
  }

  scheduleNext()
}

function stopAutoPlay () {
  isAutoPlaying.value = false
}

function handleKeydown (e) {
  if (e.key === 'ArrowRight') {
    stopAutoPlay()
    if (currentState.value < 6) {
      showTypingThenAdvance(currentState.value + 1)
    }
  } else if (e.key === 'ArrowLeft') {
    stopAutoPlay()
    showTyping.value = false
    goToState(Math.max(1, currentState.value - 1))
  }
}

function resetState () {
  stopAutoPlay()
  showTyping.value = false
  timeouts.value.forEach(clearTimeout)
  timeouts.value = []
  currentState.value = 1
  isAnimating.value = true
}

watch(currentState, () => {
  scrollToBottom()
})

watch(() => props.active, (val) => {
  if (val) {
    resetState()
    const t = setTimeout(() => {
      startAutoPlay()
    }, 2000)
    timeouts.value.push(t)
  } else {
    resetState()
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  if (props.active) {
    const t = setTimeout(() => {
      startAutoPlay()
    }, 2000)
    timeouts.value.push(t)
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  timeouts.value.forEach(clearTimeout)
})
</script>

<style scoped>
.chat-widget {
  width: 384px;
  height: 600px;
  background: #fff;
  border-radius: 16px;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.08),
    0 1px 4px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: var(--dt-font-family-body, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  /* Custom scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #D0D0D0 transparent;
}

.chat-messages::-webkit-scrollbar {
  width: 4px;
}

.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #D0D0D0;
  border-radius: 4px;
}

/* Feedback row */
.feedback-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
}

.feedback-row.is-new {
  animation: fadeSlideUp 0.35s ease;
}

.feedback-label {
  font-size: 12px;
  color: #9A9A9A;
}

.feedback-btn {
  width: 28px;
  height: 28px;
  border: 1px solid #E8E8E8;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9A9A9A;
  transition: all 0.15s;
}

.feedback-btn:hover {
  border-color: #D0D0D0;
  color: #535353;
  background: #FAFAFA;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
