// wf-components.jsx — wireframe primitives for Lanka Seva
// All components are compact wrappers that emit the wireframe.css classes.

// ─── Phone frame (300×620) ─────────────────────────────────────────
function Phone({ children, dark = false, noTabs = false, noStatus = false, noHome = false }) {
  return (
    <div className={"wf-phone" + (dark ? " dark" : "")}>
      {!noStatus && <PhoneStatus dark={dark} />}
      {children}
      {!noHome && <div className="wf-home" />}
    </div>
  );
}

function PhoneStatus({ dark = false }) {
  return (
    <div className="wf-status" style={dark ? { color: '#ccc', borderColor: '#444' } : null}>
      <span>9:30</span>
      <span className="dots">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span style={{ marginLeft: 4 }}>5G</span>
        <span className="bat" style={{ marginLeft: 4 }} />
      </span>
    </div>
  );
}

// ─── App header ────────────────────────────────────────────────────
function Header({ title, back = false, menu = false, right, lang = "EN", dark = false, sub }) {
  return (
    <div className="wf-header" style={dark ? { background: '#222', borderColor: '#444', color: 'white' } : null}>
      {back && <div className="h-icon">‹</div>}
      {menu && <div className="h-icon sq">≡</div>}
      <div className="grow">
        <div className="h-title">{title}</div>
        {sub && <div className="h-tiny" style={{ marginTop: -2 }}>{sub}</div>}
      </div>
      {right}
      {lang && <div className="lang-pill">{lang}</div>}
    </div>
  );
}

// ─── Bottom tab bar ────────────────────────────────────────────────
function TabBar({ active = 'home' }) {
  const tab = (k, label, icon, sq) => (
    <div key={k} className={"tab" + (active === k ? " active" : "")}>
      <div className={"tab-ic" + (sq ? "" : " circ")}>{icon}</div>
      <span>{label}</span>
    </div>
  );
  return (
    <div className="wf-tabs">
      {tab('home', 'Home', '⌂', true)}
      {tab('serv', 'Services', '▦', true)}
      <div className={"qr-tab" + (active === 'qr' ? " active" : "")}>
        <div className="qr-btn">QR</div>
        <span className="qr-tab-label" style={active === 'qr' ? null : { color: '#8a8680', fontWeight: 400 }}>Pay</span>
      </div>
      {tab('prof', 'Profile', '◔')}
      {tab('loc', 'Locate', '◉')}
    </div>
  );
}

// ─── Basic primitives ──────────────────────────────────────────────
function Box({ children, className = '', style, ...rest }) {
  return <div className={"box " + className} style={style} {...rest}>{children}</div>;
}

function Btn({ children, className = '', ...rest }) {
  return <div className={"cta " + className} {...rest}>{children}</div>;
}

function Pill({ children, className = '' }) {
  return <span className={"pill " + className}>{children}</span>;
}

function Circ({ children, size = 28, fill, color, style }) {
  return (
    <span className="circ" style={{ width: size, height: size, background: fill, color, ...style }}>{children}</span>
  );
}

function Line({ w = 'med', tall = false, dark = false, style }) {
  return <div className={"line " + w + (tall ? " tall" : "") + (dark ? " dark" : "")} style={style} />;
}

function Mono({ children, up = false, tiny = false, style }) {
  return <span className={"mono " + (up ? "up " : "") + (tiny ? "tiny" : "")} style={style}>{children}</span>;
}

function H({ size = 'md', children, style, className = '' }) {
  return <div className={`h-${size} ${className}`} style={style}>{children}</div>;
}

function Row({ left, title, sub, right, badge, chev = true, onClick, style }) {
  return (
    <div className="row-item" style={style} onClick={onClick}>
      {left}
      <div className="body">
        <div className="h-sm" style={{ fontWeight: 600 }}>{title}</div>
        {sub && <div className="h-tiny">{sub}</div>}
      </div>
      {badge}
      {chev && <span className="chev">›</span>}
    </div>
  );
}

