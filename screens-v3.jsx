// screens-v3.jsx — Lanka Seva Wireframes V3
// Family & Children system · under-18 routing · guardian approval
// Builds on V1/V2 components from wf-components.jsx + screens-1/2/v2.jsx

// ─── Child tab bar (4 tabs, no QR Pay, Emergency replaces Locate) ───
function ChildTabBar({ active = 'home' }) {
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
      {tab('prof', 'Profile', '◔')}
      <div className={"tab" + (active === 'emer' ? " active" : "")}>
        <div className="tab-ic circ" style={{ background:'#fde8c4', borderColor:'#d97706', color:'#d97706' }}>📞</div>
        <span style={{ color: active==='emer' ? '#d97706' : '#d97706', fontWeight: 600 }}>Emergency</span>
      </div>
    </div>
  );
}

// "Under [Parent]'s account" caption — must appear on every child screen
function UnderParent({ name = 'Sampath', style }) {
  return (
    <div className="h-tiny" style={{ display:'flex', alignItems:'center', gap: 4, color:'#7a4f00', ...style }}>
      <span>🔗</span>
      <span>Under {name}'s account</span>
    </div>
  );
}

// Generic vaccine row
function Vax({ when, vac, where, done, due, current }) {
  return (
    <div className="row-item" style={{ paddingTop: 6, paddingBottom: 6 }}>
      <div style={{ width: 58, flexShrink: 0 }}>
        <Mono tiny>{when}</Mono>
      </div>
      <div className="grow">
        <div className="h-sm" style={{ fontWeight: 600 }}>{vac}</div>
        {where && <Mono tiny>{where}</Mono>}
      </div>
      {done && <Pill className="green">✓</Pill>}
      {due && <Pill className="amber">DUE</Pill>}
      {current && <Pill className="amber-fill">●</Pill>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 1 — LOGIN SYSTEM UPGRADE  (L1-L4)
// ═══════════════════════════════════════════════════════════════

function L1_AdultLogin() {
  return (
    <Phone>
      <div className="wf-body" style={{ paddingTop: 22 }}>
        <div style={{ textAlign:'center', marginBottom: 14 }}>
          <LSMark size={52} />
          <H size="lg" style={{ marginTop: 8 }}>Welcome back</H>
          <Mono>Sign in with NIC & password</Mono>
        </div>
        <Input label="NIC Number" value="200234500123" filled />
        <Input label="Password" value="••••••••••" focus />
        <div className="flex-b mb-3">
          <Mono style={{ color:'#d97706' }}>biometric replaces password</Mono>
          <Mono style={{ color:'#d97706' }}>Forgot?</Mono>
        </div>
        <Btn>Sign in →</Btn>
        <div className="flex-c" style={{ margin:'10px 0' }}>
          <div style={{ flex:1, borderTop:'1.5px dashed #c8c4be' }} />
          <Mono>or</Mono>
          <div style={{ flex:1, borderTop:'1.5px dashed #c8c4be' }} />
        </div>
        <Btn className="ghost" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap: 8 }}>
          <span style={{ fontSize: 18 }}>☻</span> Use biometric · Face ID
        </Btn>
        <div className="h-tiny" style={{ textAlign:'center', marginTop: 12 }}>
          New here? <span style={{ color:'#d97706' }}>Create account</span>
        </div>
        {/* NEW family link */}
        <div className="center" style={{ marginTop: 8, gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: 3, background:'#d97706', display:'inline-block' }} />
          <Mono style={{ color:'#d97706', fontWeight: 700 }}>Sign in as a family member</Mono>
        </div>
      </div>
      <Anno top={490} right={4}>new V3 entry point</Anno>
    </Phone>
  );
}

function L2_Under18Detected() {
  return (
    <Phone>
      <div className="wf-body" style={{ paddingTop: 18 }}>
        <div style={{ textAlign:'center', marginBottom: 12 }}>
          <LSMark size={52} />
          <H size="lg" style={{ marginTop: 8 }}>Welcome back</H>
        </div>
        <Input label="NIC Number" value="201034500987" focus />

        {/* Alert replaces the password field */}
        <Box className="amber-dark">
          <div className="flex-c mb-2">
            <span style={{ fontSize: 18, color:'#fde8c4' }}>⚠</span>
            <div className="h-md" style={{ color:'white' }}>It looks like you're under 18</div>
          </div>
          <div className="h-sm" style={{ color:'#fde8c4', lineHeight: 1.4 }}>
            Your NIC shows your date of birth as <b style={{ color:'white' }}>14 Aug 2010</b>. A parent or guardian needs to add you to their Lanka Seva account first.
          </div>
        </Box>

        <Mono up style={{ display:'block', margin:'10px 0 6px' }}>Choose one</Mono>

        <Box className="row">
          <Circ size={34} fill="#fde8c4">🔗</Circ>
          <div className="grow">
            <div className="h-md">My parent has already set this up</div>
            <Mono style={{ color:'#d97706' }}>Sign in using their mobile number →</Mono>
          </div>
        </Box>
        <Box className="row">
          <Circ size={34} fill="#fde8c4">+</Circ>
          <div className="grow">
            <div className="h-md">Ask a parent to add me</div>
            <Mono style={{ color:'#d97706' }}>Show them how →</Mono>
          </div>
        </Box>

        <div className="h-tiny" style={{ marginTop: 8, color:'#8a8680' }}>
          Already 18? Your NIC details may need updating at the Department of Registration of Persons.
        </div>
      </div>
      <Anno top={170} right={4} style={{ maxWidth: 110 }}>age silently derived from NIC</Anno>
    </Phone>
  );
}

function L3_FamilySignIn() {
  return (
    <Phone>
      <Header back title="Family sign-in" />
      <div className="wf-body">
        {/* Parent-child link illustration */}
        <div className="center" style={{ flexDirection:'column', marginBottom: 12 }}>
          <div className="flex-c" style={{ gap: 24 }}>
            <div className="center" style={{ flexDirection:'column' }}>
              <Circ size={44} fill="#fde8c4">KP</Circ>
              <Mono tiny style={{ marginTop: 4 }}>Kavindu</Mono>
            </div>
            <div style={{ flex:1, borderTop:'2.5px dashed #d97706', width: 60, position:'relative' }}>
              <span style={{ position:'absolute', top:-10, left:'50%', transform:'translateX(-50%)', background:'#fcfaf5', padding:'0 4px', color:'#d97706' }}>🔗</span>
            </div>
            <div className="center" style={{ flexDirection:'column' }}>
              <Circ size={44} fill="#cbd9ee" style={{ color:'#2b5fa8' }}>SP</Circ>
              <Mono tiny style={{ marginTop: 4 }}>Sampath</Mono>
            </div>
          </div>
        </div>

        <H size="md">Sign in through your parent's account</H>
        <Mono style={{ marginBottom: 10 }}>We'll send a code to your parent's phone to confirm.</Mono>

        <Input label="Parent's mobile number" placeholder="+94 77 ··· ····" focus
          hint="The mobile number your parent used to register" />
        <Input label="Your name" placeholder="e.g. Kavindu"
          hint="So your parent knows it's you" />

        <Btn>Send request →</Btn>
        <Box className="brand">
          <Mono>🛡 Your parent must approve. This keeps your account secure.</Mono>
        </Box>

        <div className="h-tiny" style={{ textAlign:'center', marginTop: 6 }}>
          Don't know the number? Ask a parent to add you from their Profile → Household members.
        </div>
      </div>
    </Phone>
  );
}

function L4_ParentApproval() {
  return (
    <Phone>
      {/* Notification banner across the top */}
      <div style={{ background:'#1a1815', color:'white', padding:'8px 12px', display:'flex', alignItems:'center', gap: 8, borderBottom:'2px solid #1a1815' }}>
        <LSMark size={20} />
        <div style={{ flex:1, fontFamily:'Kalam', fontSize: 11 }}>
          <div style={{ fontWeight: 600 }}>Kavindu wants to sign in</div>
          <div style={{ opacity:0.7, fontSize: 9 }}>just now</div>
        </div>
        <Btn className="sm" style={{ margin: 0, padding:'2px 8px', fontSize: 9 }}>Approve</Btn>
        <Btn className="ghost sm" style={{ margin: 0, padding:'2px 8px', fontSize: 9, background:'transparent', color:'white', borderColor:'white' }}>Decline</Btn>
      </div>

      <Header back title="Family sign-in request" />
      <div className="wf-body tight">
        <Box className="row" style={{ borderColor:'#d97706', background:'#fff8ed' }}>
          <Circ size={40} fill="#fde8c4">KP</Circ>
          <div className="grow">
            <Mono up>Wants to sign in</Mono>
            <div className="h-md">Kavindu Perera</div>
            <Mono>Samsung A14 · Maharagama · just now</Mono>
          </div>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>What Kavindu will see</Mono>
        <Box className="fill tight">
          <div className="h-sm" style={{ lineHeight: 1.7 }}>
            <span className="tick">✓</span> Their own services (education, health)<br/>
            <span className="tick">✓</span> Their documents (school ID, health card)<br/>
            <span className="cross">✗</span> Your financial information<br/>
            <span className="cross">✗</span> Your documents and receipts<br/>
            <span className="cross">✗</span> Your payment history
          </div>
        </Box>

        <Btn>Approve — let Kavindu in</Btn>
        <Btn className="ghost">Decline</Btn>

        <Box className="amber-dark" style={{ marginTop: 6 }}>
          <div className="flex-b">
            <Mono up style={{ color:'#fde8c4' }}>Kavindu is waiting</Mono>
            <H size="md" style={{ color:'white' }}>9:42</H>
          </div>
          <Mono style={{ color:'#fde8c4' }}>Request expires in 10 minutes</Mono>
        </Box>
        <div className="h-tiny" style={{ textAlign:'center', marginTop: 4 }}>
          You can remove Kavindu's access any time in Profile → Household members
        </div>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 2 — ADD CHILD FLOW  (A1-A5)
// ═══════════════════════════════════════════════════════════════

function V3_A1_Household() {
  return (
    <Phone>
      <Header back title="Household members" />
      <div className="wf-body tight">
        <Box className="brand-dark">
          <div className="flex-c">
            <Circ size={40} fill="#fcfaf5" style={{ color:'#2b5fa8' }}>SP</Circ>
            <div className="grow">
              <div className="h-md" style={{ color:'white' }}>Sampath K. Perera</div>
              <Mono style={{ color:'#cbd9ee' }}>Account holder</Mono>
            </div>
          </div>
        </Box>

        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Children</Mono>
        <Box className="row" style={{ borderColor:'#d97706' }}>
          <Circ size={36} fill="#fde8c4">KP</Circ>
          <div className="grow">
            <div className="h-md">Kavindu Perera · Age 12</div>
            <Mono>BC-2013-COL-07291</Mono>
            <Pill className="green" style={{ marginTop: 2 }}><span className="dotx"/>Active account</Pill>
          </div>
          <span className="chev">›</span>
        </Box>

        <Box className="dash row" style={{ padding: 12, marginTop: 4 }}>
          <Circ size={36} style={{ borderStyle:'dashed', borderColor:'#d97706', color:'#d97706', fontSize: 22 }}>+</Circ>
          <div className="grow">
            <div className="h-md">Add a child (under 16)</div>
            <Mono>Uses birth certificate for verification</Mono>
          </div>
        </Box>

        <Box className="brand" style={{ marginTop: 8 }}>
          <Mono up>Have a 16–17 year old?</Mono>
          <div className="h-sm" style={{ marginTop: 2 }}>They can create their own account with their NIC.</div>
          <Mono style={{ color:'#d97706', display:'block', marginTop: 4 }}>Show me how →</Mono>
        </Box>
      </div>
      <Anno top={56} right={4} style={{ maxWidth: 110 }}>V3: Phase-2 watermark removed · now live</Anno>
    </Phone>
  );
}

function V3_A2_BirthCert() {
  return (
    <Phone>
      <Header back title="Add child · Step 1 of 3" />
      <div className="wf-body tight">
        <Progress steps={3} filled={1} />
        <H size="md">Birth certificate details</H>
        <Mono style={{ marginBottom: 10 }}>We'll verify with the Registrar General's Dept.</Mono>

        <Input label="Child's full name" placeholder="e.g. Kavindu Chamara Perera"
          hint="As it appears on the birth certificate" />
        <Input label="Date of birth" placeholder="DD / MM / YYYY"
          hint="Must match the birth certificate exactly" />
        <Input label="Birth cert. registration no." placeholder="e.g. BC-2013-COL-07291"
          hint="Top right of the certificate" />
        {/* Small certificate illustration */}
        <div className="flex-c" style={{ background:'#f1ede4', border:'1.5px dashed #c8c4be', borderRadius: 6, padding: 6, marginBottom: 8 }}>
          <div style={{ width: 50, height: 36, background:'#fff', border:'1.5px solid #1a1815', borderRadius: 3, position:'relative', flexShrink: 0 }}>
            <div style={{ position:'absolute', top: 2, right: 2, fontFamily:'JetBrains Mono', fontSize: 6, color:'#d97706', border:'1px solid #d97706', padding:'1px 2px' }}>BC-…</div>
          </div>
          <Mono tiny>The reference number lives here ↑</Mono>
        </div>

        <Input label="District of birth" placeholder="Select district ▾" />

        <Mono up style={{ display:'block', marginBottom: 4 }}>Your relationship</Mono>
        <div className="flex gap-2 mb-3">
          <Pill>Father</Pill>
          <Pill className="amber-fill">Father ✓</Pill>
          <Pill>Mother</Pill>
          <Pill>Guardian</Pill>
        </div>

        <Box className="brand">
          <Mono>🛡 Your NIC (200234500123) will be cross-checked as the registered parent.</Mono>
        </Box>
        <Btn>Verify →</Btn>
      </div>
    </Phone>
  );
}

function V3_A3_Verified() {
  return (
    <Phone>
      <Header back title="Add child · Step 2 of 3" />
      <div className="wf-body tight">
        <Progress steps={3} filled={2} />
        <Box className="accent">
          <div className="flex-c">
            <Circ size={26} fill="#d8f0e2" style={{ borderColor:'#1e9459', color:'#1e9459' }}>✓</Circ>
            <div className="grow">
              <div className="h-md">Child verified</div>
              <Mono>Registrar General's Dept</Mono>
            </div>
          </div>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Fetched details</Mono>
        <Input label="Full name" value="Kavindu Chamara Perera" filled />
        <Input label="Date of birth" value="14 Mar 2013" filled />
        <Input label="Age" value="12 years, 2 months" filled note="✓ Calculated" />
        <Input label="Gender" value="Male" filled />
        <Input label="Birth district" value="Colombo" filled />
        <Input label="Guardian confirmed" value="Sampath K. Perera (Father)" filled />

        <Box className="brand">
          <Mono>ℹ Cannot be edited here — contact the Registrar General for corrections.</Mono>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Preferred name (editable)</Mono>
        <Input label="Show in the app as" value="Kavindu" focus
          hint="What name should we show in the app?" />

        <Btn>Looks good →</Btn>
      </div>
    </Phone>
  );
}

function V3_A4_Setup() {
  return (
    <Phone>
      <Header back title="Add child · Step 3 of 3" />
      <div className="wf-body tight">
        <Progress steps={3} filled={3} />
        <H size="md">Set up Kavindu's profile</H>

        <Input label="School (optional)" value="Maharagama MMV"
          hint="Used for school notifications and education services" />
        <Input label="Government hospital / MOH area" value="Maharagama MOH area" filled
          hint="Used for appointments & child health card" />

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Allow Kavindu to sign in on their own device</Mono>
        <Box className="row">
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Own-device sign-in</div>
            <Mono>Kavindu signs in via your mobile + your approval</Mono>
          </div>
          <div className="box tight" style={{ background:'#1e9459', width: 36, padding: 3, margin: 0 }}>
            <span style={{ background:'white', width:14, height:14, borderRadius:7, display:'block', marginLeft:'auto' }} />
          </div>
        </Box>
        <Mono style={{ color:'#1a6645' }}>You'll get a notification each time</Mono>

        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Services to enable</Mono>
        {[
          ['🎓','Education','School, exams, scholarships'],
          ['♥','Health','Appointments, immunisations, health card'],
          ['📞','Emergency · 1990','Always on · cannot disable', true],
          ['📜','Documents','Birth certificate, school ID'],
        ].map(([i,t,s,locked])=>(
          <Box key={t} className="row tight">
            <Swatch>{i}</Swatch>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight:600 }}>{t}</div>
              <Mono>{s}</Mono>
            </div>
            {locked
              ? <Pill className="green">🔒 ON</Pill>
              : <div className="box tight" style={{ background:'#1e9459', width: 32, padding: 3, margin: 0 }}>
                  <span style={{ background:'white', width:12, height:12, borderRadius:6, display:'block', marginLeft:'auto' }} />
                </div>}
          </Box>
        ))}

        <Btn>Add Kavindu →</Btn>
      </div>
    </Phone>
  );
}

function V3_A5_Added() {
  return (
    <Phone>
      <Header back title="Done" />
      <div className="wf-body center" style={{ flexDirection:'column', textAlign:'center', paddingTop: 16 }}>
        <Circ size={70} fill="#d8f0e2" style={{ borderColor:'#1e9459', borderWidth: 2.5, fontSize: 28, color:'#1e9459' }}>✓</Circ>
        <H size="xl" style={{ marginTop: 10 }}>Kavindu is added!</H>
        <div className="h-sm" style={{ color:'#4a4640', marginTop: 4, maxWidth: 240 }}>
          You can now manage Kavindu's government services from your Lanka Seva account.
        </div>

        <Box style={{ width:'100%', marginTop: 12, textAlign:'left' }}>
          <div className="flex-c mb-2">
            <Circ size={36} fill="#fde8c4">KP</Circ>
            <div className="grow">
              <div className="h-md">Kavindu Chamara Perera</div>
              <Mono>Age 12 · BC-2013-COL-07291</Mono>
            </div>
          </div>
          <Div />
          <div className="flex-b mb-2"><Mono>School</Mono><span className="h-sm">Maharagama MMV</span></div>
          <div className="flex-b mb-2"><Mono>MOH area</Mono><span className="h-sm">Maharagama</span></div>
          <div className="flex-b"><Mono>Own-device sign-in</Mono><Pill className="green">Enabled</Pill></div>
        </Box>

        <div className="flex gap-2" style={{ width:'100%', marginTop: 8 }}>
          <Btn className="ghost" style={{ flex:1 }}>Household</Btn>
          <Btn style={{ flex:1 }}>View Kavindu</Btn>
        </div>
        <Box className="brand" style={{ width:'100%' }}>
          <Mono>💡 Next: set up Kavindu's health card to track immunisations</Mono>
        </Box>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 3 — CHILD PROFILE & HOME (C1-C3)
// ═══════════════════════════════════════════════════════════════

function V3_C1_ChildProfile() {
  return (
    <Phone>
      <Header back title="Kavindu · Age 12" right={<Mono>···</Mono>} />
      <div className="wf-body tight">
        {/* Amber identity card (child = amber, not blue) */}
        <Box className="amber-dark">
          <div className="flex-c">
            <Circ size={56} fill="#fcfaf5" style={{ color:'#d97706' }}>KP</Circ>
            <div className="grow">
              <div className="h-lg" style={{ color:'white' }}>Kavindu Chamara Perera</div>
              <Mono style={{ color:'#fde8c4' }}>Age 12 · Born 14 Mar 2013</Mono>
              <Mono style={{ color:'#fde8c4' }}>BC-2013-COL-07291</Mono>
              <div className="flex-c" style={{ marginTop: 4, gap: 4 }}>
                <span style={{ color:'#fde8c4' }}>🔗</span>
                <Mono style={{ color:'#fde8c4' }}>Under Sampath K. Perera's account</Mono>
              </div>
            </div>
          </div>
        </Box>

        {/* Tabs */}
        <div className="flex gap-2 mb-3" style={{ overflow:'auto', marginTop: 8 }}>
          {['Overview','Health','Education','Documents'].map((t,i)=>(
            <Pill key={t} className={i===0?'amber-fill':''}>{t}</Pill>
          ))}
        </div>

        <Mono up style={{ display:'block', marginBottom: 4 }}>Upcoming</Mono>
        <Box className="row tight">
          <Swatch fill="#d8e3f5">🎓</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight: 600 }}>Grade 5 scholarship exam</div>
            <Mono>Registration opens 1 Jun 2026</Mono>
          </div>
          <Btn className="sm" style={{ margin: 0, padding:'3px 8px' }}>Register</Btn>
        </Box>
        <Box className="row tight">
          <Swatch fill="#d8f0e2">💉</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight: 600 }}>MMR booster</div>
            <Mono>Due July 2026</Mono>
          </div>
          <Btn className="sm" style={{ margin: 0, padding:'3px 8px' }}>Book</Btn>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Recent activity</Mono>
        <Row left={<Swatch size="sm" fill="#d8f0e2">♥</Swatch>} title="Hospital appointment booked"
          sub="Maharagama BH · 28 May" chev={false} />
        <Row left={<Swatch size="sm" fill="#d8e3f5">🎓</Swatch>} title="School report downloaded"
          sub="Term 2 · 3 days ago" chev={false} />

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Quick actions</Mono>
        <div className="grid-3 mb-3">
          <Box className="tight" style={{ textAlign:'center', padding:'8px 4px', margin: 0 }}>
            <Mono tiny>📅</Mono><div className="h-sm" style={{ fontWeight: 600 }}>Book</div><Mono tiny>appt</Mono>
          </Box>
          <Box className="tight" style={{ textAlign:'center', padding:'8px 4px', margin: 0 }}>
            <Mono tiny>💉</Mono><div className="h-sm" style={{ fontWeight: 600 }}>Health</div><Mono tiny>card</Mono>
          </Box>
          <Box className="tight" style={{ textAlign:'center', padding:'8px 4px', margin: 0 }}>
            <Mono tiny>🎓</Mono><div className="h-sm" style={{ fontWeight: 600 }}>Education</div><Mono tiny>services</Mono>
          </Box>
        </div>

        <Mono up style={{ display:'block', marginBottom: 4 }}>Device access</Mono>
        <Box className="row tight">
          <div className="grow">
            <div className="h-sm" style={{ fontWeight: 600 }}>Kavindu's sign-in</div>
            <Mono>Last: Yesterday · Samsung A14</Mono>
          </div>
          <div className="box tight" style={{ background:'#1e9459', width: 32, padding: 3, margin: 0 }}>
            <span style={{ background:'white', width:12, height:12, borderRadius:6, display:'block', marginLeft:'auto' }} />
          </div>
        </Box>
        <Mono style={{ color:'#c43a48', display:'block', textAlign:'right' }}>Revoke access</Mono>
      </div>
    </Phone>
  );
}

