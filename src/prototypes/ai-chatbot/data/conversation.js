// Timing config for auto-play (ms)
export const STATE_TIMING = {
  1: 1500,   // welcome → option selected
  2: 2000,   // option selected → tracking # entered
  3: 2500,   // tracking # entered → bot responds
  4: 3000,   // bot responds → handoff initiated
  5: 3000,   // handoff initiated → connected to agent
}

export const TYPING_DURATION = 1200

export const QUICK_REPLY_OPTIONS = [
  { id: 'track', label: 'Track a shipment', icon: 'package' },
  { id: 'returns', label: 'Start a return', icon: 'refresh' },
  { id: 'billing', label: 'Billing question', icon: 'credit-card' },
]

export const SOURCE_LINKS = [
  { label: 'Understanding Shipping Delays', url: '#' },
  { label: 'How to Track Your Shipment', url: '#' },
]

export const HEADER_CONFIG = {
  bot: {
    name: 'Aerobot',
    role: 'AI assistant',
    avatarColor: '#1B7D4E',
  },
  agent: {
    name: 'Scarlet',
    role: 'Support agent',
    avatarColor: '#F5A623',
  },
}

// Composer preview text per state
export const COMPOSER_PREVIEW = {
  1: '',
  2: '6743AERO9876',
  3: '',
  4: 'I need to talk to a real person',
  5: '',
  6: '',
}

// All messages across 6 states
export const MESSAGES = [
  // State 1: Welcome
  {
    id: 'welcome',
    state: 1,
    sender: 'bot',
    senderName: 'Aerobot',
    time: '10:24 AM',
    text: 'Hi there! I\'m Aerobot, your shipping support assistant. How can I help you today?',
    quickReplies: true,
  },

  // State 2: Option selected + bot follow-up
  {
    id: 'track-selected',
    state: 2,
    sender: 'bot',
    senderName: 'Aerobot',
    time: '10:24 AM',
    text: 'Sure, I can help you track a shipment! Please enter your tracking number and I\'ll look it up for you.',
  },

  // State 3: Customer sends tracking number + bot acknowledges
  {
    id: 'tracking-number',
    state: 3,
    sender: 'customer',
    senderName: 'You',
    time: '10:25 AM',
    text: '6743AERO9876',
  },
  {
    id: 'retrieving',
    state: 3,
    sender: 'bot',
    senderName: 'Aerobot',
    time: '10:25 AM',
    text: 'Let me look up tracking number 6743AERO9876 for you...',
  },

  // State 4: Bot responds with shipment details
  {
    id: 'shipment-details',
    state: 4,
    sender: 'bot',
    senderName: 'Aerobot',
    time: '10:25 AM',
    text: 'I found your shipment. Here are the details:\n\n**Order #6743AERO9876**\n**Status:** In Transit — Delayed\n**Estimated Delivery:** March 15, 2026 (originally March 13)\n**Current Location:** Memphis, TN distribution center\n\nIt looks like your package was delayed due to severe weather in the Midwest. It\'s now back on the move and should arrive within 2 business days.\n\nWas this helpful?',
    sources: true,
    feedback: true,
  },

  // State 5: Customer requests handoff + bot collects info
  {
    id: 'handoff-request',
    state: 5,
    sender: 'customer',
    senderName: 'You',
    time: '10:26 AM',
    text: 'I need to talk to a real person about this delay.',
  },
  {
    id: 'handoff-ack',
    state: 5,
    sender: 'bot',
    senderName: 'Aerobot',
    time: '10:26 AM',
    text: 'Of course! Let me connect you with a support agent who can help further. One moment please...',
  },

  // State 6: Connected to agent
  {
    id: 'agent-greeting',
    state: 6,
    sender: 'agent',
    senderName: 'Scarlet',
    time: '10:27 AM',
    text: 'Hi there! I\'m Scarlet. I can see you\'ve been chatting with Aerobot about your delayed shipment #6743AERO9876. I\'m sorry for the inconvenience — let me see what I can do to help.',
  },
  {
    id: 'agent-offer',
    state: 6,
    sender: 'agent',
    senderName: 'Scarlet',
    time: '10:27 AM',
    text: 'I\'ve flagged your package for priority handling. I can also offer you a $10 credit for the delay. Would you like me to apply that to your account?',
  },
]
