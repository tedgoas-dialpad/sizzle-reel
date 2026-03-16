<template>
  <table class="agent-table">
    <thead>
      <tr>
        <th class="agent-table-th agent-table-th--name">Agents</th>
        <th class="agent-table-th agent-table-th--grade">Average grade</th>
        <th class="agent-table-th agent-table-th--change">% change</th>
        <th class="agent-table-th agent-table-th--calls">Calls graded</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="agent in agentRows" :key="agent.name" class="agent-table-row">
        <td class="agent-table-td agent-table-td--name">
          <span class="agent-name-link">{{ agent.name }}</span>
        </td>
        <td class="agent-table-td agent-table-td--grade">{{ agent.avgGrade }}</td>
        <td class="agent-table-td agent-table-td--change">
          <span class="agent-trend" :class="`agent-trend--${agent.changeDir}`">
            <span class="agent-trend-arrow">{{ agent.changeDir === 'up' ? '&#9650;' : '&#9660;' }}</span>
            {{ agent.change.replace(/[+-]/, '') }}
          </span>
        </td>
        <td class="agent-table-td agent-table-td--calls">
          <span class="agent-calls-link">{{ agent.callsGraded }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { agentRows } from '../data/analyticsData.js'
</script>

<style scoped>
.agent-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.agent-table-th {
  padding: 16px;
  font-size: 12px;
  font-weight: 700;
  color: black;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}

.agent-table-th--grade,
.agent-table-th--change,
.agent-table-th--calls {
  text-align: right;
  width: 120px;
}

.agent-table-td {
  padding: 16px;
  font-size: 15px;
  color: black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.agent-table-row:last-child .agent-table-td {
  border-bottom: none;
}

.agent-table-td--grade,
.agent-table-td--change,
.agent-table-td--calls {
  text-align: right;
  font-feature-settings: 'lnum' 1, 'tnum' 1;
}

.agent-name-link {
  text-decoration: underline;
  cursor: default;
  text-transform: capitalize;
}

.agent-calls-link {
  text-decoration: underline;
  cursor: default;
}

.agent-trend {
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.agent-trend--up {
  color: #1AA340;
}

.agent-trend--down {
  color: #EC0E0E;
}

.agent-trend-arrow {
  font-size: 10px;
}
</style>
