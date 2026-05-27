// screens-1.jsx — Lanka Seva wireframes
// Groups: Onboarding (O1-O8), Auth (A1-A3), Home (H1-H2),
//         Services (S1-S10), QR Pay (Q1-Q7)

// ═══════════════════════════════════════════════════════════════
// GROUP 1 — ONBOARDING
// ═══════════════════════════════════════════════════════════════

function O1_Language() {
  const opts = [
    { en: 'English', native: 'English', code: 'EN' },
    { en: 'Sinhala', native: 'සිංහල', code: 'SI', sel: true },
    { en: 'Tamil', native: 'தமிழ்', code: 'TA' },
  ];
  return (
    <Phone>
      <div className="wf-body" style={{ paddingTop: 40 }}>
        <div style={{ textAlign: 'center', marginBottom: 18 }}>
          <LSMark size={52} />
          <H size="xl" style={{ marginTop: 10 }}>Lanka Seva</H>
          <Mono>ලංකා සේවා · இலங்கை சேவை</Mono>
        </div>
        <H size="md" style={{ marginBottom: 10 }}>Choose your language</H>
        {opts.map(o => (
          <Box key={o.code} className={"row " + (o.sel ? "accent" : "")}>
            <div className="grow">
              <div className="h-md">{o.native}</div>
              <Mono>{o.en}</Mono>
            </div>
            <Circ size={20}>{o.sel ? '●' : '○'}</Circ>
          </Box>
        ))}
        <Btn>Continue →</Btn>
        <div style={{ textAlign: 'center', marginTop: 6 }}>
          <Mono>Can be changed any time</Mono>
        </div>
      </div>
    </Phone>
  );
}

function O2_Welcome() {
  return (
    <Phone>
      <div className="wf-body" style={{ paddingTop: 24 }}>
        <div className="between" style={{ marginBottom: 12 }}>
          <Mono up>Slide 2 of 3</Mono>
          <Mono>Skip</Mono>
        </div>
        <ImgPh h={180} label="illustration · one app, every govt service" />
        <H size="xl" style={{ marginTop: 14 }}>All your services,<br/>one trusted app.</H>
        <div className="h-sm" style={{ color: '#4a4640', marginTop: 8, lineHeight: 1.4 }}>
          Pay fines, renew licences, check status. No queues. No paperwork.
          Secured by GovPay & LankaQR.
        </div>
        <div className="center" style={{ gap: 6, marginTop: 16 }}>
          <span className="dot" style={{ background: '#c8c4be' }} />
          <span className="dot" style={{ background: '#d97706', width: 10 }} />
          <span className="dot" style={{ background: '#c8c4be' }} />
        </div>
        <Btn style={{ marginTop: 14 }}>Next →</Btn>
      </div>
      <Anno top={120} right={6}>swipeable carousel</Anno>
    </Phone>
  );
}

function O3_NIC() {
  // Step 1: Enter NIC → tap Verify (validates against SL-UDI)
  return (
    <Phone>
      <Header back title="Verify your NIC" />
      <div className="wf-body">
        <Progress steps={3} filled={1} />
        <Mono up style={{ display:'block', marginBottom: 6 }}>Step 1 of 3 — NIC</Mono>
        <H size="md">Enter your NIC number</H>
        <div className="h-tiny mb-3" style={{ marginBottom: 10 }}>We'll check it against SL-UDI before sending any code.</div>
        <Input label="NIC Number" value="200234500123" focus />
        <Box className="brand">
          <Mono>🔒 Checked against the Department of Registration of Persons (DRP).</Mono>
        </Box>
        <Btn style={{ marginTop: 14 }}>Verify NIC →</Btn>
        <div className="h-tiny" style={{ textAlign: 'center', marginTop: 8 }}>
          Encrypted · Ministry of Digital Economy
        </div>
      </div>
      <Anno top={140} right={6}>tap Verify before any OTP is sent</Anno>
    </Phone>
  );
}

function O3b_Phone() {
  // Step 2: NIC verified → show registered phone, allow edit, then send OTP
  return (
    <Phone>
      <Header back title="Confirm your number" />
      <div className="wf-body">
        <Progress steps={3} filled={2} />
        <Mono up style={{ display:'block', marginBottom: 6 }}>Step 2 of 3 — Phone & OTP</Mono>
        <H size="md">Confirm your mobile number</H>
        <div className="h-tiny mb-3" style={{ marginBottom: 10 }}>We'll send a one-time code to this number to complete verification.</div>

        <Mono up style={{ display:'block', margin:'4px 0 4px' }}>Registered mobile</Mono>
        <Box className="row">
          <Swatch>📱</Swatch>
          <div className="grow">
            <div className="h-md">+94 77 234 ····</div>
            <Mono>Linked at DRP since 2019</Mono>
          </div>
          <Mono style={{ color:'#d97706' }}>Edit ✎</Mono>
        </Box>
        <div className="h-tiny" style={{ marginBottom: 8 }}>Not yours? Tap edit to add a different number — we'll re-verify it.</div>

        <Btn>Send OTP to this number →</Btn>
        <Btn className="ghost sm">Use a different number</Btn>
      </div>
      <Anno top={210} right={6}>edit lets user add a new phone</Anno>
    </Phone>
  );
}

function O3c_OTP() {
  // Step 3: OTP entry — only this completes verification
  return (
    <Phone>
      <Header back title="Enter OTP" />
      <div className="wf-body">
        <Progress steps={3} filled={2} />
        <Mono up style={{ display:'block', marginBottom: 6 }}>Step 3 of 3 — Confirm code</Mono>
        <H size="md">Enter the 6-digit code</H>
        <Mono style={{ marginBottom: 12 }}>Sent to +94 77 234 ···· · valid 5 min</Mono>
        <div className="flex gap-2 mb-3" style={{ marginTop: 6, justifyContent:'space-between' }}>
          {[2,0,1,4,'',''].map((d,i)=>(
            <div key={i} className="box" style={{ width: 36, height: 42, padding: 0, display:'flex', alignItems:'center', justifyContent:'center', margin: 0, fontWeight: 700,
              ...(i===4?{ borderWidth:2.2, background:'#fcfaf5' }:{}) }}>{d || (i===4?'|':'')}</div>
          ))}
        </div>
        <div className="flex-b mb-3">
          <Mono>Didn't get it?</Mono>
          <Mono style={{ color:'#8a8680' }}>Resend in 0:42</Mono>
        </div>
        <Box className="brand">
          <Mono>Wrong number? <span style={{ color:'#d97706' }}>Go back & edit</span></Mono>
        </Box>
        <Btn>Verify & continue →</Btn>
        <div className="h-tiny" style={{ textAlign:'center', marginTop: 6 }}>
          Account verified only after correct OTP
        </div>
      </div>
    </Phone>
  );
}

