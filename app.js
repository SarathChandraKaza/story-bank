'use strict';

// ─── SVG Icon strings ─────────────────────────────────────────────────────────
const IC = {
  book: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  xMd: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  sliders: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="6" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="4" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="8" y2="3"/><line x1="1" x2="7" y1="14" y2="14"/><line x1="9" x2="15" y1="12" y2="12"/><line x1="17" x2="23" y1="16" y2="16"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  folderPlus: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10v6"/><path d="M9 13h6"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
  folderPlusLg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 10v6"/><path d="M9 13h6"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  downloadSm: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  downloadXs: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  upload: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  plusSm: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  pencil: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`,
  pencilSm: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  trashSm: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  history: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>`,
  chevronUp: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  chevronUpXs: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`,
  chevronDownXs: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  folder: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
  folderOpen: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>`,
  folderOpenMd: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>`,
  rotateCcw: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
};

// ─── Storage ──────────────────────────────────────────────────────────────────
const DATA_KEY   = 'storyBankData';
const LEGACY_KEY = 'story-bank-ideas';
const IDEA_TYPES = ['Story', 'Scene', 'Character', 'Dialogue', 'Visual', 'Other'];

function genId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function downloadJson(data, filename) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

function loadData() {
  try {
    const raw = localStorage.getItem(DATA_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.ideas) && Array.isArray(parsed.groups)) {
        parsed.ideas = parsed.ideas.map(i => ({ ...i, versions: i.versions ?? [] }));
        return parsed;
      }
    }
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) {
      const old = JSON.parse(legacy);
      const migrated = { ideas: old.map(i => ({ ...i, versions: [] })), groups: [] };
      saveData(migrated);
      localStorage.removeItem(LEGACY_KEY);
      return migrated;
    }
  } catch {}
  return { ideas: [], groups: [] };
}

function saveData(data) {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
}

function addIdea({ title, description, type, tags }) {
  const data = loadData();
  const now  = new Date().toISOString();
  const idea = { id: genId(), title, description, type, tags, createdAt: now, updatedAt: now, versions: [] };
  data.ideas = [idea, ...data.ideas];
  saveData(data);
  return idea;
}

function updateIdea(id, updates) {
  const data = loadData();
  const idx  = data.ideas.findIndex(i => i.id === id);
  if (idx === -1) return null;
  const cur = data.ideas[idx];
  const version = { versionId: genId(), title: cur.title, description: cur.description, type: cur.type, tags: cur.tags, updatedAt: cur.updatedAt };
  data.ideas[idx] = { ...cur, ...updates, updatedAt: new Date().toISOString(), versions: [version, ...cur.versions] };
  saveData(data);
  return data.ideas[idx];
}

function restoreVersion(ideaId, versionId) {
  const data = loadData();
  const idx  = data.ideas.findIndex(i => i.id === ideaId);
  if (idx === -1) return null;
  const cur = data.ideas[idx];
  const ver = cur.versions.find(v => v.versionId === versionId);
  if (!ver) return null;
  const snapshot = { versionId: genId(), title: cur.title, description: cur.description, type: cur.type, tags: cur.tags, updatedAt: cur.updatedAt };
  data.ideas[idx] = { ...cur, title: ver.title, description: ver.description, type: ver.type, tags: ver.tags, updatedAt: new Date().toISOString(), versions: [snapshot, ...cur.versions.filter(v => v.versionId !== versionId)] };
  saveData(data);
  return data.ideas[idx];
}

function deleteIdea(id) {
  const data = loadData();
  data.ideas  = data.ideas.filter(i => i.id !== id);
  data.groups = data.groups.map(g => ({ ...g, items: g.items.filter(item => !(item.type === 'idea' && item.id === id)) }));
  saveData(data);
}

function addGroup(name, description) {
  const data  = loadData();
  const group = { id: genId(), name, description, createdAt: new Date().toISOString(), items: [] };
  data.groups = [group, ...data.groups];
  saveData(data);
  return group;
}

function updateGroup(id, updates) {
  const data = loadData();
  const idx  = data.groups.findIndex(g => g.id === id);
  if (idx !== -1) { data.groups[idx] = { ...data.groups[idx], ...updates }; saveData(data); }
}

function deleteGroup(id) {
  const data  = loadData();
  data.groups = data.groups.filter(g => g.id !== id).map(g => ({ ...g, items: g.items.filter(item => !(item.type === 'group' && item.id === id)) }));
  saveData(data);
}

function addItemToGroup(groupId, item) {
  const data = loadData();
  const idx  = data.groups.findIndex(g => g.id === groupId);
  if (idx === -1) return;
  const exists = data.groups[idx].items.some(i => i.type === item.type && i.id === item.id);
  if (!exists) data.groups[idx].items = [...data.groups[idx].items, item];
  saveData(data);
}

function removeItemFromGroup(groupId, itemType, itemId) {
  const data = loadData();
  const idx  = data.groups.findIndex(g => g.id === groupId);
  if (idx === -1) return;
  data.groups[idx].items = data.groups[idx].items.filter(i => !(i.type === itemType && i.id === itemId));
  saveData(data);
}

