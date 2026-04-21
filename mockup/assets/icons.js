// Injects the icon sprite so <use href="#id"> works offline (file://) in any screen.
// Loaded with a regular <script> tag before any SVG <use> references.

// When the screen is embedded in index.html's phone frame, drop the outer padding.
if (window !== window.top) {
  document.documentElement.classList.add('embedded');
}

document.write(`<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true" focusable="false"><defs>
<symbol id="ex-squat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="4" r="1.8"/>
  <path d="M5 9h14"/>
  <path d="M12 6v5"/>
  <path d="M12 11l-4.5 3.5L9.5 20"/>
  <path d="M12 11l4.5 3.5L14.5 20"/>
</symbol>
<symbol id="ex-pushup" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="5" cy="9" r="1.8"/>
  <path d="M7 9h13"/>
  <path d="M10 11v5"/>
  <path d="M16 11v5"/>
  <path d="M4 21h18" stroke-dasharray="2 2"/>
</symbol>
<symbol id="ex-pullup" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 5h18"/>
  <path d="M9 5v4"/>
  <path d="M15 5v4"/>
  <circle cx="12" cy="11" r="1.8"/>
  <path d="M12 13v5"/>
  <path d="M9.5 21L12 17l2.5 4"/>
</symbol>
<symbol id="ex-dip" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2.5 10h5.5"/>
  <path d="M16 10h5.5"/>
  <circle cx="12" cy="6" r="1.8"/>
  <path d="M12 8v9"/>
  <path d="M8 10v6"/>
  <path d="M16 10v6"/>
  <path d="M9.5 21L12 17l2.5 4"/>
</symbol>
<symbol id="home" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-6h-6v6H5a2 2 0 0 1-2-2z"/>
</symbol>
<symbol id="history" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 12a9 9 0 1 0 3-6.7"/>
  <polyline points="3 4 3 10 9 10"/>
  <path d="M12 7v5l3 2"/>
</symbol>
<symbol id="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 21V5"/>
  <path d="M3 21h18"/>
  <path d="M7 17l4-5 3 3 5-7"/>
</symbol>
<symbol id="plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 5v14M5 12h14"/>
</symbol>
<symbol id="minus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14"/>
</symbol>
<symbol id="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="4 12 10 18 20 6"/>
</symbol>
<symbol id="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 6l12 12M18 6L6 18"/>
</symbol>
<symbol id="chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="9 6 15 12 9 18"/>
</symbol>
<symbol id="chevron-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="15 6 9 12 15 18"/>
</symbol>
<symbol id="arrow-left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 12H5"/>
  <polyline points="12 5 5 12 12 19"/>
</symbol>
<symbol id="more" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="5" cy="12" r="1"/>
  <circle cx="12" cy="12" r="1"/>
  <circle cx="19" cy="12" r="1"/>
</symbol>
<symbol id="play" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <polygon points="7 5 19 12 7 19"/>
</symbol>
<symbol id="pause" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <rect x="6" y="5" width="4" height="14" rx="1"/>
  <rect x="14" y="5" width="4" height="14" rx="1"/>
</symbol>
<symbol id="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <polyline points="12 7 12 12 15.5 14"/>
</symbol>
<symbol id="vest" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="9" width="3" height="6" rx="1"/>
  <rect x="19" y="9" width="3" height="6" rx="1"/>
  <rect x="5" y="10.5" width="2" height="3" rx="0.5"/>
  <rect x="17" y="10.5" width="2" height="3" rx="0.5"/>
  <path d="M7 12h10"/>
</symbol>
<symbol id="flame" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3c1 3 4 4 4 8a4 4 0 1 1-8 0c0-2 1-3 2-4 0 2 1 3 2 3 0-2-1-4 0-7z"/>
</symbol>
<symbol id="note" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 6h14"/>
  <path d="M4 12h10"/>
  <path d="M4 18h7"/>
</symbol>
<symbol id="edit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 20h9"/>
  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>
</symbol>
<symbol id="trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="3 6 5 6 21 6"/>
  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
</symbol>
<symbol id="settings" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="3"/>
  <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>
</symbol>
<symbol id="signal" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <rect x="2" y="14" width="3" height="6" rx="0.5"/>
  <rect x="7" y="10" width="3" height="10" rx="0.5"/>
  <rect x="12" y="6" width="3" height="14" rx="0.5"/>
  <rect x="17" y="2" width="3" height="18" rx="0.5"/>
</symbol>
<symbol id="wifi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 8.5a15 15 0 0 1 20 0"/>
  <path d="M5 12a10 10 0 0 1 14 0"/>
  <path d="M8.5 15.5a5 5 0 0 1 7 0"/>
  <circle cx="12" cy="19" r="1" fill="currentColor"/>
</symbol>
<symbol id="battery" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="18" height="10" rx="2"/>
  <path d="M22 11v2"/>
  <rect x="4" y="9" width="13" height="6" rx="1" fill="currentColor" stroke="none"/>
</symbol>
</defs></svg>`);
