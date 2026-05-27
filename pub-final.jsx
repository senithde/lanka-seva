// pub-final.jsx — Components for the final publication version
// Clean (no version references), annotations below screens, life-stage diagram,
// 6-question conversation page, plain headings.

// ─── Footer with centred page number ─────────────────────────────
function PubFinalFooter({ page, total }) {
  return (
    <div className="pub-foot">
      <div className="disclaimer">
        Lanka Seva is an independent UX concept by Senith Edirisinghe — not affiliated with
        ICTA, Ministry of Digital Economy, or the Government of Sri Lanka.
        Flows based on publicly available information.
      </div>
      <div className="page-number">Page {page} of {total}</div>
      <div className="designer">
        <span className="name">Senith Edirisinghe</span>
        UI/UX Designer
      </div>
    </div>
  );
}

// ─── Header (no section codes) ──────────────────────────────────
function PubFinalHead({ title, subtitle, right }) {
  return (
    <div className="pub-head">
      <div>
        <h2>{title}</h2>
        <div className="subtitle">{subtitle}</div>
      </div>
      {right && <div>{right}</div>}
    </div>
  );
}

// ─── Page wrapper ────────────────────────────────────────────────
function PubFinalPage({ title, subtitle, page, total, children, contentStyle }) {
  return (
    <div className="pub-page">
      <PubFinalHead title={title} subtitle={subtitle} />
      <div style={{ marginTop: 18, flex: 1, ...contentStyle }}>
        {children}
      </div>
      <PubFinalFooter page={page} total={total} />
    </div>
  );
}

// ─── Annotation block (below screens) ────────────────────────────
function AnnoBlock({ items }) {
  return (
    <div className="pub-anno-block">
      {items.map((it, i) => (
        <div key={i} className="pub-anno-row">
          <div className="label">{it.label}</div>
          <div className="body">{it.body}</div>
        </div>
      ))}
    </div>
  );
}

// ─── Wireframe page (final) ───────────────────────────────────────
function FinalWfPage({ title, subtitle, page, banner, items, scale = 0.55, gap = 24, annotations }) {
  return (
    <PubFinalPage title={title} subtitle={subtitle} page={page} total={26}>
      {banner && (
        <div className="pub-section-banner">
          <p style={{ fontFamily:'Kalam', fontSize: 14, lineHeight: 1.45, margin: 0 }}>{banner}</p>
        </div>
      )}
      <PubWfRow items={items} scale={scale} gap={gap} />
      {annotations && <AnnoBlock items={annotations} />}
    </PubFinalPage>
  );
}