function V3_C2_ChildHome() {
  return (
    <Phone>
      {/* Header — KP avatar instead of LS to reinforce child identity */}
      <div className="wf-header" style={{ background:'#fff8ed' }}>
        <Swatch size="sm" fill="#fde8c4">KP</Swatch>
        <div className="grow">
          <div className="h-md">Good morning, Kavindu 👋</div>
          <UnderParent />
        </div>
        <div className="h-icon" style={{ position:'relative' }}>
          🔔
          <span style={{ position:'absolute', top:-3, right:-3, width: 7, height: 7, borderRadius: 4, background:'#c43a48', border:'1px solid #fcfaf5' }} />
        </div>
      </div>
      <div className="wf-body tight" style={{ paddingBottom: 8 }}>
        {/* Amber identity banner (replaces blue parent hero) */}
        <Box className="amber-dark">
          <div className="flex-c">
            <Circ size={44} fill="#fcfaf5" style={{ color:'#d97706' }}>KP</Circ>
            <div className="grow">
              <div className="h-lg" style={{ color:'white' }}>Kavindu Perera · Age 12</div>
              <UnderParent style={{ color:'#fde8c4' }} />
              <Mono style={{ color:'#fde8c4', display:'block', marginTop: 2 }}>Some features are managed by your parent</Mono>
            </div>
          </div>
        </Box>

        <Mono up style={{ display:'block', margin:'6px 0 4px' }}>My services</Mono>
        <Box className="row tight">
          <Swatch fill="#d8e3f5">🎓</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight: 600 }}>Maharagama MMV · Grade 7</div>
            <Mono>Term 3 starts 1 Sep</Mono>
          </div>
          <span className="chev">›</span>
        </Box>
        <Box className="row tight">
          <Swatch fill="#d8f0e2">♥</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight: 600 }}>Health card · Up to date ✓</div>
            <Mono>MMR booster due July 2026</Mono>
          </div>
          <span className="chev">›</span>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Quick actions</Mono>
        <div className="grid-3 mb-3">
          {[['💉','Health card'],['🎓','My school'],['📞','Emergency']].map(([i,l])=>(
            <Box key={l} className="tight" style={{ textAlign:'center', padding:'8px 4px', margin: 0 }}>
              <div style={{ fontSize: 16 }}>{i}</div>
              <Mono tiny>{l}</Mono>
            </Box>
          ))}
        </div>

        <Mono up style={{ display:'block', marginBottom: 4 }}>Recent</Mono>
        <Row left={<Swatch size="sm" fill="#d8f0e2">♥</Swatch>} title="Hospital appointment"
          sub="28 May" chev={false} />
        <Row left={<Swatch size="sm" fill="#d8e3f5">📄</Swatch>} title="School report downloaded"
          sub="3 days ago" chev={false} />

        {/* Emergency banner */}
        <Box className="amber-dark row" style={{ marginTop: 6 }}>
          <Circ size={32} fill="#fff" style={{ color:'#d97706' }}>📞</Circ>
          <div className="grow">
            <div className="h-md" style={{ color:'white' }}>1990 · Emergency</div>
            <Mono style={{ color:'#fde8c4' }}>One tap · no login needed</Mono>
          </div>
          <Mono style={{ color:'#fde8c4' }}>›</Mono>
        </Box>
      </div>
      <ChildTabBar active="home" />
      {/* Persistent footer */}
      <div style={{ position:'absolute', bottom: 14, left: 0, right: 0, textAlign:'center' }}>
        <Mono tiny style={{ background:'#fff8ed', padding:'3px 8px', borderRadius: 8, border:'1.5px dashed #c8c4be' }}>
          Signed in under Sampath's account · <span style={{ color:'#d97706' }}>Switch account</span>
        </Mono>
      </div>
      <Anno top={500} right={4} style={{ maxWidth: 110 }}>4 tabs · no QR Pay · Emergency replaces Locate</Anno>
    </Phone>
  );
}