function O3d_CreatePassword() {
  // After OTP verified — set the password used to sign in next time
  return (
    <Phone>
      <Header back title="Create password" />
      <div className="wf-body">
        <Box className="accent">
          <div className="flex-c">
            <Circ size={22} fill="#d8f0e2" style={{ borderColor:'#1e9459', color:'#1e9459' }}>✓</Circ>
            <div className="grow">
              <div className="h-md">OTP confirmed</div>
              <Mono>+94 77 234 ····</Mono>
            </div>
          </div>
        </Box>

        <H size="md" style={{ marginTop: 10 }}>Set a password</H>
        <div className="h-tiny mb-3" style={{ marginBottom: 10 }}>You'll use this to sign back in. Keep it private.</div>

        <Input label="New password" value="••••••••••" focus />
        <Input label="Confirm password" value="••••••••••" />

        <Mono up style={{ display:'block', marginBottom: 4 }}>Strength</Mono>
        <div className="flex gap-2 mb-3">
          <div style={{ flex:1, height:6, border:'1.5px solid #1a1815', borderRadius:3, background:'#1e9459' }} />
          <div style={{ flex:1, height:6, border:'1.5px solid #1a1815', borderRadius:3, background:'#1e9459' }} />
          <div style={{ flex:1, height:6, border:'1.5px solid #1a1815', borderRadius:3, background:'#1e9459' }} />
          <div style={{ flex:1, height:6, border:'1.5px solid #1a1815', borderRadius:3, background:'#fcfaf5' }} />
        </div>
        <div className="h-tiny" style={{ lineHeight: 1.6, marginBottom: 8 }}>
          <span className="tick">✓</span> 8+ characters &nbsp;
          <span className="tick">✓</span> Upper + lower<br/>
          <span className="tick">✓</span> A number &nbsp;
          <span style={{ color:'#8a8680' }}>○</span> A symbol (recommended)
        </div>

        <Btn>Save password →</Btn>
        <div className="h-tiny" style={{ textAlign:'center', marginTop: 6 }}>
          You can enable Face ID / Fingerprint in the next step
        </div>
      </div>
    </Phone>
  );
}

function O4_AutoFillPreview() {
  return (
    <Phone>
      <Header back title="Details fetched" />
      <div className="wf-body">
        <Box className="accent">
          <div className="flex-c">
            <Circ size={22}>✓</Circ>
            <div className="grow">
              <div className="h-md">NIC verified</div>
              <Mono>SL-UDI · Department of Registration</Mono>
            </div>
          </div>
        </Box>
        <H size="sm" style={{ marginTop: 8, marginBottom: 6 }}>We pre-filled:</H>
        <Input label="Full Name" value="Sampath K. Perera" filled />
        <Input label="Date of Birth" value="14 Aug 1968" filled />
        <Input label="Address" value="No. 42, Temple Rd, Maharagama" filled />
        <Input label="District" value="Colombo" filled />
        <div className="h-tiny" style={{ marginBottom: 8 }}>Tap any 🔒 field to edit if details have changed.</div>
        <Btn>Looks good →</Btn>
      </div>
      <Anno top={200} right={4} style={{ maxWidth: 110 }}>auto-fill pattern (green tint + lock)</Anno>
    </Phone>
  );
}

function O5_Profile() {
  return (
    <Phone>
      <Header back title="Profile setup" />
      <div className="wf-body">
        <Progress steps={5} filled={4} />
        <div className="center" style={{ flexDirection: 'column', marginBottom: 12 }}>
          <Circ size={64} style={{ borderStyle: 'dashed' }}>+</Circ>
          <Mono style={{ marginTop: 4 }}>Tap to add photo</Mono>
        </div>
        <Input label="Preferred name" value="Sampath" filled />
        <Input label="District" value="Colombo" filled />
        <Input label="Household type" placeholder="Select ▾" />
        <Box className="brand" style={{ marginTop: 4 }}>
          <Mono up>Why we ask</Mono>
          <div className="h-tiny" style={{ marginTop: 2 }}>Helps show Samurdhi & welfare eligibility.</div>
        </Box>
        <Btn>Continue →</Btn>
      </div>
    </Phone>
  );
}

function O6_Bank() {
  return (
    <Phone>
      <Header back title="Add bank account" right={<Mono>Skip</Mono>} />
      <div className="wf-body">
        <Progress steps={5} filled={4} />
        <H size="md">Link a bank to pay & receive</H>
        <Mono style={{ marginBottom: 8 }}>You can add more later</Mono>
        <div className="grid-3 mb-3">
          {['BOC','PB','HNB','Comm','Samp','NTB','DFCC','NDB','+18'].map(b=>(
            <Box key={b} className="tight" style={{ textAlign: 'center', padding: '12px 4px', margin: 0 }}>
              <Circ size={26} style={{ margin: '0 auto 4px' }}>{b[0]}</Circ>
              <Mono tiny>{b}</Mono>
            </Box>
          ))}
        </div>
        <Input label="Account no." placeholder="Selected bank: BOC" />
        <Input label="Account holder" value="Sampath K. Perera" filled />
        <div className="h-tiny" style={{ marginBottom: 6 }}>We'll send an OTP to verify ownership.</div>
        <Btn>Verify & link →</Btn>
        <Btn className="ghost sm">Skip for now</Btn>
      </div>
    </Phone>
  );
}

function O7_Permissions() {
  const perms = [
    { ic: '🔔', t: 'Notifications', s: 'Bill reminders, payment confirmations' },
    { ic: '◉', t: 'Location', s: 'Find nearby offices · Optional' },
    { ic: '☻', t: 'Biometric login', s: 'Face ID / Fingerprint for faster sign-in' },
  ];
  return (
    <Phone>
      <Header back title="Permissions" />
      <div className="wf-body">
        <H size="md">Help us serve you better</H>
        <Mono style={{ marginBottom: 10 }}>Each one is optional</Mono>
        {perms.map(p => (
          <Box key={p.t} className="row">
            <Circ size={32}>{p.ic}</Circ>
            <div className="grow">
              <div className="h-md">{p.t}</div>
              <div className="h-tiny">{p.s}</div>
            </div>
            <div className="box tight" style={{ background:'#1e9459', width: 30, padding: 2, margin: 0 }}>
              <span style={{ background:'white', width:14, height:14, borderRadius:7, display:'block', marginLeft:'auto' }} />
            </div>
          </Box>
        ))}
        <Btn>Allow & continue →</Btn>
      </div>
    </Phone>
  );
}

