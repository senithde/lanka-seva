// pub-content.jsx — Publication-only content components for Lanka Seva Concept v1.0
// Personas, HMW, principles, journeys, metrics, sitemap, etc.

// ─── Cover ────────────────────────────────────────────────────────
function PubCover() {
  return (
    <div className="pub-page no-break">
      <div className="pub-cover">
        <div className="topbar">LANKA SEVA CONCEPT V1.0 · UX CASE STUDY</div>
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

        <div className="monogram">LS</div>

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
          <div className="label">Version</div>
          <div className="val">Concept v1.0</div>
          <div className="label">Platform</div>
          <div className="val">Mobile · Android primary · iOS secondary</div>
          <div className="label">Status</div>
          <div className="val" style={{ color:'#1e9459' }}>✓ Wireframes complete · Seeking feedback</div>
        </div>

        <div className="bottom">
          <div className="disclaimer">
            Lanka Seva is an independent UX concept project by Senith Edirisinghe.
            It is not affiliated with, endorsed by, or connected to ICTA, the Ministry of
            Digital Economy, or the Government of Sri Lanka. All government service flows
            are based on publicly available information.
          </div>
          <div className="links">
            <span className="name">Senith Edirisinghe</span>
            linkedin.com/in/senithedirisinghe<br/>
            <span style={{ fontFamily:'JetBrains Mono', fontSize: 11, color:'#4a4640' }}>portfolio.senith.lk</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Publication footer (shared across all section pages) ─────────
function PubFooter({ page, total }) {
  return (
    <div className="pub-foot">
      <div className="disclaimer">
        Lanka Seva is an independent UX concept by Senith Edirisinghe — not affiliated with
        ICTA, Ministry of Digital Economy, or the Government of Sri Lanka.
        Flows based on publicly available information.
      </div>
      <div className="designer">
        <span className="name">Senith Edirisinghe · UI/UX</span>
        Lanka Seva Concept v1.0 · {page}/{total}
      </div>
    </div>
  );
}

// ─── Section header ───────────────────────────────────────────────
function PubSectionHead({ number, title, subtitle, right }) {
  return (
    <div className="pub-head">
      <div>
        <span className="num">Section {number}</span>
        <h2>{title}</h2>
        <div className="subtitle">{subtitle}</div>
      </div>
      {right && <div>{right}</div>}
    </div>
  );
}

// ─── A "page" wrapper with header, body, footer ──────────────────
function PubPage({ section, title, subtitle, page, total, children, contentStyle }) {
  return (
    <div className="pub-page">
      <PubSectionHead number={section} title={title} subtitle={subtitle} />
      <div style={{ marginTop: 18, flex: 1, ...contentStyle }}>
        {children}
      </div>
      <PubFooter page={page} total={total} />
    </div>
  );
}

// ─── Wireframe row helper ─────────────────────────────────────────
function PubWfRow({ items, scale = 0.55, gap = 26 }) {
  return (
    <div className="pub-wf-row" style={{ gap }}>
      {items.map(({ Comp, label, anno, key, scale: cellScale }, i) => (
        <div key={key || i} className="pub-wf-cell">
          <div style={{ zoom: cellScale || scale }}>
            <Comp />
          </div>
          <div className="label">{label}</div>
          {anno && <div className="anno">↘ {anno}</div>}
        </div>
      ))}
    </div>
  );
}

// ─── Personas (3 cards stacked) ──────────────────────────────────
function PubPersonas() {
  const P = ({ cls, initials, role, name, age, district, lit, lang, device,
    goals, frustrations, quote, needs }) => (
    <div className={"pub-persona " + cls}>
      <div className="avatar">{initials}</div>
      <div>
        <div className="role">{role}</div>
        <h3>{name}</h3>
        <div className="basics">
          Age {age} · {district}<br/>
          Digital literacy: {lit}<br/>
          Language: {lang} · Device: {device}
        </div>
        <div className="gf">
          <div>
            <b>Goals</b>
            <ul>{goals.map((g,i)=><li key={i}>{g}</li>)}</ul>
          </div>
          <div>
            <b>Frustrations</b>
            <ul>{frustrations.map((f,i)=><li key={i}>{f}</li>)}</ul>
          </div>
        </div>
        <div className="needs">
          <b>What they need</b>
          {needs}
        </div>
      </div>
      <div className="quote">"{quote}"</div>
    </div>
  );
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 18 }}>
      <P cls="sampath" initials="SP"
        role="Persona 1 · The cautious visitor"
        name="Mr. Sampath Perera" age={56} district="Shop owner · Maharagama"
        lit="Low — calls and WhatsApp only" lang="Sinhala primary" device="Basic Android"
        goals={[
          'Renew business licence without losing a working day',
          'Get physical-feeling confirmation of payments',
          'Know exactly where his application is at all times',
        ]}
        frustrations={[
          '"Go to Room 4, get signature from Room 10" process',
          'Officers not at their desk when he arrives',
          'Forms only available in English',
        ]}
        quote="If I have a paper receipt in my hand, I feel safe."
        needs="Status tracker · Sinhala UI · Downloadable receipts · Simple language · Large touch targets"
      />
      <P cls="anjali" initials="AF"
        role="Persona 2 · The efficiency seeker"
        name="Anjali Fernando" age={29} district="QA Engineer · Colombo 7"
        lit="Very high — uses apps for everything" lang="English (Sinhala conversational)" device="iPhone 14"
        goals={[
          'Complete all government tasks digitally from her phone',
          'Never re-enter the same personal data twice',
          'Get instant confirmation she can show to officers',
        ]}
        frustrations={[
          'Payment gateways that time out with no feedback',
          'Half-digital services — start online, finish at an office',
          'Re-entering NIC, address, name on every government portal',
        ]}
        quote="Everything should be linked to my NIC so I don't have to type my address 50 times."
        needs="NIC auto-fill · Digital wallet · Reliable payments · End-to-end digital flows · Modern clean interface"
      />
      <P cls="bandara" initials="BD"
        role="Persona 3 · The rural dependent"
        name="Bandara Dissanayake" age={41} district="Paddy farmer · near Anuradhapura"
        lit="Basic — WhatsApp and YouTube confident" lang="Sinhala primary" device="Budget Android · 3G"
        goals={[
          'Check if officer is available before 12km bus trip',
          'Apply for fertilizer subsidy without going to town',
          'Know when irrigation water will be released',
        ]}
        frustrations={[
          'Wasted trips when the officer is unavailable',
          'Government websites too heavy to load on 3G',
          'English-only interfaces he cannot read',
        ]}
        quote="It should show if the GN is actually in office today before I take the bus."
        needs="Officer availability checker · Sinhala-first UI · Lightweight screens · Offline mode · Icon-led navigation"
      />
    </div>
  );
}