function V3_C3_ChildServices() {
  const locked = [
    ['🚗','Driving learner\'s permit','Available at 16'],
    ['🪪','NIC application','4 years away'],
    ['🏦','Bank account','Available at 18'],
  ];
  return (
    <Phone>
      <Header title="Services · Kavindu" lang="EN" />
      <div className="wf-body tight">
        <UnderParent />
        <div className="input mb-3" style={{ marginTop: 6 }}>
          <span>🔍</span><span className="ph">Search services for you…</span>
        </div>
        <Mono up style={{ display:'block', marginBottom: 4 }}>Services for you · age 12</Mono>

        <Box className="row tight">
          <Swatch fill="#d8e3f5">🎓</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>School services</div>
            <Mono>Maharagama MMV · 3 services</Mono>
          </div>
          <span className="chev">›</span>
        </Box>
        <Box className="row tight">
          <Swatch fill="#d8e3f5">🏆</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Scholarships</div>
            <Mono>Grade 5 · Mahapola · 2 services</Mono>
          </div>
          <span className="chev">›</span>
        </Box>
        <Box className="row tight">
          <Swatch fill="#d8e3f5">📝</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Exam registration</div>
            <Mono>O/L prep · 1 service</Mono>
          </div>
          <span className="chev">›</span>
        </Box>

        <Mono up style={{ display:'block', margin:'6px 0 4px' }}>Health</Mono>
        <Box className="row tight">
          <Swatch fill="#d8f0e2">💉</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Health card</div>
            <Mono>Immunisations, growth · 1 service</Mono>
          </div>
          <span className="chev">›</span>
        </Box>
        <Box className="row tight">
          <Swatch fill="#d8f0e2">📅</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Hospital appointments</div>
            <Mono>Maharagama BH · 1 service</Mono>
          </div>
          <span className="chev">›</span>
        </Box>
        <Box className="row tight">
          <Swatch fill="#fde8c4">📞</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Suwa Seriya 1990</div>
            <Mono>Always available</Mono>
          </div>
          <span className="chev">›</span>
        </Box>

        <Mono up style={{ display:'block', margin:'10px 0 4px', color:'#8a8680' }}>🔒 Available when you turn 16</Mono>
        {locked.map(([i,t,d])=>(
          <Box key={t} className="row tight" style={{ background:'#f1ede4', opacity: 0.6 }}>
            <Swatch fill="#fff" style={{ opacity: 0.6 }}>{i}</Swatch>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight:600, color:'#8a8680' }}>{t}</div>
              <Mono>{d}</Mono>
            </div>
            <span style={{ color:'#8a8680' }}>🔒</span>
          </Box>
        ))}
        <Box className="brand" style={{ marginTop: 6 }}>
          <Mono>🎂 4 years until you can apply for your NIC — we'll remind you</Mono>
        </Box>
      </div>
      <ChildTabBar active="serv" />
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 4 — CHILD HEALTH CARD (H1-H3)
// ═══════════════════════════════════════════════════════════════