function O8_Done() {
  return (
    <Phone>
      <div className="wf-body center" style={{ flexDirection: 'column', textAlign: 'center', justifyContent:'center' }}>
        <Circ size={80} fill="#d8f0e2" style={{ borderColor: '#1e9459', borderWidth: 2.5 }}>
          <span style={{ fontSize: 32, color: '#1e9459' }}>✓</span>
        </Circ>
        <H size="xl" style={{ marginTop: 16 }}>You're all set,<br/>Sampath.</H>
        <div className="h-sm" style={{ color:'#4a4640', marginTop: 8, maxWidth: 220 }}>
          Your Lanka Seva ID is <b>LS-2026-48312</b>. Keep it safe — it works everywhere.
        </div>
        <Box className="brand" style={{ marginTop: 14, width: '100%' }}>
          <Mono up>Tip</Mono>
          <div className="h-sm" style={{ marginTop: 2 }}>Try paying a traffic fine in under 30 sec.</div>
        </Box>
        <Btn style={{ width: '100%' }}>Enter Lanka Seva →</Btn>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP 2 — AUTHENTICATION
// ═══════════════════════════════════════════════════════════════

function A1_LoginPhone() {
  return (
    <Phone>
      <div className="wf-body" style={{ paddingTop: 28 }}>
        <div style={{ textAlign:'center', marginBottom: 18 }}>
          <LSMark size={52} />
          <H size="lg" style={{ marginTop: 8 }}>Welcome back</H>
          <Mono>Sign in with NIC & password</Mono>
        </div>
        <Input label="NIC Number" value="200234500123" filled />
        <Input label="Password" value="••••••••••" focus />
        <div className="flex-b mb-3">
          <Mono style={{ color:'#d97706' }}>biometric replaces password</Mono>
          <Mono style={{ color:'#d97706' }}>Forgot password?</Mono>
        </div>
        <Btn>Sign in →</Btn>

        <div className="flex-c" style={{ margin:'12px 0' }}>
          <div style={{ flex:1, borderTop:'1.5px dashed #c8c4be' }} />
          <Mono>or</Mono>
          <div style={{ flex:1, borderTop:'1.5px dashed #c8c4be' }} />
        </div>

        <Btn className="ghost" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap: 8 }}>
          <span style={{ fontSize: 18 }}>☻</span> Use biometric · Face ID
        </Btn>

        <div className="center" style={{ marginTop: 14, gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background:'#d97706', display:'inline-block' }} />
          <Mono style={{ color:'#d97706', fontWeight: 700 }}>Sign in as a family member</Mono>
        </div>
      </div>
    </Phone>
  );
}

function A2_Biometric() {
  return (
    <Phone>
      <div className="wf-body center" style={{ flexDirection:'column', justifyContent: 'center', textAlign:'center' }}>
        <H size="md">Sign in</H>
        <Circ size={100} style={{ borderStyle:'dashed', marginTop: 16, fontSize: 36 }}>☻</Circ>
        <Mono style={{ marginTop: 8 }}>Look at your phone</Mono>
        <H size="lg" style={{ marginTop: 18 }}>Welcome back,<br/>Anjali.</H>
        <Div />
        <Mono>Use PIN instead</Mono>
      </div>
      <Anno top={180} right={6}>Face ID / Fingerprint</Anno>
    </Phone>
  );
}