function moveItemInGroup(groupId, fromIndex, direction) {
  const data  = loadData();
  const idx   = data.groups.findIndex(g => g.id === groupId);
  if (idx === -1) return;
  const items   = [...data.groups[idx].items];
  const toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1;
  if (toIndex < 0 || toIndex >= items.length) return;
  [items[fromIndex], items[toIndex]] = [items[toIndex], items[fromIndex]];
  data.groups[idx].items = items;
  saveData(data);
}

function exportFullBackup() { downloadJson(loadData(), 'story-bank-full-backup.json'); }

function exportSingleIdea(idea) {
  const slug = idea.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').slice(0, 40);
  downloadJson(idea, `${slug || 'idea'}.json`);
}

function exportGroupData(groupId) {
  const data     = loadData();
  const groupMap = Object.fromEntries(data.groups.map(g => [g.id, g]));
  const ideaMap  = Object.fromEntries(data.ideas.map(i => [i.id, i]));
  function build(gId, visited = new Set()) {
    if (visited.has(gId)) return { error: 'circular' };
    visited.add(gId);
    const g = groupMap[gId];
    if (!g) return {};
    return { ...g, items: g.items.map(item => item.type === 'idea' ? { type: 'idea', data: ideaMap[item.id] } : { type: 'group', data: build(item.id, new Set(visited)) }) };
  }
  const group = groupMap[groupId];
  if (!group) return;
  const slug = group.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').slice(0, 40);
  downloadJson(build(groupId), `${slug || 'group'}.json`);
}

function importData(file, mode) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const parsed = JSON.parse(e.target.result);
        let incoming;
        if (Array.isArray(parsed)) {
          incoming = { ideas: parsed.map(i => ({ ...i, versions: i.versions ?? [] })), groups: [] };
        } else if (parsed && Array.isArray(parsed.ideas)) {
          incoming = { ideas: parsed.ideas.map(i => ({ ...i, versions: i.versions ?? [] })), groups: Array.isArray(parsed.groups) ? parsed.groups : [] };
        } else throw new Error('Invalid format');
        if (mode === 'replace') { saveData(incoming); resolve(incoming); }
        else {
          const cur = loadData();
          const eIds = new Set(cur.ideas.map(i => i.id));
          const eGIds = new Set(cur.groups.map(g => g.id));
          const merged = { ideas: [...cur.ideas, ...incoming.ideas.filter(i => !eIds.has(i.id))], groups: [...cur.groups, ...incoming.groups.filter(g => !eGIds.has(g.id))] };
          saveData(merged); resolve(merged);
        }
      } catch (err) { reject(err); }
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
}

function markdownToHtml(text) {
  return text
    .replace(/^### (.*)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^- (.*)$/gm, '<li>$1</li>')
    .replace(/\n/g, '<br>');
}

// ─── Date formatting ──────────────────────────────────────────────────────────
function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch { return ''; }
}
function formatDateTime(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ', ' + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  } catch { return ''; }
}

// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  ideas: [],
  groups: [],
  selectedGroupId: null,
  sidebarOpen: false,
  search: '',
  typeFilter: '',
  tagFilter: '',
  showFilters: false,
  expandedGroups: new Set(),
  // modal state
  editingIdea: null,
  deleteIdeaTarget: null,
  deleteGroupTarget: null,
  versionsIdea: null,
  addToGroupIdea: null,
  editingGroup: null,
  importFile: null,
};

function refreshData() {
  const d = loadData();
  state.ideas  = d.ideas;
  state.groups = d.groups;
}

// ─── Theme ────────────────────────────────────────────────────────────────────
function initTheme() {
  const stored = localStorage.getItem('story-bank-theme');
  const dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(dark);
}
function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark);
  localStorage.setItem('story-bank-theme', dark ? 'dark' : 'light');
  document.getElementById('btn-theme').innerHTML = dark ? IC.sun : IC.moon;
}
function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(!isDark);
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function showToast(msg, variant = 'default') {
  const el = document.createElement('div');
  el.className = `toast toast-${variant} animate-fade-in`;
  el.textContent = msg;
  const container = document.getElementById('toast-container');
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('leaving');
    setTimeout(() => el.remove(), 200);
  }, 2500);
}

// ─── Filter helpers ───────────────────────────────────────────────────────────
function matchesFilter(idea) {
  const q = state.search.toLowerCase().trim();
  const matchSearch = !q || idea.title.toLowerCase().includes(q) || idea.description.toLowerCase().includes(q);
  const matchType   = !state.typeFilter || idea.type === state.typeFilter;
  const matchTag    = !state.tagFilter  || idea.tags.some(t => t.toLowerCase().includes(state.tagFilter.toLowerCase().trim()));
  return matchSearch && matchType && matchTag;
}

function allTags() {
  return [...new Set(state.ideas.flatMap(i => i.tags))].sort();
}