function V3_H1_HealthCard() {
  return (
    <Phone>
      <Header back title="Health card · Kavindu" right={<Mono>↗</Mono>} />
      <div className="wf-body tight">
        <UnderParent style={{ marginBottom: 6 }} />

        {/* Green-tinted physical-feel health card */}
        <Box style={{ background:'#e8f5ee', borderColor:'#1e9459', borderWidth: 1.8, padding: 12 }}>
          <div className="flex-b mb-2">
            <Mono up style={{ color:'#1a6645' }}>LANKA SEVA · CHILD HEALTH RECORD</Mono>
            <span style={{ fontSize: 14 }}>♥</span>
          </div>
          <div className="h-lg" style={{ color:'#1a3a23', letterSpacing: 0.3 }}>KAVINDU CHAMARA PERERA</div>
          <div className="grid-2" style={{ marginTop: 6, fontFamily:'JetBrains Mono', fontSize: 9, color:'#1a6645', lineHeight: 1.6 }}>
            <div><div style={{ opacity:0.7, fontSize: 8 }}>DOB</div><div style={{ color:'#1a3a23', fontSize: 10 }}>14 MAR 2013</div></div>
            <div><div style={{ opacity:0.7, fontSize: 8 }}>AGE</div><div style={{ color:'#1a3a23', fontSize: 10 }}>12 years</div></div>
            <div><div style={{ opacity:0.7, fontSize: 8 }}>MOH AREA</div><div style={{ color:'#1a3a23', fontSize: 10 }}>MAHARAGAMA</div></div>
            <div><div style={{ opacity:0.7, fontSize: 8 }}>BLOOD</div><div style={{ color:'#1a3a23', fontSize: 10 }}>B+</div></div>
          </div>
          <Div style={{ background: 'transparent', backgroundImage:'linear-gradient(90deg, #1e9459 50%, transparent 50%)', backgroundSize:'6px 1px', margin:'6px 0' }} />
          <Mono tiny style={{ color:'#1a6645' }}>ALLERGIES: Penicillin</Mono>
          <Mono tiny style={{ display:'block', marginTop: 2, color:'#1a6645' }}>Government health record · verified by MOH</Mono>
        </Box>

        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Immunisation history</Mono>
        <div className="flex-b mb-2">
          <Mono>8 of 9 complete</Mono>
          <Pill className="amber">1 due</Pill>
        </div>
        <div style={{ height: 8, background:'#f1ede4', border:'1.5px solid #1a1815', borderRadius: 4, overflow:'hidden', marginBottom: 8 }}>
          <div style={{ width: '88%', height:'100%', background:'#1e9459' }} />
        </div>

        <Mono up style={{ display:'block', marginBottom: 4 }}>Completed</Mono>
        <Vax when="At birth" vac="BCG" where="Colombo NH" done />
        <Vax when="6 wk" vac="Hepatitis B + DPT 1 + OPV 1" where="Maharagama BH" done />
        <Vax when="10 wk" vac="DPT 2 + OPV 2" done />
        <Vax when="14 wk" vac="DPT 3 + OPV 3" done />
        <Vax when="9 mo" vac="MMR 1" done />
        <Vax when="12 mo" vac="Japanese Encephalitis" done />

        <Mono up style={{ display:'block', margin:'8px 0 4px', color:'#d97706' }}>Due</Mono>
        <Box className="row tight" style={{ borderColor:'#d97706', background:'#fff0c8' }}>
          <Circ size={28} fill="#fff" style={{ borderColor:'#d97706', color:'#d97706' }}>!</Circ>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight: 600 }}>MMR booster</div>
            <Mono>Due July 2026 · 2 months away</Mono>
          </div>
          <Btn className="sm" style={{ margin: 0, padding:'4px 8px' }}>Book</Btn>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Growth · last recorded</Mono>
        <Box className="row tight">
          <Swatch>📈</Swatch>
          <div className="grow">
            <div className="h-sm">Weight 38kg · Height 148cm</div>
            <Mono>Mar 2026 · Maharagama MOH</Mono>
          </div>
          <Mono style={{ color:'#d97706' }}>Chart →</Mono>
        </Box>
      </div>
    </Phone>
  );
}

