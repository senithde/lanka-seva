// screens-2.jsx — Lanka Seva wireframes
// Groups: Profile (P1-P11), Locate (L1-L3), Supporting (X1-X8)

// ═══════════════════════════════════════════════════════════════
// GROUP 8 — PROFILE: identity + documents (P1-P4)
// ═══════════════════════════════════════════════════════════════

function P1_Profile() {
  return (
    <Phone>
      <Header title="Profile" right={<div className="h-icon">⚙</div>} />
      <div className="wf-body tight">
        <Box className="brand-dark">
          <div className="flex-c">
            <Circ size={56} fill="#fcfaf5" style={{ color:'#2b5fa8' }}>SP</Circ>
            <div className="grow">
              <div className="h-lg" style={{ color:'white' }}>Sampath K. Perera</div>
              <Mono style={{ color:'#cbd9ee' }}>NIC ···· 0123</Mono>
              <div className="flex gap-2 mt-2">
                <Pill className="green">✓ SL-UDI Verified</Pill>
              </div>
            </div>
          </div>
          <div className="mono up" style={{ color:'#cbd9ee', marginTop: 8 }}>Lanka Seva ID</div>
          <div className="h-md" style={{ color:'white' }}>LS-2026-48312</div>
        </Box>

        <Row left={<Swatch>👤</Swatch>} title="Personal details" sub="Edit name, address, contact" />
        <Row left={<Swatch>🪪</Swatch>} title="My documents" sub="5 saved · 1 expiring" badge={<Pill className="amber">1</Pill>} />
        <Row left={<Swatch>🏦</Swatch>} title="Bank accounts" sub="BOC ···· 4821 · default + 1 more" />
        <Row left={<Swatch>📋</Swatch>} title="Application history" sub="3 active · 12 completed" badge={<Pill className="blue">3</Pill>} />

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Settings</Mono>
        <Row left={<Swatch size="sm">⚙</Swatch>} title="Language · English" chev />
        <Row left={<Swatch size="sm">◐</Swatch>} title="Appearance · Light" chev />
        <Row left={<Swatch size="sm">🔒</Swatch>} title="Security & biometric" chev />
        <Row left={<Swatch size="sm">❔</Swatch>} title="Help & support" chev />
        <Btn className="ghost sm" style={{ color:'#c43a48', borderColor:'#c43a48', marginTop: 8 }}>Sign out</Btn>
      </div>
      <TabBar active="prof" />
    </Phone>
  );
}

function P2_DocWallet() {
  const docs = [
    { i:'🪪', t:'NIC', sub:'200234500123', st:'verified', meta:'Auto-sync · SL-UDI' },
    { i:'🚗', t:'Driving Licence', sub:'B1234567', st:'verified', meta:'Expires 14 Mar 2028' },
    { i:'🌐', t:'Passport', sub:'N9871234', st:'verified', meta:'Expires 09 Jun 2027' },
    { i:'🧾', t:'Revenue Licence', sub:'CAB-2245', st:'amber', meta:'Expires 31 Dec 2026' },
    { i:'📜', t:'Birth Certificate', sub:'reg ··429', st:'pending', meta:'Verification in 2-3 days' },
  ];
  const pill = (st) => st==='verified' ? <Pill className="green">✓ VERIFIED</Pill>
    : st==='amber' ? <Pill className="amber">RENEW SOON</Pill>
    : <Pill className="blue">PENDING</Pill>;
  return (
    <Phone>
      <Header back title="My Documents" right={<div className="h-icon">+</div>} />
      <div className="wf-body tight">
        {docs.map((d,i)=>(
          <Box key={i} className="row" style={d.st==='amber'?{ borderColor:'#d97706' }:null}>
            <Swatch size="lg" fill="#f1ede4">{d.i}</Swatch>
            <div className="grow">
              <div className="h-md">{d.t}</div>
              <Mono>{d.sub}</Mono>
              <Mono tiny style={{ color:'#1a6645' }}>{d.meta}</Mono>
            </div>
            <div style={{ textAlign:'right' }}>
              {pill(d.st)}
              <div className="chev" style={{ marginTop: 4 }}>›</div>
            </div>
          </Box>
        ))}
        <Box className="dash center" style={{ flexDirection:'column', padding: 16, color:'#8a8680' }}>
          <div style={{ fontSize: 22 }}>+</div>
          <Mono>Add document</Mono>
        </Box>
      </div>
    </Phone>
  );
}