// ─── Sidebar rendering ────────────────────────────────────────────────────────
function renderGroupRow(group, depth = 0) {
  const isSelected = state.selectedGroupId === group.id;
  const subGroups  = group.items.filter(i => i.type === 'group').map(i => state.groups.find(g => g.id === i.id)).filter(Boolean);
  const hasChildren = subGroups.length > 0;
  const isExpanded  = state.expandedGroups.has(group.id);

  return `
    <div class="group-row-wrap" data-group-id="${group.id}">
      <div class="group-row${isSelected ? ' selected' : ''}" style="padding-left:${depth * 12 + 4}px">
        <button class="expand-btn${hasChildren ? '' : ' invisible'}" data-action="toggle-expand" data-group-id="${group.id}" aria-label="Toggle">
          ${isExpanded && hasChildren ? IC.chevronDown : IC.chevronRight}
        </button>
        <button class="group-row-btn" data-action="select-group" data-group-id="${group.id}">
          ${isSelected ? IC.folderOpen : IC.folder}
          <span class="group-row-name">${esc(group.name)}</span>
          <span class="group-row-count">${group.items.length}</span>
        </button>
        <div class="group-row-actions">
          <button data-action="export-group" data-group-id="${group.id}" title="Export group">${IC.downloadSm}</button>
          <button data-action="edit-group" data-group-id="${group.id}" title="Edit group">${IC.pencilSm}</button>
          <button class="btn-delete-group" data-action="delete-group" data-group-id="${group.id}" title="Delete group">${IC.trashSm}</button>
        </div>
      </div>
      ${isExpanded && hasChildren ? `<div class="sub-groups">${subGroups.map(sg => renderGroupRow(sg, depth + 1)).join('')}</div>` : ''}
    </div>`;
}

function renderSidebar(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const totalIdeas = state.ideas.length;
  const groupsHtml = state.groups.length === 0
    ? `<button class="btn-create-first-group" data-action="open-group-form">+ Create your first group</button>`
    : `<div class="groups-list">${state.groups.map(g => renderGroupRow(g)).join('')}</div>`;

  el.innerHTML = `
    <nav class="sidebar-nav">
      <button class="btn-all-ideas${state.selectedGroupId === null ? ' active' : ''}" data-action="select-all-ideas">
        ${IC.book} <span>All Ideas</span> <span class="all-ideas-count">${totalIdeas}</span>
      </button>
      <div class="groups-header">
        <span class="groups-label">Groups</span>
        <button class="btn-create-group-sidebar" data-action="open-group-form" aria-label="Create group">${IC.plusSm}</button>
      </div>
      ${groupsHtml}
    </nav>`;
}

// ─── Type badge class ─────────────────────────────────────────────────────────
function typeBadgeClass(type) {
  const map = { Story: 'type-story', Scene: 'type-scene', Character: 'type-character', Dialogue: 'type-dialogue', Visual: 'type-visual', Other: 'type-other' };
  return map[type] || 'type-other';
}

// ─── Idea card rendering ──────────────────────────────────────────────────────
function renderIdeaCard(idea, opts = {}) {
  const { showSeq = false, isFirst = false, isLast = false, seqIdx = 0, parentGroupId = null, delay = 0 } = opts;
  const isLong   = idea.description.length > 150;
  const preview  = isLong ? idea.description.slice(0, 150) + '…' : idea.description;
  const removeBtn = parentGroupId
    ? `<button class="card-action-btn danger ml-auto" data-action="remove-from-group" data-idea-id="${idea.id}" data-group-id="${parentGroupId}">Remove</button>`
    : '';
  const addGroupBtn = !parentGroupId && state.groups.length > 0
    ? `<button class="card-action-btn" data-action="open-add-to-group" data-idea-id="${idea.id}">${IC.folderOpenMd} Add to group</button>`
    : '';

  return `
    <article class="idea-card animate-slide-in" data-idea-id="${idea.id}" style="animation-delay:${delay}ms">
      <div class="card-top">
        <div class="card-meta">
          <div class="card-badges">
            <span class="type-badge ${typeBadgeClass(idea.type)}">${esc(idea.type)}</span>
            <time class="card-date">${formatDate(idea.createdAt)}</time>
            ${idea.versions.length > 0 ? `<span class="card-version">v${idea.versions.length + 1}</span>` : ''}
          </div>
          <h3 class="card-title">${esc(idea.title)}</h3>
        </div>
        ${showSeq ? `
          <div class="seq-controls">
            <button class="seq-btn" data-action="move-up" data-idea-id="${idea.id}" data-group-id="${parentGroupId}" data-seq-idx="${seqIdx}" ${isFirst ? 'disabled' : ''} aria-label="Move up">${IC.chevronUp}</button>
            <button class="seq-btn" data-action="move-down" data-idea-id="${idea.id}" data-group-id="${parentGroupId}" data-seq-idx="${seqIdx}" ${isLast ? 'disabled' : ''} aria-label="Move down">${IC.chevronDown}</button>
          </div>` : ''}
      </div>
      ${idea.description ? `
        <div class="card-description-wrap">
          <p class="card-description markdown-content" data-idea-id="${idea.id}" data-expanded="false">${esc(preview)}</p>
          ${isLong ? `<button class="btn-show-more" data-action="toggle-expand-desc" data-idea-id="${idea.id}" data-full="${esc(idea.description)}" data-preview="${esc(preview)}">${IC.chevronDownXs} Show more</button>` : ''}
        </div>` : ''}
      ${idea.tags.length > 0 ? `
        <div class="card-tags">${idea.tags.map(t => `<span class="tag-pill">#${esc(t)}</span>`).join('')}</div>` : ''}
      <div class="card-actions">
        <button class="card-action-btn" data-action="edit-idea" data-idea-id="${idea.id}">${IC.pencil} Edit</button>
        <button class="card-action-btn" data-action="open-versions" data-idea-id="${idea.id}">${IC.history} Versions${idea.versions.length > 0 ? ` (${idea.versions.length})` : ''}</button>
        <button class="card-action-btn" data-action="export-idea" data-idea-id="${idea.id}">${IC.downloadXs} Export</button>
        ${addGroupBtn}
        ${removeBtn}
        <button class="card-action-btn danger${!parentGroupId ? ' ml-auto' : ''}" data-action="delete-idea" data-idea-id="${idea.id}">${IC.trash} Delete</button>
      </div>
    </article>`;
}