function V3_H2_Immunisation() {
  return (
    <Phone>
      <Header back title="Immunisations · Kavindu" />
      <div className="wf-body tight">
        <UnderParent style={{ marginBottom: 6 }} />
        <div className="flex-b">
          <Mono>8 of 9 complete · 1 due</Mono>
          <Pill className="green">88%</Pill>
        </div>
        <Box className="amber-dark" style={{ marginTop: 6 }}>
          <div className="h-md" style={{ color:'white' }}>MMR booster due July 2026</div>
          <Mono style={{ color:'#fde8c4' }}>Book at Maharagama BH</Mono>
          <Btn className="ghost sm" style={{ background:'white', color:'#d97706', borderColor:'white', marginTop: 6, marginBottom: 0 }}>Book now →</Btn>
        </Box>

        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Full record</Mono>
        <Vax when="15 Mar 13" vac="BCG" where="Colombo National Hospital" done />
        <Vax when="26 Apr 13" vac="Hepatitis B" done />
        <Vax when="26 Apr 13" vac="DPT 1 · OPV 1" done />
        <Vax when="24 May 13" vac="DPT 2 · OPV 2" done />
        <Vax when="21 Jun 13" vac="DPT 3 · OPV 3" done />
        <Vax when="14 Dec 13" vac="MMR 1" done />
        <Vax when="14 Mar 14" vac="Japanese Encephalitis" done />
        <Vax when="Jul 2026" vac="MMR booster" where="Maharagama BH · Book" due />

        <div className="flex gap-2 mt-3">
          <Btn className="ghost" style={{ flex:1 }}>Download PDF</Btn>
          <Btn className="ghost" style={{ flex:1 }}>Share</Btn>
        </div>
        <Mono tiny style={{ display:'block', marginTop: 4, color:'#8a8680' }}>
          From Ministry of Health database · synced 10 May 2026
        </Mono>
      </div>
    </Phone>
  );
}

function V3_H3_BookAppt() {
  return (
    <Phone>
      <Header back title="Book appointment · Kavindu" />
      <div className="wf-body tight">
        <Box style={{ background:'#e8f5ee', borderColor:'#1e9459' }}>
          <Mono up style={{ color:'#1a6645' }}>Appointment</Mono>
          <div className="h-md" style={{ color:'#1a3a23' }}>MMR booster · Due July 2026</div>
          <Mono>Maharagama BH · Child immunisation clinic</Mono>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Type</Mono>
        <Input label="Appointment type" value="Immunisation · MMR booster" filled
          note="✓ Pre-filled from health card" />

        <Mono up style={{ display:'block', margin:'4px 0 4px' }}>Hospital</Mono>
        <Box className="row tight">
          <Swatch fill="#d8f0e2">♥</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight: 600 }}>Maharagama Base Hospital</div>
            <Mono>1.2km · Paediatric clinic</Mono>
          </div>
          <Mono style={{ color:'#d97706' }}>Change</Mono>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Choose date</Mono>
        <div className="grid-4 mb-3">
          {[
            ['Mon','26','—'],['Tue','27','3'],['Wed','28','5',true],['Thu','29','2'],
          ].map(([d,n,slots,sel])=>(
            <Box key={n} className={"tight " + (sel?'accent':'')} style={{ textAlign:'center', padding:'6px 2px', margin: 0, ...(slots==='—'?{opacity:.4}:{}) }}>
              <Mono tiny>{d}</Mono>
              <div className="h-sm" style={{ fontWeight: 700 }}>{n}</div>
              <Mono tiny style={{ color: slots==='—'?'#8a8680':'#1e9459' }}>
                {slots==='—' ? 'full' : `${slots} slots`}
              </Mono>
            </Box>
          ))}
        </div>

        <Mono up style={{ display:'block', marginBottom: 4 }}>Available times — Wed 28 May</Mono>
        <div className="flex gap-2 mb-3" style={{ flexWrap:'wrap' }}>
          {['09:00','09:30','10:00','10:30'].map((t,i)=>(
            <Pill key={t} className={i===1?'amber-fill':''}>{t} AM</Pill>
          ))}
        </div>

        <Mono up style={{ display:'block', marginBottom: 4 }}>Patient · auto-filled</Mono>
        <Input label="Patient" value="Kavindu Chamara Perera" filled />
        <Input label="DOB" value="14 Mar 2013" filled />

        <Box className="row tight" style={{ marginTop: 4 }}>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Remind parent (Sampath)</div>
            <Mono>Sends a notification 1 day before</Mono>
          </div>
          <div className="box tight" style={{ background:'#1e9459', width: 32, padding: 3, margin: 0 }}>
            <span style={{ background:'white', width:12, height:12, borderRadius:6, display:'block', marginLeft:'auto' }} />
          </div>
        </Box>

        <Btn>Confirm appointment →</Btn>
        <Mono style={{ textAlign:'center', display:'block' }}>Free · Government immunisation programme</Mono>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 5 — AGE TRANSITIONS (T1a-c, T2a-c)
// ═══════════════════════════════════════════════════════════════

function V3_T1a_Birthday16Child() {
  return (
    <Phone>
      <Header back title="Milestone" />
      <div className="wf-body" style={{ paddingTop: 18 }}>
        <div className="center" style={{ flexDirection:'column' }}>
          <div style={{ fontSize: 48 }}>🎂</div>
          <H size="xl" style={{ marginTop: 8, textAlign:'center', maxWidth: 240 }}>
            You're 16 —<br/>a big milestone!
          </H>
          <Mono style={{ marginTop: 4 }}>Happy birthday, Kavindu</Mono>
        </div>
        <Box className="accent" style={{ marginTop: 14 }}>
          <Mono up>What you can do now</Mono>
          <div className="h-sm" style={{ marginTop: 4, lineHeight: 1.7 }}>
            <span className="tick">✓</span> Apply for your <b>NIC</b><br/>
            <span className="tick">✓</span> Get your <b>own Lanka Seva account</b><br/>
            <span style={{ color:'#d97706' }}>→</span> Your history transfers automatically<br/>
            <span style={{ color:'#d97706' }}>→</span> Stays linked to Sampath until age 18
          </div>
        </Box>
        <Btn>Apply for NIC now →</Btn>
        <Btn className="ghost">Do this later</Btn>
        <UnderParent style={{ justifyContent:'center', marginTop: 6 }} />
      </div>
    </Phone>
  );
}

function V3_T1b_Birthday16Parent() {
  return (
    <Phone>
      <Header back title="Family update" />
      <div className="wf-body">
        <div style={{ background:'#1a1815', color:'white', padding: 10, borderRadius: 8, marginBottom: 10, display:'flex', alignItems:'center', gap: 8 }}>
          <LSMark size={20} />
          <div style={{ flex:1, fontFamily:'Kalam', fontSize: 11 }}>
            <div style={{ fontWeight:600 }}>Kavindu turns 16 today</div>
            <Mono tiny style={{ color:'#aaa' }}>now</Mono>
          </div>
        </div>

        <H size="md">Kavindu is now eligible for an NIC</H>
        <div className="h-sm" style={{ color:'#4a4640', marginTop: 6, marginBottom: 10 }}>
          Help Kavindu visit the Divisional Secretariat to apply for their first National Identity Card.
        </div>

        <Mono up style={{ display:'block', marginBottom: 4 }}>Bring with you</Mono>
        <Box>
          <div className="h-sm" style={{ lineHeight: 1.7 }}>
            <span className="tick">✓</span> Birth certificate · BC-2013-COL-07291<br/>
            <span className="tick">✓</span> Your NIC (as parent / guardian)<br/>
            <span className="tick">✓</span> 3 photos · light blue background<br/>
            <span className="tick">✓</span> Completed Form A
          </div>
        </Box>

        <Btn>Download Form A</Btn>
        <Btn className="ghost">📍 Nearest Divisional Secretariat</Btn>
        <Mono style={{ textAlign:'center', display:'block', color:'#d97706' }}>Remind me later</Mono>
      </div>
    </Phone>
  );
}

