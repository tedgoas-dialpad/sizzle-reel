// Sidebar navigation items
export const navItems = [
  { label: 'Inbox', icon: 'inbox', badge: 5 },
  { label: 'Launchpad', icon: 'launchpad', active: true, tag: 'New' },
  { label: 'Contacts', icon: 'contacts' },
  { label: 'Channels', icon: 'channels' },
  { label: 'Threads', icon: 'threads' },
]

export const sidebarSections = [
  {
    title: 'Favorites',
    defaultOpen: true,
    items: [
      { label: 'Ben Parker', subtitle: 'In a meeting · Working from SF', avatar: 'BP', avatarColor: '#7C52FF', status: 'busy' },
      { label: 'Alicia Kurniawan', avatar: 'AK', avatarColor: '#7C52FF', badge: 2 },
      { label: 'design', icon: 'channel' },
      { label: 'Claire Reynolds, Lori Smith...', icon: 'group' },
      { label: 'Veronica Smith', subtitle: '⚡ TCB!', avatar: 'VS', avatarColor: '#9E9E9E' },
    ],
  },
  {
    title: 'Contact centers',
    statusLabel: 'Available',
    defaultOpen: true,
    items: [
      { label: 'Digital Engagement', icon: 'contact-center' },
      { label: 'Support CC', icon: 'square', iconColor: '#E53935', badge: 3 },
      { label: 'Billing CC', icon: 'square', iconColor: '#FF9800' },
      { label: 'CC Help Mainline', icon: 'square', iconColor: '#2196F3' },
      { label: 'Mobile contact center', icon: 'square', iconColor: '#7C52FF' },
      { label: 'Web to agent', icon: 'square', iconColor: '#E53935' },
    ],
    footerLink: 'Monitor all contact centers',
  },
  {
    title: 'Coaching teams',
    defaultOpen: true,
    items: [
      { label: 'Sales SMB', icon: 'square', iconColor: '#4CAF50' },
    ],
  },
  {
    title: 'Channels',
    defaultOpen: true,
    items: [
      { label: 'new-business', icon: 'channel' },
    ],
  },
]

// Widget data
export const handledCalls = {
  title: 'Handled Calls',
  total: 269,
  centerLabel: 'Today',
  segments: [
    { label: 'Inbound', value: 150, color: '#7C52FF' },
    { label: 'Outbound', value: 80, color: '#FF7043' },
    { label: 'Connected call-backs', value: 39, color: '#4CAF50' },
  ],
}