function renderSubGroupCard(subGroup, idx, parentGroup) {
  const totalItems = parentGroup.items.length;
  const isFirst    = idx === 0;
  const isLast     = idx === totalItems - 1;
  return `
    <div class="subgroup-card animate-slide-in" style="animation-delay:${Math.min(idx * 25, 150)}ms">
      <div class="subgroup-inner">
        <div class="seq-controls">
          <button class="seq-btn" data-action="move-up-group" data-group-id="${parentGroup.id}" data-seq-idx="${idx}" ${isFirst ? 'disabled' : ''} aria-label="Move up">${IC.chevronUp}</button>
          <button class="seq-btn" data-action="move-down-group" data-group-id="${parentGroup.id}" data-seq-idx="${idx}" ${isLast ? 'disabled' : ''} aria-label="Move down">${IC.chevronDown}</button>
        </div>
        <div class="subgroup-info">
          <div class="subgroup-meta">
            <span class="subgroup-badge">Group</span>
            <span class="subgroup-name">${esc(subGroup.name)}</span>
          </div>
          ${subGroup.description ? `<p class="subgroup-desc">${esc(subGroup.description)}</p>` : ''}
          <p class="subgroup-count">${subGroup.items.length} item${subGroup.items.length !== 1 ? 's' : ''}</p>
        </div>
        <div class="subgroup-actions">
          <button class="btn-open-subgroup" data-action="select-group" data-group-id="${subGroup.id}">Open</button>
          <button data-action="export-group" data-group-id="${subGroup.id}" title="Export">${IC.downloadXs}</button>
          <button class="btn-remove-subgroup" data-action="remove-subgroup" data-subgroup-id="${subGroup.id}" data-parent-group-id="${parentGroup.id}">Remove</button>
        </div>
      </div>
    </div>`;
}

// ─── Main content rendering ───────────────────────────────────────────────────
function renderMain() {
  const el = document.getElementById('main-content');
  if (!el) return;

  const ideaMap   = Object.fromEntries(state.ideas.map(i => [i.id, i]));
  const groupMap  = Object.fromEntries(state.groups.map(g => [g.id, g]));
  const selGroup  = state.selectedGroupId ? groupMap[state.selectedGroupId] : null;

  // Breadcrumb
  let breadcrumbHtml;
  if (selGroup) {
    breadcrumbHtml = `
      <div class="breadcrumb">
        <button class="breadcrumb-link" data-action="select-all-ideas">All Ideas</button>
        <span>/</span>
        <span class="breadcrumb-current">${esc(selGroup.name)}</span>
        ${selGroup.description ? `<span class="breadcrumb-desc">— ${esc(selGroup.description)}</span>` : ''}
      </div>
      <div>
        <button class="btn-export-group" data-action="export-group" data-group-id="${selGroup.id}">${IC.downloadSm} Export group</button>
      </div>`;
  } else {
    const filtered = state.ideas.filter(matchesFilter);
    const total    = state.ideas.length;
    const label    = total > 0
      ? (filtered.length === total ? `${total} idea${total !== 1 ? 's' : ''}` : `${filtered.length} of ${total} ideas`)
      : 'All Ideas';
    breadcrumbHtml = `<div class="breadcrumb"><span class="breadcrumb-current">${esc(label)}</span></div><div></div>`;
  }

  // Content area
  let contentHtml;
  if (selGroup) {
    const groupItems = selGroup.items
      .map((item, idx) => ({ item, idx }))
      .filter(({ item }) => {
        if (item.type === 'idea') { const idea = ideaMap[item.id]; return !!idea && matchesFilter(idea); }
        return true;
      });
    if (groupItems.length === 0) {
      contentHtml = `
        <div class="empty-state animate-fade-in">
          <div class="empty-icon">${IC.folderPlusLg}</div>
          <p class="empty-desc">This group is empty. Add an idea or sub-group using the buttons below.</p>
        </div>`;
    } else {
      contentHtml = `<div class="ideas-list">${groupItems.map(({ item, idx }) => {
        if (item.type === 'idea') {
          const idea = ideaMap[item.id];
          if (!idea) return '';
          return renderIdeaCard(idea, { showSeq: true, isFirst: idx === 0, isLast: idx === selGroup.items.length - 1, seqIdx: idx, parentGroupId: selGroup.id, delay: Math.min(idx * 25, 150) });
        } else {
          const sg = groupMap[item.id];
          if (!sg) return '';
          return renderSubGroupCard(sg, idx, selGroup);
        }
      }).join('')}</div>`;
    }
  } else {
    const filtered = state.ideas.filter(matchesFilter);
    if (filtered.length === 0) {
      if (state.ideas.length === 0) {
        contentHtml = `
          <div class="empty-state animate-fade-in">
            <div class="empty-icon">${IC.book}</div>
            <h2 class="empty-title">Your story vault awaits</h2>
            <p class="empty-desc">Capture scenes, characters, dialogue snippets — anything worth remembering.</p>
            <button class="btn-primary-action" data-action="open-idea-form">${IC.plus} Add your first idea</button>
          </div>`;
      } else {
        contentHtml = `
          <div class="empty-state animate-fade-in">
            <p class="empty-desc">No ideas match your current filters.</p>
          </div>`;
      }
    } else {
      contentHtml = `<div class="ideas-list">${filtered.map((idea, idx) => renderIdeaCard(idea, { delay: Math.min(idx * 20, 150) })).join('')}</div>`;
    }
  }

  el.innerHTML = `
    <div class="content-header">${breadcrumbHtml}</div>
    ${contentHtml}`;
}

