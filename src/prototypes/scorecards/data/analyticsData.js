export const chartLabels = [
  'Jan 4', 'Jan 11', 'Jan 18', 'Jan 25', 'Feb 1', 'Feb 8', 'Feb 15', 'Feb 22', 'Mar 1',
]

export const barData = {
  aiGraded: [380, 410, 395, 360, 420, 390, 430, 400, 410],
  humanGraded: [23, 12, 19, 29, 16, 23, 11, 21, 12],
}

export const lineData = [88, 86, 87, 85, 86, 84, 85, 83, 86]

export const summaryStats = {
  averageGrade: '86%',
  trend: '+2%',
  trendDirection: 'up',
  comparison: 'vs. previous 60 days',
}

export const agentRows = [
  { name: 'Zoey Kim', avgGrade: '86%', change: '+2%', changeDir: 'up', callsGraded: 56 },
  { name: 'Kevin Adams', avgGrade: '94%', change: '+2%', changeDir: 'up', callsGraded: 55 },
  { name: 'Daniel Kim', avgGrade: '82%', change: '+2%', changeDir: 'up', callsGraded: 54 },
  { name: 'Scarlett Adams', avgGrade: '71%', change: '-1%', changeDir: 'down', callsGraded: 52 },
  { name: 'Steven Green', avgGrade: '52%', change: '-2%', changeDir: 'down', callsGraded: 50 },
  { name: 'Sasha Gupta', avgGrade: '93%', change: '-4%', changeDir: 'down', callsGraded: 48 },
  { name: 'Matthew Rodriguez', avgGrade: '100%', change: '-4%', changeDir: 'down', callsGraded: 44 },
  { name: 'Abigail Lopez', avgGrade: '78%', change: '-5%', changeDir: 'down', callsGraded: 32 },
]

export const sidebarNavItems = [
  { label: 'Analytics Agent', indent: 0 },
  { label: 'All calls', indent: 0 },
  { label: 'Coaching teams', indent: 0 },
  { label: 'AI CSAT', indent: 0 },
  { label: 'AI Assistants', indent: 0 },
  { label: 'AI Scorecards', indent: 0, expanded: true },
  { label: 'By group', indent: 1, active: true },
  { label: 'By agent', indent: 1 },
  { label: 'By scorecards', indent: 1 },
  { label: 'Playbooks', indent: 0 },
]