export const avgCallDuration = {
  title: 'Average Call Duration',
  value: '8m 32s',
  chartData: {
    labels: ['4 am', '8 am', '12 pm', '4 pm', '8 pm'],
    datasets: [
      {
        label: 'Average',
        data: [5, 6, 7.5, 8, 8.5],
        borderColor: '#2196F3',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Previous day',
        data: [4.5, 5.5, 6, 5.8, 6.2],
        borderColor: '#7C52FF',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [5, 5],
      },
      {
        label: 'Shortest',
        data: [2, 2.5, 3, 3.5, 3],
        borderColor: '#FF9800',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Longest',
        data: [8, 9, 10, 11, 10.5],
        borderColor: '#E53935',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
    ],
  },
  yAxisLabel: 'm',
  yAxisValues: ['0m', '3m', '6m', '9m', '12m'],
  rankings: {
    title: 'Averages',
    byCCs: [
      { rank: 1, name: 'Support CC', value: '1:44', trend: 'up' },
      { rank: 2, name: 'Billing CC', value: '2:04', trend: 'up' },
      { rank: 3, name: 'CC Help Main...', value: '5:32', trend: 'neutral' },
      { rank: 4, name: 'Mobile contact', value: '7:04', trend: 'neutral' },
      { rank: 5, name: 'Web to agent', value: '7:28', trend: 'neutral' },
    ],
    byAgents: [
      { rank: 1, name: 'Ben Parker', value: '1:22', trend: 'up' },
      { rank: 2, name: 'Alicia K.', value: '2:15', trend: 'up' },
      { rank: 3, name: 'Claire R.', value: '4:08', trend: 'down' },
      { rank: 4, name: 'Veronica S.', value: '6:45', trend: 'neutral' },
      { rank: 5, name: 'Lori Smith', value: '8:12', trend: 'down' },
    ],
  },
}

export const aiScorecards = {
  title: 'Ai Scorecards',
  value: '88%',
  chartData: {
    labels: ['4 am', '8 am', '12 pm', '4 pm', '8 pm'],
    datasets: [
      {
        label: 'Average score',
        data: [85, 87, 88, 90, 88],
        borderColor: '#2196F3',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Previous day',
        data: [80, 82, 83, 84, 85],
        borderColor: '#7C52FF',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [5, 5],
      },
      {
        label: 'Top CC',
        data: [90, 91, 92, 93, 92],
        borderColor: '#FF9800',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Bottom CC',
        data: [60, 55, 58, 62, 65],
        borderColor: '#E53935',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
    ],
  },
  yAxisSuffix: '%',
  yAxisValues: ['0', '25%', '50%', '75%', '100%'],
  rankings: {
    title: 'Rankings',
    byCCs: [
      { rank: 1, name: 'Support CC', value: '92%', trend: 'up' },
      { rank: 2, name: 'Billing CC', value: '91%', trend: 'up' },
      { rank: 3, name: 'CC Help Main...', value: '90%', trend: 'neutral' },
      { rank: 4, name: 'Mobile contact', value: '89%', trend: 'neutral' },
      { rank: 5, name: 'Web to agent', value: '83%', trend: 'neutral' },
    ],
    byAgents: [
      { rank: 1, name: 'Ben Parker', value: '95%', trend: 'up' },
      { rank: 2, name: 'Alicia K.', value: '93%', trend: 'up' },
      { rank: 3, name: 'Claire R.', value: '90%', trend: 'neutral' },
      { rank: 4, name: 'Veronica S.', value: '87%', trend: 'down' },
      { rank: 5, name: 'Lori Smith', value: '82%', trend: 'down' },
    ],
  },
}

export const unansweredCalls = {
  title: 'Unanswered Calls',
  total: 122,
  centerLabel: 'This week',
  segments: [
    { label: 'Missed calls', value: 65, color: '#7C52FF' },
    { label: 'Abandoned', value: 45, color: '#FF9800' },
    { label: 'Other', value: 12, color: '#BDBDBD' },
  ],
  secondaryStat: {
    label: 'Abandoned Rate',
    value: '2%',
    trend: { direction: 'down', amount: '1', color: '#4CAF50' },
  },
}

export const aiChatbot = {
  title: 'Ai Chatbot',
  total: 847,
  centerLabel: 'Calls deflected',
  segments: [
    { label: 'Calls deflected', value: 600, color: '#7C52FF' },
    { label: 'Not deflected', value: 247, color: '#FF9800' },
  ],
  secondaryStat: {
    label: 'Deflection Rate',
    value: '71%',
  },
}

export const aiCsat = {
  title: 'Ai CSAT',
  value: '4.7',
  chartData: {
    labels: ['4 am', '8 am', '12 pm', '4 pm', '8 pm'],
    datasets: [
      {
        label: 'Average score',
        data: [4.5, 4.6, 4.7, 4.8, 4.7],
        borderColor: '#2196F3',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Previous day',
        data: [4.2, 4.3, 4.4, 4.3, 4.5],
        borderColor: '#7C52FF',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [5, 5],
      },
      {
        label: 'Top CC',
        data: [4.8, 4.9, 4.9, 5.0, 4.9],
        borderColor: '#FF9800',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Bottom CC',
        data: [3.0, 2.8, 3.2, 3.5, 3.0],
        borderColor: '#E53935',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
    ],
  },
  yAxisValues: ['0', '1', '2', '3', '4', '5'],
  rankings: {
    title: 'Rankings',
    byCCs: [
      { rank: 1, name: 'Support CC', value: '4.9', trend: 'up' },
      { rank: 2, name: 'Billing CC', value: '4.8', trend: 'up' },
      { rank: 3, name: 'CC Help Main...', value: '4.6', trend: 'neutral' },
      { rank: 4, name: 'Mobile contact', value: '4.5', trend: 'down' },
      { rank: 5, name: 'Web to agent', value: '4.2', trend: 'down' },
    ],
    byAgents: [
      { rank: 1, name: 'Ben Parker', value: '4.9', trend: 'up' },
      { rank: 2, name: 'Alicia K.', value: '4.8', trend: 'up' },
      { rank: 3, name: 'Claire R.', value: '4.7', trend: 'neutral' },
      { rank: 4, name: 'Veronica S.', value: '4.4', trend: 'neutral' },
      { rank: 5, name: 'Lori Smith', value: '4.1', trend: 'down' },
    ],
  },
}