// ─── Filters bar ──────────────────────────────────────────────────────────────
function renderFilters() {
  const bar = document.getElementById('filters-bar');
  if (!bar) return;
  const tags = allTags();
  const tagEl = tags.length > 0
    ? `<select class="filter-select" id="filter-tag"><option value="">All tags</option>${tags.map(t => `<option value="${esc(t)}"${state.tagFilter === t ? ' selected' : ''}>#${esc(t)}</option>`).join('')}</select>`
    : `<input class="filter-select" id="filter-tag" type="text" value="${esc(state.tagFilter)}" placeholder="Filter by tag…">`;
  bar.innerHTML = `
    <select class="filter-select" id="filter-type">
      <option value="">All types</option>
      ${IDEA_TYPES.map(t => `<option value="${t}"${state.typeFilter === t ? ' selected' : ''}>${t}</option>`).join('')}
    </select>
    ${tagEl}
    ${state.typeFilter || state.tagFilter ? `<button class="btn-clear-filters" data-action="clear-filters">Clear</button>` : ''}`;
  document.getElementById('filter-type')?.addEventListener('change', e => { state.typeFilter = e.target.value; renderAll(); });
  document.getElementById('filter-tag')?.addEventListener('change', e => { state.tagFilter = e.target.value; renderAll(); });
  document.getElementById('filter-tag')?.addEventListener('input', e => { state.tagFilter = e.target.value; renderAll(); });
}

function updateFilterBtn() {
  const btn = document.getElementById('btn-filters');
  if (!btn) return;
  const active = state.typeFilter || state.tagFilter;
  btn.classList.toggle('active', !!active || state.showFilters);
  const dot = btn.querySelector('.filter-dot');
  if (active && !dot) { const d = document.createElement('span'); d.className = 'filter-dot'; btn.appendChild(d); }
  else if (!active && dot) dot.remove();
}

// ─── Full render ──────────────────────────────────────────────────────────────
function renderAll() {
  renderSidebar('sidebar-desktop-inner');
  renderSidebar('sidebar-mobile-inner');
  renderMain();
  renderFilters();
  updateFilterBtn();
}

// ─── Modals ───────────────────────────────────────────────────────────────────
function openModal(id) { document.getElementById(id)?.classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id)?.classList.add('hidden'); document.body.style.overflow = ''; }
function closeAllModals() {
  ['modal-idea-form','modal-group-form','modal-versions','modal-add-to-group','modal-import','modal-delete-idea','modal-delete-group'].forEach(closeModal);
  state.editingIdea = null; state.deleteIdeaTarget = null; state.deleteGroupTarget = null;
  state.versionsIdea = null; state.addToGroupIdea = null; state.editingGroup = null; state.importFile = null;
}

// ── Idea form
function openIdeaForm(idea = null) {
  state.editingIdea = idea;
  const form = document.getElementById('idea-form');
  document.getElementById('modal-idea-form-title').textContent = idea ? 'Edit Idea' : 'New Idea';
  form.querySelector('[name=title]').value       = idea?.title       ?? '';
  form.querySelector('[name=type]').value        = idea?.type        ?? 'Story';
  form.querySelector('[name=description]').value = idea?.description ?? '';
  form.querySelector('[name=tagsRaw]').value     = idea?.tags.join(', ') ?? '';
  form.querySelector('.form-error')?.remove();
  openModal('modal-idea-form');
  setTimeout(() => form.querySelector('[name=title]').focus(), 60);
}