function V3_T1c_LinkNIC() {
  return (
    <Phone>
      <Header back title="Link Kavindu's NIC" />
      <div className="wf-body tight">
        <div className="h-sm" style={{ color:'#4a4640', marginBottom: 10 }}>
          Kavindu's NIC has been issued. Link it to upgrade their Lanka Seva access.
        </div>
        <Input label="Kavindu's NIC" value="200934500987" filled note="✓ Matches birth certificate" />

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>After linking</Mono>
        <Box>
          <div className="h-sm" style={{ lineHeight: 1.7 }}>
            <span className="tick">✓</span> Kavindu gets their own login (NIC + password)<br/>
            <span className="tick">✓</span> Health & education history transfers<br/>
            <span className="tick">✓</span> Teen account · still linked to Sampath<br/>
            <span className="cross">✗</span> Financial services still restricted until 18
          </div>
        </Box>

        <Box className="brand">
          <Mono up>Teen account · ages 16–17</Mono>
          <div className="h-sm" style={{ marginTop: 2 }}>Own login, own NIC, but guardian link remains until 18th birthday.</div>
        </Box>

        <Btn>Link NIC & upgrade account →</Btn>
      </div>
    </Phone>
  );
}

function V3_T2a_Birthday18Child() {
  return (
    <Phone>
      <Header back title="" />
      <div className="wf-body" style={{ paddingTop: 20 }}>
        <div className="center" style={{ flexDirection:'column' }}>
          <Circ size={70} fill="#d8f0e2" style={{ borderColor:'#1e9459', borderWidth: 2.5, fontSize: 28, color:'#1e9459' }}>✓</Circ>
          <H size="xl" style={{ marginTop: 10, textAlign:'center', maxWidth: 240 }}>
            Welcome to full<br/>citizenship, Kavindu.
          </H>
          <Mono style={{ marginTop: 4 }}>You're 18 today 🎉</Mono>
        </div>

        <div className="h-sm" style={{ color:'#4a4640', marginTop: 12, lineHeight: 1.4, textAlign:'center', maxWidth: 260, marginInline:'auto' }}>
          Your Lanka Seva account is now fully independent. All your records have been transferred.
        </div>

        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Carried over</Mono>
        <Box className="fill tight">
          <div className="h-sm" style={{ lineHeight: 1.7 }}>
            <span className="tick">✓</span> Health & immunisation history<br/>
            <span className="tick">✓</span> Education records & exam results<br/>
            <span className="tick">✓</span> Government service history<br/>
            <span className="tick">✓</span> Uploaded documents
          </div>
        </Box>

        <Mono up style={{ display:'block', margin:'4px 0 4px', color:'#d97706' }}>New unlocks</Mono>
        <Box className="accent">
          <div className="h-sm" style={{ lineHeight: 1.7 }}>
            → All government services<br/>
            → GovPay & LankaQR payments<br/>
            → EPF · driving licence · tax<br/>
            → Private account · Sampath can't view
          </div>
        </Box>
        <Btn>Explore Lanka Seva →</Btn>
      </div>
    </Phone>
  );
}

function V3_T2b_Birthday18Parent() {
  return (
    <Phone>
      <Header back title="Family update" />
      <div className="wf-body">
        <div style={{ background:'#1a1815', color:'white', padding: 10, borderRadius: 8, marginBottom: 10, display:'flex', alignItems:'center', gap: 8 }}>
          <LSMark size={20} />
          <div style={{ flex:1, fontFamily:'Kalam', fontSize: 11 }}>
            <div style={{ fontWeight:600 }}>Kavindu's account is now independent</div>
            <Mono tiny style={{ color:'#aaa' }}>00:00</Mono>
          </div>
        </div>

        <H size="md">Kavindu has turned 18</H>
        <Mono style={{ marginBottom: 8 }}>Their Lanka Seva account has separated automatically</Mono>

        <Mono up style={{ display:'block', marginBottom: 4 }}>What happened</Mono>
        <Box>
          <div className="h-sm" style={{ lineHeight: 1.7 }}>
            <span className="tick">✓</span> Records transferred to their own account<br/>
            <span className="tick">✓</span> Removed from your household members<br/>
            <span className="cross">✗</span> You can no longer view their services<br/>
            <span className="cross">✗</span> You can no longer view their history
          </div>
        </Box>

        <Box className="brand">
          <Mono>🛡 Privacy-first · in line with Sri Lankan law on adult privacy</Mono>
        </Box>

        <Btn>OK, understood</Btn>
        <Mono style={{ textAlign:'center', display:'block' }}>Message Kavindu via WhatsApp ↗</Mono>
      </div>
    </Phone>
  );
}

function V3_T2c_FirstAdultHome() {
  return (
    <Phone>
      <div className="wf-header">
        <LSMark size={22} />
        <div className="grow">
          <div className="h-md">Hello, Kavindu</div>
          <Mono>Lanka Seva</Mono>
        </div>
        <div className="h-icon">🔔</div>
        <Circ size={26}>KP</Circ>
      </div>
      <div className="wf-body tight" style={{ paddingBottom: 8 }}>
        {/* Welcome banner */}
        <Box className="accent" style={{ position:'relative' }}>
          <div className="flex-b">
            <div style={{ flex:1 }}>
              <div className="h-md">🎉 Your account is fully yours now</div>
              <Mono>Explore everything Lanka Seva offers</Mono>
            </div>
            <Mono>×</Mono>
          </div>
        </Box>

        {/* Adult-style blue ID card */}
        <Box className="brand-dark" style={{ marginTop: 6 }}>
          <div className="flex-c">
            <Circ size={48} fill="#fcfaf5" style={{ color:'#2b5fa8' }}>KP</Circ>
            <div className="grow">
              <div className="h-lg" style={{ color:'white' }}>Kavindu Chamara Perera</div>
              <Mono style={{ color:'#cbd9ee' }}>NIC 200934500987 · SL-UDI ✓</Mono>
              <Mono style={{ color:'#cbd9ee' }}>LS-2026-84291</Mono>
            </div>
          </div>
        </Box>

        <Box className="amber-dark" style={{ marginTop: 6 }}>
          <Mono up style={{ color:'#fde8c4' }}>New services available</Mono>
          <div className="h-md" style={{ color:'white', marginTop: 2 }}>Tap to explore</div>
          <div className="flex gap-2 mt-2" style={{ flexWrap:'wrap' }}>
            <Pill className="amber-fill" style={{ background:'white', color:'#d97706' }}>Driving licence</Pill>
            <Pill className="amber-fill" style={{ background:'white', color:'#d97706' }}>EPF</Pill>
            <Pill className="amber-fill" style={{ background:'white', color:'#d97706' }}>Tax</Pill>
            <Pill className="amber-fill" style={{ background:'white', color:'#d97706' }}>GovPay</Pill>
          </div>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Carried over from before</Mono>
        <Row left={<Swatch size="sm" fill="#d8f0e2">💉</Swatch>} title="Health card · up to date"
          sub="MMR booster Jul 2026" chev={false} />
        <Row left={<Swatch size="sm" fill="#d8e3f5">🎓</Swatch>} title="O/L results · 2027"
          sub="Saved" chev={false} />

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Quick actions</Mono>
        <div className="grid-4 mb-3">
          {[['🪪','NIC'],['💼','EPF'],['🚗','Lic.'],['QR','Pay']].map(([i,l])=>(
            <Box key={l} className="tight" style={{ textAlign:'center', padding:'8px 4px', margin: 0 }}>
              <div style={{ fontSize: 16 }}>{i}</div>
              <Mono tiny>{l}</Mono>
            </Box>
          ))}
        </div>
      </div>
      <TabBar active="home" />
      <Anno top={250} right={4}>Adult tab bar returns · QR back</Anno>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 6 — GUARDIAN APPROVAL (G1-G3)
// ═══════════════════════════════════════════════════════════════

function V3_G1_ApprovalParent() {
  return (
    <Phone>
      <div style={{ background:'#1a1815', color:'white', padding:'8px 12px', display:'flex', alignItems:'center', gap: 8, borderBottom:'2px solid #1a1815' }}>
        <LSMark size={20} />
        <div style={{ flex:1, fontFamily:'Kalam', fontSize: 11 }}>
          <div style={{ fontWeight:600 }}>Kavindu wants to book an appointment</div>
          <Mono tiny style={{ color:'#aaa' }}>just now</Mono>
        </div>
        <Btn className="sm" style={{ margin: 0, padding:'2px 8px', fontSize: 9 }}>Approve</Btn>
      </div>

      <Header back title="Approval request · Kavindu" />
      <div className="wf-body tight">
        <Box className="row" style={{ borderColor:'#d97706', background:'#fff8ed' }}>
          <Circ size={40} fill="#fde8c4">KP</Circ>
          <div className="grow">
            <Mono up>Kavindu wants to:</Mono>
            <div className="h-lg">Book hospital appointment</div>
            <Mono>Maharagama BH · MMR booster vaccination</Mono>
          </div>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Booking</Mono>
        <Box>
          <div className="flex-b mb-2"><Mono>Hospital</Mono><span className="h-sm">Maharagama BH</span></div>
          <div className="flex-b mb-2"><Mono>Date</Mono><span className="h-sm">Wed 28 May 2026</span></div>
          <div className="flex-b mb-2"><Mono>Time</Mono><span className="h-sm">09:30 AM</span></div>
          <div className="flex-b mb-2"><Mono>Vaccine</Mono><span className="h-sm">MMR booster</span></div>
          <Div />
          <div className="flex-b"><Mono>Cost</Mono><Pill className="green">Free · Govt programme</Pill></div>
        </Box>

        <Btn>Approve →</Btn>
        <Btn className="ghost">Decline</Btn>

        <Box className="row tight" style={{ marginTop: 4 }}>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight: 600 }}>Auto-approve future health appointments</div>
            <Mono>One less notification</Mono>
          </div>
          <div className="box tight" style={{ background:'#c8c4be', width: 32, padding: 3, margin: 0 }}>
            <span style={{ background:'white', width:12, height:12, borderRadius:6, display:'block' }} />
          </div>
        </Box>

        <Box className="amber-dark">
          <div className="flex-b">
            <Mono up style={{ color:'#fde8c4' }}>Kavindu is waiting</Mono>
            <H size="md" style={{ color:'white' }}>9:42</H>
          </div>
          <Mono style={{ color:'#fde8c4' }}>Request expires in 10 minutes</Mono>
        </Box>
      </div>
    </Phone>
  );
}