function Input({ label, value, placeholder, filled = false, error = false, focus = false, note, hint }) {
  return (
    <div>
      {label && <div className="mono" style={{ marginBottom: 4 }}>{label.toUpperCase()}</div>}
      <div className={"input" + (filled ? " filled" : "") + (error ? " error" : "") + (focus ? " focus" : "")}>
        {value
          ? <span className="val">{value}</span>
          : <span className="ph">{placeholder || '...'}</span>
        }
        {filled && <span className="pill green" style={{ fontSize: 7.5 }}>VERIFIED ✓</span>}
      </div>
      {note && <div className="h-tiny" style={{ marginTop: -4, marginBottom: 8, color: '#1a6645' }}>{note}</div>}
      {hint && <div className="h-tiny" style={{ marginTop: -4, marginBottom: 8 }}>{hint}</div>}
    </div>
  );
}

// striped image placeholder
function ImgPh({ h = 60, label = 'image', style }) {
  return <div className="imgph" style={{ height: h, ...style }}>{label}</div>;
}

// QR placeholder block
function QR({ size = 100, style }) {
  return <div className="qr" style={{ width: size, height: size, ...style }} />;
}

// Progress bar with N segments, M filled
function Progress({ steps = 3, filled = 1 }) {
  return (
    <div className="progress">
      {Array.from({ length: steps }).map((_, i) => (
        <div key={i} className={"seg" + (i < filled ? " fill" : "")} />
      ))}
    </div>
  );
}

// Sector swatch (initial letter, optional fill color)
function Swatch({ children, fill, size = 'md' }) {
  const cls = "swatch" + (size === 'lg' ? ' lg' : size === 'sm' ? ' sm' : '');
  return <span className={cls} style={fill ? { background: fill, borderColor: '#1a1815' } : null}>{children}</span>;
}

// Lanka Seva logo mark (Variant 01) — universal inline SVG so every wireframe carries the real brand.
// Used in place of the old <Swatch>LS</Swatch> placeholder in app headers, splash & auth screens.
function LSMark({ size = 24, bg = '#2B5FA8', fg = '#fff', accent = '#E09400', stroke = true }) {
  return (
    <span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', flexShrink: 0, lineHeight: 0 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ display:'block', borderRadius: size * 0.22, border: stroke ? `${Math.max(1, size * 0.04)}px solid #1a1815` : 'none', boxSizing:'border-box' }}>
        <rect x="0" y="0" width="100" height="100" rx="22" ry="22" fill={bg} />
        <path d="M 22 22 L 22 73 L 48 73" fill="none" stroke={fg} strokeWidth="11" strokeLinecap="square" />
        <path
          d="M 78 30 C 78 23, 72 22, 65 22 L 56 22 C 49 22, 46 26, 46 32 C 46 38, 49 42, 56 42 L 66 42 C 73 42, 78 46, 78 52 C 78 58, 73 62, 66 62 L 50 62"
          fill="none" stroke={fg} strokeWidth="11" strokeLinecap="square" strokeLinejoin="miter"
        />
        <circle cx="78" cy="73" r="3.5" fill={accent} />
      </svg>
    </span>
  );
}

// Annotation (sketchy callout note pointing into the design)
function Anno({ children, top, left, right, bottom, style }) {
  return <div className="anno" style={{ top, left, right, bottom, ...style }}>{children}</div>;
}

// Divider
function Div({ style }) { return <div className="div" style={style} />; }

// Body wrapper
function Body({ children, className = '', style, dark = false }) {
  return <div className={"wf-body " + className + (dark ? " dark" : "")} style={style}>{children}</div>;
}

// Phone screen with tab bar
function Screen({ children, dark = false, tab = null, noStatus = false, noHome = false }) {
  return (
    <Phone dark={dark} noStatus={noStatus} noHome={noHome}>
      {children}
      {tab && <TabBar active={tab} />}
    </Phone>
  );
}

Object.assign(window, {
  Phone, PhoneStatus, Header, TabBar, Screen,
  Box, Btn, Pill, Circ, Line, Mono, H, Row, Input,
  ImgPh, QR, Progress, Swatch, LSMark, Anno, Div, Body,
});