// ── Group form
function openGroupForm(group = null) {
  state.editingGroup = group;
  const form = document.getElementById('group-form');
  document.getElementById('modal-group-form-title').textContent = group ? 'Edit Group' : 'New Group';
  form.querySelector('[name=name]').value        = group?.name        ?? '';
  form.querySelector('[name=description]').value = group?.description ?? '';
  openModal('modal-group-form');
  setTimeout(() => form.querySelector('[name=name]').focus(), 60);
}

// ── Versions modal
function openVersionsModal(idea) {
  state.versionsIdea = idea;
  const el = document.getElementById('modal-versions-body');
  document.getElementById('modal-versions-title-text').textContent = idea.title;

  const versionRows = idea.versions.length === 0
    ? `<div class="version-empty">No previous versions yet. Versions are saved every time you edit an idea.</div>`
    : idea.versions.map((ver, i) => `
        <div class="version-row">
          <div class="version-top">
            <div style="flex:1;min-width:0">
              <div class="version-badges">
                <span class="version-num">v${idea.versions.length - i}</span>
                <span class="type-badge ${typeBadgeClass(ver.type)}">${esc(ver.type)}</span>
              </div>
              <p class="version-title">${esc(ver.title)}</p>
              ${ver.description ? `<p class="version-desc">${esc(ver.description)}</p>` : ''}
              ${ver.tags.length > 0 ? `<div class="version-tags">${ver.tags.map(t => `<span class="version-tag">#${esc(t)}</span>`).join('')}</div>` : ''}
            </div>
            <div class="version-meta">
              <span class="version-time">${IC.clock}${formatDateTime(ver.updatedAt)}</span>
              <button class="btn-restore" data-action="restore-version" data-version-id="${ver.versionId}">${IC.rotateCcw} Restore</button>
            </div>
          </div>
        </div>`).join('');

  el.innerHTML = `
    <div class="version-current">
      <div class="version-top">
        <div style="flex:1;min-width:0">
          <div class="version-badges">
            <span class="version-current-badge">Current</span>
            <span class="type-badge ${typeBadgeClass(idea.type)}">${esc(idea.type)}</span>
          </div>
          <p class="version-title">${esc(idea.title)}</p>
          ${idea.description ? `<p class="version-desc">${esc(idea.description)}</p>` : ''}
          ${idea.tags.length > 0 ? `<div class="version-tags">${idea.tags.map(t => `<span class="version-tag">#${esc(t)}</span>`).join('')}</div>` : ''}
        </div>
        <span class="version-time">${IC.clock}${formatDateTime(idea.updatedAt)}</span>
      </div>
    </div>
    ${versionRows}`;
  openModal('modal-versions');
}

// ── Add to group dialog
function openAddToGroupDialog(idea) {
  state.addToGroupIdea = idea;
  document.getElementById('modal-atg-subtitle').textContent = idea.title;
  const list = document.getElementById('modal-atg-list');
  if (state.groups.length === 0) {
    list.innerHTML = `<p style="text-align:center;padding:32px 0;font-size:.875rem;color:var(--muted-foreground)">No groups yet. Create a group first.</p>`;
  } else {
    list.innerHTML = state.groups.map(g => `
      <button class="group-option" data-action="add-to-group" data-group-id="${g.id}">
        ${IC.folderOpenMd}
        <div>
          <p class="group-option-name">${esc(g.name)}</p>
          ${g.description ? `<p class="group-option-desc">${esc(g.description)}</p>` : ''}
          <p class="group-option-count">${g.items.length} item${g.items.length !== 1 ? 's' : ''}</p>
        </div>
      </button>`).join('');
  }
  openModal('modal-add-to-group');
}

// ── Import dialog
function openImportDialog() {
  state.importFile = null;
  document.getElementById('import-file-input').value = '';
  document.getElementById('import-file-name').textContent = '';
  document.getElementById('btn-import-merge').disabled   = true;
  document.getElementById('btn-import-replace').disabled = true;
  openModal('modal-import');
}

// ── Delete confirms
function openDeleteIdeaConfirm(idea) {
  state.deleteIdeaTarget = idea;
  document.getElementById('delete-idea-name').textContent = idea.title;
  openModal('modal-delete-idea');
}
function openDeleteGroupConfirm(group) {
  state.deleteGroupTarget = group;
  document.getElementById('delete-group-name').textContent = group.name;
  openModal('modal-delete-group');
}

