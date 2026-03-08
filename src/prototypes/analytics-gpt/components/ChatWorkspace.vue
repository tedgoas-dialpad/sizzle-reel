<template>
  <div class="chat-workspace">
    <!-- Header -->
    <div class="chat-header">
      <button class="header-icon-btn" aria-label="Past conversations">
        <DtIconPastConversations size="300" />
      </button>
    </div>

    <!-- Centered conversation area -->
    <div class="chat-body">
      <div class="chat-center">
        <!-- Welcome hero -->
        <div class="welcome-hero">
          <div class="bot-avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9979 4.98108C15.7124 5.58347 16.412 6.22639 17.0927 6.90576C23.0191 12.8339 25.7471 19.8478 22.7975 22.799C21.0661 24.5291 17.945 24.3333 14.3481 22.5761C13.92 22.3667 13.7417 21.8481 13.9511 21.4199C14.1604 20.9904 14.6791 20.8135 15.1072 21.0228C18.1149 22.4924 20.5081 22.6423 21.5751 21.5766C23.5753 19.5749 21.1956 13.4539 15.8703 8.12938C15.2247 7.48376 14.5602 6.87328 13.8836 6.30331C13.5189 5.99672 13.473 5.45107 13.7796 5.08639C14.0875 4.72036 14.6333 4.67448 14.9979 4.98108ZM18.9132 13.7968C19.2778 14.1061 19.3224 14.6517 19.0131 15.015C18.4256 15.7079 17.7841 16.4022 17.0926 17.0937C11.1648 23.0205 4.15129 25.7486 1.20173 22.7989C-0.528355 21.0687 -0.333873 17.9502 1.42187 14.3545C1.63121 13.9264 2.14849 13.7481 2.5766 13.9574C3.00608 14.1668 3.18435 14.6841 2.975 15.1136C1.50692 18.1188 1.35836 20.5107 2.42395 21.5764C4.42416 23.5767 10.5449 21.1968 15.8704 15.8712C16.5295 15.2121 17.1386 14.553 17.695 13.8966C18.0043 13.5332 18.5486 13.4888 18.9132 13.7968ZM9.64405 1.42071C10.0722 1.63006 10.2505 2.14872 10.0411 2.57689C9.83177 3.0064 9.31449 3.18468 8.885 2.97531C5.87997 1.50715 3.48962 1.35857 2.42368 2.42423C0.422116 4.42456 2.80321 10.5456 8.1285 15.8715C8.77139 16.5157 9.43449 17.1235 10.1098 17.6921C10.4745 18.0001 10.5204 18.5458 10.2138 18.9104C9.90587 19.2751 9.36022 19.3224 8.9956 19.0144C8.28249 18.4147 7.58426 17.7718 6.9049 17.0938C0.97845 11.1656 -1.74949 4.15171 1.20146 1.20197C2.93019 -0.528216 6.04898 -0.333788 9.64405 1.42071ZM12.0454 8.99924C12.2223 9.04516 12.3573 9.18293 12.4006 9.35987L12.7585 10.8537C12.8206 11.1117 13.0178 11.317 13.2744 11.3886L14.5926 11.7586C14.8343 11.8262 14.9748 12.076 14.9072 12.3178C14.8627 12.4758 14.7357 12.5987 14.5763 12.6366L13.3271 12.9364C13.0529 13.0026 12.8422 13.2187 12.7814 13.4942L12.41 15.1974C12.3547 15.4567 12.0981 15.6215 11.8388 15.5648C11.6551 15.5243 11.5119 15.3811 11.4728 15.1974L11.1014 13.4969C11.0419 13.22 10.8272 13.0039 10.553 12.9391L9.25918 12.6339C9.01337 12.5771 8.86212 12.3313 8.92018 12.0855C8.958 11.9234 9.0809 11.7951 9.24027 11.7505L10.5409 11.3859C10.7921 11.3156 10.9879 11.1171 11.0527 10.8645L11.4471 9.35044C11.5146 9.08841 11.7833 8.93036 12.0454 8.99924ZM22.7974 1.20184C24.5288 2.93337 24.3344 6.06298 22.5759 9.6638C22.3666 10.0933 21.8479 10.2702 21.4198 10.0609C20.9903 9.85153 20.812 9.33422 21.0227 8.90471C22.4935 5.89276 22.6434 3.49275 21.5751 2.42433C19.5736 0.422651 13.4529 2.80388 8.1287 8.12949C7.48043 8.77646 6.86728 9.44369 6.29597 10.1231C5.98804 10.4891 5.44377 10.535 5.07776 10.2284C4.7131 9.92046 4.66584 9.37616 4.97377 9.01013C5.57613 8.29294 6.22306 7.58923 6.90508 6.90582C12.8329 0.979021 19.8465 -1.74929 22.7974 1.20184Z" fill="white"/>
            </svg>
          </div>
          <h1 class="welcome-title">Hello, Sarah</h1>
          <p class="welcome-subtitle">How can I help you today?</p>
        </div>

        <!-- Composer -->
        <div class="composer">
          <textarea
            ref="textareaRef"
            class="composer-input"
            placeholder="Ask me any Analytics questions"
            rows="1"
            @input="autoResize"
          />
          <button class="composer-send-btn" aria-label="Send">
            <DtIconSend size="300" />
          </button>
        </div>

        <!-- Suggestion chips -->
        <div class="suggestions" :class="{ 'is-refreshing': isRefreshing }">
          <button
            v-for="chip in suggestionChips"
            :key="chip"
            class="suggestion-chip"
            @click="selectChip(chip)"
          >
            {{ chip }}
          </button>
        </div>

        <!-- Refresh suggestions -->
        <button class="refresh-btn" :disabled="isRefreshing" @click="refreshSuggestions">
          <DtIconRefresh size="200" />
          <span>Refresh Suggestions</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DtIconPastConversations from '@dialpad/dialtone-icons/vue3/past-conversations'