// ─── HMW sticky notes ────────────────────────────────────────────
function PubHMW() {
  const original = [
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
  ];
  const additions = [
    { n:7, t:'children · v3',
      body:'How might we design safe, age-appropriate access for children under 16 without excluding them from government services they genuinely need?' },
    { n:8, t:'bills · v2',
      body:'How might we make bill payments feel as reliable and trustworthy as paying at a post office counter?' },
    { n:9, t:'qr + literacy',
      body:'How might we build a QR payment experience that works for both low-literacy citizens and low-literacy merchants without either needing training?' },
  ];
  const Note = ({ n, t, body, isNew }) => (
    <div className={"pub-sticky " + (isNew ? 'new' : '')}>
      <span className="num">HMW {n} · {t}</span>
      <span>{body}</span>
    </div>
  );
  return (
    <div className="pub-grid-3x3">
      {original.map(h => <Note key={h.n} {...h} />)}
      {additions.map(h => <Note key={h.n} {...h} isNew />)}
    </div>
  );
}

// ─── Solution principles ─────────────────────────────────────────
function PubPrinciples() {
  const items = [
    ['Language-first onboarding','First screen = choose Sinhala/Tamil/English','Bandara (can\'t use English-only sites)'],
    ['Task-first navigation','"Pay a fine" not "Sri Lanka Police"','All 3 (nobody thinks in departments)'],
    ['Status tracker on every application','Real-time progress on every submission','Sampath ("Check My Status" was his #1 request)'],
    ['Digital receipt = paper-receipt confidence','Every payment generates a downloadable official receipt','Sampath ("paper receipt in my hand = safe")'],
    ['NIC-linked profile · no repeated entry','One NIC links all forms, auto-fills all fields','Anjali ("don\'t type address 50 times")'],
    ['Lightweight, data-efficient screens','Must load on 3G, no heavy images or autoplay','Bandara (government sites "too heavy to load")'],
    ['Officer availability checker','Know before you travel if the officer is present','Bandara (wasted 12km trip)'],
    ['Full in-app payment · no external redirects','Unlike UMANG, entire payment flow stays inside app','Anjali (half-digital services "defeat the purpose")'],
  ];
  return (
    <div className="pub-grid-2x4">
      {items.map(([title, body, persona], i)=>(
        <div key={i} className="pub-principle">
          <span className="n">{i+1}</span>
          <h4>{title}</h4>
          <p>{body}</p>
          <div className="persona">Addresses → {persona}</div>
        </div>
      ))}
    </div>
  );
}