// ─── Cover (final) ────────────────────────────────────────────────
function PubFinalCover() {
  return (
    <div className="pub-page no-break">
      <div className="pub-cover">
        <div className="topbar">UX CONCEPT · CASE STUDY · MAY 2026</div>
        <h1>Lanka Seva</h1>
        <div className="scripts">ලංකා සේවා · இலங்கை சேவை</div>
        <div className="tagline">
          Sri Lanka Government Super App · UX Concept<br/>
          <span style={{ color:'#d97706' }}>Every government service. One trusted app.</span>
        </div>

        <div className="flag">
          <div style={{ background:'#ffbe29' }} />
          <div style={{ background:'#eb7400' }} />
          <div style={{ background:'#00534e' }} />
          <div style={{ background:'#8d153a' }} />
        </div>

        <div className="monogram">
          <div className="ls-mark-wrap">
            <div className="ls-rounded">
              <LSMonogram size={88} bg="#2B5FA8" fg="#fff" accent="#E09400" />
            </div>
            <div>
              <div className="ls-wordmark">Lanka Seva</div>
              <div className="ls-sinhala">ලංකා සේවා</div>
            </div>
          </div>
        </div>

        <div className="details">
          <div style={{ fontFamily:'JetBrains Mono', fontSize: 10, color:'#d97706', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom: 10 }}>
            Project details
          </div>
          <div className="label">Designer</div>
          <div className="val">Senith Edirisinghe · UI/UX Designer</div>
          <div className="label">Project type</div>
          <div className="val">Speculative UX concept · Case study</div>
          <div className="label">Tools</div>
          <div className="val">Figma · FigJam · Claude Design</div>
          <div className="label">Timeline</div>
          <div className="val">May 2026</div>
          <div className="label">Platform</div>
          <div className="val">Mobile · Android primary · iOS secondary</div>
          <div className="label">Status</div>
          <div className="val" style={{ color:'#1e9459' }}>✓ Wireframes complete · Seeking feedback</div>
          <div className="label">Inspiration</div>
          <div className="val">
            <a href="https://www.icta.lk/projects/digital-government/government-super-app"
               target="_blank" rel="noopener"
               style={{ color:'#d97706', textDecoration:'underline', textUnderlineOffset:'2px', fontFamily:'Kalam', fontSize: 14, fontWeight:600, wordBreak:'break-word' }}>
              ICTA · Government Super App
            </a>
            <div style={{ fontFamily:'JetBrains Mono', fontSize: 9, color:'#8a8680', marginTop: 2, letterSpacing:'0.02em' }}>
              icta.lk/projects/digital-government/government-super-app
            </div>
          </div>
        </div>

        <div className="pub-reading-guide">
          <div className="lab">How to read · 26 pages · ~8 minutes</div>
          <div className="body">
            Starts with the research that led to Lanka Seva, then walks through every screen of the app
            in flow order. Annotations below each screen explain key design decisions. The final pages
            invite your feedback.
          </div>
        </div>

        <div className="bottom">
          <div className="disclaimer">
            Lanka Seva is an independent UX concept project by Senith Edirisinghe.
            It is not affiliated with, endorsed by, or connected to ICTA, the Ministry of Digital Economy,
            or the Government of Sri Lanka. All government service flows are based on publicly available information.
          </div>
          <div className="links">
            <span className="name">Senith Edirisinghe</span>
            linkedin.com/in/senithedirisinghe
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── HMW (final, no version labels) ──────────────────────────────
function PubFinalHMW() {
  const all = [
    { n:1, t:'tracking + confidence',
      body:'How might we help a low-digital-confidence citizen track their application status and feel as secure as holding a paper receipt?' },
    { n:2, t:'eliminate friction',
      body:'How might we eliminate repeated data entry and half-digital dead ends for citizens who want to do everything from their phone?' },
    { n:3, t:'rural + sinhala + offline',
      body:'How might we help a rural citizen access government services in Sinhala without reliable internet or wasting a full day of travel?' },
    { n:4, t:'trust + payment',
      body:'How might we build enough trust in a digital government platform that a first-time user will complete a payment without abandoning the flow?' },
    { n:5, t:'discovery',
      body:'How might we design a service discovery experience so intuitive that a citizen finds the right service in under 30 seconds?' },
    { n:6, t:'officer accuracy',
      body:'How might we make the officer availability feature accurate and trustworthy enough that Bandara will trust it before making the 12km trip?' },
    { n:7, t:'children',
      body:'How might we design safe, age-appropriate access for children under 16 without excluding them from government services they genuinely need?' },
    { n:8, t:'bills',
      body:'How might we make bill payments feel as reliable and trustworthy as paying at a post office counter?' },
    { n:9, t:'qr + literacy',
      body:'How might we build a QR payment experience that works for both low-literacy citizens and low-literacy merchants without either needing training?' },
  ];
  return (
    <div className="pub-grid-3x3">
      {all.map(h => (
        <div key={h.n} className="pub-sticky">
          <span className="num">HMW {h.n} · {h.t}</span>
          <span>{h.body}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Sitemap (final, no inline change badges) ───────────────────
function PubFinalSitemap() {
  return (
    <pre className="pub-sitemap">{`App Launch
├── ONBOARDING (first-time)
│   ├── Language selection (Sinhala/Tamil/English)
│   ├── NIC entry + OTP
│   ├── Auto-fill preview (data fetched from DRP)
│   ├── Profile setup
│   ├── Add bank account (optional)
│   ├── Permissions
│   └── Done
│
├── LOGIN (returning users)
│   ├── NIC + password / biometric
│   ├── Under-18 detected → family sign-in flow
│   └── Reset PIN
│
└── HOME DASHBOARD
    ├── TAB 1: HOME
    │   ├── Hero status card
    │   ├── Bills due
    │   ├── Quick actions
    │   ├── Expiring soon
    │   ├── My services
    │   └── Recent activity
    │
    ├── TAB 2: SERVICES
    │   ├── Sector grid (8 sectors)
    │   ├── Search results
    │   ├── Sector detail
    │   ├── Service detail
    │   ├── Payment flow (3-step)
    │   └── Bills & Payments hub
    │       ├── EDL Electricity
    │       ├── NWSDB Water
    │       ├── SLTMobitel / Dialog
    │       ├── IRD Tax
    │       └── Payment history
    │
    ├── TAB 3: QR PAY (centre raised button)
    │   ├── Mode selector (bottom sheet)
    │   ├── Scan to pay (camera)
    │   ├── Show my QR
    │   ├── Fuel quota
    │   └── Request payment
    │
    ├── TAB 4: PROFILE
    │   ├── Profile main
    │   ├── Personal details (edit)
    │   ├── Document wallet
    │   │   ├── NIC (auto-sync)
    │   │   ├── Driving licence (auto-sync)
    │   │   ├── Passport (manual + OCR)
    │   │   └── Other documents
    │   ├── Bank accounts
    │   ├── Application history
    │   ├── Household members
    │   │   ├── Add child (3-step)
    │   │   ├── Child profile
    │   │   ├── Child health card
    │   │   └── Approval settings
    │   └── Settings
    │       ├── Appearance (light/dark/high contrast)
    │       ├── Language
    │       ├── Font size
    │       ├── Accessibility
    │       └── Security
    │
    └── TAB 5: LOCATE
        ├── Map + filters
        ├── Office detail
        └── Officer availability

SUPPORTING (no tab):
  Offline mode · Error states · Payment uncertainty
  Emergency (1990) · Simplified mode · Language switch
  Biometric overlay · Notification deep-links
`}</pre>
  );
}

// ─── Principles (final, no internal version reference) ──────────
function PubFinalPrinciples() {
  return <PubPrinciples />;
}

// ─── Constraints (final, no "ADDED" prefix, no version-references) ─
function PubFinalConstraints() {
  const items = [
    ['Multilingual','Sinhala, Tamil, English. Language selected on first screen affects all subsequent content immediately. Noto Sans for Sinhala/Tamil. Min line-height 1.35× for script fonts.'],
    ['Device compatibility','Android-first. Budget devices (2GB RAM, Android 8+). iOS secondary. Must work on low-end hardware.'],
    ['Connectivity','Must function on 3G. No autoplay media. No large images. Offline mode shows cached documents, receipts, fuel QR.'],
    ['Accessibility','WCAG 2.2 AA. 44×44px touch targets. 4.5:1 contrast. Icon labels always required. Never colour-only information. Light/Dark/HC themes. Font size S/M/L/XL. Simplified mode.'],
    ['Security','SL-UDI biometric for payments > Rs. 25,000. OTP for standard services. 3 biometric fails → force PIN. 6 fails → freeze 5 min. Dynamic QR codes refresh every 60 seconds.'],
    ['Trust','Official branding on every screen. CBSL regulation notice on all payment screens. "Feels like paper" receipt design. Verification QR on all official documents.'],
    ['Phase scope','Concept design only — backend API integration is Phase 2. GovPay, LankaQR, SL-UDI connections are simulated in the concept.'],
    ['Family account system','Under-16 access via parent account using birth certificate. Age calculated from NIC (DOB embedded). Automatic transitions at 16 (NIC) and 18 (full independence). Parent access ends completely at 18.'],
    ['GovPay + LankaQR','GovPay: government service payments, Rs. 15 max fee. LankaQR: merchant payments, peer-to-peer, fuel quota. Both run on LankaPay CEFTS. 22 participating banks. Rs. 10–500,000 per txn.'],
    ['EDL not CEB','As of 9 March 2026, the Ceylon Electricity Board unbundled into Electricity Distribution Lanka (EDL). All electricity screens use EDL branding.'],
  ];
  return (
    <div className="pub-grid-3" style={{ gridTemplateColumns:'repeat(2, 1fr)' }}>
      {items.map(([title, body], i)=>(
        <div key={i} className="pub-card outline tight">
          <span className="label">Rule {i+1}</span>
          <h4 style={{ fontSize: 16, margin: '0 0 4px' }}>{title}</h4>
          <p style={{ fontSize: 12, lineHeight: 1.4 }}>{body}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Life stage diagram ─────────────────────────────────────────
function PubLifeStageFinal() {
  const Stage = ({ marker, markerClass, overline, label, sub, children }) => (
    <div className="pub-ls-stage">
      <div className="pub-ls-marker-col">
        <div className={"pub-ls-marker " + (markerClass || '')}>{marker}</div>
        <div className="pub-ls-line" />
      </div>
      <div className="pub-ls-content">
        <span className="pub-ls-overline">{overline}</span>
        <h3 className="pub-ls-label">{label}</h3>
        <div className="pub-ls-sub">{sub}</div>
        {children}
      </div>
    </div>
  );

  return (
    <div className="pub-lifestage">
      <div className="pub-ls-intro">"Lanka Seva · Services from birth to adulthood · Every Sri Lankan citizen served at every life stage"</div>

      <Stage marker="0" overline="Stage 1" label="Birth · 0 days" sub="Done by parent">
        <div className="pub-ls-row">
          <div className="pub-ls-mini blue">
            <b>Register birth</b>
            Parent NIC pre-filled · BC reference generated · Registrar General's Dept
          </div>
          <div className="pub-ls-mini green">
            <b>BCG · first vaccine</b>
            At birth · hospital · logged to health card automatically
          </div>
        </div>
      </Stage>

      <Stage marker="0–5" overline="Stage 2" label="Infant & toddler · 0–5 years" sub="Parent-managed">
        <ul className="pub-ls-list">
          <li>National immunisation schedule tracking</li>
          <li>MOH clinic appointments</li>
          <li>Nutrition programme registration (if eligible)</li>
          <li>Midwife home visit scheduling</li>
        </ul>
      </Stage>

      <Stage marker="5" overline="Stage 3" label="School age · 5–10 years" sub="Parent applies">
        <div className="pub-ls-row" style={{ alignItems:'stretch' }}>
          <div className="pub-ls-mini blue" style={{ flex: '0 0 280px' }}>
            <b>School admission · Grade 1</b>
            Child verified · zone and school preferences · admission zone shown · status: Submitted
          </div>
          <ul className="pub-ls-list" style={{ flex: 1, paddingTop: 2 }}>
            <li>Grade 5 scholarship exam</li>
            <li>Grade 5 results notification</li>
            <li>School transfer applications</li>
            <li>Child health clinic appointments</li>
          </ul>
        </div>
      </Stage>

      <Stage marker="10–15" overline="Stage 4" label="Pre-teen · 10–15 years" sub="Parent-assisted">
        <div className="pub-ls-row" style={{ alignItems:'stretch' }}>
          <div className="pub-ls-mini amber" style={{ flex: '0 0 280px' }}>
            <b>O/L registration</b>
            Index number · subjects · exam centre · status: Registered
          </div>
          <ul className="pub-ls-list" style={{ flex: 1, paddingTop: 2 }}>
            <li>Mahapola / Bursary scholarships</li>
            <li>Passport for travel</li>
            <li>Youth programme registrations</li>
            <li>School report and results</li>
          </ul>
        </div>
      </Stage>

      <Stage marker="16 ★" markerClass="star" overline="Stage 5 · The biggest milestone" label="NIC age · 16 years" sub="🎂 Citizenship begins">
        <div className="pub-ls-row" style={{ alignItems:'stretch' }}>
          <div className="pub-ls-mini amber" style={{ flex: '0 0 320px' }}>
            <b>Apply for your NIC</b>
            You're 16 — apply at Divisional Secretariat. Form A downloadable. Your Lanka Seva account upgrades automatically once the NIC is issued.
          </div>
          <div className="pub-ls-highlight" style={{ flex: 1, marginTop: 0 }}>
            <div className="ttl">Age 16 changes everything</div>
            <div className="body">
              ✓ First NIC — official government identity<br/>
              ✓ Lanka Seva teen account (own login)<br/>
              ✓ A/L exam registration (own action)<br/>
              ✓ Driving learner's permit (age 17)
            </div>
          </div>
        </div>
      </Stage>

      <Stage marker="16–17" overline="Stage 6" label="Teen · 16–17 years" sub="Teen manages independently">
        <div className="pub-ls-row" style={{ alignItems:'stretch' }}>
          <div className="pub-ls-mini blue" style={{ flex:1 }}>
            <b>A/L registration</b>
            Stream · subjects · exam centre · status: Submitted
          </div>
          <div className="pub-ls-mini blue" style={{ flex:1 }}>
            <b>UGC · University apply</b>
            Z-score · ranked courses · status: In progress
          </div>
        </div>
        <ul className="pub-ls-list" style={{ marginTop: 4 }}>
          <li>Driving learner's permit (age 17)</li>
          <li>Mahapola scholarship (own action)</li>
          <li>Passport renewal (own action + parent OTP)</li>
        </ul>
      </Stage>

      <Stage marker="18 ✓" markerClass="green" overline="Stage 7" label="Adulthood · 18 years" sub="🎉 Full independence — automatic">
        <div className="pub-ls-highlight green-bg" style={{ marginTop: 0 }}>
          <div className="ttl">At 18, Lanka Seva automatically:</div>
          <div className="body">
            → Separates account from parent<br/>
            → Transfers all history (health · education · documents)<br/>
            → Unlocks: GovPay payments · EPF · tax · driving licence · full document wallet · full service access<br/>
            → Parent access ends completely
          </div>
        </div>
      </Stage>

      <div className="pub-ls-footer">
        "The family account system ensures no Sri Lankan citizen is excluded from government services at any age.
        Parents manage services for children, with automatic transitions preserving history and privacy at every milestone."
      </div>
    </div>
  );
}

// ─── 6-question conversation page ────────────────────────────────
function PubConversation() {
  const qs = [
    'Is the parent approval flow the right level of control, or does it create too much friction for everyday use?',
    'What would actually make a Sri Lankan citizen trust a government app enough to store their NIC, passport, and bank account in one place?',
    'Which government service do Sri Lankan citizens need most urgently that this concept does not cover yet?',
    'Is a simplified mode enough for elderly and low-literacy users, or does this need to be a completely separate experience?',
    'Should the fuel quota QR be visible to all users or only to registered vehicle owners?',
    'If Lanka Seva launched tomorrow, what is the single biggest reason citizens would not use it — and how would you solve that?',
  ];
  return (
    <>
      <div className="pub-card outline" style={{ marginBottom: 18, background:'#fff8ed', borderColor:'#d97706' }}>
        <p style={{ fontSize: 15, lineHeight: 1.5 }}>
          Every design decision in Lanka Seva involved a trade-off. These questions don't have obvious answers —
          and the right ones will come from real citizens, government workers, and UX practitioners.
          <b> What do you think?</b>
        </p>
      </div>
      <div className="pub-conv">
        {qs.map((q,i)=>(
          <div key={i} className="q">{q}</div>
        ))}
      </div>
      <div className="pub-conv-close">
        Which of these would you most like to discuss? Drop it in the comments.
      </div>
      <div style={{ marginTop: 18, textAlign:'center', fontFamily:'Caveat', fontSize: 18, color:'#4a4640', fontStyle:'italic', lineHeight: 1.4, maxWidth: 900, marginInline:'auto' }}>
        Lanka Seva is not just a portfolio project. It represents a real opportunity for Sri Lanka's digital future.
        If this concept resonates with you — let's build the discussion.
      </div>
    </>
  );
}

// ─── Closing page (final) ────────────────────────────────────────
function PubClosingFinal() {
  return (
    <div className="pub-page">
      <div className="pub-closing">
        <div style={{ fontFamily:'JetBrains Mono', fontSize: 11, letterSpacing:'0.12em', textTransform:'uppercase', color:'#d97706', marginBottom: 24 }}>
          Thank you for reading
        </div>
        <h1>This is not a portfolio<br/>showcase.</h1>
        <div className="lead">
          It is a UX research document that happens to contain wireframes.
        </div>
        <div className="lead" style={{ fontSize: 19, marginBottom: 14 }}>
          Every screen exists because of a real research decision.<br/>
          Every feature traces back to a persona need or a research insight.<br/>
          Every design principle is justified by a real user quote.
        </div>
        <div className="quote">
          The story isn't "look at my screens."<br/>
          It's "here is how I think about designing for 22 million citizens."
        </div>

        <div className="designer-card">
          <img src={(typeof window !== 'undefined' && window.__resources && window.__resources.senithAvatar) || 'assets/senith.jpg'} alt="Senith Edirisinghe" className="avatar" />
          <div className="name">Senith Edirisinghe</div>
          <div className="role">UI/UX Designer · Sri Lanka</div>
          <div className="links-row">
            <div><span className="ic">@</span><a href="mailto:senithedirisinghe@gmail.com">senithedirisinghe@gmail.com</a></div>
            <div><span className="ic">in</span><a href="https://www.linkedin.com/in/senithedirisinghe" target="_blank" rel="noopener">linkedin.com/in/senithedirisinghe</a></div>
          </div>
        </div>
        <div className="invite-lines">
          Follow for updates · Connect to collaborate · Comment with your feedback
        </div>
        <div className="full-disclaimer">
          Lanka Seva is an independent UX concept project by Senith Edirisinghe.
          It is not affiliated with, endorsed by, or connected to ICTA, the Ministry of Digital Economy,
          or the Government of Sri Lanka. All government service flows are based on publicly available information.
        </div>
      </div>
      <PubFinalFooter page={26} total={26} />
    </div>
  );
}

Object.assign(window, {
  PubFinalFooter, PubFinalHead, PubFinalPage, AnnoBlock, FinalWfPage,
  PubFinalCover, PubFinalHMW, PubFinalSitemap, PubFinalPrinciples, PubFinalConstraints,
  PubLifeStageFinal, PubConversation, PubClosingFinal,
});