function A3_ForgotPin() {
  return (
    <Phone>
      <Header back title="Reset PIN" />
      <div className="wf-body">
        <H size="md">We need to re-verify you</H>
        <Mono style={{ marginBottom: 10 }}>Three quick steps</Mono>
        {[
          { n:1, t:'Confirm NIC', d:'200234500123', done:true },
          { n:2, t:'OTP to registered mobile', d:'+94 77 ··· 5678', done:false, cur:true },
          { n:3, t:'Set a new 6-digit PIN', d:'', done:false },
        ].map(s=>(
          <Box key={s.n} className="row">
            <Circ size={26} fill={s.done?'#d8f0e2':s.cur?'#fde8c4':'#f1ede4'} style={{ borderColor:s.done?'#1e9459':s.cur?'#d97706':'#1a1815'}}>
              {s.done?'✓':s.n}
            </Circ>
            <div className="grow">
              <div className="h-md">{s.t}</div>
              {s.d && <Mono>{s.d}</Mono>}
            </div>
            {s.cur && <Pill className="amber">CURRENT</Pill>}
          </Box>
        ))}
        <Btn>Send OTP →</Btn>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP 3 — HOME
// ═══════════════════════════════════════════════════════════════

function H1_Home() {
  return (
    <Phone>
      <div className="wf-header">
        <LSMark size={22} />
        <div className="grow">
          <div className="h-md">Good morning, Sampath</div>
          <Mono>Lanka Seva</Mono>
        </div>
        <div className="h-icon">🔔</div>
        <Circ size={26}>SP</Circ>
      </div>
      <div className="wf-body tight" style={{ paddingBottom: 8 }}>
        <Box className="brand-dark">
          <Mono up style={{ color: '#cbd9ee' }}>Your status</Mono>
          <div className="h-lg" style={{ color:'white', marginTop: 2 }}>2 items need attention</div>
          <div className="flex gap-2 mt-3" style={{ flexWrap:'wrap' }}>
            <Pill className="amber-fill">Pay fine · Rs. 2,515</Pill>
            <Pill className="amber-fill">Renew licence (14d)</Pill>
          </div>
        </Box>

        <Mono up style={{ marginTop: 4, display:'block', marginBottom: 4 }}>Bills due</Mono>
        <Box className="row tight">
          <Swatch>⚡</Swatch>
          <div className="grow"><div className="h-sm" style={{ fontWeight:600 }}>EDL Electricity</div><Mono>Due in 3 days</Mono></div>
          <div className="h-md">Rs. 3,450</div>
        </Box>
        <Box className="row tight">
          <Swatch>💧</Swatch>
          <div className="grow"><div className="h-sm" style={{ fontWeight:600 }}>NWSDB Water</div><Mono>Due in 8 days</Mono></div>
          <div className="h-md">Rs. 1,280</div>
        </Box>

        <Mono up style={{ marginTop: 8, display:'block', marginBottom: 4 }}>Quick actions</Mono>
        <div className="grid-4 mb-3">
          {[
            ['🚓','Fine'],['⚡','Bills'],['◔','Status'],['QR','Scan']
          ].map(([i,l])=>(
            <Box key={l} className="tight" style={{ textAlign:'center', padding:'8px 4px', margin: 0 }}>
              <div style={{ fontSize: 16 }}>{i}</div>
              <Mono tiny>{l}</Mono>
            </Box>
          ))}
        </div>

        <Mono up style={{ display:'block', marginBottom: 4 }}>My services · saved</Mono>
        <Row left={<Swatch fill="#fde8c4">🚗</Swatch>} title="Revenue Licence (CAB-2245)"
          sub="Expires 31 Dec 2026" badge={<Pill className="amber">14d</Pill>} />
        <Row left={<Swatch fill="#d8e3f5">📋</Swatch>} title="Birth cert. application"
          sub="Submitted 12 May" badge={<Pill className="blue">REVIEW</Pill>} />
      </div>
      <TabBar active="home" />
    </Phone>
  );
}

function H2_Notifications() {
  const items = [
    { ic:'✓', t:'Payment confirmed', s:'Traffic fine · Rs. 2,515', tm:'2m', c:'#1e9459', unread:true },
    { ic:'!', t:'Revenue licence expires in 14 days', s:'Renew now to avoid Rs. 1,000 surcharge', tm:'1h', c:'#d97706', unread:true },
    { ic:'⚡', t:'EDL bill due in 3 days', s:'Rs. 3,450 · Acct 0042819', tm:'4h', c:'#d97706' },
    { ic:'QR', t:'QR payment sent', s:'Cargills Food City · Rs. 1,890', tm:'Yest', c:'#d97706' },
    { ic:'♡', t:'Aswesuma credited', s:'Rs. 15,000 · May 2026', tm:'2d', c:'#7b35c4' },
    { ic:'⚠', t:'New device login detected', s:'iPhone 15 · Colombo · just now', tm:'3d', c:'#c43a48' },
  ];
  return (
    <Phone>
      <Header back title="Notifications" right={<Mono>Mark all</Mono>} />
      <div className="wf-body tight">
        <div className="flex gap-2 mb-3" style={{ overflow:'auto' }}>
          {['All','Payments','Apps','Reminders','Alerts'].map((t,i)=>(
            <Pill key={t} className={i===0?'amber-fill':''}>{t}</Pill>
          ))}
        </div>
        {items.map((n,i)=>(
          <Box key={i} className="row tight" style={{ borderLeftWidth: 4, borderLeftColor: n.c }}>
            <Circ size={28} style={{ borderColor: n.c, color: n.c }}>{n.ic}</Circ>
            <div className="grow">
              <div className="flex-b">
                <div className="h-sm" style={{ fontWeight:600 }}>{n.t}</div>
                {n.unread && <span className="dot" style={{ background:'#d97706' }} />}
              </div>
              <Mono>{n.s}</Mono>
            </div>
            <Mono tiny>{n.tm}</Mono>
          </Box>
        ))}
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP 4 — SERVICES NAVIGATION (S1-S3)
// ═══════════════════════════════════════════════════════════════

const SECTORS = [
  { i:'🛡', t:'Identity & Reg.', n:'12 services', c:'#d8e3f5' },
  { i:'🚗', t:'Transport', n:'18 services', c:'#fde8c4' },
  { i:'♥', t:'Health', n:'9 services', c:'#ffd8de' },
  { i:'🎓', t:'Education', n:'14 services', c:'#d8f0e2' },
  { i:'💼', t:'Employment', n:'7 services', c:'#fff0c8' },
  { i:'🏠', t:'Housing & Land', n:'11 services', c:'#e8e6e3' },
  { i:'⚖', t:'Legal', n:'8 services', c:'#cfd9e8' },
  { i:'✋', t:'Social Welfare', n:'10 services', c:'#e8dcf2' },
];

function S1_Services() {
  return (
    <Phone>
      <Header title="Services" lang="EN" />
      <div className="wf-body tight">
        <div className="input mb-3" style={{ background:'#f4f3f1', marginBottom: 10 }}>
          <span style={{ fontSize:11 }}>🔍</span>
          <span className="ph">Search services…</span>
        </div>
        <Mono up style={{ display:'block', marginBottom: 6 }}>Browse by sector</Mono>
        <div className="grid-2">
          {SECTORS.map(s=>(
            <Box key={s.t} className="tight" style={{ padding:'10px 8px', margin: 0 }}>
              <div className="flex-c">
                <Swatch fill={s.c}>{s.i}</Swatch>
                <div className="grow" style={{ minWidth:0 }}>
                  <div className="h-sm" style={{ fontWeight:600 }}>{s.t}</div>
                  <Mono tiny>{s.n}</Mono>
                </div>
                <span className="chev">›</span>
              </div>
            </Box>
          ))}
        </div>
        <Mono up style={{ display:'block', margin: '10px 0 4px' }}>Bills & payments</Mono>
        <div className="flex gap-2" style={{ overflowX:'auto', paddingBottom: 4 }}>
          {[
            ['⚡','EDL'],['💧','NWSDB'],['☎','SLTM'],['📱','Dialog'],['💰','IRD'],['🚙','Toll']
          ].map(([i,n])=>(
            <div key={n} style={{ textAlign:'center', flexShrink: 0, width: 50 }}>
              <Circ size={36}>{i}</Circ>
              <Mono tiny style={{ display:'block', marginTop:2 }}>{n}</Mono>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="serv" />
    </Phone>
  );
}

function S2_Sector() {
  const services = [
    { t:'Driving Licence — New', s:'Age 17+ · Rs. 620', av:'amber', l:'Partial' },
    { t:'Driving Licence Renewal', s:'Same day available', av:'amber', l:'Partial' },
    { t:'Vehicle Revenue Licence', s:'Rs. 3,000–25,000+', av:'green', l:'Full online' },
    { t:'Traffic Fine Payment', s:'GovPay · Rs. 15 fee', av:'green', l:'Full online' },
    { t:'Vehicle Registration', s:'3–7 days', av:'gray', l:'Info only' },
  ];
  return (
    <Phone>
      <Header back title="Transport" />
      <div className="wf-body tight">
        <Box className="amber-dark">
          <div className="flex-c">
            <Swatch size="lg" fill="#fff" style={{ color:'#d97706' }}>🚗</Swatch>
            <div className="grow">
              <div className="h-lg" style={{ color:'white' }}>Transport & Vehicles</div>
              <Mono style={{ color:'#fde8c4' }}>DMT · 18 services</Mono>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Pill className="amber-fill" style={{ background:'white', color:'#d97706' }}>2 saved</Pill>
            <Pill className="amber-fill" style={{ background:'white', color:'#d97706' }}>1 due soon</Pill>
          </div>
        </Box>
        <Mono up style={{ display:'block', margin:'6px 0 4px' }}>Available services</Mono>
        {services.map((sv,i)=>(
          <Row key={i} left={<Swatch fill="#fde8c4">{i+1}</Swatch>} title={sv.t} sub={sv.s}
            badge={<Pill className={sv.av==='green'?'green':sv.av==='amber'?'amber':''}>
              <span className="dotx" />{sv.l}</Pill>} />
        ))}
      </div>
      <TabBar active="serv" />
    </Phone>
  );
}

function S3_ServiceDetail() {
  return (
    <Phone>
      <Header back title="Traffic Fine Payment" right={<Mono>?</Mono>} />
      <div className="wf-body tight">
        <Box className="row">
          <Swatch size="lg" fill="#fde8c4">🚓</Swatch>
          <div className="grow">
            <div className="h-md">Traffic Fine Payment</div>
            <Mono>Sri Lanka Police · DMT</Mono>
            <Pill className="green" style={{ marginTop: 4 }}><span className="dotx"/>Full online</Pill>
          </div>
        </Box>
        <Mono up style={{ display:'block', marginTop: 6, marginBottom: 4 }}>You'll need</Mono>
        <Box className="tight">
          <div className="h-sm"><span className="tick">✓</span> NIC (pre-filled)</div>
          <div className="h-sm"><span className="tick">✓</span> Fine reference number</div>
          <div className="h-sm"><span className="tick">✓</span> Linked bank account</div>
        </Box>
        <div className="grid-3" style={{ marginTop: 4 }}>
          <Box className="tight" style={{ textAlign:'center', margin: 0 }}><Mono tiny>Fee</Mono><div className="h-sm">Rs. 15</div></Box>
          <Box className="tight" style={{ textAlign:'center', margin: 0 }}><Mono tiny>Time</Mono><div className="h-sm">Instant</div></Box>
          <Box className="tight" style={{ textAlign:'center', margin: 0 }}><Mono tiny>Online</Mono><div className="h-sm">100%</div></Box>
        </div>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>How it works</Mono>
        <div className="h-sm" style={{ lineHeight: 1.5 }}>
          <b>1.</b> Enter fine reference<br/>
          <b>2.</b> Confirm via OTP / biometric<br/>
          <b>3.</b> Get official receipt
        </div>
        <Box className="brand" style={{ marginTop: 8 }}>
          <Mono>ℹ NIC details pre-filled from SL-UDI</Mono>
        </Box>
        <Btn>Start payment →</Btn>
        <Btn className="ghost sm">Download form (PDF)</Btn>
        <div className="h-tiny" style={{ textAlign:'center', marginTop: 4 }}>
          🔒 Secured by LankaPay · CBSL regulated
        </div>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP 5 — PAYMENT FLOW (S4-S6)
// ═══════════════════════════════════════════════════════════════

function S4_PayStep1() {
  return (
    <Phone>
      <Header back title="Pay fine · Step 1 of 3" />
      <div className="wf-body tight">
        <Progress steps={3} filled={1} />
        <H size="md">Enter your details</H>
        <Input label="NIC" value="200234500123" filled />
        <Input label="Full name" value="Sampath K. Perera" filled />
        <Input label="Mobile" value="+94 77 234 5678" filled />
        <div className="h-tiny" style={{ color:'#1a6645', marginTop:-4, marginBottom: 8 }}>Auto-filled from your NIC · Tap 🔒 to edit</div>
        <Input label="Fine reference no." placeholder="e.g. TFP-2026-XXXXX" focus />
        <Box className="accent">
          <div className="flex-b">
            <div>
              <Mono up>Fine summary</Mono>
              <div className="h-md" style={{ marginTop: 2 }}>Mirror tint violation</div>
              <Mono>Issued 12 May 2026 · Colombo 03</Mono>
            </div>
            <H size="lg">Rs. 2,500</H>
          </div>
        </Box>
        <Btn>Continue →</Btn>
      </div>
      <Anno top={140} right={4}>auto-fill from NIC</Anno>
    </Phone>
  );
}

function S5_PayStep2() {
  return (
    <Phone>
      <Header back title="Pay fine · Step 2 of 3" />
      <div className="wf-body tight">
        <Progress steps={3} filled={2} />
        <H size="md">Review & pay</H>
        <Mono up style={{ display:'block', margin:'6px 0 4px' }}>Pay from</Mono>
        <Box className="row">
          <Swatch>BOC</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Bank of Ceylon</div>
            <Mono>···· 4821 · default</Mono>
          </div>
          <Mono style={{ color:'#d97706' }}>Change</Mono>
        </Box>
        <Mono up style={{ display:'block', margin:'6px 0 4px' }}>Amount</Mono>
        <Box>
          <div className="flex-b">
            <Mono>Fine</Mono><span className="h-sm">Rs. 2,500</span>
          </div>
          <div className="flex-b">
            <Mono>GovPay fee</Mono><span className="h-sm">Rs. 15</span>
          </div>
          <Div />
          <div className="flex-b">
            <div className="h-md">Total</div><H size="lg">Rs. 2,515</H>
          </div>
        </Box>
        <Box className="brand">
          <Mono>🔒 You'll confirm with OTP / Face ID next</Mono>
        </Box>
        <Btn>Confirm payment →</Btn>
        <div className="h-tiny" style={{ textAlign:'center' }}>
          GovPay · LankaPay CEFTS · CBSL regulated
        </div>
      </div>
    </Phone>
  );
}

function S6_PaySuccess() {
  return (
    <Phone>
      <Header back title="Payment complete" />
      <div className="wf-body center" style={{ flexDirection:'column', textAlign:'center', paddingTop: 18 }}>
        <Circ size={68} fill="#d8f0e2" style={{ borderColor:'#1e9459', borderWidth: 2.5 }}>
          <span style={{ fontSize:28, color:'#1e9459' }}>✓</span>
        </Circ>
        <H size="xl" style={{ marginTop: 12 }}>Payment Successful</H>
        <Mono>23 May 2026 · 09:34</Mono>
        <Box style={{ width: '100%', marginTop: 12, textAlign:'left' }}>
          <div className="flex-b">
            <Mono up>Official Receipt</Mono>
            <Pill className="green">VERIFIED</Pill>
          </div>
          <Div />
          <div className="flex-b mb-2"><Mono>Ref no.</Mono><span className="h-sm">GP-2026-184429</span></div>
          <div className="flex-b mb-2"><Mono>Paid to</Mono><span className="h-sm">Sri Lanka Police</span></div>
          <div className="flex-b mb-2"><Mono>Amount</Mono><H size="md">Rs. 2,515</H></div>
          <Div />
          <div className="flex-c gap-2">
            <QR size={48} />
            <div className="grow">
              <Mono tiny>Scan to verify</Mono>
              <Mono tiny>SLPD seal</Mono>
            </div>
          </div>
        </Box>
        <div className="flex gap-2" style={{ width:'100%', marginTop: 8 }}>
          <Btn className="ghost" style={{ flex:1 }}>Home</Btn>
          <Btn style={{ flex:1 }}>Save receipt</Btn>
        </div>
      </div>
      <Anno top={210} right={4}>"feels like paper" receipt</Anno>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP 6 — BILLS (S7-S10)
// ═══════════════════════════════════════════════════════════════

function S7b_AddBillAccount() {
  const providers = [
    { i:'⚡', n:'EDL', sub:'Electricity' },
    { i:'💧', n:'NWSDB', sub:'Water' },
    { i:'⚡', n:'LECO', sub:'Electricity · CMB' },
    { i:'☎', n:'SLTM', sub:'Broadband' },
    { i:'📱', n:'Dialog', sub:'Mobile' },
    { i:'📱', n:'Mobitel', sub:'Mobile' },
    { i:'💰', n:'IRD', sub:'Tax' },
    { i:'🚙', n:'ETC', sub:'Expressway' },
    { i:'⚖', n:'Court', sub:'Fees' },
  ];
  return (
    <Phone>
      <Header back title="Add bill account" />
      <div className="wf-body tight">
        <H size="md">Choose a provider</H>
        <div className="input mb-3" style={{ marginTop: 4 }}>
          <span>🔍</span><span className="ph">Search 18 providers…</span>
        </div>
        <div className="grid-3 mb-3">
          {providers.map(p=>(
            <Box key={p.n} className="tight" style={{ textAlign:'center', padding:'10px 4px', margin: 0,
              ...(p.n==='EDL' ? { borderColor:'#d97706', background:'#fde8c4' } : {}) }}>
              <Circ size={28} style={{ margin:'0 auto 4px' }}>{p.i}</Circ>
              <div className="h-sm" style={{ fontWeight:600, fontSize: 11 }}>{p.n}</div>
              <Mono tiny>{p.sub}</Mono>
            </Box>
          ))}
        </div>

        <Mono up style={{ display:'block', margin:'4px 0 4px' }}>EDL · Electricity</Mono>
        <Input label="Consumer account no." placeholder="e.g. 0042-819" focus />
        <Input label="Account holder" value="Sampath K. Perera" filled />

        <Box className="brand">
          <Mono>📨 We'll verify ownership with EDL before saving · takes ~10 sec</Mono>
        </Box>

        <div className="flex-c mt-3">
          <div className="box tight" style={{ background:'#1e9459', width: 36, padding: 3, margin: 0 }}>
            <span style={{ background:'white', width:14, height:14, borderRadius:7, display:'block', marginLeft:'auto' }} />
          </div>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Remind me before due date</div>
            <Mono>7 days · 1 day</Mono>
          </div>
        </div>
        <div className="flex-c mt-3">
          <div className="box tight" style={{ background:'#c8c4be', width: 36, padding: 3, margin: 0 }}>
            <span style={{ background:'white', width:14, height:14, borderRadius:7, display:'block' }} />
          </div>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Auto-pay when due</div>
            <Mono>Optional · explicit confirm each time</Mono>
          </div>
        </div>

        <Btn>Verify & save →</Btn>
      </div>
      <Anno top={56} right={4}>same pattern as Add Bank</Anno>
    </Phone>
  );
}

function S7_BillsHub() {
  const bills = [
    { p:'EDL', i:'⚡', n:'Electricity', a:'0042-819', amt:'Rs. 3,450', due:'3d', urg:true },
    { p:'NWSDB', i:'💧', n:'Water', a:'117-4490', amt:'Rs. 1,280', due:'8d' },
    { p:'SLTM', i:'☎', n:'Broadband', a:'011-285····', amt:'Rs. 2,490', due:'12d' },
    { p:'Dialog', i:'📱', n:'Mobile postpaid', a:'+94 77 ···', amt:'Rs. 990', due:'19d' },
  ];
  return (
    <Phone>
      <Header back title="Bills & Payments" right={<div className="h-icon">+</div>} />
      <div className="wf-body tight">
        <Mono up style={{ display:'block', marginBottom: 4 }}>My bills</Mono>
        {bills.map(b=>(
          <Box key={b.p} className="row">
            <Swatch fill="#f1ede4">{b.i}</Swatch>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight:600 }}>{b.n} · {b.p}</div>
              <Mono>{b.a} · due in {b.due}</Mono>
            </div>
            <div style={{ textAlign:'right' }}>
              <div className="h-md">{b.amt}</div>
              <Btn className="sm" style={{ margin: 0, padding:'3px 10px' }}>Pay</Btn>
            </div>
          </Box>
        ))}
        <Btn className="ghost sm">+ Add bill account</Btn>
        <div className="h-tiny" style={{ textAlign:'center', marginTop: 4, color:'#d97706' }}>View payment history →</div>
      </div>
      <TabBar active="serv" />
    </Phone>
  );
}

function S8_EDLDetail() {
  return (
    <Phone>
      <Header back title="Electricity · EDL" />
      <div className="wf-body tight">
        <Box className="row">
          <Swatch size="lg" fill="#fff0c8">⚡</Swatch>
          <div className="grow">
            <div className="h-md">EDL Account 0042-819</div>
            <Mono>No. 42, Temple Rd, Maharagama</Mono>
            <Mono>Apr 14 – May 13, 2026</Mono>
          </div>
        </Box>
        <Mono up style={{ display:'block', margin:'6px 0 4px' }}>Bill breakdown</Mono>
        <Box>
          <div className="flex-b mb-2"><Mono>Units used</Mono><span className="h-sm">142 kWh</span></div>
          <div className="flex-b mb-2"><Mono>Unit charges</Mono><span className="h-sm">Rs. 2,840</span></div>
          <div className="flex-b mb-2"><Mono>Fixed charge</Mono><span className="h-sm">Rs. 540</span></div>
          <div className="flex-b mb-2"><Mono>VAT (18%)</Mono><span className="h-sm">Rs. 70</span></div>
          <Div />
          <div className="flex-b">
            <div className="h-md">Total due</div>
            <H size="xl" style={{ color:'#d97706' }}>Rs. 3,450</H>
          </div>
          <Pill className="amber" style={{ marginTop:4 }}>Due in 3 days · 26 May</Pill>
        </Box>
        <Mono up style={{ display:'block', margin:'6px 0 4px' }}>Last 6 months</Mono>
        <div className="flex" style={{ alignItems:'flex-end', height: 50, gap: 4, padding: '4px 6px', border: '1.5px solid #1a1815', borderRadius: 6 }}>
          {[28,34,30,42,38,46].map((v,i)=>(
            <div key={i} style={{ flex:1, background: i===5 ? '#d97706' : '#c8c4be', height: `${v*2}%`, borderRadius: 2 }} />
          ))}
        </div>
        <Btn>Pay Rs. 3,450 now →</Btn>
        <Btn className="ghost sm">Set reminder</Btn>
      </div>
    </Phone>
  );
}

function S9_BillSuccess() {
  return (
    <Phone>
      <Header back title="Bill paid" />
      <div className="wf-body center" style={{ flexDirection:'column', textAlign:'center', paddingTop: 18 }}>
        <Circ size={68} fill="#d8f0e2" style={{ borderColor:'#1e9459', borderWidth: 2.5 }}>
          <span style={{ fontSize:28, color:'#1e9459' }}>✓</span>
        </Circ>
        <H size="xl" style={{ marginTop: 12 }}>Bill Paid</H>
        <Mono>EDL · 23 May 2026 · 09:38</Mono>
        <Box style={{ width: '100%', marginTop: 12, textAlign:'left' }}>
          <div className="flex-b mb-2"><Mono>Provider</Mono><span className="h-sm">EDL Lanka</span></div>
          <div className="flex-b mb-2"><Mono>Account</Mono><span className="h-sm">0042-819</span></div>
          <div className="flex-b mb-2"><Mono>Amount</Mono><H size="md">Rs. 3,450</H></div>
          <div className="flex-b mb-2"><Mono>Ref</Mono><span className="h-sm">GP-2026-184433</span></div>
          <div className="flex-b"><Mono>Next bill</Mono><span className="h-sm">~14 Jun</span></div>
        </Box>
        <Box className="brand" style={{ width:'100%' }}>
          <Mono>💡 Switch on auto-pay? Save 2 taps next time</Mono>
        </Box>
        <div className="flex gap-2" style={{ width:'100%' }}>
          <Btn className="ghost" style={{ flex:1 }}>Home</Btn>
          <Btn style={{ flex:1 }}>Receipt</Btn>
        </div>
      </div>
    </Phone>
  );
}

function S10_Search() {
  return (
    <Phone>
      <Header back title="" right={<Mono>Cancel</Mono>} />
      <div className="wf-body tight">
        <div className="input focus mb-3">
          <span style={{ fontSize: 11 }}>🔍</span>
          <span className="val">fine</span>
          <span style={{ color:'#8a8680' }}>|</span>
        </div>
        <Mono up style={{ display:'block', marginBottom: 4 }}>4 results for "fine"</Mono>
        <Row left={<Swatch fill="#fde8c4">🚓</Swatch>} title="Traffic Fine Payment"
          sub="Transport · Full online" badge={<Pill className="green">GOV PAY</Pill>} />
        <Row left={<Swatch fill="#cfd9e8">⚖</Swatch>} title="Court Fine Payment"
          sub="Legal · Full online" badge={<Pill className="green">GOV PAY</Pill>} />
        <Row left={<Swatch fill="#e8e6e3">🏠</Swatch>} title="Municipal Fines"
          sub="Housing · Partial" badge={<Pill className="amber">PARTIAL</Pill>} />
        <Row left={<Swatch fill="#fde8c4">🚗</Swatch>} title="Late Revenue Licence Surcharge"
          sub="Transport · Full online" badge={<Pill className="green">GOV PAY</Pill>} />
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Recent</Mono>
        <div className="flex gap-2" style={{ flexWrap:'wrap' }}>
          {['driving licence','aswesuma','electricity'].map(t=>(
            <Pill key={t}><span style={{ opacity:.5 }}>↺</span> {t}</Pill>
          ))}
        </div>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP 7 — QR PAY (Q1-Q7)
// ═══════════════════════════════════════════════════════════════

function Q1_QRSheet() {
  return (
    <Phone>
      <div className="wf-body" style={{ background:'rgba(0,0,0,0.3)', position:'relative', padding: 0 }}>
        <div style={{ position:'absolute', inset:'0 0 0 0', opacity:0.3 }}>
          {/* dimmed home behind */}
        </div>
        <div style={{ position:'absolute', left:0, right:0, bottom:0, background:'#fcfaf5', borderTop:'2px solid #1a1815', borderRadius:'18px 18px 0 0', padding: 14 }}>
          <div className="center"><div style={{ width: 40, height: 4, background:'#c8c4be', borderRadius: 2, marginBottom: 10 }} /></div>
          <div className="flex-b mb-3">
            <H size="lg">QR Pay</H>
            <div className="flex gap-2">
              <Pill className="amber-fill">LankaQR</Pill>
              <Pill>GovPay</Pill>
            </div>
          </div>
          {[
            ['📷','Scan to pay','Point at any LankaQR code'],
            ['▦','Show my QR','Merchant scans your code'],
            ['⛽','Fuel quota','Check & use fuel allowance'],
            ['→','Request payment','Generate a payment request'],
          ].map(([i,t,s])=>(
            <Box key={t} className="row tight">
              <Swatch size="lg" fill="#fde8c4">{i}</Swatch>
              <div className="grow">
                <div className="h-md">{t}</div>
                <Mono>{s}</Mono>
              </div>
              <span className="chev">›</span>
            </Box>
          ))}
          <Div />
          <div className="flex-b">
            <div>
              <Mono up>Paying from</Mono>
              <div className="h-sm" style={{ fontWeight:600 }}>BOC ···· 4821</div>
            </div>
            <Mono style={{ color:'#d97706' }}>Change</Mono>
          </div>
        </div>
      </div>
      <TabBar active="qr" />
    </Phone>
  );
}

function Q2_Scanner() {
  return (
    <Phone dark>
      <div className="wf-body" style={{ background:'#0a0a0a', color:'white', padding: 0, position:'relative' }}>
        {/* camera viewport */}
        <div style={{ background: 'repeating-linear-gradient(45deg, #1a1a1a, #1a1a1a 8px, #222 8px, #222 16px)', flex:1, height:'100%', position:'relative', minHeight: 460 }}>
          <div style={{ position:'absolute', top: 14, left: 14, right: 14, display:'flex', justifyContent:'space-between', color:'white' }}>
            <div className="h-icon" style={{ background:'rgba(255,255,255,0.15)', borderColor:'white', color:'white' }}>✕</div>
            <div className="h-lg" style={{ color:'white' }}>QR Pay</div>
            <div className="h-icon" style={{ background:'rgba(255,255,255,0.15)', borderColor:'white', color:'white' }}>⚡</div>
          </div>
          {/* scanning frame */}
          <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-58%)', width: 180, height: 180 }}>
            {['top:0;left:0','top:0;right:0','bottom:0;left:0','bottom:0;right:0'].map((p,i)=>{
              const [vs,hs] = p.split(';');
              const [vk] = vs.split(':'); const [hk] = hs.split(':');
              return <div key={i} style={{ position:'absolute', [vk]:0, [hk]:0, width:32, height:32,
                [`border${vk[0].toUpperCase()+vk.slice(1)}`]:'3px solid #d97706',
                [`border${hk[0].toUpperCase()+hk.slice(1)}`]:'3px solid #d97706' }} />;
            })}
            <div style={{ position:'absolute', top: '50%', left: 0, right: 0, height: 2, background:'#d97706', boxShadow:'0 0 8px #d97706' }} />
          </div>
          <div style={{ position:'absolute', bottom: 140, left: 0, right: 0, textAlign:'center', color:'white' }}>
            <div className="h-md" style={{ color:'white' }}>Point at any LankaQR code</div>
            <Mono style={{ color:'#999' }}>400,000+ merchants nationwide</Mono>
          </div>
          {/* bottom sheet */}
          <div style={{ position:'absolute', left:0, right:0, bottom:0, background:'#1a1a1a', padding:'12px 14px', borderTop:'1px solid #333' }}>
            <div className="flex-b">
              <div>
                <Mono style={{ color:'#999' }}>PAYING FROM</Mono>
                <div className="h-sm" style={{ color:'white', fontWeight:600 }}>BOC ···· 4821</div>
              </div>
              <Btn className="ghost sm" style={{ background:'transparent', color:'white', borderColor:'white', margin:0 }}>Show my QR</Btn>
            </div>
          </div>
        </div>
      </div>
      <Anno top={60} right={4} style={{ color:'#d97706' }}>only dark screen in app</Anno>
    </Phone>
  );
}

function Q3_PayReview() {
  return (
    <Phone>
      <Header back title="Confirm payment" />
      <div className="wf-body">
        <Box className="row">
          <Swatch size="lg" fill="#fde8c4">CC</Swatch>
          <div className="grow">
            <div className="h-md">Cargills Food City</div>
            <Mono>Maharagama branch</Mono>
            <Pill className="green" style={{ marginTop:4 }}>✓ LankaQR verified</Pill>
          </div>
        </Box>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Amount</Mono>
        <Box style={{ textAlign:'center', padding: '14px 12px' }}>
          <Mono>Rs.</Mono>
          <div style={{ fontFamily:'Kalam', fontSize: 36, fontWeight: 700, color:'#d97706' }}>1,890.00</div>
        </Box>
        <div className="flex gap-2" style={{ flexWrap:'wrap', justifyContent:'center', marginBottom: 8 }}>
          {['+100','+500','+1000','Edit'].map(p=><Pill key={p}>{p}</Pill>)}
        </div>
        <Mono up style={{ display:'block', marginBottom: 4 }}>Pay from</Mono>
        <Box className="row tight">
          <Swatch>BOC</Swatch>
          <div className="grow"><div className="h-sm" style={{fontWeight:600}}>BOC ···· 4821</div></div>
          <Mono style={{ color:'#d97706' }}>Change</Mono>
        </Box>
        <div className="flex gap-2 mb-3">
          <Pill className="green">🔒 Secured</Pill>
          <Pill className="blue">⚡ Instant</Pill>
          <Pill>CBSL</Pill>
        </div>
        <Btn>Pay Rs. 1,890 →</Btn>
        <Mono style={{ textAlign:'center', display:'block' }}>No fee for you · Merchant pays 0.5%</Mono>
      </div>
    </Phone>
  );
}

function Q4_QRSuccess() {
  return (
    <Phone>
      <Header back title="Sent" />
      <div className="wf-body center" style={{ flexDirection:'column', textAlign:'center', paddingTop: 24 }}>
        <Circ size={72} fill="#d97706" style={{ borderColor:'#1a1815', borderWidth: 2.5, color:'white' }}>
          <span style={{ fontSize: 24, color:'white' }}>QR</span>
        </Circ>
        <H size="xl" style={{ marginTop: 12 }}>Payment Sent!</H>
        <div style={{ fontFamily:'Kalam', fontSize: 28, fontWeight: 700, color:'#d97706', marginTop: 4 }}>Rs. 1,890</div>
        <Mono>to Cargills Food City</Mono>
        <Box style={{ width:'100%', marginTop: 12, textAlign:'left' }}>
          <div className="flex-b mb-2"><Mono>Txn ID</Mono><span className="h-sm">LQ-2026-91283</span></div>
          <div className="flex-b mb-2"><Mono>Time</Mono><span className="h-sm">23 May · 14:02</span></div>
          <div className="flex-b"><Mono>From</Mono><span className="h-sm">BOC ···· 4821</span></div>
        </Box>
        <div className="grid-3" style={{ width:'100%', marginTop: 8, gap: 6 }}>
          <Btn className="ghost sm" style={{ margin: 0 }}>Pay again</Btn>
          <Btn className="ghost sm" style={{ margin: 0 }}>Home</Btn>
          <Btn className="ghost sm" style={{ margin: 0 }}>Profile</Btn>
        </div>
      </div>
    </Phone>
  );
}

function Q5_ShowMyQR() {
  return (
    <Phone>
      <Header back title="Show my QR" />
      <div className="wf-body center" style={{ flexDirection:'column', textAlign:'center' }}>
        <Mono up>YOUR QR · LankaQR</Mono>
        <QR size={180} style={{ margin: '8px 0' }} />
        <div className="h-md">Sampath K. Perera</div>
        <Mono>BOC ···· 4821</Mono>
        <Box className="amber-dark" style={{ width:'100%', marginTop: 10 }}>
          <div className="flex-b">
            <Mono up style={{ color:'#fde8c4' }}>Refreshes in</Mono>
            <div className="h-lg" style={{ color:'white' }}>0:48</div>
          </div>
        </Box>
        <Box className="brand" style={{ width:'100%' }}>
          <Mono>🛡 Security tip — only show to trusted merchants</Mono>
        </Box>
        <div className="flex gap-2" style={{ width:'100%' }}>
          <Btn className="ghost" style={{ flex:1 }}>Share</Btn>
          <Btn style={{ flex:1 }}>Screenshot</Btn>
        </div>
      </div>
    </Phone>
  );
}

function Q6_FuelQuota() {
  return (
    <Phone>
      <Header back title="Fuel Quota" />
      <div className="wf-body tight">
        <Box className="row">
          <Swatch size="lg" fill="#fde8c4">🚗</Swatch>
          <div className="grow">
            <div className="h-md">CAB-2245 (Toyota Vitz)</div>
            <Mono>Switch vehicle ▾</Mono>
          </div>
        </Box>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>This month</Mono>
        {[
          { t:'Petrol 92', r:8, total:20, c:'#d97706' },
          { t:'Diesel', r:0, total:0, c:'#c8c4be' },
          { t:'Kerosene', r:0, total:0, c:'#c8c4be' },
        ].map(f=>(
          <Box key={f.t} className="tight">
            <div className="flex-b mb-2">
              <div className="h-md">{f.t}</div>
              <div className="h-md">{f.total ? `${f.r}L / ${f.total}L` : 'N/A'}</div>
            </div>
            {f.total>0 && (
              <div style={{ height: 8, background:'#f1ede4', border:'1.5px solid #1a1815', borderRadius: 4, overflow:'hidden' }}>
                <div style={{ width: `${(f.r/f.total)*100}%`, height:'100%', background: f.c }} />
              </div>
            )}
          </Box>
        ))}
        <Mono style={{ textAlign:'center', display:'block' }}>Resets 1 June 2026</Mono>
        <Btn>Show fuel QR at station →</Btn>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Recent purchases</Mono>
        <Row left={<Swatch size="sm">⛽</Swatch>} title="LIOC Maharagama" sub="20 May · 4.2L · Rs. 1,470" chev={false} />
        <Row left={<Swatch size="sm">⛽</Swatch>} title="Ceypetco Nugegoda" sub="14 May · 5.0L · Rs. 1,750" chev={false} />
      </div>
    </Phone>
  );
}

function Q7_Request() {
  return (
    <Phone>
      <Header back title="Request payment" />
      <div className="wf-body">
        <H size="md">Generate a payment request</H>
        <Mono style={{ marginBottom: 8 }}>Share via WhatsApp · expires in 10 min</Mono>
        <Mono up style={{ display:'block', marginBottom: 4 }}>Amount</Mono>
        <Box style={{ textAlign:'center', padding:'14px 12px' }}>
          <Mono>Rs.</Mono>
          <div style={{ fontFamily:'Kalam', fontSize: 32, fontWeight:700, color:'#d97706' }}>450.00</div>
        </Box>
        <Input label="Note (optional)" value="Lunch split — 3 ways" focus />
        <div className="center" style={{ flexDirection:'column' }}>
          <QR size={140} />
          <Mono up style={{ marginTop: 6 }}>Expires in 09:54</Mono>
        </div>
        <div className="flex gap-2 mt-3">
          <Btn className="ghost" style={{ flex:1 }}>Copy link</Btn>
          <Btn style={{ flex:1 }}>Share on WhatsApp</Btn>
        </div>
      </div>
    </Phone>
  );
}

Object.assign(window, {
  O1_Language, O2_Welcome, O3_NIC, O3b_Phone, O3c_OTP, O3d_CreatePassword, O4_AutoFillPreview, O5_Profile, O6_Bank, O7_Permissions, O8_Done,
  A1_LoginPhone, A2_Biometric, A3_ForgotPin,
  H1_Home, H2_Notifications,
  S1_Services, S2_Sector, S3_ServiceDetail, S4_PayStep1, S5_PayStep2, S6_PaySuccess,
  S7_BillsHub, S7b_AddBillAccount, S8_EDLDetail, S9_BillSuccess, S10_Search,
  Q1_QRSheet, Q2_Scanner, Q3_PayReview, Q4_QRSuccess, Q5_ShowMyQR, Q6_FuelQuota, Q7_Request,
});
