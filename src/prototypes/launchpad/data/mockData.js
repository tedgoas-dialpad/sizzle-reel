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
    title: 'Coaching teams',
    defaultOpen: true,
    items: [
      { label: 'Sales SMB', icon: 'square', iconColor: '#4CAF50' },
    ],
  },
  {
    title: 'Recents',
    defaultOpen: true,
    items: [
      { label: '(919) 426-1801', icon: 'user' },
      { label: '(805) 684-7000', icon: 'user' },
      { label: '(913) 221-3070', icon: 'user' },
      { label: '(684) 555-0102', icon: 'user' },
      { label: '(629) 555-0129', icon: 'user' },
      { label: '(201) 555-0124', icon: 'user' },
      { label: '(302) 555-0107', icon: 'user' },
      { label: '(808) 555-0111', icon: 'user' },
      { label: '(209) 555-0104', icon: 'user' },
      { label: '(319) 555-0115', icon: 'user' },
    ],
  },
]

// Widget data
export const handledCalls = {
  title: 'Handled Calls',
  total: 269,
  centerLabel: 'Today',
  segments: [
    {
      label: 'Inbound', value: 150, color: '#602DFF',
      tooltipData: {
        heading: 'Inbound: 3/22',
        rows: [
          { label: 'Today:', value: '150' },
          { label: 'Previous day:', value: '132' },
        ],
        extraRows: [
          { label: 'Top team:', value: '189' },
          { label: 'Bottom team:', value: '47' },
        ],
      },
    },
    {
      label: 'Outbound', value: 80, color: '#EA5F94',
      tooltipData: {
        heading: 'Outbound: 3/22',
        rows: [
          { label: 'Today:', value: '80' },
          { label: 'Previous day:', value: '75' },
        ],
        extraRows: [
          { label: 'Top team:', value: '112' },
          { label: 'Bottom team:', value: '32' },
        ],
      },
    },
    {
      label: 'Connected call-backs', value: 39, color: '#FFBD6A',
      tooltipData: {
        heading: 'Connected call-backs: 3/22',
        rows: [
          { label: 'Today:', value: '39' },
          { label: 'Previous day:', value: '44' },
        ],
        extraRows: [
          { label: 'Top team:', value: '58' },
          { label: 'Bottom team:', value: '12' },
        ],
      },
    },
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
        borderColor: '#602DFF',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Previous day',
        data: [4.5, 5.5, 6, 5.8, 6.2],
        borderColor: '#A38FF9',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [5, 5],
      },
      {
        label: 'Shortest',
        data: [2, 2.5, 3, 3.5, 3],
        borderColor: '#FFBD6A',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Longest',
        data: [8, 9, 10, 11, 10.5],
        borderColor: '#EA5F94',
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
        borderColor: '#602DFF',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Previous day',
        data: [80, 82, 83, 84, 85],
        borderColor: '#A38FF9',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [5, 5],
      },
      {
        label: 'Top CC',
        data: [90, 91, 92, 93, 92],
        borderColor: '#FFBD6A',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Bottom CC',
        data: [60, 55, 58, 62, 65],
        borderColor: '#EA5F94',
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
    {
      label: 'Missed calls', value: 65, color: '#602DFF',
      tooltipData: {
        heading: 'Missed calls: 3/22',
        rows: [
          { label: 'Today:', value: '65' },
          { label: 'Previous day:', value: '58' },
        ],
        extraRows: [
          { label: 'Top team:', value: '82' },
          { label: 'Bottom team:', value: '21' },
        ],
      },
    },
    {
      label: 'Abandoned', value: 45, color: '#EA5F94',
      tooltipData: {
        heading: 'Abandoned: 3/22',
        rows: [
          { label: 'Today:', value: '45' },
          { label: 'Previous day:', value: '51' },
        ],
        extraRows: [
          { label: 'Top team:', value: '62' },
          { label: 'Bottom team:', value: '14' },
        ],
      },
    },
    {
      label: 'Other', value: 12, color: '#FFBD6A',
      tooltipData: {
        heading: 'Other: 3/22',
        rows: [
          { label: 'Today:', value: '12' },
          { label: 'Previous day:', value: '9' },
        ],
        extraRows: [
          { label: 'Top team:', value: '18' },
          { label: 'Bottom team:', value: '3' },
        ],
      },
    },
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
    {
      label: 'Calls deflected', value: 600, color: '#602DFF',
      tooltipData: {
        heading: 'Calls deflected: 3/22',
        rows: [
          { label: 'Today:', value: '600' },
          { label: 'Previous day:', value: '545' },
        ],
        extraRows: [
          { label: 'Top team:', value: '720' },
          { label: 'Bottom team:', value: '198' },
        ],
      },
    },
    {
      label: 'Not deflected', value: 247, color: '#EA5F94',
      tooltipData: {
        heading: 'Not deflected: 3/22',
        rows: [
          { label: 'Today:', value: '247' },
          { label: 'Previous day:', value: '280' },
        ],
        extraRows: [
          { label: 'Top team:', value: '310' },
          { label: 'Bottom team:', value: '95' },
        ],
      },
    },
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
        borderColor: '#602DFF',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Previous day',
        data: [4.2, 4.3, 4.4, 4.3, 4.5],
        borderColor: '#A38FF9',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [5, 5],
      },
      {
        label: 'Top CC',
        data: [4.8, 4.9, 4.9, 5.0, 4.9],
        borderColor: '#FFBD6A',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        borderDash: [],
      },
      {
        label: 'Bottom CC',
        data: [3.0, 2.8, 3.2, 3.5, 3.0],
        borderColor: '#EA5F94',
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

// --- Data generators for time-range switching ---

const timeConfig = {
  '1D': {
    labels: ['4 am', '8 am', '12 pm', '4 pm', '8 pm'],
    centerLabel: 'Today',
    comparison: 'Previous day',
  },
  '1W': {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    centerLabel: 'This week',
    comparison: 'Previous week',
  },
  '1M': {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    centerLabel: 'This month',
    comparison: 'Previous month',
  },
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randFloat(min, max) {
  return +(Math.random() * (max - min) + min).toFixed(1)
}

function randSeries(count, min, max) {
  return Array.from({ length: count }, () => randFloat(min, max))
}

function pickTrend() {
  return ['up', 'down', 'neutral'][randInt(0, 2)]
}

function generateHandledCalls(cfg) {
  const inbound = randInt(100, 250)
  const outbound = randInt(40, 120)
  const callbacks = randInt(15, 60)
  const total = inbound + outbound + callbacks
  return {
    title: 'Handled Calls',
    total,
    centerLabel: cfg.centerLabel,
    segments: [
      {
        label: 'Inbound', value: inbound, color: '#602DFF',
        tooltipData: {
          heading: 'Inbound: 3/22',
          rows: [
            { label: `${cfg.centerLabel}:`, value: `${inbound}` },
            { label: `${cfg.comparison}:`, value: `${randInt(80, 200)}` },
          ],
          extraRows: [
            { label: 'Top team:', value: `${randInt(150, 300)}` },
            { label: 'Bottom team:', value: `${randInt(20, 80)}` },
          ],
        },
      },
      {
        label: 'Outbound', value: outbound, color: '#EA5F94',
        tooltipData: {
          heading: 'Outbound: 3/22',
          rows: [
            { label: `${cfg.centerLabel}:`, value: `${outbound}` },
            { label: `${cfg.comparison}:`, value: `${randInt(30, 100)}` },
          ],
          extraRows: [
            { label: 'Top team:', value: `${randInt(80, 150)}` },
            { label: 'Bottom team:', value: `${randInt(10, 50)}` },
          ],
        },
      },
      {
        label: 'Connected call-backs', value: callbacks, color: '#FFBD6A',
        tooltipData: {
          heading: 'Connected call-backs: 3/22',
          rows: [
            { label: `${cfg.centerLabel}:`, value: `${callbacks}` },
            { label: `${cfg.comparison}:`, value: `${randInt(10, 55)}` },
          ],
          extraRows: [
            { label: 'Top team:', value: `${randInt(40, 80)}` },
            { label: 'Bottom team:', value: `${randInt(5, 20)}` },
          ],
        },
      },
    ],
  }
}

function generateAvgCallDuration(cfg) {
  const count = cfg.labels.length
  const avg = randSeries(count, 4, 10)
  const avgVal = avg[avg.length - 1]
  return {
    title: 'Average Call Duration',
    value: `${Math.floor(avgVal)}m ${randInt(0, 59)}s`,
    chartData: {
      labels: cfg.labels,
      datasets: [
        { label: 'Average', data: avg, borderColor: '#602DFF', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [] },
        { label: cfg.comparison, data: randSeries(count, 3, 8), borderColor: '#A38FF9', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [5, 5] },
        { label: 'Shortest', data: randSeries(count, 1, 4), borderColor: '#FFBD6A', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [] },
        { label: 'Longest', data: randSeries(count, 8, 13), borderColor: '#EA5F94', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [] },
      ],
    },
    yAxisLabel: 'm',
    yAxisValues: ['0m', '3m', '6m', '9m', '12m'],
    rankings: {
      title: 'Averages',
      byCCs: [
        { rank: 1, name: 'Support CC', value: `${randInt(1, 3)}:${String(randInt(0, 59)).padStart(2, '0')}`, trend: pickTrend() },
        { rank: 2, name: 'Billing CC', value: `${randInt(1, 4)}:${String(randInt(0, 59)).padStart(2, '0')}`, trend: pickTrend() },
        { rank: 3, name: 'CC Help Main...', value: `${randInt(3, 6)}:${String(randInt(0, 59)).padStart(2, '0')}`, trend: pickTrend() },
        { rank: 4, name: 'Mobile contact', value: `${randInt(5, 8)}:${String(randInt(0, 59)).padStart(2, '0')}`, trend: pickTrend() },
        { rank: 5, name: 'Web to agent', value: `${randInt(6, 9)}:${String(randInt(0, 59)).padStart(2, '0')}`, trend: pickTrend() },
      ],
      byAgents: [
        { rank: 1, name: 'Ben Parker', value: `${randInt(1, 2)}:${String(randInt(0, 59)).padStart(2, '0')}`, trend: pickTrend() },
        { rank: 2, name: 'Alicia K.', value: `${randInt(2, 3)}:${String(randInt(0, 59)).padStart(2, '0')}`, trend: pickTrend() },
        { rank: 3, name: 'Claire R.', value: `${randInt(3, 5)}:${String(randInt(0, 59)).padStart(2, '0')}`, trend: pickTrend() },
        { rank: 4, name: 'Veronica S.', value: `${randInt(5, 7)}:${String(randInt(0, 59)).padStart(2, '0')}`, trend: pickTrend() },
        { rank: 5, name: 'Lori Smith', value: `${randInt(7, 9)}:${String(randInt(0, 59)).padStart(2, '0')}`, trend: pickTrend() },
      ],
    },
  }
}

function generateAiScorecards(cfg) {
  const count = cfg.labels.length
  const avgData = randSeries(count, 82, 95)
  const avgScore = Math.round(avgData[avgData.length - 1])
  return {
    title: 'Ai Scorecards',
    value: `${avgScore}%`,
    chartData: {
      labels: cfg.labels,
      datasets: [
        { label: 'Average score', data: avgData, borderColor: '#602DFF', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [] },
        { label: cfg.comparison, data: randSeries(count, 75, 88), borderColor: '#A38FF9', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [5, 5] },
        { label: 'Top CC', data: randSeries(count, 88, 96), borderColor: '#FFBD6A', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [] },
        { label: 'Bottom CC', data: randSeries(count, 50, 70), borderColor: '#EA5F94', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [] },
      ],
    },
    yAxisSuffix: '%',
    yAxisValues: ['0', '25%', '50%', '75%', '100%'],
    rankings: {
      title: 'Rankings',
      byCCs: [
        { rank: 1, name: 'Support CC', value: `${randInt(90, 96)}%`, trend: pickTrend() },
        { rank: 2, name: 'Billing CC', value: `${randInt(87, 93)}%`, trend: pickTrend() },
        { rank: 3, name: 'CC Help Main...', value: `${randInt(85, 92)}%`, trend: pickTrend() },
        { rank: 4, name: 'Mobile contact', value: `${randInt(82, 90)}%`, trend: pickTrend() },
        { rank: 5, name: 'Web to agent', value: `${randInt(78, 86)}%`, trend: pickTrend() },
      ],
      byAgents: [
        { rank: 1, name: 'Ben Parker', value: `${randInt(92, 98)}%`, trend: pickTrend() },
        { rank: 2, name: 'Alicia K.', value: `${randInt(90, 95)}%`, trend: pickTrend() },
        { rank: 3, name: 'Claire R.', value: `${randInt(86, 93)}%`, trend: pickTrend() },
        { rank: 4, name: 'Veronica S.', value: `${randInt(83, 90)}%`, trend: pickTrend() },
        { rank: 5, name: 'Lori Smith', value: `${randInt(78, 86)}%`, trend: pickTrend() },
      ],
    },
  }
}

function generateUnansweredCalls(cfg) {
  const missed = randInt(30, 90)
  const abandoned = randInt(20, 65)
  const other = randInt(5, 20)
  const total = missed + abandoned + other
  const abandonedRate = randInt(1, 5)
  return {
    title: 'Unanswered Calls',
    total,
    centerLabel: cfg.centerLabel,
    segments: [
      {
        label: 'Missed calls', value: missed, color: '#602DFF',
        tooltipData: {
          heading: 'Missed calls: 3/22',
          rows: [
            { label: `${cfg.centerLabel}:`, value: `${missed}` },
            { label: `${cfg.comparison}:`, value: `${randInt(25, 80)}` },
          ],
          extraRows: [
            { label: 'Top team:', value: `${randInt(60, 100)}` },
            { label: 'Bottom team:', value: `${randInt(10, 30)}` },
          ],
        },
      },
      {
        label: 'Abandoned', value: abandoned, color: '#EA5F94',
        tooltipData: {
          heading: 'Abandoned: 3/22',
          rows: [
            { label: `${cfg.centerLabel}:`, value: `${abandoned}` },
            { label: `${cfg.comparison}:`, value: `${randInt(15, 60)}` },
          ],
          extraRows: [
            { label: 'Top team:', value: `${randInt(40, 75)}` },
            { label: 'Bottom team:', value: `${randInt(5, 20)}` },
          ],
        },
      },
      {
        label: 'Other', value: other, color: '#FFBD6A',
        tooltipData: {
          heading: 'Other: 3/22',
          rows: [
            { label: `${cfg.centerLabel}:`, value: `${other}` },
            { label: `${cfg.comparison}:`, value: `${randInt(3, 18)}` },
          ],
          extraRows: [
            { label: 'Top team:', value: `${randInt(12, 25)}` },
            { label: 'Bottom team:', value: `${randInt(1, 8)}` },
          ],
        },
      },
    ],
    secondaryStat: {
      label: 'Abandoned Rate',
      value: `${abandonedRate}%`,
      trend: { direction: abandonedRate <= 2 ? 'down' : 'up', amount: `${randInt(1, 3)}`, color: abandonedRate <= 2 ? '#4CAF50' : '#F44336' },
    },
  }
}

function generateAiChatbot(cfg) {
  const deflected = randInt(400, 800)
  const notDeflected = randInt(150, 350)
  const total = deflected + notDeflected
  const rate = Math.round((deflected / total) * 100)
  return {
    title: 'Ai Chatbot',
    total,
    centerLabel: 'Calls deflected',
    segments: [
      {
        label: 'Calls deflected', value: deflected, color: '#602DFF',
        tooltipData: {
          heading: 'Calls deflected: 3/22',
          rows: [
            { label: `${cfg.centerLabel}:`, value: `${deflected}` },
            { label: `${cfg.comparison}:`, value: `${randInt(350, 750)}` },
          ],
          extraRows: [
            { label: 'Top team:', value: `${randInt(600, 900)}` },
            { label: 'Bottom team:', value: `${randInt(100, 250)}` },
          ],
        },
      },
      {
        label: 'Not deflected', value: notDeflected, color: '#EA5F94',
        tooltipData: {
          heading: 'Not deflected: 3/22',
          rows: [
            { label: `${cfg.centerLabel}:`, value: `${notDeflected}` },
            { label: `${cfg.comparison}:`, value: `${randInt(120, 320)}` },
          ],
          extraRows: [
            { label: 'Top team:', value: `${randInt(250, 400)}` },
            { label: 'Bottom team:', value: `${randInt(60, 130)}` },
          ],
        },
      },
    ],
    secondaryStat: {
      label: 'Deflection Rate',
      value: `${rate}%`,
    },
  }
}

function generateAiCsat(cfg) {
  const count = cfg.labels.length
  const avgData = randSeries(count, 4.2, 4.9)
  const avgScore = avgData[avgData.length - 1]
  return {
    title: 'Ai CSAT',
    value: `${avgScore}`,
    chartData: {
      labels: cfg.labels,
      datasets: [
        { label: 'Average score', data: avgData, borderColor: '#602DFF', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [] },
        { label: cfg.comparison, data: randSeries(count, 3.8, 4.6), borderColor: '#A38FF9', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [5, 5] },
        { label: 'Top CC', data: randSeries(count, 4.6, 5.0), borderColor: '#FFBD6A', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [] },
        { label: 'Bottom CC', data: randSeries(count, 2.5, 3.8), borderColor: '#EA5F94', borderWidth: 2, tension: 0.4, pointRadius: 0, borderDash: [] },
      ],
    },
    yAxisValues: ['0', '1', '2', '3', '4', '5'],
    rankings: {
      title: 'Rankings',
      byCCs: [
        { rank: 1, name: 'Support CC', value: `${randFloat(4.7, 5.0)}`, trend: pickTrend() },
        { rank: 2, name: 'Billing CC', value: `${randFloat(4.5, 4.9)}`, trend: pickTrend() },
        { rank: 3, name: 'CC Help Main...', value: `${randFloat(4.3, 4.7)}`, trend: pickTrend() },
        { rank: 4, name: 'Mobile contact', value: `${randFloat(4.0, 4.5)}`, trend: pickTrend() },
        { rank: 5, name: 'Web to agent', value: `${randFloat(3.8, 4.3)}`, trend: pickTrend() },
      ],
      byAgents: [
        { rank: 1, name: 'Ben Parker', value: `${randFloat(4.7, 5.0)}`, trend: pickTrend() },
        { rank: 2, name: 'Alicia K.', value: `${randFloat(4.5, 4.9)}`, trend: pickTrend() },
        { rank: 3, name: 'Claire R.', value: `${randFloat(4.3, 4.8)}`, trend: pickTrend() },
        { rank: 4, name: 'Veronica S.', value: `${randFloat(4.0, 4.5)}`, trend: pickTrend() },
        { rank: 5, name: 'Lori Smith', value: `${randFloat(3.7, 4.2)}`, trend: pickTrend() },
      ],
    },
  }
}

export function generateWidgetData(timeRange) {
  const cfg = timeConfig[timeRange]
  return {
    handledCalls: generateHandledCalls(cfg),
    avgCallDuration: generateAvgCallDuration(cfg),
    aiScorecards: generateAiScorecards(cfg),
    unansweredCalls: generateUnansweredCalls(cfg),
    aiChatbot: generateAiChatbot(cfg),
    aiCsat: generateAiCsat(cfg),
  }
}