function P3_DocDetail() {
  return (
    <Phone>
      <Header back title="Driving Licence" right={<Mono>···</Mono>} />
      <div className="wf-body tight">
        <Mono up>Department of Motor Traffic</Mono>
        <Box style={{ background:'#f1ede4', padding: 14, marginTop: 6, position:'relative' }}>
          <div className="flex-c">
            <Circ size={40} fill="#fff">SP</Circ>
            <div className="grow">
              <div className="h-md">Sampath K. Perera</div>
              <Mono>14 Aug 1968 · Male</Mono>
            </div>
          </div>
          <Div />
          <div className="grid-2">
            <div><Mono tiny up>Licence No.</Mono><div className="h-sm" style={{ fontWeight:600 }}>B1234567</div></div>
            <div><Mono tiny up>Classes</Mono><div className="h-sm" style={{ fontWeight:600 }}>A1, B, B1</div></div>
            <div><Mono tiny up>Issued</Mono><div className="h-sm">14 Mar 2018</div></div>
            <div><Mono tiny up>Expires</Mono><div className="h-sm">14 Mar 2028</div></div>
          </div>
          <div style={{ position:'absolute', bottom: 8, right: 8, transform:'rotate(-12deg)', border:'2px solid #1e9459', color:'#1e9459', padding:'2px 6px', fontFamily:'Kalam', fontSize: 9, fontWeight: 700 }}>
            VERIFIED BY DMT
          </div>
        </Box>
        <div className="grid-3 mt-3">
          <Btn className="ghost sm">Share QR</Btn>
          <Btn className="ghost sm">PDF</Btn>
          <Btn className="ghost sm">Report</Btn>
        </div>
        <Box className="accent" style={{ marginTop: 8 }}>
          <div className="flex-c">
            <QR size={60} />
            <div className="grow">
              <Mono up>Show this QR to verify</Mono>
              <div className="h-sm" style={{ fontWeight:600 }}>Refreshes every 5 min</div>
              <Mono tiny>Valid until 09:43</Mono>
            </div>
          </div>
        </Box>
      </div>
    </Phone>
  );
}

function P4_AddDoc() {
  return (
    <Phone>
      <Header back title="Add document" />
      <div className="wf-body tight">
        <H size="md">What are you adding?</H>
        <div className="grid-3 mt-3">
          {[
            ['🪪','NIC'],['🚗','Licence'],['🌐','Passport'],
            ['📜','Birth'],['💍','Marriage'],['🧾','Revenue']
          ].map(([i,t])=>(
            <Box key={t} className="tight" style={{ textAlign:'center', padding:'12px 4px', margin: 0 }}>
              <Swatch size="lg" style={{ margin:'0 auto' }}>{i}</Swatch>
              <Mono tiny style={{ display:'block', marginTop: 4 }}>{t}</Mono>
            </Box>
          ))}
        </div>
        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Birth Certificate · upload</Mono>
        <div className="grid-2">
          <Box className="dash center" style={{ flexDirection:'column', padding: 18 }}>
            <div style={{ fontSize: 20 }}>📷</div>
            <Mono>Front</Mono>
          </Box>
          <Box className="dash center" style={{ flexDirection:'column', padding: 18 }}>
            <div style={{ fontSize: 20 }}>📷</div>
            <Mono>Back</Mono>
          </Box>
        </div>
        <Box className="brand" style={{ marginTop: 8 }}>
          <Mono>ℹ Verification by Registrar General · 2-3 days</Mono>
        </Box>
        <Btn>Submit for review →</Btn>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP 9 — PROFILE: bank/history/settings (P5-P11)
// ═══════════════════════════════════════════════════════════════

function P5_AddBank() {
  const banks = ['BOC','PB','Comm','HNB','Samp','NTB','DFCC','NDB','NSB'];
  return (
    <Phone>
      <Header back title="Add bank account" />
      <div className="wf-body tight">
        <div className="input mb-3">
          <span>🔍</span><span className="ph">Search 22 banks…</span>
        </div>
        <Mono up style={{ display:'block', marginBottom: 4 }}>Choose bank</Mono>
        <div className="grid-3 mb-3">
          {banks.map(b=>(
            <Box key={b} className="tight" style={{ textAlign:'center', padding:'10px 4px', margin: 0,
              ...(b==='Comm' ? { borderColor:'#d97706', background:'#fde8c4' } : {}) }}>
              <Circ size={26} style={{ margin:'0 auto 4px' }}>{b[0]}</Circ>
              <Mono tiny>{b}</Mono>
            </Box>
          ))}
        </div>
        <Input label="Account no." value="8001234567" focus />
        <Input label="Account holder" value="Sampath K. Perera" filled />
        <Box className="brand">
          <Mono>📨 OTP will be sent to verify ownership</Mono>
        </Box>
        <div className="flex-c mt-3">
          <div className="box tight" style={{ background:'#1e9459', width: 36, padding: 3, margin: 0 }}>
            <span style={{ background:'white', width:14, height:14, borderRadius:7, display:'block', marginLeft:'auto' }} />
          </div>
          <Mono>Set as default account</Mono>
        </div>
        <Btn>Send OTP →</Btn>
      </div>
    </Phone>
  );
}

function P6_AppHistory() {
  const apps = [
    { ic:'📜', t:'Birth certificate', r:'BC-2026-9914', st:'In Review', stc:'blue', d:'Submitted 12 May · upd 2d ago' },
    { ic:'🚗', t:'Revenue licence renewal', r:'RL-2026-8801', st:'Action needed', stc:'amber', d:'Pay surcharge by 31 May' },
    { ic:'💼', t:'EPF claim', r:'EPF-2025-44712', st:'Approved', stc:'green', d:'Credited 14 Mar 2026' },
    { ic:'⚖', t:'Court fee · case 8821', r:'CF-2026-0142', st:'Completed', stc:'green', d:'Paid 02 May 2026' },
    { ic:'🌐', t:'Passport renewal', r:'PP-2026-3309', st:'Rejected', stc:'red', d:'Photo not clear · re-apply' },
  ];
  return (
    <Phone>
      <Header back title="Applications" />
      <div className="wf-body tight">
        <div className="flex gap-2 mb-3">
          {['All','Active','Completed','Rejected'].map((t,i)=>(
            <Pill key={t} className={i===0?'amber-fill':''}>{t}</Pill>
          ))}
        </div>
        {apps.map((a,i)=>(
          <Box key={i} className="row">
            <Swatch>{a.ic}</Swatch>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight:600 }}>{a.t}</div>
              <Mono tiny>Ref {a.r}</Mono>
              <Mono tiny>{a.d}</Mono>
            </div>
            <Pill className={a.stc}>{a.st}</Pill>
          </Box>
        ))}
      </div>
    </Phone>
  );
}