function V3_G2_ChildWaiting() {
  return (
    <Phone>
      <Header back title="Waiting for approval" />
      <div className="wf-body center" style={{ flexDirection:'column', textAlign:'center', paddingTop: 18 }}>
        <UnderParent style={{ marginBottom: 8 }} />
        {/* Animated clock placeholder */}
        <Circ size={84} fill="#fff8ed" style={{ borderColor:'#d97706', borderWidth: 2.5, color:'#d97706', fontSize: 36 }}>⏱</Circ>
        <H size="xl" style={{ marginTop: 12 }}>Waiting for Sampath</H>
        <Mono style={{ marginBottom: 12 }}>We've sent a notification to your parent's phone</Mono>

        <Box style={{ width: '100%', textAlign:'left' }}>
          <Mono up>Your request</Mono>
          <Div />
          <div className="flex-b mb-2"><Mono>What</Mono><span className="h-sm">Hospital appt</span></div>
          <div className="flex-b mb-2"><Mono>Where</Mono><span className="h-sm">Maharagama BH</span></div>
          <div className="flex-b mb-2"><Mono>When</Mono><span className="h-sm">28 May · 09:30 AM</span></div>
          <div className="flex-b"><Mono>For</Mono><span className="h-sm">MMR booster</span></div>
        </Box>

        <Box className="amber-dark" style={{ width:'100%', marginTop: 8 }}>
          <div className="flex-b">
            <Mono up style={{ color:'#fde8c4' }}>Expires in</Mono>
            <H size="lg" style={{ color:'white' }}>9:42</H>
          </div>
        </Box>

        <Mono style={{ display:'block', color:'#c43a48', marginTop: 8 }}>Cancel request</Mono>
        <div className="h-tiny" style={{ marginTop: 6, color:'#4a4640', maxWidth: 220 }}>
          Once Sampath approves, your appointment will be confirmed automatically.
        </div>
      </div>
    </Phone>
  );
}

function V3_G3_ApprovalSettings() {
  return (
    <Phone>
      <Header back title="Approval settings · Kavindu" />
      <div className="wf-body tight">
        <Mono style={{ marginBottom: 8 }}>Choose which actions need your approval first.</Mono>

        <Mono up style={{ display:'block', marginBottom: 4 }}>Always require approval · locked</Mono>
        {[
          ['💰','Any payment or financial transaction'],
          ['↗','Sharing documents externally'],
          ['✎','Account or profile changes'],
        ].map(([i,t])=>(
          <Box key={t} className="row tight">
            <Swatch size="sm">{i}</Swatch>
            <div className="grow"><div className="h-sm">{t}</div></div>
            <Pill className="green">🔒 ON</Pill>
          </Box>
        ))}

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Require approval · togglable</Mono>
        {[
          ['♥','Health appointments','Book hospital, clinic, doctor', true],
          ['📜','Document downloads','Save official documents', false],
          ['🎓','Education applications','Scholarships, exam registration', true],
          ['📞','Emergency contacts','Changing emergency contact info', true],
        ].map(([i,t,s,on])=>(
          <Box key={t} className="row tight">
            <Swatch size="sm">{i}</Swatch>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight: 600 }}>{t}</div>
              <Mono>{s}</Mono>
            </div>
            <div className="box tight" style={{ background: on?'#1e9459':'#c8c4be', width: 32, padding: 3, margin: 0 }}>
              <span style={{ background:'white', width:12, height:12, borderRadius:6, display:'block', marginLeft: on?'auto':0 }} />
            </div>
          </Box>
        ))}

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Auto-approve · locked</Mono>
        {[
          ['📞','Emergency calls (1990)','Always auto · cannot disable'],
          ['👁','Viewing information & records','Always auto'],
        ].map(([i,t,s])=>(
          <Box key={t} className="row tight">
            <Swatch size="sm">{i}</Swatch>
            <div className="grow">
              <div className="h-sm">{t}</div>
              <Mono>{s}</Mono>
            </div>
            <Pill>🔒</Pill>
          </Box>
        ))}

        <Btn>Save settings</Btn>
        <Mono style={{ textAlign:'center', display:'block' }}>Settings are removed automatically at age 18</Mono>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE 7 — LIFE-STAGE INFOGRAPHIC
// ═══════════════════════════════════════════════════════════════