// ─── Event delegation ─────────────────────────────────────────────────────────
function esc(str) {
  return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function handleAction(action, el) {
  const groupId  = el.dataset.groupId;
  const ideaId   = el.dataset.ideaId;
  const versionId = el.dataset.versionId;

  switch (action) {
    // ── Navigation
    case 'select-all-ideas':
      state.selectedGroupId = null; state.sidebarOpen = false;
      document.getElementById('sidebar-mobile-overlay').classList.add('hidden');
      renderAll(); break;
    case 'select-group':
      state.selectedGroupId = groupId; state.sidebarOpen = false;
      document.getElementById('sidebar-mobile-overlay').classList.add('hidden');
      renderAll(); break;
    case 'toggle-expand':
      state.expandedGroups.has(groupId) ? state.expandedGroups.delete(groupId) : state.expandedGroups.add(groupId);
      renderAll(); break;

    // ── Idea CRUD
    case 'open-idea-form': openIdeaForm(null); break;
    case 'edit-idea': {
      const idea = state.ideas.find(i => i.id === ideaId);
      if (idea) openIdeaForm(idea); break;
    }
    case 'delete-idea': {
      const idea = state.ideas.find(i => i.id === ideaId);
      if (idea) openDeleteIdeaConfirm(idea); break;
    }
    case 'confirm-delete-idea':
      if (state.deleteIdeaTarget) {
        deleteIdea(state.deleteIdeaTarget.id);
        showToast('Idea deleted', 'destructive');
        closeModal('modal-delete-idea'); state.deleteIdeaTarget = null;
        refreshData(); renderAll();
      } break;
    case 'export-idea': {
      const idea = state.ideas.find(i => i.id === ideaId);
      if (idea) { exportSingleIdea(idea); showToast('Idea exported'); } break;
    }

    // ── Group CRUD
    case 'open-group-form': openGroupForm(null); break;
    case 'edit-group': {
      const g = state.groups.find(g => g.id === groupId);
      if (g) openGroupForm(g); break;
    }
    case 'delete-group': {
      const g = state.groups.find(g => g.id === groupId);
      if (g) openDeleteGroupConfirm(g); break;
    }
    case 'confirm-delete-group':
      if (state.deleteGroupTarget) {
        if (state.selectedGroupId === state.deleteGroupTarget.id) state.selectedGroupId = null;
        deleteGroup(state.deleteGroupTarget.id);
        showToast('Group deleted', 'destructive');
        closeModal('modal-delete-group'); state.deleteGroupTarget = null;
        refreshData(); renderAll();
      } break;
    case 'export-group':
      exportGroupData(groupId); showToast('Group exported'); break;

    // ── Group membership
    case 'open-add-to-group': {
      const idea = state.ideas.find(i => i.id === ideaId);
      if (idea) openAddToGroupDialog(idea); break;
    }
    case 'add-to-group':
      if (state.addToGroupIdea) {
        addItemToGroup(groupId, { type: 'idea', id: state.addToGroupIdea.id });
        const g = state.groups.find(g => g.id === groupId);
        showToast(`Added to "${g?.name ?? 'group'}"`);
        closeModal('modal-add-to-group'); state.addToGroupIdea = null;
        refreshData(); renderAll();
      } break;
    case 'remove-from-group':
      removeItemFromGroup(el.dataset.groupId, 'idea', ideaId);
      refreshData(); renderAll(); break;
    case 'remove-subgroup':
      removeItemFromGroup(el.dataset.parentGroupId, 'group', el.dataset.subgroupId);
      refreshData(); renderAll(); break;

    // ── Sequencing
    case 'move-up':
      moveItemInGroup(el.dataset.groupId, parseInt(el.dataset.seqIdx), 'up');
      refreshData(); renderAll(); break;
    case 'move-down':
      moveItemInGroup(el.dataset.groupId, parseInt(el.dataset.seqIdx), 'down');
      refreshData(); renderAll(); break;
    case 'move-up-group':
      moveItemInGroup(el.dataset.groupId, parseInt(el.dataset.seqIdx), 'up');
      refreshData(); renderAll(); break;
    case 'move-down-group':
      moveItemInGroup(el.dataset.groupId, parseInt(el.dataset.seqIdx), 'down');
      refreshData(); renderAll(); break;

    // ── Versions
    case 'open-versions': {
      const idea = state.ideas.find(i => i.id === ideaId);
      if (idea) openVersionsModal(idea); break;
    }
    case 'restore-version':
      if (state.versionsIdea) {
        const restored = restoreVersion(state.versionsIdea.id, versionId);
        if (restored) {
          showToast('Version restored');
          state.versionsIdea = restored;
          refreshData();
          openVersionsModal(restored);
          renderAll();
        }
      } break;

    // ── Toggle description expand
    case 'toggle-expand-desc': {
      const pEl = document.querySelector(`.card-description[data-idea-id="${ideaId}"]`);
      if (!pEl) break;
      const isExp = pEl.dataset.expanded === 'true';
      pEl.dataset.expanded = String(!isExp);
      pEl.textContent = isExp ? el.dataset.preview : el.dataset.full;
      el.innerHTML = isExp ? `${IC.chevronDownXs} Show more` : `${IC.chevronUpXs} Show less`;
      break;
    }

    // ── Filters
    case 'clear-filters':
      state.typeFilter = ''; state.tagFilter = ''; renderAll(); break;

    // ── Export / Import
    case 'export-all':
      exportFullBackup(); showToast('Full backup downloaded'); break;
    case 'open-import': openImportDialog(); break;

    // ── Sidebar toggle
    case 'toggle-sidebar':
      state.sidebarOpen = !state.sidebarOpen;
      document.getElementById('sidebar-mobile-overlay').classList.toggle('hidden', !state.sidebarOpen);
      if (state.sidebarOpen) renderSidebar('sidebar-mobile-inner');
      break;

    // ── Theme
    case 'toggle-theme': toggleTheme(); break;

    // ── Filters panel
    case 'toggle-filters':
      state.showFilters = !state.showFilters;
      document.getElementById('filters-bar').classList.toggle('hidden', !state.showFilters);
      updateFilterBtn(); break;

    // ── Modal closes
    case 'close-modal': closeAllModals(); break;
  }
}

// ─── Wire up delegated event listener ────────────────────────────────────────
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (btn) { e.preventDefault(); handleAction(btn.dataset.action, btn); }
});

