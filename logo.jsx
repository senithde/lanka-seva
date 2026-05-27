// logo.jsx — Lanka Seva wordmark logo · 3 variants
// Clean geometric SVG · slate blue primary · amber accent

// ─── Logo marks (SVG) ────────────────────────────────────────────

// V1 — LS monogram in rounded square. Letters use simple geometric strokes,
// joined at the bottom by a shared horizontal bar.
function LSMonogram({ size = 56, fg = '#fff', bg = '#2B5FA8', radius = 0.22, accent = '#E09400' }) {
  const r = size * radius;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ display:'block' }}>
      <rect x="0" y="0" width="100" height="100" rx={radius * 100} ry={radius * 100} fill={bg} />
      {/* L stroke — left vertical + bottom horizontal extending into the S */}
      <path d="M 22 22 L 22 73 L 48 73" fill="none" stroke={fg} strokeWidth="11" strokeLinecap="square" />
      {/* S — geometric two-arc construction */}
      <path
        d="M 78 30
           C 78 23, 72 22, 65 22
           L 56 22
           C 49 22, 46 26, 46 32
           C 46 38, 49 42, 56 42
           L 66 42
           C 73 42, 78 46, 78 52
           C 78 58, 73 62, 66 62
           L 50 62"
        fill="none" stroke={fg} strokeWidth="11" strokeLinecap="square" strokeLinejoin="miter"
      />
      {/* Tiny amber dot — civic accent */}
      <circle cx="78" cy="73" r="3.5" fill={accent} />
    </svg>
  );
}

// V2 — Shield + teardrop combined. Single-colour geometric shape.
function ShieldMark({ size = 56, fg = '#2B5FA8', accent = '#E09400' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ display:'block' }}>
      {/* Shield-teardrop: pointed top (teardrop), shield shoulders, pointed bottom */}
      <path
        d="M 50 8
           C 60 8, 78 14, 78 28
           L 78 50
           C 78 70, 65 84, 50 92
           C 35 84, 22 70, 22 50
           L 22 28
           C 22 14, 40 8, 50 8 Z"
        fill={fg}
      />
      {/* Inner pin/dot — citizen reach */}
      <circle cx="50" cy="44" r="9" fill="#fff" />
      <circle cx="50" cy="44" r="4.5" fill={accent} />
    </svg>
  );
}

// ─── Wordmarks ──────────────────────────────────────────────────

// Primary wordmark in geometric sans
function Wordmark({ size = 28, sinhala = true, color = '#1C1A16', accent = '#E09400', accentS = false }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: size * 0.18, lineHeight: 1 }}>
      <div style={{
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 600,
        fontSize: size,
        letterSpacing: '-0.03em',
        color,
        whiteSpace: 'nowrap',
        lineHeight: 0.9,
      }}>
        Lanka{' '}
        <span>
          {accentS ? <span style={{ color: accent }}>S</span> : 'S'}eva
        </span>
      </div>
      {sinhala && (
        <div style={{
          fontFamily: "'Noto Sans Sinhala', 'Inter', sans-serif",
          fontWeight: 400,
          fontSize: size * 0.50,
          letterSpacing: '-0.01em',
          color,
          opacity: 0.65,
          lineHeight: 1,
        }}>ලංකා සේවා</div>
      )}
    </div>
  );
}

// ─── Full lockups ───────────────────────────────────────────────

function LogoV1({ size = 'lg', dark = false, onDark = false }) {
  const cfg = {
    lg: { mark: 88, type: 30, sinhala: true, gap: 18 },
    md: { mark: 56, type: 22, sinhala: false, gap: 14 },
    sm: { mark: 40, type: 0, sinhala: false, gap: 0 },
  }[size];
  const color = onDark ? '#fff' : dark ? '#1C1A16' : '#1C1A16';
  const bg = onDark ? '#fff' : '#2B5FA8';
  const fg = onDark ? '#2B5FA8' : '#fff';
  return (
    <div style={{ display:'flex', alignItems:'center', gap: cfg.gap }}>
      <LSMonogram size={cfg.mark} bg={bg} fg={fg} accent="#E09400" />
      {cfg.type > 0 && <Wordmark size={cfg.type} sinhala={cfg.sinhala} color={color} />}
    </div>
  );
}

function LogoV2({ size = 'lg', onDark = false }) {
  const cfg = {
    lg: { mark: 84, type: 30, sinhala: true, gap: 18 },
    md: { mark: 54, type: 22, sinhala: false, gap: 14 },
    sm: { mark: 40, type: 0, sinhala: false, gap: 0 },
  }[size];
  const fg = onDark ? '#fff' : '#2B5FA8';
  const color = onDark ? '#fff' : '#1C1A16';
  return (
    <div style={{ display:'flex', alignItems:'center', gap: cfg.gap }}>
      <ShieldMark size={cfg.mark} fg={fg} accent="#E09400" />
      {cfg.type > 0 && <Wordmark size={cfg.type} sinhala={cfg.sinhala} color={color} />}
    </div>
  );
}

function LogoV3({ size = 'lg', onDark = false }) {
  const cfg = {
    lg: { type: 56, sinhala: true },
    md: { type: 36, sinhala: false },
    sm: { type: 22, sinhala: false },
  }[size];
  const color = onDark ? '#fff' : '#1C1A16';
  return (
    <Wordmark size={cfg.type} sinhala={cfg.sinhala} color={color} accentS />
  );
}

Object.assign(window, { LSMonogram, ShieldMark, Wordmark, LogoV1, LogoV2, LogoV3 });