function P7_AppStatus() {
  const steps = [
    { t:'Submitted', d:'12 May 2026', st:'done' },
    { t:'Documents verified', d:'14 May 2026', st:'done' },
    { t:'Under review', d:'Registrar · Maharagama', st:'cur' },
    { t:'Approved & printed', d:'Pending', st:'pend' },
    { t:'Ready for collection', d:'Pending', st:'pend' },
  ];
  return (
    <Phone>
      <Header back title="Application status" />
      <div className="wf-body tight">
        <Mono up>Birth Certificate · BC-2026-9914</Mono>
        <H size="lg" style={{ marginTop: 4 }}>In review</H>
        <Mono>Expected: 28 May 2026</Mono>

        <Box className="amber-dark" style={{ marginTop: 10 }}>
          <Mono up style={{ color:'#fde8c4' }}>Next action — yours</Mono>
          <div className="h-md" style={{ color:'white', marginTop: 2 }}>Upload your parents' NIC copies</div>
          <Btn className="ghost sm" style={{ background:'white', color:'#d97706', borderColor:'white', marginTop: 6, marginBottom: 0 }}>Upload →</Btn>
        </Box>

        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Progress</Mono>
        <div>
          {steps.map((s,i)=>(
            <div key={i} className="flex gap-2" style={{ alignItems:'flex-start', position:'relative', paddingBottom: 12 }}>
              <Circ size={22} fill={s.st==='done'?'#d8f0e2':s.st==='cur'?'#fde8c4':'#fff'}
                style={{ borderColor:s.st==='done'?'#1e9459':s.st==='cur'?'#d97706':'#c8c4be', flexShrink:0, fontSize: 11 }}>
                {s.st==='done'?'✓':s.st==='cur'?'●':'○'}
              </Circ>
              <div className="grow">
                <div className="h-sm" style={{ fontWeight:600 }}>{s.t}</div>
                <Mono>{s.d}</Mono>
              </div>
              {i<steps.length-1 && <div style={{ position:'absolute', left:10, top: 22, bottom: 0, width:1.5, borderLeft:'1.5px dashed #c8c4be' }} />}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <Btn className="ghost sm" style={{ flex:1 }}>📞 Call office</Btn>
          <Btn className="ghost sm" style={{ flex:1 }}>📍 Directions</Btn>
        </div>
      </div>
    </Phone>
  );
}

function P8_Settings() {
  const groups = [
    { ic:'◐', t:'Appearance', s:'Light · System default' },
    { ic:'🌐', t:'Language', s:'English' },
    { ic:'A', t:'Font size', s:'Medium' },
    { ic:'🔔', t:'Notifications', s:'All categories' },
    { ic:'🔒', t:'Security', s:'Face ID · 6-digit PIN' },
    { ic:'⚇', t:'Privacy', s:'Data usage settings' },
    { ic:'♿', t:'Accessibility', s:'Reduce motion · off' },
    { ic:'❔', t:'Help & support', s:'1919 · chat · feedback' },
    { ic:'ℹ', t:'About Lanka Seva', s:'v 1.4.2' },
  ];
  return (
    <Phone>
      <Header back title="Settings" />
      <div className="wf-body tight">
        {groups.map((g,i)=>(
          <Row key={i} left={<Swatch size="sm">{g.ic}</Swatch>} title={g.t} sub={g.s} />
        ))}
        <Btn className="ghost sm" style={{ color:'#c43a48', borderColor:'#c43a48', marginTop: 10 }}>Sign out</Btn>
        <div className="h-tiny" style={{ textAlign:'center', marginTop: 6 }}>
          Ministry of Digital Economy · ICTA
        </div>
      </div>
    </Phone>
  );
}

function P9_Theme() {
  const themes = [
    { t:'Light', bg:'#fcfaf5', sel:true },
    { t:'Dark', bg:'#1a1815', dark:true },
    { t:'High contrast', bg:'#000', dark:true, hc:true },
    { t:'System', bg:'linear-gradient(135deg, #fcfaf5 50%, #1a1815 50%)' },
  ];
  return (
    <Phone>
      <Header back title="Appearance" />
      <div className="wf-body">
        <H size="md">Choose your theme</H>
        <Mono style={{ marginBottom: 10 }}>Changes apply instantly</Mono>
        <div className="grid-2">
          {themes.map(t=>(
            <Box key={t.t} className={t.sel?'accent':''} style={{ padding: 8, textAlign:'center' }}>
              <div style={{
                background: t.bg, height: 100, borderRadius: 4, border:'1.5px solid #1a1815',
                padding: 8, color: t.dark?'white':'#1a1815', fontFamily:'Kalam',
                display:'flex', flexDirection:'column', justifyContent:'space-between',
                ...(t.hc ? { color:'#ffff00' } : {})
              }}>
                <div style={{ fontSize: 10, fontWeight: 700, textAlign:'left' }}>Lanka Seva</div>
                <div style={{ background: t.hc?'#ffff00':'#d97706', height: 14, borderRadius: 3, color:t.hc?'#000':'white', fontSize: 7, padding:'2px 6px', textAlign:'left', fontWeight:700 }}>BUTTON</div>
              </div>
              <div className="flex-b mt-2">
                <div className="h-sm" style={{ fontWeight:600 }}>{t.t}</div>
                {t.sel && <Circ size={18} fill="#d97706" style={{ color:'white', borderColor:'#1a1815' }}>✓</Circ>}
              </div>
            </Box>
          ))}
        </div>
      </div>
    </Phone>
  );
}

function P10_A11y() {
  return (
    <Phone>
      <Header back title="Accessibility" />
      <div className="wf-body tight">
        <Mono up style={{ display:'block', marginBottom: 4 }}>Font size — live preview</Mono>
        <Box>
          <div className="h-sm">The quick brown fox</div>
          <div style={{ marginTop: 6, display:'flex', alignItems:'center', gap: 8 }}>
            <Mono tiny>A</Mono>
            <div style={{ flex:1, height: 4, background:'#c8c4be', borderRadius: 2, position:'relative' }}>
              <div style={{ position:'absolute', left:'40%', top:-6, width: 16, height: 16, borderRadius: 8, background:'#d97706', border:'2px solid #1a1815' }} />
            </div>
            <Mono>A</Mono>
          </div>
        </Box>
        {[
          { t:'Bold text', s:'Heavier weight everywhere', on:false },
          { t:'Reduce motion', s:'Disable transitions & parallax', on:true },
          { t:'Simplified mode', s:'Bigger buttons · fewer options', on:false },
          { t:'One-handed mode', s:'Key actions move to bottom', on:false },
          { t:'Voice readout (TTS)', s:'Hear status updates aloud', on:false },
          { t:'High contrast', s:'Yellow on black', on:false },
        ].map((s,i)=>(
          <Box key={i} className="row">
            <div className="grow">
              <div className="h-sm" style={{ fontWeight: 600 }}>{s.t}</div>
              <Mono>{s.s}</Mono>
            </div>
            <div className="box tight" style={{ background: s.on?'#1e9459':'#c8c4be', width: 36, padding: 3, margin: 0 }}>
              <span style={{ background:'white', width:14, height:14, borderRadius:7, display:'block', marginLeft: s.on?'auto':0 }} />
            </div>
          </Box>
        ))}
      </div>
    </Phone>
  );
}

function P11_Security() {
  return (
    <Phone>
      <Header back title="Security" />
      <div className="wf-body tight">
        <Box className="row">
          <Swatch>☻</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Biometric login</div>
            <Mono>Face ID enabled</Mono>
          </div>
          <div className="box tight" style={{ background:'#1e9459', width: 36, padding: 3, margin: 0 }}>
            <span style={{ background:'white', width:14, height:14, borderRadius:7, display:'block', marginLeft:'auto' }} />
          </div>
        </Box>
        <Row left={<Swatch>🔢</Swatch>} title="Change PIN" sub="6 digits · last changed 12 Mar" />
        <Row left={<Swatch>🔐</Swatch>} title="Two-factor authentication" sub="Required for payments > Rs. 25,000" />

        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Linked devices · 3</Mono>
        {[
          { i:'📱', t:'iPhone 13 · this device', s:'Active now', red:false },
          { i:'📱', t:'Samsung A14', s:'Last active 2h ago', red:false },
          { i:'💻', t:'Browser · Chrome', s:'Last active 4d ago', red:true },
        ].map((d,i)=>(
          <Box key={i} className="row tight">
            <Swatch size="sm">{d.i}</Swatch>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight: 600 }}>{d.t}</div>
              <Mono>{d.s}</Mono>
            </div>
            {d.red && <Mono style={{ color:'#c43a48' }}>Remove</Mono>}
          </Box>
        ))}
        <Box className="brand" style={{ marginTop: 8 }}>
          <Mono>🛡 You'll be alerted of every new device login</Mono>
        </Box>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP 10 — LOCATE (L1-L3)
// ═══════════════════════════════════════════════════════════════

function L1_Locate() {
  return (
    <Phone>
      <Header title="Locate" right={<div className="h-icon">◉</div>} />
      <div className="wf-body tight">
        <div className="input mb-3">
          <span>🔍</span><span className="ph">Search offices, services…</span>
        </div>
        <div className="flex gap-2 mb-3" style={{ overflowX:'auto' }}>
          {['All','Health','Transport','Education','Legal','Welfare'].map((t,i)=>(
            <Pill key={t} className={i===0?'amber-fill':''}>{t}</Pill>
          ))}
        </div>
        <Box className="dash" style={{ height: 160, position:'relative', background:'#f1ede4', padding: 0 }}>
          <div style={{ position:'absolute', inset:0, opacity:0.4, background:
            'linear-gradient(0deg, transparent 49%, #c8c4be 49%, #c8c4be 50%, transparent 50%) 0 0 / 30px 30px,' +
            'linear-gradient(90deg, transparent 49%, #c8c4be 49%, #c8c4be 50%, transparent 50%) 0 0 / 30px 30px' }} />
          <div style={{ position:'absolute', top:'40%', left:'30%' }}>📍</div>
          <div style={{ position:'absolute', top:'25%', left:'55%' }}>📍</div>
          <div style={{ position:'absolute', top:'60%', left:'45%' }}>📍</div>
          <div style={{ position:'absolute', top:'55%', left:'72%' }}>📍</div>
          <Mono style={{ position:'absolute', bottom: 6, left: 8 }}>Maharagama · 1km radius</Mono>
        </Box>
        <Mono up style={{ display:'block', margin:'6px 0 4px' }}>Nearby</Mono>
        {[
          { ic:'🪪', t:'Divisional Secretariat', d:'0.4km', h:'8:30am–4:15pm', open:true, sec:'Identity' },
          { ic:'🚗', t:'DMT Werahera', d:'1.2km', h:'8:30am–4:00pm', open:true, sec:'Transport' },
          { ic:'♥', t:'Maharagama BH', d:'0.9km', h:'Open 24h', open:true, sec:'Health' },
          { ic:'⚖', t:'Magistrate Court', d:'2.1km', h:'Closed · opens 9am', open:false, sec:'Legal' },
        ].map((o,i)=>(
          <Box key={i} className="row tight">
            <Swatch>{o.ic}</Swatch>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight: 600 }}>{o.t}</div>
              <Mono>{o.d} · {o.sec}</Mono>
            </div>
            <div style={{ textAlign:'right' }}>
              <Pill className={o.open?'green':''}><span className="dotx"/>{o.open?'Open':'Closed'}</Pill>
              <Mono tiny style={{ display:'block', marginTop: 2 }}>{o.h}</Mono>
            </div>
          </Box>
        ))}
      </div>
      <TabBar active="loc" />
    </Phone>
  );
}

function L2_OfficeDetail() {
  return (
    <Phone>
      <Header back title="Office" right={<div className="h-icon">★</div>} />
      <div className="wf-body tight">
        <Box>
          <div className="flex-c">
            <Swatch size="lg">🪪</Swatch>
            <div className="grow">
              <div className="h-md">Divisional Secretariat</div>
              <Mono>Maharagama · Identity & Reg.</Mono>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Pill className="green"><span className="dotx"/>Open now</Pill>
            <Pill>Today 8:30am–4:15pm</Pill>
          </div>
        </Box>
        <Box className="dash" style={{ height: 90, position:'relative', background:'#f1ede4', padding: 0 }}>
          <div style={{ position:'absolute', top:'40%', left:'45%' }}>📍</div>
          <Mono style={{ position:'absolute', bottom: 6, left: 8 }}>High Level Rd, Maharagama</Mono>
        </Box>
        <Mono up style={{ display:'block', margin:'6px 0 4px' }}>Services here</Mono>
        <div className="h-sm" style={{ lineHeight: 1.5 }}>
          <span className="tick">✓</span> NIC issue & renewal<br/>
          <span className="tick">✓</span> Birth certificate<br/>
          <span className="tick">✓</span> Marriage registration<br/>
          <span className="tick">✓</span> Samurdhi / Aswesuma desk<br/>
        </div>
        <Div />
        <div className="flex-b mb-2">
          <Mono>📞 +94 11 285 0042</Mono>
          <Mono style={{ color:'#d97706' }}>Call</Mono>
        </div>
        <div className="flex gap-2">
          <Btn className="ghost" style={{ flex:1 }}>Officer hrs →</Btn>
          <Btn style={{ flex:1 }}>Directions →</Btn>
        </div>
      </div>
    </Phone>
  );
}

function L3_Officers() {
  const off = [
    { r:'Grama Niladhari', n:'W. M. Silva', st:'In office', stc:'green' },
    { r:'Asst. Secretary', n:'P. K. Jayasinghe', st:'In meeting · 11am', stc:'amber' },
    { r:'Registrar (Births)', n:'A. R. Perera', st:'On leave today', stc:'red' },
    { r:'Samurdhi Officer', n:'S. M. Bandara', st:'In office', stc:'green' },
  ];
  return (
    <Phone>
      <Header back title="Officer availability" />
      <div className="wf-body tight">
        <Mono up>Today · 23 May</Mono>
        <div className="flex gap-2 mb-3 mt-2">
          {['Today','Tomorrow','This week'].map((t,i)=>(
            <Pill key={t} className={i===0?'amber-fill':''}>{t}</Pill>
          ))}
        </div>
        {off.map((o,i)=>(
          <Box key={i} className="row">
            <Circ size={32}>{o.n.split(' ').map(s=>s[0]).join('').slice(0,2)}</Circ>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight:600 }}>{o.r}</div>
              <Mono>{o.n}</Mono>
            </div>
            <Pill className={o.stc}><span className="dotx"/>{o.st}</Pill>
          </Box>
        ))}
        <Btn className="ghost sm">★ Save to My Services</Btn>
        <Mono style={{ textAlign:'center', display:'block', marginTop: 4 }}>Updated every 2 hours</Mono>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP 11 — SUPPORTING (X1-X8)
// ═══════════════════════════════════════════════════════════════

function X1_Offline() {
  return (
    <Phone>
      <Header title="Offline mode" />
      <div className="wf-body" style={{ paddingTop: 18 }}>
        <ImgPh h={140} label="signal-off illustration" />
        <H size="xl" style={{ marginTop: 14, textAlign:'center' }}>You're offline</H>
        <Mono style={{ textAlign:'center', display:'block', marginBottom: 12 }}>Some features need internet</Mono>
        <Box>
          <Mono up>Still works</Mono>
          <div className="h-sm" style={{ marginTop: 4, lineHeight: 1.7 }}>
            <span className="tick">✓</span> View saved documents<br/>
            <span className="tick">✓</span> Show fuel QR (cached)<br/>
            <span className="tick">✓</span> Payment history<br/>
            <span className="tick">✓</span> Downloaded receipts
          </div>
        </Box>
        <Box className="fill">
          <Mono up>Needs internet</Mono>
          <div className="h-sm" style={{ marginTop: 4, lineHeight: 1.7, color:'#8a8680' }}>
            <span className="cross">✗</span> Make payments<br/>
            <span className="cross">✗</span> Submit applications<br/>
            <span className="cross">✗</span> Live officer availability
          </div>
        </Box>
        <Btn>Try again ↻</Btn>
      </div>
    </Phone>
  );
}

function X2_Error() {
  return (
    <Phone>
      <Header back title="" />
      <div className="wf-body center" style={{ flexDirection:'column', textAlign:'center', paddingTop: 30 }}>
        <Circ size={60} fill="#fff0c8" style={{ borderColor:'#d97706', borderWidth: 2 }}>
          <span style={{ fontSize: 22 }}>!</span>
        </Circ>
        <H size="xl" style={{ marginTop: 14 }}>Something went wrong</H>
        <div className="h-sm" style={{ color:'#4a4640', maxWidth: 220, marginTop: 6 }}>
          Your payment was not taken. Please try again — no charge has been made.
        </div>
        <Box className="brand" style={{ width:'100%', marginTop: 14, textAlign:'left' }}>
          <Mono up>Error code</Mono>
          <Mono>GP-E-4019 · network timeout</Mono>
        </Box>
        <div className="flex gap-2" style={{ width:'100%', marginTop: 6 }}>
          <Btn className="ghost" style={{ flex:1 }}>Support</Btn>
          <Btn style={{ flex:1 }}>Try again</Btn>
        </div>
      </div>
    </Phone>
  );
}

function X3_PaymentTimeout() {
  return (
    <Phone>
      <Header back title="" />
      <div className="wf-body" style={{ paddingTop: 18 }}>
        <div className="center" style={{ flexDirection:'column' }}>
          <Circ size={60} fill="#fff0c8" style={{ borderColor:'#d97706', borderWidth: 2, fontSize: 22 }}>?</Circ>
          <H size="xl" style={{ marginTop: 12, textAlign:'center' }}>Did your payment<br/>go through?</H>
          <Mono style={{ textAlign:'center', display:'block', marginTop: 6 }}>We couldn't confirm in time</Mono>
        </div>
        <Box style={{ marginTop: 14 }}>
          <div className="h-sm" style={{ marginBottom: 6 }}>What to do:</div>
          <div className="h-sm" style={{ lineHeight: 1.6 }}>
            <b>1.</b> Check your bank app to confirm<br/>
            <b>2.</b> Check your payment history below<br/>
            <b>3.</b> If charged, no need to re-pay
          </div>
        </Box>
        <Box className="brand">
          <Mono>🛡 If charged but not confirmed, a refund will be issued within 3-5 business days</Mono>
        </Box>
        <Btn>Check payment history →</Btn>
        <Btn className="ghost sm">Contact support</Btn>
      </div>
    </Phone>
  );
}

function X4_AutofillDemo() {
  return (
    <Phone>
      <Header back title="Auto-fill demo" />
      <div className="wf-body tight">
        <H size="md">Watch what changes</H>
        <div className="grid-2" style={{ marginTop: 8 }}>
          <div>
            <Mono up>Before</Mono>
            <Box className="tight" style={{ padding: 6, marginTop: 4 }}>
              <Mono tiny up>Name</Mono>
              <div style={{ borderBottom:'1.5px dashed #c8c4be', height: 14, marginTop: 2 }} />
            </Box>
            <Box className="tight" style={{ padding: 6 }}>
              <Mono tiny up>DOB</Mono>
              <div style={{ borderBottom:'1.5px dashed #c8c4be', height: 14, marginTop: 2 }} />
            </Box>
            <Box className="tight" style={{ padding: 6 }}>
              <Mono tiny up>Address</Mono>
              <div style={{ borderBottom:'1.5px dashed #c8c4be', height: 14, marginTop: 2 }} />
            </Box>
          </div>
          <div>
            <Mono up style={{ color:'#1e9459' }}>After ✓</Mono>
            <Box className="tight" style={{ background:'#e6f3eb', padding: 6, marginTop: 4, borderColor:'#1e9459' }}>
              <Mono tiny up>🔒 Name</Mono>
              <div className="h-tiny" style={{ marginTop: 2, fontWeight: 600 }}>Sampath Perera</div>
            </Box>
            <Box className="tight" style={{ background:'#e6f3eb', padding: 6, borderColor:'#1e9459' }}>
              <Mono tiny up>🔒 DOB</Mono>
              <div className="h-tiny" style={{ marginTop: 2, fontWeight: 600 }}>14 Aug 1968</div>
            </Box>
            <Box className="tight" style={{ background:'#e6f3eb', padding: 6, borderColor:'#1e9459' }}>
              <Mono tiny up>🔒 Address</Mono>
              <div className="h-tiny" style={{ marginTop: 2, fontWeight: 600 }}>No. 42, Temple Rd…</div>
            </Box>
          </div>
        </div>
        <Box className="accent" style={{ marginTop: 10 }}>
          <Mono>🪪 Your NIC fetched these details automatically</Mono>
        </Box>
        <Btn>Continue →</Btn>
      </div>
    </Phone>
  );
}

function X5_BiometricPrompt() {
  return (
    <Phone>
      {/* dimmed home behind */}
      <div className="wf-body" style={{ background:'rgba(0,0,0,0.5)', padding: 0, position:'relative', minHeight: 580 }}>
        <div style={{ position:'absolute', inset: 0, opacity:0.18, padding: 14, fontFamily:'Kalam' }}>
          <div className="line med" /><div className="line long" /><div className="line short" />
        </div>
        <div className="center" style={{ position:'absolute', inset:0 }}>
          <Box style={{ width:'80%', textAlign:'center', padding: 18, background:'#fcfaf5', boxShadow:'0 6px 0 #1a1815' }}>
            <Circ size={64} style={{ margin:'0 auto', fontSize: 28 }}>☻</Circ>
            <H size="lg" style={{ marginTop: 10 }}>Confirm payment</H>
            <Mono style={{ marginBottom: 8 }}>Rs. 2,515 to Sri Lanka Police</Mono>
            <Mono>Look at your phone</Mono>
            <Div />
            <Mono style={{ color:'#c43a48' }}>Cancel</Mono>
          </Box>
        </div>
      </div>
      <Anno top={250} right={4}>biometric overlay</Anno>
    </Phone>
  );
}

function X6_LangSwitch() {
  return (
    <Phone>
      <div className="wf-body" style={{ background:'rgba(0,0,0,0.3)', position:'relative', padding: 0 }}>
        <div style={{ position:'absolute', inset:0, opacity:0.2, padding: 12, fontFamily:'Kalam' }}>
          <div className="line long" /><div className="line med" /><div className="line short" />
        </div>
        <div style={{ position:'absolute', left:0, right:0, bottom:0, background:'#fcfaf5', borderTop:'2px solid #1a1815', borderRadius:'18px 18px 0 0', padding: 14 }}>
          <div className="center"><div style={{ width: 40, height: 4, background:'#c8c4be', borderRadius: 2, marginBottom: 10 }} /></div>
          <H size="md" style={{ marginBottom: 10 }}>Select language</H>
          {[
            { en:'English', n:'English', sel:true },
            { en:'සිංහල', n:'Sinhala' },
            { en:'தமிழ்', n:'Tamil' },
          ].map(l=>(
            <Box key={l.en} className={"row " + (l.sel?'accent':'')}>
              <div className="grow">
                <div className="h-md">{l.en}</div>
                <Mono>{l.n}</Mono>
              </div>
              <Circ size={20}>{l.sel?'●':'○'}</Circ>
            </Box>
          ))}
          <Btn>Apply →</Btn>
          <Mono style={{ textAlign:'center', display:'block' }}>You can change this any time in Settings</Mono>
        </div>
      </div>
    </Phone>
  );
}

function X7_Emergency() {
  return (
    <Phone>
      <Header back title="Emergency" />
      <div className="wf-body amber-emer" style={{ background:'#d97706', color:'white', textAlign:'center', paddingTop: 28 }}>
        <Circ size={84} fill="white" style={{ color:'#d97706', borderColor:'white', borderWidth: 3, fontSize: 36 }}>📞</Circ>
        <div style={{ fontFamily:'Kalam', fontSize: 48, fontWeight: 700, marginTop: 10, color:'white' }}>1990</div>
        <div className="h-lg" style={{ color:'white' }}>Suwa Seriya</div>
        <Mono style={{ color:'#fde8c4', display:'block' }}>24/7 Free Ambulance Service</Mono>

        <Box style={{ background:'white', color:'#1a1815', marginTop: 14, textAlign:'left' }}>
          <div className="flex-c">
            <Circ size={26} fill="#fde8c4">📍</Circ>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight:600 }}>Share my location</div>
              <Mono>Helps ambulance reach faster</Mono>
            </div>
            <div className="box tight" style={{ background:'#1e9459', width: 32, padding: 2, margin: 0 }}>
              <span style={{ background:'white', width:12, height:12, borderRadius:6, display:'block', marginLeft:'auto' }} />
            </div>
          </div>
        </Box>
        <Btn style={{ background:'white', color:'#d97706', boxShadow:'0 3px 0 white', borderColor:'white' }}>Call now →</Btn>
        <Mono style={{ color:'#fde8c4' }}>No login required</Mono>
      </div>
    </Phone>
  );
}