// ─── Forms ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Idea form submit
  document.getElementById('idea-form').addEventListener('submit', e => {
    e.preventDefault();
    const form  = e.target;
    const title = form.querySelector('[name=title]').value.trim();
    if (!title) {
      let err = form.querySelector('.form-error');
      if (!err) { err = document.createElement('p'); err.className = 'form-error'; form.querySelector('[name=title]').after(err); }
      err.textContent = 'Title is required'; return;
    }
    const tags = form.querySelector('[name=tagsRaw]').value.split(',').map(t => t.trim().toLowerCase()).filter(Boolean);
    const values = { title, description: form.querySelector('[name=description]').value, type: form.querySelector('[name=type]').value, tags };
    if (state.editingIdea) {
      updateIdea(state.editingIdea.id, values);
      showToast(`Idea updated: ${title}`);
    } else {
      const newIdea = addIdea(values);
      if (state.selectedGroupId) addItemToGroup(state.selectedGroupId, { type: 'idea', id: newIdea.id });
      showToast(`Idea saved: ${title}`);
    }
    closeModal('modal-idea-form'); state.editingIdea = null;
    refreshData(); renderAll();
  });

  // Group form submit
  document.getElementById('group-form').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('[name=name]').value.trim();
    if (!name) {
      let err = form.querySelector('.form-error');
      if (!err) { err = document.createElement('p'); err.className = 'form-error'; form.querySelector('[name=name]').after(err); }
      err.textContent = 'Name is required'; return;
    }
    const description = form.querySelector('[name=description]').value;
    if (state.editingGroup) {
      updateGroup(state.editingGroup.id, { name, description });
      showToast(`Group updated: ${name}`);
    } else {
      addGroup(name, description);
      showToast(`Group created: ${name}`);
    }
    closeModal('modal-group-form'); state.editingGroup = null;
    refreshData(); renderAll();
  });

  // Search input
  document.getElementById('input-search').addEventListener('input', e => {
    state.search = e.target.value;
    document.getElementById('btn-search-clear').classList.toggle('hidden', !state.search);
    renderAll();
  });
  document.getElementById('btn-search-clear').addEventListener('click', () => {
    state.search = '';
    document.getElementById('input-search').value = '';
    document.getElementById('btn-search-clear').classList.add('hidden');
    renderAll();
  });

  // Import file input
  document.getElementById('import-file-input').addEventListener('change', e => {
    const file = e.target.files?.[0] ?? null;
    state.importFile = file;
    document.getElementById('import-file-name').innerHTML = file ? `Selected: <strong>${esc(file.name)}</strong>` : '';
    document.getElementById('btn-import-merge').disabled   = !file;
    document.getElementById('btn-import-replace').disabled = !file;
  });

  document.getElementById('btn-import-merge').addEventListener('click', () => doImport('merge'));
  document.getElementById('btn-import-replace').addEventListener('click', () => doImport('replace'));

  async function doImport(mode) {
    if (!state.importFile) return;
    try {
      const result = await importData(state.importFile, mode);
      state.ideas  = result.ideas;
      state.groups = result.groups;
      showToast(`${mode === 'replace' ? 'Data replaced' : 'Data merged'}: ${result.ideas.length} ideas, ${result.groups.length} groups`);
      closeModal('modal-import'); state.importFile = null;
      refreshData(); renderAll();
    } catch {
      showToast('Import failed — invalid backup file', 'destructive');
    }
  }

  // Backdrop clicks to close modals
  document.querySelectorAll('.modal-backdrop').forEach(bd => {
    bd.addEventListener('click', closeAllModals);
  });
  document.getElementById('sidebar-backdrop').addEventListener('click', () => {
    state.sidebarOpen = false;
    document.getElementById('sidebar-mobile-overlay').classList.add('hidden');
  });

  // Keyboard: Escape closes modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeAllModals(); }
  });

  // ─── Init ─────────────────────────────────────────────────────────────────
  initTheme();
  refreshData();
  renderAll();

  // Service worker (production only — won't register when opened as file://)
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').catch(() => {});
    });
  }
});