function V3_LifeStage() {
  // Mini phone — only the body, no chrome, used as small inline preview
  const Mini = ({ accent = '#fde8c4', title, children }) => (
    <div style={{
      width: 220, background:'#fcfaf5', border:'2px solid #1a1815', borderRadius: 14,
      boxShadow:'0 4px 0 #1a1815', overflow:'hidden', fontFamily:'Kalam', flexShrink: 0
    }}>
      <div style={{ background: accent, padding:'8px 10px', borderBottom:'2px solid #1a1815', fontFamily:'Kalam', fontWeight: 700, fontSize: 12 }}>{title}</div>
      <div style={{ padding: 10 }}>{children}</div>
    </div>
  );
  const Marker = ({ children, big, star, green }) => (
    <div style={{
      width: big ? 64 : 48, height: big ? 64 : 48, borderRadius:'50%',
      background: green ? '#1e9459' : star ? '#d97706' : '#fcfaf5',
      border:'2.5px solid #1a1815', color: green || star ? 'white' : '#1a1815',
      display:'flex', alignItems:'center', justifyContent:'center',
      fontFamily:'Kalam', fontWeight: 700, fontSize: big ? 20 : 14,
      flexShrink: 0, boxShadow:'0 3px 0 #1a1815'
    }}>{children}</div>
  );
  const Stage = ({ marker, label, sub, children, milestone }) => (
    <div style={{ display:'flex', gap: 18, alignItems:'flex-start' }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink: 0, paddingTop: 4 }}>
        {marker}
        <div style={{ width: 2.5, flex: 1, borderLeft:'2px dashed #c8c4be', minHeight: 80, marginTop: 6 }} />
      </div>
      <div style={{ flex: 1, paddingBottom: 24 }}>
        <Mono up style={{ display:'block' }}>{label}</Mono>
        <div className="h-md" style={{ marginBottom: 4 }}>{sub}</div>
        {children}
        {milestone && (
          <Box className="amber-dark" style={{ marginTop: 8 }}>
            {milestone}
          </Box>
        )}
      </div>
    </div>
  );

  return (
    <div style={{ padding: 28, fontFamily:'Kalam', maxWidth: 1100 }}>
      <H size="xl" style={{ fontSize: 32 }}>Lanka Seva · Services from birth to adulthood</H>
      <Mono style={{ marginBottom: 24, fontSize: 12 }}>Every Sri Lankan citizen served at every life stage</Mono>

      <Stage marker={<Marker>0</Marker>} label="STAGE 1 · BIRTH · 0 days" sub="Done by parent">
        <div style={{ display:'flex', gap: 12 }}>
          <Mini accent="#d8e3f5" title="Register birth">
            <Input label="Parent NIC" value="200234500123" filled />
            <Mono>📜 BC reference generated</Mono>
            <Mono tiny>Registrar General's Dept</Mono>
          </Mini>
          <Mini accent="#d8f0e2" title="BCG · first vaccine">
            <Mono up>At birth</Mono>
            <div className="h-sm">BCG vaccine</div>
            <Mono>Hospital</Mono>
            <Pill className="green" style={{ marginTop: 4 }}>✓ Logged to health card</Pill>
          </Mini>
        </div>
      </Stage>

      <Stage marker={<Marker>0–5</Marker>} label="STAGE 2 · INFANT & TODDLER" sub="0–5 years">
        <Box className="fill">
          <div className="h-sm" style={{ lineHeight: 1.7 }}>
            · National immunisation schedule tracking<br/>
            · MOH clinic appointments<br/>
            · Nutrition programme registration (if eligible)<br/>
            · Midwife home visit scheduling
          </div>
        </Box>
      </Stage>

      <Stage marker={<Marker>5</Marker>} label="STAGE 3 · SCHOOL AGE · 5–10" sub="Parent applies">
        <div style={{ display:'flex', gap: 12, alignItems:'flex-start' }}>
          <Mini accent="#d8e3f5" title="School admission · Grade 1">
            <Input label="Child" value="Kavindu Perera" filled />
            <Mono>Zone: Maharagama</Mono>
            <Mono>3 preferences ranked</Mono>
            <Pill className="blue" style={{ marginTop: 4 }}>Submitted</Pill>
          </Mini>
          <Box className="fill" style={{ flex: 1, margin: 0 }}>
            <div className="h-sm" style={{ lineHeight: 1.7 }}>
              · Grade 5 scholarship exam<br/>
              · Grade 5 results notification<br/>
              · School transfer applications<br/>
              · Child health clinic appointments
            </div>
          </Box>
        </div>
      </Stage>

      <Stage marker={<Marker>10–15</Marker>} label="STAGE 4 · PRE-TEEN · 10–15" sub="Parent-assisted">
        <div style={{ display:'flex', gap: 12, alignItems:'flex-start' }}>
          <Mini accent="#fde8c4" title="O/L registration · 2028">
            <Mono up>Index</Mono>
            <div className="h-sm">OL-2028-····</div>
            <Mono>Subjects: 9 · Exam centre: Maharagama</Mono>
            <Pill className="green" style={{ marginTop: 4 }}>Registered</Pill>
          </Mini>
          <Box className="fill" style={{ flex: 1, margin: 0 }}>
            <div className="h-sm" style={{ lineHeight: 1.7 }}>
              · Mahapola / Bursary scholarships<br/>
              · Passport for travel<br/>
              · Youth programme registrations<br/>
              · School report & results
            </div>
          </Box>
        </div>
      </Stage>

      <Stage marker={<Marker big star>16 ★</Marker>} label="STAGE 5 · NIC AGE · 16" sub="🎂 The biggest milestone"
        milestone={
          <>
            <Mono up style={{ color:'#fde8c4' }}>Age 16 changes everything</Mono>
            <div className="h-sm" style={{ color:'white', marginTop: 4, lineHeight: 1.6 }}>
              ✓ First NIC — official identity<br/>
              ✓ Lanka Seva teen account (own login)<br/>
              ✓ A/L exam registration (own action)<br/>
              ✓ Driving learner's permit (age 17)
            </div>
          </>
        }>
        <Mini accent="#fde8c4" title="Apply for your NIC">
          <Mono>You're 16 — apply at Divisional Secretariat</Mono>
          <Btn className="sm" style={{ margin: '6px 0 4px', padding:'4px 8px' }}>Download Form A</Btn>
          <Mono tiny>Lanka Seva account upgrades automatically</Mono>
        </Mini>
      </Stage>

      <Stage marker={<Marker>16–17</Marker>} label="STAGE 6 · TEEN · 16–17" sub="Teen manages independently">
        <div style={{ display:'flex', gap: 12 }}>
          <Mini accent="#d8e3f5" title="A/L registration · 2027">
            <Mono>Stream: Biology</Mono>
            <Mono>Subjects: 3 + GK + English</Mono>
            <Pill className="blue" style={{ marginTop: 4 }}>Submitted</Pill>
          </Mini>
          <Mini accent="#d8e3f5" title="UGC · University apply">
            <Mono up>Z-score</Mono>
            <div className="h-sm" style={{ color:'#d97706' }}>1.8423</div>
            <Mono>Ranked: 12 courses</Mono>
            <Pill className="amber" style={{ marginTop: 4 }}>In progress</Pill>
          </Mini>
        </div>
        <Box className="fill" style={{ marginTop: 8 }}>
          <div className="h-sm" style={{ lineHeight: 1.7 }}>
            · Driving learner's permit (age 17)<br/>
            · Mahapola scholarship (own action)<br/>
            · Passport renewal (own action + parent OTP under 18)
          </div>
        </Box>
      </Stage>

      <div style={{ display:'flex', gap: 18, alignItems:'flex-start' }}>
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink: 0, paddingTop: 4 }}>
          <Marker big green>18 ✓</Marker>
        </div>
        <div style={{ flex: 1 }}>
          <Mono up style={{ display:'block' }}>STAGE 7 · ADULTHOOD · 18</Mono>
          <div className="h-md">🎉 Full independence</div>
          <Box style={{ background:'#e8f5ee', borderColor:'#1e9459', marginTop: 8 }}>
            <Mono up style={{ color:'#1a6645' }}>At 18, Lanka Seva automatically</Mono>
            <div className="h-sm" style={{ marginTop: 4, lineHeight: 1.7 }}>
              → Separates account from parent<br/>
              → Transfers all history<br/>
              → Unlocks: GovPay payments · EPF · tax · driving licence · full document wallet · full service access<br/>
              → Parent access ends completely
            </div>
          </Box>
        </div>
      </div>

      <Box className="brand" style={{ marginTop: 28 }}>
        <Mono up>Footer</Mono>
        <div className="h-sm" style={{ marginTop: 4, lineHeight: 1.5 }}>
          The family account system ensures no Sri Lankan citizen is excluded from government services at any age.
          Parents manage services for children, with automatic transitions preserving history and privacy at every milestone.
        </div>
      </Box>
    </div>
  );
}

Object.assign(window, {
  ChildTabBar, UnderParent, Vax,
  L1_AdultLogin, L2_Under18Detected, L3_FamilySignIn, L4_ParentApproval,
  V3_A1_Household, V3_A2_BirthCert, V3_A3_Verified, V3_A4_Setup, V3_A5_Added,
  V3_C1_ChildProfile, V3_C2_ChildHome, V3_C3_ChildServices,
  V3_H1_HealthCard, V3_H2_Immunisation, V3_H3_BookAppt,
  V3_T1a_Birthday16Child, V3_T1b_Birthday16Parent, V3_T1c_LinkNIC,
  V3_T2a_Birthday18Child, V3_T2b_Birthday18Parent, V3_T2c_FirstAdultHome,
  V3_G1_ApprovalParent, V3_G2_ChildWaiting, V3_G3_ApprovalSettings,
  V3_LifeStage,
});