function X8_Simplified() {
  return (
    <Phone>
      <div className="wf-header" style={{ padding: '14px 16px' }}>
        <Swatch size="lg" fill="#fde8c4">LS</Swatch>
        <div className="grow">
          <div style={{ fontFamily:'Kalam', fontSize: 22, fontWeight: 700 }}>Sampath</div>
          <Mono>Simple mode</Mono>
        </div>
        <div className="lang-pill" style={{ fontSize: 12, padding:'4px 10px' }}>SI</div>
      </div>
      <div className="wf-body">
        <div style={{ fontFamily:'Kalam', fontSize: 18, fontWeight: 600, marginBottom: 8 }}>What do you want to do?</div>
        {[
          ['💳','Pay a bill','Rs. 3,450 due'],
          ['🚓','Pay a fine','Rs. 2,500'],
          ['📞','Call for help','24/7 free'],
          ['🪪','Show my ID',''],
        ].map(([i,t,s])=>(
          <Box key={t} className="row" style={{ padding: 16, marginBottom: 10 }}>
            <Circ size={44} fill="#fde8c4" style={{ fontSize: 22 }}>{i}</Circ>
            <div className="grow">
              <div style={{ fontFamily:'Kalam', fontSize: 18, fontWeight: 600 }}>{t}</div>
              {s && <Mono style={{ fontSize: 11 }}>{s}</Mono>}
            </div>
            <span className="chev" style={{ fontSize: 18 }}>›</span>
          </Box>
        ))}
        <Mono style={{ textAlign:'center', display:'block', marginTop: 10, color:'#d97706' }}>Exit simple mode</Mono>
      </div>
      <Anno top={220} right={4}>72px tap targets · 18px font</Anno>
    </Phone>
  );
}

Object.assign(window, {
  P1_Profile, P2_DocWallet, P3_DocDetail, P4_AddDoc,
  P5_AddBank, P6_AppHistory, P7_AppStatus, P8_Settings, P9_Theme, P10_A11y, P11_Security,
  L1_Locate, L2_OfficeDetail, L3_Officers,
  X1_Offline, X2_Error, X3_PaymentTimeout, X4_AutofillDemo,
  X5_BiometricPrompt, X6_LangSwitch, X7_Emergency, X8_Simplified,
});