// ─── Constraints ─────────────────────────────────────────────────
function PubConstraints() {
  const items = [
    ['Multilingual','Sinhala, Tamil, English. Language selected on first screen affects all subsequent content immediately. Noto Sans for Sinhala/Tamil. Min line-height 1.35× for script fonts.'],
    ['Device compatibility','Android-first. Budget devices (2GB RAM, Android 8+). iOS secondary. Must work on low-end hardware.'],
    ['Connectivity','Must function on 3G. No autoplay media. No large images. Offline mode shows cached documents, receipts, fuel QR.'],
    ['Accessibility','WCAG 2.2 AA. 44×44px touch targets. 4.5:1 contrast. Icon labels always required. Never colour-only information. Light/Dark/HC themes. Font size S/M/L/XL. Simplified mode.'],
    ['Security','SL-UDI biometric for payments > Rs. 25,000. OTP for standard services. 3 biometric fails → force PIN. 6 fails → freeze 5 min. Dynamic QR codes refresh every 60 seconds.'],
    ['Trust','Official branding on every screen. CBSL regulation notice on all payment screens. "Feels like paper" receipt design. Verification QR on all official documents.'],
    ['Phase scope','Concept design only — backend API integration is Phase 2. GovPay, LankaQR, SL-UDI connections are simulated in the concept.'],
    ['Family account system · V3','Under-16 access via parent account using birth certificate. Age calculated from NIC (DOB embedded). Automatic transitions at 16 (NIC) and 18 (full independence). Parent access ends completely at 18.'],
    ['GovPay + LankaQR · V2','GovPay: government service payments, Rs. 15 max fee. LankaQR: merchant payments, peer-to-peer, fuel quota. Both run on LankaPay CEFTS. 22 participating banks. Rs. 10–500,000 per txn.'],
    ['EDL not CEB · 2026','As of 9 March 2026, CEB unbundled into Electricity Distribution Lanka (EDL). All electricity screens must use EDL branding — not CEB.'],
  ];
  return (
    <div className="pub-grid-3" style={{ gridTemplateColumns:'repeat(2, 1fr)' }}>
      {items.map(([title, body], i)=>(
        <div key={i} className="pub-card outline tight">
          <span className="label">{i < 7 ? `Constraint ${i+1}` : `Added ${i-6}`}</span>
          <h4 style={{ fontSize: 16, margin: '0 0 4px' }}>{title}</h4>
          <p style={{ fontSize: 12, lineHeight: 1.4 }}>{body}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Metrics ─────────────────────────────────────────────────────
function PubMetrics() {
  const items = [
    ['Task completion rate','85%+ complete payment without abandoning','Usability testing with 5 participants'],
    ['Time on task — flagship flow','Traffic fine payment under 4 minutes','Moderated test with Persona 1 profile'],
    ['Service discovery speed','Find correct service under 30 seconds','Unmoderated task test'],
    ['Trust perception','4/5 participants confident payment went through','Post-task survey'],
    ['Language comprehension','Sinhala-primary user completes onboarding without assistance','Moderated test with Sinhala speaker'],
    ['Auto-fill confidence','90%+ users do not manually edit auto-filled fields','Session recording analysis'],
    ['Family system setup','Parent adds child profile in under 5 minutes','Moderated test with parent participant'],
    ['Bill payment adoption','70%+ of users who pay one bill return to pay a second within 30 days','Return session tracking'],
    ['QR Pay completion','First-time QR Pay scan-to-pay completed without help in under 60 seconds','Unmoderated usability test'],
    ['Offline resilience','User can view all saved documents and last 3 receipts without internet','Technical test with airplane mode'],
  ];
  return (
    <div className="pub-grid-2">
      {items.map(([title, target, method], i)=>(
        <div key={i} className="pub-metric">
          <span className="n">{(i+1).toString().padStart(2,'0')}</span>
          <h4>{title}</h4>
          <div className="target">🎯 Target: {target}</div>
          <div className="method">📊 Measured by: {method}</div>
        </div>
      ))}
    </div>
  );
}

// ─── Competitive ─────────────────────────────────────────────────
function PubCompetitive() {
  return (
    <div className="pub-compare">
      <div className="col">
        <h4>UMANG (India)</h4>
        <div className="what">Primary reference · India's government super app · 2,500+ services</div>
        <div className="lab">Borrow</div>
        <ul>
          <li>Task-first navigation</li>
          <li>Unified login</li>
          <li>Service categories</li>
          <li>Status tracking</li>
        </ul>
        <div className="lab bad">Avoid</div>
        <ul>
          <li>App crashes between services</li>
          <li>Mid-flow redirects to external portals</li>
          <li>Poor error messages</li>
          <li>No offline fallback</li>
        </ul>
        <div className="lesson">"Completeness means nothing if the experience is broken."</div>
      </div>

      <div className="col">
        <h4>MySejahtera (Malaysia)</h4>
        <div className="what">Secondary · Malaysia's citizen health + services app</div>
        <div className="lab">Borrow</div>
        <ul>
          <li>Clean onboarding</li>
          <li>Trusted government branding</li>
          <li>QR-based document sharing</li>
          <li>Clear health records</li>
        </ul>
        <div className="lab bad">Avoid</div>
        <ul>
          <li>Scope creep beyond core services confused users</li>
        </ul>
        <div className="lesson">"Focus matters — a super app needs a clear primary identity."</div>
      </div>

      <div className="col">
        <h4>Singpass (Singapore)</h4>
        <div className="what">Secondary · Singapore's national digital identity app</div>
        <div className="lab">Borrow</div>
        <ul>
          <li>Digital document wallet concept</li>
          <li>Biometric login flow</li>
          <li>QR document verification</li>
        </ul>
        <div className="lab bad">Avoid</div>
        <ul>
          <li>Assumes very high digital literacy — inappropriate for SL's diverse base</li>
        </ul>
        <div className="lesson">"The same feature set needs completely different UX for different literacy levels."</div>
      </div>
    </div>
  );
}

// ─── Sitemap tree ────────────────────────────────────────────────
function PubSitemap() {
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
│   ├── Under-18 detected → family sign-in flow                        `}<span style={{color:'#d97706',fontWeight:700}}>← V3 NEW</span>{`
│   └── Reset PIN
│
└── HOME DASHBOARD
    ├── TAB 1: HOME
    │   ├── Hero status card
    │   ├── Bills due
    │   ├── Quick actions
    │   ├── Expiring soon
    │   ├── My services
    │   └── Recent activity                                             `}<span style={{color:'#d97706',fontWeight:700}}>← V2 NEW</span>{`
    │
    ├── TAB 2: SERVICES
    │   ├── Sector grid (8 sectors)
    │   ├── Search results
    │   ├── Sector detail
    │   ├── Service detail
    │   ├── Payment flow (3-step)
    │   └── Bills & Payments hub                                        `}<span style={{color:'#d97706',fontWeight:700}}>← V2 NEW</span>{`
    │       ├── EDL Electricity (renamed from CEB · 9 Mar 2026)
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
    ├── TAB 4: PROFILE                                                  `}<span style={{color:'#d97706',fontWeight:700}}>← renamed from "My Space"</span>{`
    │   ├── Profile main
    │   ├── Personal details (edit)
    │   ├── Document wallet
    │   │   ├── NIC (auto-sync)
    │   │   ├── Driving licence (auto-sync)
    │   │   ├── Passport (manual + OCR)                                 `}<span style={{color:'#d97706',fontWeight:700}}>← V2 NEW</span>{`
    │   │   └── Other documents
    │   ├── Bank accounts
    │   ├── Application history
    │   ├── Household members                                           `}<span style={{color:'#d97706',fontWeight:700}}>← V3 NEW</span>{`
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

// ─── Journey map ─────────────────────────────────────────────────
function PubJourney({ title, stages, arc }) {
  return (
    <div>
      <div className="pub-h4" style={{ marginBottom: 8 }}>{title}</div>
      <div className="pub-journey">
        <table>
          <thead>
            <tr>
              <th>Stage</th>
              <th style={{ width:'24%' }}>Action</th>
              <th style={{ width:'16%' }}>Emotion</th>
              <th style={{ width:'22%' }}>Pain point</th>
              <th>Opportunity</th>
            </tr>
          </thead>
          <tbody>
            {stages.map((s,i)=>(
              <tr key={i}>
                <td>{s.stage}</td>
                <td>{s.action}</td>
                <td className="emotion">{s.emotion}</td>
                <td>{s.pain}</td>
                <td>{s.opp}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="arc">
          <span className="label">Emotion arc</span>
          {arc.join(' → ')}
        </div>
      </div>
    </div>
  );
}

function PubJourney1() {
  return (
    <PubJourney
      title="Journey 1 · Sampath pays a traffic fine (updated)"
      arc={['Anxious','Relieved','Confident','Trusting','Familiar','Satisfied','Reassured']}
      stages={[
        { stage:'1 · Awareness',
          action:'Neighbour mentions Lanka Seva · downloads app',
          emotion:'Anxious, uncertain',
          pain:'Unsure if app is official',
          opp:'Strong trust signals on app store listing' },
        { stage:'2 · Onboarding',
          action:'Opens app · taps Sinhala · NIC entered · OTP · details auto-filled · profile setup',
          emotion:'Relieved — "it\'s in Sinhala"',
          pain:'Worried about biometric data',
          opp:'Plain-language explanation of why each field is needed' },
        { stage:'3 · Discovery',
          action:'Home · sees "Pay a fine" quick action · taps',
          emotion:'Confident, surprised by ease',
          pain:'Doesn\'t know fine reference number',
          opp:'"Find fine by NIC" alternative lookup path' },
        { stage:'4 · Service flow',
          action:'Enters fine ref · details appear · NIC + name pre-filled · reviews summary',
          emotion:'Comfortable, trusting',
          pain:'Worried payment might not go through',
          opp:'"Your money is protected" message + exact amount before confirming' },
        { stage:'5 · Payment',
          action:'Bank selected · OTP sent · biometric overlay · LankaPay CEFTS',
          emotion:'Familiar — "I\'ve done OTP before"',
          pain:'OTP might be slow or time out',
          opp:'60-sec countdown + Resend OTP + "Your payment has not been taken yet"' },
        { stage:'6 · Confirmation',
          action:'Green check · "Payment Successful" · receipt with ref no. + QR seal',
          emotion:'Relieved, satisfied, proud',
          pain:'Will police accept a digital receipt?',
          opp:'Receipt styled like official doc · "Show this to the officer" · QR verification' },
        { stage:'7 · Post-payment',
          action:'Receipt saved · notification 24hr later "Fine cleared from SL Police records"',
          emotion:'Reassured, confident',
          pain:'Still unsure if police record updated',
          opp:'Proactive notification closes the loop completely' },
      ]} />
  );
}

function PubJourney2() {
  return (
    <PubJourney
      title="Journey 2 · Bandara books Kavindu's health appointment (V3 NEW)"
      arc={['Surprised','Informed','Impressed','In control','Organised']}
      stages={[
        { stage:'1 · Trigger',
          action:'Notification "MMR booster due for Kavindu · July 2026 · Book now"',
          emotion:'Surprised — didn\'t know this was possible',
          pain:'Didn\'t realise app tracks immunisations',
          opp:'Proactive health reminder builds trust and habit' },
        { stage:'2 · Review',
          action:'Taps notification · opens Kavindu\'s health card · sees history · 8 of 9 complete',
          emotion:'Informed, reassured',
          pain:'Worried about travelling to hospital unnecessarily',
          opp:'Officer availability equivalent — show clinic availability before visiting' },
        { stage:'3 · Booking',
          action:'Type pre-filled from health card · hospital pre-filled from MOH area · picks date and time',
          emotion:'Impressed — "it already knows what he needs"',
          pain:'Doesn\'t know which hospital to choose',
          opp:'Pre-filled from child profile removes all decision friction' },
        { stage:'4 · Approval',
          action:'Booking request sent to Bandara (parent) · approves · appointment confirmed',
          emotion:'In control, trusted as parent',
          pain:'10-minute approval window feels pressured',
          opp:'"Auto-approve health appointments" toggle removes friction for trusted recurring actions' },
        { stage:'5 · Confirmation',
          action:'Confirmed · added to calendar · parent notification · reminder 1 day before',
          emotion:'Organised, competent',
          pain:'May forget appointment without reminder',
          opp:'Dual reminders (parent + child device) with hospital address + clinic name' },
      ]} />
  );
}

function PubJourney3() {
  return (
    <PubJourney
      title="Journey 3 · Anjali pays electricity bill with anomaly (V2 NEW)"
      arc={['Concerned','Informed','In control','Curious','Satisfied']}
      stages={[
        { stage:'1 · Notification',
          action:'"EDL bill due in 3 days · Rs. 3,450 · ⚠ 38% higher than usual"',
          emotion:'Concerned — higher than expected',
          pain:'Doesn\'t know why bill is higher',
          opp:'Usage anomaly alert explains causes (AC, heater, lights left on)' },
        { stage:'2 · Review',
          action:'Opens bill · breakdown + 6-month chart with average line · current month highlighted',
          emotion:'Informed — understands why it\'s higher',
          pain:'Worried about forgetting to pay before due date',
          opp:'Visual chart comparison makes anomaly obvious — no calculation needed' },
        { stage:'3 · Payment decision',
          action:'Sees Pay now + Schedule · decides to schedule for payday (25 May)',
          emotion:'In control — payment on her terms',
          pain:'Unsure if scheduled payment will go through',
          opp:'"Will auto-pay on selected date" confirmation with exact amount + bank shown' },
        { stage:'4 · Auto-pay prompt',
          action:'After confirming · sees "Switch to auto-pay? Save 2 taps next month"',
          emotion:'Curious — considers setting up recurring',
          pain:'Worried about auto-pay taking wrong amount',
          opp:'"Auto-pay uses the exact bill amount each month — never more" reassurance' },
        { stage:'5 · Confirmation',
          action:'Scheduled · receipt saved · next bill estimate "~14 Jun 2026"',
          emotion:'Satisfied — done in under 2 minutes',
          pain:'Wants to know when EDL confirms',
          opp:'"EDL updates within 1–2 working days — you\'ll be notified when confirmed"' },
      ]} />
  );
}

// ─── Open Questions ──────────────────────────────────────────────
function PubOpenQuestions() {
  const groups = [
    { name:'A · On the family system', qs:[
      'Is the parent approval flow the right level of control, or does it create too much friction for everyday use?',
      'How should the app handle divorced or separated parents where guardianship is contested or shared?',
      'Should 14–15 year olds have more independence than the current design allows?',
    ]},
    { name:'B · On accessibility', qs:[
      'Is simplified mode enough for very elderly users, or does this need to be a completely separate app experience with its own onboarding?',
      'Should Lanka Seva have a USSD fallback (*123# style) for citizens with no smartphone at all?',
      'Is the Sinhala/Tamil implementation sufficient, or does the entire UX logic need to change for complex scripts?',
    ]},
    { name:'C · On payments and QR', qs:[
      'GovPay currently only supports bank accounts. When cards are added, how does the payment selection UX change?',
      'Should the fuel quota system be visible to all users or only to registered vehicle owners?',
      'How should the app handle payments for users in areas with no LankaQR-enabled merchants?',
    ]},
    { name:'D · On government services', qs:[
      'Which services did we miss that Sri Lankan citizens actually need most urgently?',
      'How should the app handle services that differ significantly between provinces?',
      'Should Lanka Seva serve Sri Lankan citizens living abroad — the diaspora use case?',
    ]},
    { name:'E · On trust and adoption', qs:[
      'Would Sri Lankan citizens actually trust a government app with their NIC, passport, and bank account details? What would build that trust?',
      'How do you design trust for a demographic that has had negative experiences with government digital services in the past?',
      'What would make a government official recommend this app to citizens — what would they need to see?',
    ]},
  ];
  return (
    <div className="pub-grid-2" style={{ gap: 24, alignContent:'start' }}>
      {groups.map(g=>(
        <div key={g.name} className="pub-question-group">
          <div className="gname">{g.name}</div>
          <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
            {g.qs.map((q,i)=><div key={i} className="pub-question">{q}</div>)}
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  PubCover, PubFooter, PubSectionHead, PubPage, PubWfRow,
  PubPersonas, PubHMW, PubPrinciples, PubConstraints, PubMetrics, PubCompetitive,
  PubSitemap, PubJourney1, PubJourney2, PubJourney3, PubOpenQuestions,
});