import DtIconSend from '@dialpad/dialtone-icons/vue3/send'
import DtIconRefresh from '@dialpad/dialtone-icons/vue3/refresh'

const textareaRef = ref(null)
const isRefreshing = ref(false)

const chipSets = [
  [
    'Show me handle times',
    'Top performers by CSAT',
    'Analyze call volume',
    'Count of missed calls',
    'Review high wait times',
  ],
  [
    'Review high hold times',
    'What is SLA?',
    'Top answered calls and sessions by contact centers',
    'Show me voice and digital SLA',
    'Review agent productivity percentage',
  ],
  [
    'Compare weekly call trends',
    'Busiest hours by queue',
    'Average speed of answer',
    'Agent utilization rates',
    'Abandoned call reasons',
  ],
]

let currentSetIndex = 0
const suggestionChips = ref(chipSets[currentSetIndex])

function refreshSuggestions () {
  isRefreshing.value = true
  setTimeout(() => {
    currentSetIndex = (currentSetIndex + 1) % chipSets.length
    suggestionChips.value = chipSets[currentSetIndex]
    isRefreshing.value = false
  }, 2000)
}

function selectChip (text) {
  textareaRef.value.value = text
  textareaRef.value.focus()
}

function autoResize (event) {
  const el = event.target
  el.style.height = 'auto'
  el.style.height = el.scrollHeight + 'px'
}
</script>

<style scoped>
.chat-workspace {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #FFFFFF;
  border-radius: 16px 16px 0 0;
}

.chat-header {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 12px;
  flex-shrink: 0;
}

.header-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: none;
  color: #535353;
  cursor: pointer;
  padding: 0;
}

.header-icon-btn:hover {
  background: rgba(28, 28, 28, 0.05);
}

.chat-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 0 24px 48px;
}

.chat-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 764px;
}

.welcome-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

.bot-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #471571 0%, #551B84 3.08%, #7C229E 14.48%, #9024A4 23.67%, #B02290 35.5%, #D32B86 48.3%, #E92F6F 60.29%, #F6484F 70.08%, #FB7328 90.02%, #F3960F 97.29%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.welcome-title {
  font-size: 27px;
  font-weight: 500;
  color: #1C1C1C;
  margin: 0 0 4px;
  line-height: 1.2;
}

.welcome-subtitle {
  font-size: 19px;
  font-weight: 500;
  color: #535353;
  margin: 0;
  line-height: 1.3;
}

.composer {
  position: relative;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid rgba(28, 28, 28, 0.11);
  border-radius: 16px;
  margin-bottom: 16px;
}

.composer-input {
  width: 100%;
  padding: 14px 48px 14px 16px;
  border: none;
  border-radius: 16px;
  font-family: inherit;
  font-size: 15px;
  line-height: 1.5;
  color: #1C1C1C;
  background: transparent;
  resize: none;
  outline: none;
  box-sizing: border-box;
}

.composer-input::placeholder {
  color: #9A9A9A;
}

.composer-send-btn {
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: none;
  color: #9A9A9A;
  cursor: pointer;
  padding: 0;
}

.composer-send-btn:hover {
  background: rgba(28, 28, 28, 0.05);
  color: #535353;
}

.suggestions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
}

.suggestion-chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 100px;
  border: 1px solid rgba(28, 28, 28, 0.11);
  background: #FFFFFF;
  font-family: inherit;
  font-size: 13px;
  color: #535353;
  white-space: nowrap;
  cursor: pointer;
}

.suggestion-chip:hover {
  background: rgba(28, 28, 28, 0.05);
}

.refresh-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  background: none;
  color: #535353;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

.refresh-btn:hover:not(:disabled) {
  background: rgba(28, 28, 28, 0.05);
}

.refresh-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.suggestions.is-refreshing .suggestion-chip {
  opacity: 0.32;
  background-image: linear-gradient(170deg,
    rgba(71,21,113,0.1) 0%,
    rgba(85,27,132,0.1) 3.08%,
    rgba(124,34,158,0.1) 14.48%,
    rgba(144,36,164,0.1) 23.67%,
    rgba(176,34,144,0.1) 35.5%,
    rgba(211,43,134,0.1) 48.3%,
    rgba(233,47,111,0.1) 60.29%,
    rgba(246,72,79,0.1) 70.08%,
    rgba(251,115,40,0.1) 90.02%,
    rgba(243,150,15,0.1) 97.29%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
