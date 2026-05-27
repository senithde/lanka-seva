// screens-v2.jsx — Lanka Seva Wireframes V2
// Builds on V1 components; only the screens listed in the V2 brief.

// ═══════════════════════════════════════════════════════════════
// GROUP M — MISSING SCREENS FROM V1
// ═══════════════════════════════════════════════════════════════

// ───────── M1 · Search Results (standalone) ─────────
function M1_Search() {
  return (
    <Phone>
      <Header back title="" right={<Mono style={{ color:'#d97706' }}>Cancel</Mono>} />
      <div className="wf-body tight">
        <div className="input focus mb-3">
          <span style={{ fontSize: 11 }}>🔍</span>
          <span className="val">fine</span>
          <span style={{ color:'#8a8680' }}>|</span>
        </div>
        <div className="flex-b">
          <Mono up>4 results for "fine"</Mono>
          <Mono style={{ color:'#d97706' }}>Clear</Mono>
        </div>
        <div style={{ height: 6 }} />
        <Row left={<Swatch fill="#fde8c4">🚓</Swatch>} title="Traffic Fine Payment"
          sub="Transport · Sri Lanka Police" badge={<Pill className="green">GOV PAY</Pill>} />
        <Row left={<Swatch fill="#cfd9e8">⚖</Swatch>} title="Court Fine Payment"
          sub="Legal · Judiciary" badge={<Pill className="green">GOV PAY</Pill>} />
        <Row left={<Swatch fill="#e8e6e3">🏠</Swatch>} title="Municipal Fines"
          sub="Housing · Local Authority" badge={<Pill className="amber">PARTIAL</Pill>} />
        <Row left={<Swatch fill="#fde8c4">🚗</Swatch>} title="Late Revenue Licence Surcharge"
          sub="Transport · DMT" badge={<Pill className="green">GOV PAY</Pill>} />
        <Div />
        <Mono up style={{ display:'block', marginBottom: 4 }}>Also in services</Mono>
        <div className="flex gap-2" style={{ flexWrap:'wrap' }}>
          <Pill>Transport & Vehicles ›</Pill>
          <Pill>Legal & Justice ›</Pill>
        </div>
        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Recent</Mono>
        <div className="flex gap-2" style={{ flexWrap:'wrap' }}>
          {['driving licence','aswesuma','electricity'].map(t=>(
            <Pill key={t}><span style={{ opacity:.5 }}>↺</span> {t}</Pill>
          ))}
        </div>
      </div>
      <TabBar active="serv" />
    </Phone>
  );
}

function M1b_SearchEmpty() {
  return (
    <Phone>
      <Header back title="" right={<Mono style={{ color:'#d97706' }}>Cancel</Mono>} />
      <div className="wf-body tight">
        <div className="input focus mb-3">
          <span style={{ fontSize: 11 }}>🔍</span>
          <span className="val">xyzqq</span>
        </div>
        <div className="center" style={{ flexDirection:'column', padding: 28, textAlign:'center' }}>
          <div style={{ fontSize: 40, color:'#8a8680' }}>🔍</div>
          <H size="md" style={{ marginTop: 10 }}>No results for "xyzqq"</H>
          <div className="h-sm" style={{ color:'#4a4640', marginTop: 6 }}>
            Try searching by task — e.g. "pay fine" or "renew licence".
          </div>
        </div>
        <Mono up style={{ display:'block', marginBottom: 4 }}>Try one of these</Mono>
        <div className="flex gap-2" style={{ flexWrap:'wrap' }}>
          <Pill className="amber-fill">Pay a fine</Pill>
          <Pill>NIC renewal</Pill>
          <Pill>Check status</Pill>
        </div>
      </div>
      <TabBar active="serv" />
    </Phone>
  );
}

// ───────── M2 · QR Error State ─────────
function M2_QRError() {
  return (
    <Phone dark>
      <div className="wf-body" style={{ background:'#0a0a0a', color:'white', padding: 0, position:'relative', minHeight: 460 }}>
        <div style={{ background:'repeating-linear-gradient(45deg, #1a1a1a, #1a1a1a 8px, #222 8px, #222 16px)', flex:1, height: 460, position:'relative' }}>
          <div style={{ position:'absolute', top: 14, left: 14, right: 14, display:'flex', justifyContent:'space-between', color:'white' }}>
            <div className="h-icon" style={{ background:'rgba(255,255,255,0.15)', borderColor:'white', color:'white' }}>✕</div>
            <div className="h-lg" style={{ color:'white' }}>QR Pay</div>
            <div className="h-icon" style={{ background:'rgba(255,255,255,0.15)', borderColor:'white', color:'white' }}>⚡</div>
          </div>
          {/* RED scanning frame */}
          <div style={{ position:'absolute', top:'30%', left:'50%', transform:'translate(-50%,0)', width: 160, height: 160 }}>
            {[
              ['top','left'],['top','right'],['bottom','left'],['bottom','right']
            ].map(([v,h],i)=>{
              const cap = s => s[0].toUpperCase() + s.slice(1);
              return <div key={i} style={{
                position:'absolute', [v]:0, [h]:0, width:30, height:30,
                [`border${cap(v)}`]:'3px solid #c43a48',
                [`border${cap(h)}`]:'3px solid #c43a48',
              }} />;
            })}
          </div>
        </div>
        {/* Bottom sheet */}
        <div style={{ position:'absolute', left:0, right:0, bottom:0, background:'#fcfaf5', color:'#1a1815', borderTopLeftRadius: 18, borderTopRightRadius: 18, borderTop:'2px solid #1a1815', padding: 14 }}>
          <div className="center" style={{ marginBottom: 8 }}>
            <Circ size={36} fill="#ffd8de" style={{ borderColor:'#c43a48', color:'#c43a48', fontSize: 18 }}>✕</Circ>
          </div>
          <H size="md" style={{ textAlign:'center' }}>QR not recognised</H>
          <div className="h-sm" style={{ color:'#4a4640', marginTop: 4, marginBottom: 8, textAlign:'center', lineHeight: 1.4 }}>
            This doesn't look like a LankaQR code.
          </div>
          <Box className="fill tight">
            <div className="h-sm" style={{ lineHeight: 1.6 }}>
              <span style={{ color:'#8a8680' }}>·</span> Not a LankaQR code — try again<br/>
              <span style={{ color:'#8a8680' }}>·</span> May be damaged or too dark<br/>
              <span style={{ color:'#8a8680' }}>·</span> Merchant QR may be expired
            </div>
          </Box>
          <Btn>Try again →</Btn>
          <Btn className="ghost sm">Show my QR instead</Btn>
          <Mono style={{ textAlign:'center', display:'block', marginTop: 4 }}>Paying from BOC ···· 4821</Mono>
        </div>
      </div>
    </Phone>
  );
}

// ───────── M3 · Locate empty state ─────────
function M3_LocateEmpty() {
  return (
    <Phone>
      <Header title="Locate" right={<div className="h-icon">◉</div>} />
      <div className="wf-body tight">
        <div className="input mb-3">
          <span>🔍</span><span className="ph">Search offices, services…</span>
        </div>
        <div className="flex gap-2 mb-3" style={{ overflowX:'auto' }}>
          {['All','Health','Transport','Education','Legal'].map((t,i)=>(
            <Pill key={t} className={i===0?'amber-fill':''}>{t}</Pill>
          ))}
        </div>
        <Box className="dash center" style={{ height: 130, padding: 0, background:'#f1ede4', position:'relative', flexDirection:'column' }}>
          <div style={{ fontSize: 30, color:'#d97706' }}>📍</div>
          <div className="h-sm" style={{ fontWeight:600, marginTop: 4 }}>No offices found nearby</div>
          <Mono>You may be in a remote area</Mono>
        </Box>
        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Search by name</Mono>
        <div className="input mb-3" style={{ marginBottom: 8 }}>
          <span>🔍</span><span className="ph">e.g. Anuradhapura DMT…</span>
        </div>
        <Mono up style={{ display:'block', marginBottom: 4 }}>Browse all offices</Mono>
        {[
          ['Western','118'],['Central','64'],['Northern','41'],
          ['North Central','38', true],['Southern','52'],['Sabaragamuwa','29']
        ].map(([p,n,hi])=>(
          <Row key={p} left={<Swatch size="sm">▣</Swatch>}
            title={p+' Province'}
            badge={<Pill className={hi?'amber-fill':''}>{n}</Pill>} />
        ))}
        <Box className="brand" style={{ marginTop: 4 }}>
          <Mono>💡 Check officer availability before travelling — saves bus fare</Mono>
        </Box>
      </div>
      <TabBar active="loc" />
    </Phone>
  );
}

// ───────── M4 · Personal details edit ─────────
function M4_EditProfile() {
  return (
    <Phone>
      <Header back title="Edit profile" right={<Mono style={{ color:'#d97706', fontWeight:700 }}>Save</Mono>} />
      <div className="wf-body tight">
        <Mono up>Identity · from DRP</Mono>
        <Input label="NIC" value="200234500123" filled />
        <Input label="Full legal name" value="Sampath K. Perera" filled />
        <Input label="Date of birth" value="14 Aug 1968" filled />
        <Input label="Gender" value="Male" filled />
        <Box className="brand">
          <Mono>ℹ Identity fields are SL-UDI verified — contact DRP for corrections</Mono>
        </Box>

        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Contact</Mono>
        <Input label="Preferred name" value="Sampath" focus />
        <Input label="Mobile" value="+94 77 234 5678" filled hint="Tap 'Change' to re-verify with OTP" />
        <Input label="Email (optional)" value="sampath@example.com" />
        <div className="flex-c mb-3">
          <div className="box tight" style={{ background:'#1e9459', width: 32, padding: 3, margin: 0 }}>
            <span style={{ background:'white', width:12, height:12, borderRadius:6, display:'block', marginLeft:'auto' }} />
          </div>
          <div className="h-sm">WhatsApp same as mobile</div>
        </div>

        <Mono up style={{ display:'block', margin:'4px 0 4px' }}>Address</Mono>
        <Input label="Permanent address" value="No. 42, Temple Rd, Maharagama" filled />
        <div className="flex-c mb-3">
          <div className="box tight" style={{ background:'#1e9459', width: 32, padding: 3, margin: 0 }}>
            <span style={{ background:'white', width:12, height:12, borderRadius:6, display:'block', marginLeft:'auto' }} />
          </div>
          <div className="h-sm">Postal same as permanent</div>
        </div>
        <Input label="District" value="Colombo" filled />

        <Mono up style={{ display:'block', margin:'4px 0 4px' }}>Household</Mono>
        <Input label="Household type" placeholder="Owner ▾" />
        <Input label="Dependants" placeholder="2" />

        <Mono up style={{ display:'block', margin:'4px 0 4px' }}>Profile photo</Mono>
        <div className="flex-c mb-3">
          <Circ size={56} fill="#fde8c4">SP</Circ>
          <div className="grow">
            <Mono style={{ color:'#d97706', fontWeight:700 }}>Change photo</Mono>
            <Mono tiny>Tap to upload or take a photo</Mono>
          </div>
        </div>

        <Btn>Save changes</Btn>
        <Mono style={{ textAlign:'center', display:'block' }}>Contact changes require OTP</Mono>
      </div>
      <TabBar active="prof" />
    </Phone>
  );
}

// ───────── M5 · Sinhala onboarding (3 frames in 1 artboard) ─────────
function M5_SinhalaA() {
  const opts = [
    { en:'English', native:'English' },
    { en:'සිංහල', native:'Sinhala', sel:true },
    { en:'தமிழ்', native:'Tamil' },
  ];
  return (
    <Phone>
      <div className="wf-body" style={{ paddingTop: 40 }}>
        <div style={{ textAlign:'center', marginBottom: 18 }}>
          <Swatch size="lg" fill="#fde8c4">LS</Swatch>
          <H size="xl" style={{ marginTop: 10 }}>Lanka Seva</H>
          <Mono>ලංකා සේවා · இலங்கை சேவை</Mono>
        </div>
        <H size="md" style={{ marginBottom: 10 }}>Choose your language</H>
        {opts.map(o=>(
          <Box key={o.en} className={"row " + (o.sel?'accent':'')}>
            <div className="grow">
              <div className="h-md">{o.en}</div>
              <Mono>{o.native}</Mono>
            </div>
            <Circ size={20}>{o.sel?'●':'○'}</Circ>
          </Box>
        ))}
        <Btn>Continue →</Btn>
      </div>
    </Phone>
  );
}

function M5_SinhalaB() {
  return (
    <Phone>
      <div className="wf-body" style={{ paddingTop: 24 }}>
        <div className="between" style={{ marginBottom: 12 }}>
          <Mono up>3 න් 2 ස්ලයිඩ්</Mono>
          <Mono>මඟ හරින්න</Mono>
        </div>
        <ImgPh h={150} label="illustration · ඔබේ සේවාවන්" />
        <H size="xl" style={{ marginTop: 14, fontFamily:"'Noto Sans Sinhala','Kalam'" }}>
          ඔබේ සියලු සේවාවන්,<br/>එක් විශ්වාසනීය යෙදුමක්.
        </H>
        <div className="h-sm" style={{ color:'#4a4640', marginTop: 8, lineHeight: 1.4, fontFamily:"'Noto Sans Sinhala','Kalam'" }}>
          දඩ ගෙවන්න, බලපත්‍ර අලුත් කරන්න, තත්ත්වය පරීක්ෂා කරන්න.
        </div>
        <Btn style={{ marginTop: 14, fontFamily:"'Noto Sans Sinhala','Kalam'" }}>ඊළඟ →</Btn>
      </div>
    </Phone>
  );
}

function M5_SinhalaC() {
  return (
    <Phone>
      <Header back title="NIC සත්‍යාපනය" lang="SI" />
      <div className="wf-body">
        <Progress steps={3} filled={1} />
        <Mono up style={{ display:'block', marginBottom: 6, fontFamily:"'Noto Sans Sinhala'" }}>පියවර 1 / 3 — NIC</Mono>
        <H size="md" style={{ fontFamily:"'Noto Sans Sinhala','Kalam'" }}>ඔබේ NIC අංකය ඇතුළු කරන්න</H>
        <div className="h-tiny mb-3" style={{ marginBottom: 10, fontFamily:"'Noto Sans Sinhala','Kalam'" }}>
          SL-UDI හරහා සත්‍යාපනය කෙරේ.
        </div>
        <div className="input focus mb-3">
          <span style={{ fontFamily:"'Noto Sans Sinhala'", color:'#8a8680' }}>NIC අංකය</span>
        </div>
        <Box className="brand">
          <Mono style={{ fontFamily:"'Noto Sans Sinhala'" }}>🔒 ඩිජිටල් ආර්ථික අමාත්‍යාංශය</Mono>
        </Box>
        <Btn style={{ marginTop: 12, fontFamily:"'Noto Sans Sinhala','Kalam'" }}>NIC සත්‍යාපනය →</Btn>
      </div>
      <Anno top={140} right={4} style={{ fontFamily:"'Caveat'" }}>EN pill switches back any time</Anno>
    </Phone>
  );
}

// ───────── M6 · Aswesuma welfare history ─────────
function M6_Welfare() {
  const months = [
    ['May 2026','5,000','2 May'],
    ['Apr 2026','5,000','3 Apr'],
    ['Mar 2026','5,000','4 Mar'],
    ['Feb 2026','5,000','3 Feb'],
    ['Jan 2026','5,000','2 Jan'],
    ['Dec 2025','5,000','4 Dec'],
  ];
  return (
    <Phone>
      <Header back title="Aswesuma · Welfare" />
      <div className="wf-body tight">
        <Box className="brand-dark">
          <Mono up style={{ color:'#cbd9ee' }}>Recipient</Mono>
          <div className="h-lg" style={{ color:'white' }}>Sampath K. Perera</div>
          <Mono style={{ color:'#cbd9ee' }}>ASW-2026-48312</Mono>
          <div className="flex gap-2 mt-2">
            <Pill className="amber-fill">Transitional household</Pill>
            <Pill style={{ background:'white', color:'#2b5fa8' }}>BOC ···· 4821</Pill>
          </div>
        </Box>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Current status</Mono>
        <Box>
          <div className="flex-b mb-2"><Mono>Status</Mono><Pill className="green">Active</Pill></div>
          <div className="flex-b mb-2"><Mono>Next payment</Mono><span className="h-sm">1 Jun · Rs. 5,000</span></div>
          <div className="flex-b"><Mono>Method</Mono><span className="h-sm">Direct credit · BOC</span></div>
        </Box>
        <Box className="brand">
          <Mono>ℹ Credited by the 5th of each month · Call 1924 if delayed past the 7th</Mono>
        </Box>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Payment history</Mono>
        {months.map(([m,a,d])=>(
          <div key={m} className="row-item">
            <div className="grow">
              <div className="h-sm" style={{ fontWeight:600 }}>{m}</div>
              <Mono>{d}</Mono>
            </div>
            <div style={{ textAlign:'right' }}>
              <div className="h-sm">Rs. {a}</div>
              <Pill className="green">Credited</Pill>
            </div>
          </div>
        ))}
        <Mono style={{ color:'#d97706', display:'block', textAlign:'center', marginTop: 6 }}>View full history →</Mono>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Supplements</Mono>
        <Row left={<Swatch size="sm">♥</Swatch>} title="Elderly supplement" sub="Rs. 2,000 · monthly"
          badge={<Pill className="green">Active</Pill>} chev={false} />
        <Row left={<Swatch size="sm">♿</Swatch>} title="Disability supplement"
          sub="Not applicable" chev={false} />
        <Btn className="ghost sm">📞 1924 · Mon–Fri 8am–4pm</Btn>
      </div>
      <TabBar active="serv" />
    </Phone>
  );
}

// ───────── M7 · Add Vehicle (fuel quota) ─────────
function M7_AddVehicle() {
  return (
    <Phone>
      <Header back title="Add vehicle" />
      <div className="wf-body tight">
        <div className="h-sm" style={{ color:'#4a4640', marginBottom: 8, lineHeight: 1.4 }}>
          Link your vehicle to track monthly fuel quota & generate the QR.
          Verified via the National Fuel Pass system.
        </div>
        <Input label="Registration no." placeholder="e.g. CAB-2245" focus
          hint="As shown on your registration certificate" />
        <Mono up style={{ display:'block', marginBottom: 4 }}>Vehicle type</Mono>
        <div className="grid-3 mb-3">
          {[['🚗','Private',true],['🏍','Motorcycle'],['🛺','Three-wh.']].map(([i,t,sel])=>(
            <Box key={t} className={"tight " + (sel?'accent':'')} style={{ textAlign:'center', padding:'8px 4px', margin:0 }}>
              <div style={{ fontSize: 16 }}>{i}</div>
              <Mono tiny>{t}</Mono>
            </Box>
          ))}
        </div>
        <div className="grid-3 mb-3">
          {[['🚐','Van/SUV'],['🚚','Lorry'],['…','Other']].map(([i,t])=>(
            <Box key={t} className="tight" style={{ textAlign:'center', padding:'8px 4px', margin:0 }}>
              <div style={{ fontSize: 16 }}>{i}</div>
              <Mono tiny>{t}</Mono>
            </Box>
          ))}
        </div>

        <Mono up style={{ display:'block', marginBottom: 4 }}>Fuel type · multi-select</Mono>
        <div className="flex gap-2 mb-3" style={{ flexWrap:'wrap' }}>
          <Pill className="amber-fill">✓ Petrol 92</Pill>
          <Pill>Petrol 95</Pill>
          <Pill>Diesel</Pill>
          <Pill>Kerosene</Pill>
        </div>

        <Input label="Owner NIC" value="200234500123" filled
          hint="Auto-filled from your profile" />

        <Box className="brand">
          <Mono up>How verification works</Mono>
          <div className="h-sm" style={{ marginTop: 4, lineHeight: 1.6 }}>
            <b>1.</b> Check registration against DMT<br/>
            <b>2.</b> Cross-ref National Fuel Pass<br/>
            <b>3.</b> Quota fetched automatically
          </div>
          <Mono style={{ marginTop: 4 }}>Less than 30 seconds</Mono>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Monthly quota · preview</Mono>
        <Box className="dash fill" style={{ padding: 8 }}>
          <div className="flex-b mb-2"><Mono>Petrol</Mono><span className="h-sm" style={{ color:'#8a8680' }}>___ L / month</span></div>
          <div className="flex-b"><Mono>Diesel</Mono><span className="h-sm" style={{ color:'#8a8680' }}>___ L / month</span></div>
          <Mono tiny style={{ display:'block', marginTop: 4 }}>Actual quota shown after verification</Mono>
        </Box>

        <Btn>Verify & add vehicle →</Btn>
        <Mono style={{ color:'#d97706', display:'block', textAlign:'center' }}>No fuel pass? Apply at nfp.gov.lk →</Mono>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP D — DOCUMENT SYSTEM
// ═══════════════════════════════════════════════════════════════

// ───────── D1a · Choose doc + instructions ─────────
function D1a_Upload() {
  return (
    <Phone>
      <Header back title="Add document" />
      <div className="wf-body tight">
        <Box className="row">
          <Swatch size="lg" fill="#fde8c4">📜</Swatch>
          <div className="grow">
            <div className="h-md">Birth Certificate</div>
            <Mono>Registrar General · 2-3 days verification</Mono>
          </div>
          <Mono style={{ color:'#d97706' }}>Change</Mono>
        </Box>
        <Box className="brand">
          <Mono up>Before you photograph</Mono>
          <div className="h-sm" style={{ marginTop: 4, lineHeight: 1.7 }}>
            <span className="tick">✓</span> Flat, dark surface<br/>
            <span className="tick">✓</span> All 4 corners visible<br/>
            <span className="tick">✓</span> Good lighting · no flash glare<br/>
            <span className="tick">✓</span> Text clear & readable
          </div>
        </Box>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>We'll extract</Mono>
        <Box className="fill tight">
          <div className="h-sm" style={{ lineHeight: 1.6 }}>
            · Document number<br/>
            · Full name · Date of birth<br/>
            · Issue & expiry dates<br/>
            · Registration district
          </div>
        </Box>
        <Mono style={{ display:'block', marginTop: 4 }}>Front required · Back optional</Mono>
        <Btn>Open camera →</Btn>
        <Btn className="ghost sm">Upload from gallery</Btn>
      </div>
    </Phone>
  );
}

// ───────── D1b · Camera viewfinder ─────────
function D1b_Camera() {
  return (
    <Phone dark>
      <div className="wf-body" style={{ background:'#0a0a0a', color:'white', padding: 0, position:'relative', minHeight: 540 }}>
        <div style={{ background:'repeating-linear-gradient(45deg, #1a1a1a, #1a1a1a 8px, #222 8px, #222 16px)', flex:1, height: 480, position:'relative' }}>
          <div style={{ position:'absolute', top: 14, left: 14, right: 14, display:'flex', justifyContent:'space-between' }}>
            <div className="h-icon" style={{ background:'rgba(255,255,255,0.15)', borderColor:'white', color:'white' }}>✕</div>
            <Pill className="amber-fill">FRONT SIDE</Pill>
            <div className="h-icon" style={{ background:'rgba(255,255,255,0.15)', borderColor:'white', color:'white' }}>⚡</div>
          </div>
          {/* Document guide */}
          <div style={{ position:'absolute', top:'18%', left:'10%', right:'10%', bottom: '30%', border:'2px dashed rgba(255,255,255,0.6)', borderRadius: 8, padding: 8 }}>
            {[['top','left'],['top','right'],['bottom','left'],['bottom','right']].map(([v,h],i)=>{
              const cap = s => s[0].toUpperCase()+s.slice(1);
              return <div key={i} style={{
                position:'absolute', [v]:-2, [h]:-2, width:24, height:24,
                [`border${cap(v)}`]:'4px solid white',
                [`border${cap(h)}`]:'4px solid white',
              }} />;
            })}
            <div style={{ color:'rgba(255,255,255,0.7)', fontFamily:'Kalam', fontSize: 12, textAlign:'center', marginTop:'40%' }}>
              Fit document within guides
            </div>
          </div>
          {/* auto detect pill */}
          <div style={{ position:'absolute', top:'22%', right: '12%' }}>
            <Pill className="green"><span className="dotx" />Document detected</Pill>
          </div>
        </div>
        {/* bottom bar */}
        <div style={{ position:'absolute', left:0, right:0, bottom:0, background:'#fcfaf5', borderTop:'2px solid #1a1815', padding: 12, display:'flex', alignItems:'center', justifyContent:'space-around' }}>
          <div style={{ textAlign:'center' }}>
            <Circ size={32}>▦</Circ>
            <Mono tiny style={{ display:'block' }}>Gallery</Mono>
          </div>
          <div style={{ width: 56, height: 56, borderRadius: 28, background:'white', border:'4px solid #d97706', boxShadow:'0 3px 0 #1a1815' }} />
          <div style={{ textAlign:'center' }}>
            <Circ size={32}>⚡</Circ>
            <Mono tiny style={{ display:'block' }}>Flash</Mono>
          </div>
        </div>
      </div>
    </Phone>
  );
}

// ───────── D1c · Review extracted ─────────
function D1c_Review() {
  return (
    <Phone>
      <Header back title="Review details" right={<Mono style={{ color:'#d97706' }}>Retake</Mono>} />
      <div className="wf-body tight">
        <div className="flex-c">
          <div className="imgph" style={{ width: 60, height: 80, fontSize: 8 }}>photo</div>
          <div className="grow">
            <Mono up>Front side · captured</Mono>
            <div className="h-sm">Tap to zoom · re-photograph</div>
          </div>
        </div>
        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>We extracted</Mono>
        <Input label="Document type" value="Birth Certificate" filled />
        <Input label="Full name" value="Sampath K. Perera" filled note="✓ Matches profile" />
        <Input label="NIC number" value="200234500123" filled note="✓ Matches profile" />
        <Input label="Date of birth" value="14 Aug 1968" filled note="✓ Matches profile" />
        <Input label="Registration no." value="BC-1968-COL-04429" filled />
        <Input label="District" value="Colombo" filled />
        <Input label="Issue date" value="12 Sep 1970" filled />
        <Input label="Registrar name" value="" error placeholder="Could not read · please enter" />
        <Btn>Confirm & submit →</Btn>
        <Mono style={{ textAlign:'center', display:'block' }}>Verified by Registrar General · 2-3 days</Mono>
      </div>
      <Anno top={140} right={4}>green + 🔒 = same auto-fill pattern</Anno>
    </Phone>
  );
}

// ───────── D1d · Submission confirmation ─────────
function D1d_Submitted() {
  return (
    <Phone>
      <Header back title="Submitted" />
      <div className="wf-body" style={{ paddingTop: 14 }}>
        <div className="center" style={{ flexDirection:'column', textAlign:'center' }}>
          <Circ size={56} fill="#d8e3f5" style={{ borderColor:'#2b5fa8', borderWidth:2.5, color:'#2b5fa8', fontSize: 22 }}>↑</Circ>
          <H size="lg" style={{ marginTop: 10 }}>Document submitted</H>
          <Mono>Birth Certificate · in review</Mono>
        </div>
        <Mono up style={{ display:'block', margin:'12px 0 4px' }}>Status</Mono>
        {[
          { t:'Uploaded', d:'just now', st:'done' },
          { t:'Under review', d:'Registrar General · 2-3 days', st:'cur' },
          { t:'Verified', d:'You\'ll be notified', st:'pend' },
        ].map((s,i,a)=>(
          <div key={i} className="flex gap-2" style={{ alignItems:'flex-start', position:'relative', paddingBottom: 12 }}>
            <Circ size={22} fill={s.st==='done'?'#d8f0e2':s.st==='cur'?'#fde8c4':'#fff'}
              style={{ borderColor:s.st==='done'?'#1e9459':s.st==='cur'?'#d97706':'#c8c4be', flexShrink:0, fontSize: 11 }}>
              {s.st==='done'?'✓':s.st==='cur'?'●':'○'}
            </Circ>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight:600 }}>{s.t}</div>
              <Mono>{s.d}</Mono>
            </div>
            {i<a.length-1 && <div style={{ position:'absolute', left:10, top: 22, bottom: 0, width:1.5, borderLeft:'1.5px dashed #c8c4be' }} />}
          </div>
        ))}
        <Box className="brand">
          <Mono>🔔 We'll notify you the moment it's verified</Mono>
        </Box>
        <div className="flex gap-2 mt-3">
          <Btn className="ghost" style={{ flex:1 }}>Add another</Btn>
          <Btn style={{ flex:1 }}>My documents</Btn>
        </div>
      </div>
    </Phone>
  );
}

// ───────── D2 · Passport digital display ─────────
function D2_Passport() {
  return (
    <Phone>
      <Header back title="Passport" right={<Mono>···</Mono>} />
      <div className="wf-body tight">
        <Box style={{ background:'#1a3a6b', color:'white', padding: 14, border:'2.5px solid #1a1815', position:'relative' }}>
          <div className="flex-b mb-2">
            <div style={{ fontFamily:'JetBrains Mono', fontSize: 8, letterSpacing: 1.5, color:'#cbd9ee' }}>REPUBLIC OF SRI LANKA</div>
            <Circ size={20} fill="rgba(255,255,255,0.15)" style={{ color:'white', border:'1px solid white' }}>🦁</Circ>
          </div>
          <div style={{ fontFamily:'Kalam', fontSize: 13, fontWeight:700, color:'white', marginBottom: 8, letterSpacing: 1 }}>PASSPORT</div>
          <div className="flex gap-3">
            <Circ size={56} fill="#cbd9ee" style={{ color:'#1a3a6b', fontSize: 16, border:'2px solid white' }}>SP</Circ>
            <div className="grow" style={{ fontFamily:'JetBrains Mono', fontSize: 8, lineHeight: 1.45, color:'white' }}>
              <div style={{ opacity:0.65 }}>SURNAME</div>
              <div style={{ fontSize: 10, marginBottom: 4 }}>PERERA</div>
              <div style={{ opacity:0.65 }}>GIVEN NAMES</div>
              <div style={{ fontSize: 10, marginBottom: 4 }}>SAMPATH KUMARA</div>
              <div style={{ opacity:0.65 }}>NATIONALITY</div>
              <div style={{ fontSize: 10 }}>SRI LANKAN</div>
            </div>
          </div>
          <Div style={{ background: 'transparent', backgroundImage:'linear-gradient(90deg, rgba(255,255,255,0.4) 50%, transparent 50%)', backgroundSize:'6px 1px', margin:'8px 0' }} />
          <div className="grid-2" style={{ fontFamily:'JetBrains Mono', fontSize: 8, color:'white', lineHeight: 1.45 }}>
            <div><div style={{ opacity:0.65 }}>DOB</div><div style={{ fontSize: 9 }}>14 AUG 1968</div></div>
            <div><div style={{ opacity:0.65 }}>PLACE</div><div style={{ fontSize: 9 }}>COLOMBO</div></div>
            <div><div style={{ opacity:0.65 }}>ISSUED</div><div style={{ fontSize: 9 }}>09 JUN 2020</div></div>
            <div><div style={{ opacity:0.65 }}>EXPIRES</div><div style={{ fontSize: 9 }}>08 JUN 2027</div></div>
          </div>
          <div style={{ marginTop: 6, fontFamily:'JetBrains Mono', fontSize: 8, color:'white' }}>
            <span style={{ opacity:0.65 }}>PASSPORT NO.</span> <b>N9871234</b>
          </div>
          {/* MRZ blurred */}
          <div style={{ marginTop: 8, background:'rgba(255,255,255,0.08)', padding: '6px 8px', borderRadius: 4, filter:'blur(2.5px)', fontFamily:'JetBrains Mono', fontSize: 8, color:'white' }}>
            P&lt;LKAPERERA&lt;&lt;SAMPATH&lt;KUMARA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br/>
            N98712345LKA6808147M27060810&lt;&lt;&lt;&lt;
          </div>
          <Mono tiny style={{ display:'block', marginTop: 4, color:'#cbd9ee' }}>🔒 MRZ hidden for privacy</Mono>
          <div style={{ position:'absolute', bottom: 8, right: 8, transform:'rotate(-10deg)', border:'2px solid #1e9459', color:'#1e9459', background:'rgba(255,255,255,0.95)', padding:'2px 6px', fontFamily:'Kalam', fontSize: 8, fontWeight:700 }}>
            VERIFIED · DEPT OF IMMIGRATION
          </div>
        </Box>
        <Box className="accent">
          <Mono up>Expiry</Mono>
          <div className="h-sm" style={{ marginTop: 2 }}>Expires in 12 months · consider renewal</div>
          <Mono style={{ color:'#d97706', display:'block', marginTop: 2 }}>Apply at immigration.gov.lk →</Mono>
        </Box>
        <div className="grid-3 mt-2">
          <Btn className="ghost sm">Share QR</Btn>
          <Btn className="ghost sm">PDF</Btn>
          <Btn className="ghost sm">Report</Btn>
        </div>
        <Box className="fill row tight" style={{ marginTop: 6 }}>
          <QR size={40} />
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Show verification QR</div>
            <Mono tiny>Refreshes every 5 min · powered by SL-UDI</Mono>
          </div>
          <span className="chev">›</span>
        </Box>
      </div>
      <Anno top={56} right={4} style={{ maxWidth: 110 }}>only doc styled as physical card</Anno>
    </Phone>
  );
}

// ───────── D3 · Renewal deep-link ─────────
function D3_RenewalDeeplink() {
  return (
    <Phone>
      <Header back title="Action needed" />
      <div className="wf-body tight">
        <Box className="amber-dark">
          <Mono up style={{ color:'#fde8c4' }}>Revenue licence</Mono>
          <div className="h-lg" style={{ color:'white', marginTop: 2 }}>Expires in 14 days</div>
          <Mono style={{ color:'#fde8c4' }}>31 Dec 2026 · Rs. 1,000 surcharge after</Mono>
        </Box>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Current licence</Mono>
        <Box className="row">
          <Swatch size="lg" fill="#fde8c4">🚗</Swatch>
          <div className="grow">
            <div className="h-md">CAB-2245 (Toyota Vitz)</div>
            <Mono>RL-2026-CAB2245</Mono>
            <Pill className="amber" style={{ marginTop: 4 }}>RENEW SOON</Pill>
          </div>
        </Box>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Renew now</Mono>
        <Box>
          <div className="flex-b mb-2"><Mono>Renewal fee</Mono><span className="h-sm">Rs. 8,500</span></div>
          <div className="flex-b mb-2"><Mono>GovPay fee</Mono><span className="h-sm">Rs. 15</span></div>
          <Div />
          <div className="flex-b"><div className="h-md">Total</div><H size="lg" style={{ color:'#d97706' }}>Rs. 8,515</H></div>
        </Box>
        <Box className="fill row tight">
          <Pill className="green">✓</Pill>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>Insurance valid</div>
            <Mono>Allied Finance · until Mar 2027</Mono>
          </div>
        </Box>
        <Btn>Renew online now →</Btn>
        <Btn className="ghost sm">Download renewal form</Btn>
        <Box className="brand" style={{ marginTop: 6 }}>
          <Mono up>What happens next</Mono>
          <div className="h-sm" style={{ lineHeight: 1.6, marginTop: 4 }}>
            <b>1.</b> Pay fee via GovPay<br/>
            <b>2.</b> Digital licence updates instantly<br/>
            <b>3.</b> Sticker posted within 7 days
          </div>
          <Mono style={{ marginTop: 4 }}>No office visit needed</Mono>
        </Box>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP B — BILL PAYMENT UPGRADES
// ═══════════════════════════════════════════════════════════════

// ───────── B1 · Enhanced EDL detail with anomaly + schedule + auto-pay ─────────
function B1_EnhancedBill() {
  return (
    <Phone>
      <Header back title="Electricity · EDL" />
      <div className="wf-body tight">
        <Box className="row tight">
          <Swatch size="lg" fill="#fff0c8">⚡</Swatch>
          <div className="grow">
            <div className="h-md">EDL 0042-819</div>
            <Mono>Apr 14 – May 13, 2026</Mono>
          </div>
        </Box>
        <Box>
          <div className="flex-b mb-2"><Mono>Units used</Mono><span className="h-sm">142 kWh</span></div>
          <div className="flex-b mb-2"><Mono>Unit charges</Mono><span className="h-sm">Rs. 2,840</span></div>
          <div className="flex-b mb-2"><Mono>Fixed + VAT</Mono><span className="h-sm">Rs. 610</span></div>
          <Div />
          <div className="flex-b">
            <div className="h-md">Total due</div>
            <H size="xl" style={{ color:'#d97706' }}>Rs. 3,450</H>
          </div>
          <Pill className="amber" style={{ marginTop:4 }}>Due in 3 days</Pill>
        </Box>

        <Box className="amber-dark">
          <div className="flex-b mb-2">
            <Mono up style={{ color:'#fde8c4' }}>⚠ Usage anomaly</Mono>
            <Mono style={{ color:'#fde8c4' }}>Dismiss</Mono>
          </div>
          <div className="h-md" style={{ color:'white' }}>38% higher than usual</div>
          <Mono style={{ color:'#fde8c4' }}>Avg last 6mo: Rs. 2,500 · this month: Rs. 3,450</Mono>
          <div className="h-tiny" style={{ marginTop: 6, color:'#fff0c8' }}>
            Common causes: AC · water heater · lights left on
          </div>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Last 6 months · with average line</Mono>
        <div style={{ position:'relative', border:'1.5px solid #1a1815', borderRadius: 6, padding: '4px 6px' }}>
          <div className="flex" style={{ alignItems:'flex-end', height: 50, gap: 4 }}>
            {[28,34,30,42,38,46].map((v,i)=>(
              <div key={i} style={{ flex:1, background: i===5 ? '#d97706' : '#c8c4be', height: `${v*2}%`, borderRadius: 2, border: i===5?'1.5px solid #1a1815':'none' }} />
            ))}
          </div>
          {/* avg dashed line */}
          <div style={{ position:'absolute', top: '38%', left: 6, right: 6, borderTop:'1.5px dashed #c43a48' }} />
          <Mono tiny style={{ position:'absolute', right: 8, top: '32%', color:'#c43a48' }}>avg</Mono>
          <div className="flex" style={{ marginTop: 4, gap: 4 }}>
            {['Dec','Jan','Feb','Mar','Apr','May'].map((m,i)=>(
              <Mono tiny key={m} style={{ flex:1, textAlign:'center', fontWeight: i===5?700:400, color: i===5?'#d97706':'#8a8680' }}>{m}</Mono>
            ))}
          </div>
        </div>

        <Btn>Pay Rs. 3,450 now →</Btn>
        <div className="flex gap-2">
          <Btn className="ghost sm" style={{ flex:1, margin: 0 }}>Set reminder</Btn>
          <Btn className="ghost sm" style={{ flex:1, margin: 0 }}>Schedule</Btn>
        </div>
        <Box className="brand" style={{ marginTop: 6 }}>
          <Mono>ℹ EDL usually confirms within 1-2 working days · next bill ~14 Jun</Mono>
        </Box>
        <Box className="accent">
          <div className="flex-b">
            <div style={{ flex:1 }}>
              <Mono up>Save 2 taps</Mono>
              <div className="h-sm" style={{ marginTop: 2, fontWeight:600 }}>Switch to auto-pay</div>
              <Mono tiny>20th of each month · 5 days before due</Mono>
            </div>
            <div>
              <Btn className="sm" style={{ margin:0, padding:'4px 10px' }}>Set up</Btn>
              <Mono tiny style={{ display:'block', textAlign:'center', marginTop:2 }}>Not now</Mono>
            </div>
          </div>
        </Box>
      </div>
      <Anno top={250} right={4}>V2: anomaly + avg line + schedule + auto-pay</Anno>
    </Phone>
  );
}

// ───────── B1-extra · schedule bottom sheet (companion artboard) ─────────
function B1b_ScheduleSheet() {
  return (
    <Phone>
      <div className="wf-body" style={{ background:'rgba(0,0,0,0.3)', position:'relative', padding: 0 }}>
        <div style={{ position:'absolute', inset:0, opacity:0.2, padding: 12, fontFamily:'Kalam' }}>
          <div className="line long" /><div className="line med" />
        </div>
        <div style={{ position:'absolute', left:0, right:0, bottom:0, background:'#fcfaf5', borderTop:'2px solid #1a1815', borderRadius:'18px 18px 0 0', padding: 14 }}>
          <div className="center"><div style={{ width: 40, height: 4, background:'#c8c4be', borderRadius: 2, marginBottom: 10 }} /></div>
          <H size="md">Schedule this payment</H>
          <Mono style={{ marginBottom: 8 }}>EDL 0042-819 · Rs. 3,450</Mono>
          <Mono up style={{ display:'block', marginBottom: 4 }}>Choose date</Mono>
          <div className="grid-4 mb-3">
            {[
              ['Today','23'],['Sat','24'],['Sun','25', true],['Mon','26'],
              ['Tue','27'],['Wed','28'],['Thu','29'],['Fri','30'],
            ].map(([d,n,sel])=>(
              <Box key={n} className={"tight " + (sel?'accent':'')} style={{ textAlign:'center', padding:'6px 2px', margin: 0 }}>
                <Mono tiny>{d}</Mono>
                <div className="h-sm" style={{ fontWeight: 700 }}>{n}</div>
              </Box>
            ))}
          </div>
          <Mono up style={{ display:'block', marginBottom: 4 }}>Selected</Mono>
          <Box className="amber-dark tight">
            <div className="flex-b">
              <div className="h-sm" style={{ color:'white', fontWeight: 600 }}>Pay on 25 May</div>
              <Pill className="amber-fill" style={{ background:'white', color:'#d97706' }}>1 day before due</Pill>
            </div>
          </Box>
          <Mono up style={{ display:'block', marginTop: 8, marginBottom: 4 }}>From</Mono>
          <Box className="row tight"><Swatch>BOC</Swatch>
            <div className="grow"><div className="h-sm" style={{ fontWeight:600 }}>BOC ···· 4821</div></div>
            <Mono style={{ color:'#d97706' }}>Change</Mono>
          </Box>
          <Btn>Schedule Rs. 3,450 →</Btn>
          <Mono style={{ textAlign:'center', display:'block' }}>Will auto-pay on the selected date</Mono>
        </div>
      </div>
    </Phone>
  );
}

// ───────── B2 · Multiple accounts per provider ─────────
function B2_MultipleAccounts() {
  const acc = [
    { lbl:'Home — No. 42, Temple Rd', n:'0042-819', amt:'Rs. 3,450', due:'3 days' },
    { lbl:'Shop — Maharagama Market', n:'0087-441', amt:'Rs. 1,890', due:'12 days' },
  ];
  return (
    <Phone>
      <Header back title="Electricity · EDL" sub="Accounts (2)" />
      <div className="wf-body tight">
        {acc.map((a,i)=>(
          <Box key={i} className="tight" style={{ padding: 10 }}>
            <Mono up>{a.lbl}</Mono>
            <div className="flex-b mt-2">
              <div>
                <div className="h-md">{a.n}</div>
                <Mono>Due in {a.due}</Mono>
              </div>
              <div style={{ textAlign:'right' }}>
                <H size="md">{a.amt}</H>
                <Btn className="sm" style={{ margin: 0, padding:'3px 10px' }}>Pay</Btn>
              </div>
            </div>
          </Box>
        ))}
        <Box className="accent">
          <div className="flex-b">
            <div>
              <Mono up>Combined</Mono>
              <div className="h-md" style={{ marginTop: 2 }}>Pay all EDL bills</div>
              <Mono>Rs. 5,340 total</Mono>
            </div>
            <Btn className="sm" style={{ margin: 0, padding:'6px 10px' }}>Pay both</Btn>
          </div>
        </Box>
        <Btn className="ghost sm">+ Add another EDL account</Btn>
        <Anno style={{ position:'static', display:'block', marginTop: 12 }}>
          users can nickname each account; each tracks separately
        </Anno>
      </div>
      <TabBar active="serv" />
    </Phone>
  );
}

// ───────── B3 · Bill payment history ─────────
function B3_BillHistory() {
  const may = [
    ['⚡','EDL Electricity','0042-819','Rs. 3,450','23 May'],
    ['💧','NWSDB Water','117-4490','Rs. 1,280','21 May'],
    ['☎','SLTM Broadband','811-285','Rs. 2,490','18 May'],
  ];
  return (
    <Phone>
      <Header back title="Payment history" />
      <div className="wf-body tight">
        <div className="flex gap-2 mb-3">
          <Pill className="amber-fill">All providers ▾</Pill>
          <Pill>Last 3 months ▾</Pill>
        </div>
        <Mono up style={{ display:'block', marginBottom: 4 }}>May 2026</Mono>
        {may.map(([i,n,a,amt,d])=>(
          <Box key={n} className="row tight">
            <Swatch>{i}</Swatch>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight:600 }}>{n}</div>
              <Mono>{a} · {d}</Mono>
            </div>
            <div style={{ textAlign:'right' }}>
              <div className="h-sm">{amt}</div>
              <Mono style={{ color:'#d97706' }}>Receipt ↓</Mono>
            </div>
          </Box>
        ))}
        <Box className="fill row tight">
          <Mono up>Apr 2026</Mono>
          <div className="grow"><div className="h-sm">4 payments · Rs. 9,140</div></div>
          <span className="chev">▾</span>
        </Box>
        <Box className="fill row tight">
          <Mono up>Mar 2026</Mono>
          <div className="grow"><div className="h-sm">4 payments · Rs. 8,920</div></div>
          <span className="chev">▾</span>
        </Box>
        <Btn className="ghost sm">Download all receipts (PDF)</Btn>
        <Box className="brand-dark" style={{ marginTop: 4 }}>
          <Mono up style={{ color:'#cbd9ee' }}>Total this year</Mono>
          <H size="xl" style={{ color:'white' }}>Rs. 54,820</H>
        </Box>
      </div>
      <TabBar active="serv" />
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP PF — PAYMENT FLOW UPGRADES (annotated diagrams)
// ═══════════════════════════════════════════════════════════════

// PF1: Step2 → Biometric → Success/Failure  (annotated flow)
function PF1_BiometricFlow() {
  const arrow = (label) => (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minWidth: 60, fontFamily:'Caveat', color:'#d97706' }}>
      <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1 }}>→</div>
      {label && <div style={{ fontSize: 14, marginTop: 4, fontWeight: 600 }}>{label}</div>}
    </div>
  );
  const labeledPhone = (label, child) => (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 6 }}>
      <Mono up style={{ color:'#d97706' }}>{label}</Mono>
      {child}
    </div>
  );
  return (
    <div style={{ padding: 24, fontFamily:'Kalam' }}>
      <div style={{ marginBottom: 16, maxWidth: 600 }}>
        <H size="lg">Biometric overlays Step 2 — no extra screen</H>
        <Mono>Tapping Confirm triggers the biometric prompt. Success → receipt. Failure → retry or fall back to PIN.</Mono>
      </div>

      {/* Top row: Step 2 → Biometric → branching */}
      <div style={{ display:'flex', alignItems:'flex-start', gap: 10 }}>
        {labeledPhone('1 · Review & pay', <S5_PayStep2 />)}
        {arrow('triggers')}
        {labeledPhone('2 · Biometric prompt', <X5_BiometricPrompt />)}

        {/* Branching column — each branch is a row [arrow + phone] */}
        <div style={{ display:'flex', flexDirection:'column', gap: 20 }}>
          <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
            <div style={{ fontFamily:'Caveat', color:'#1e9459', fontWeight:700, lineHeight: 1, textAlign:'center', minWidth: 50 }}>
              <div style={{ fontSize: 34 }}>↗</div>
              <div style={{ fontSize: 16, marginTop: 2 }}>ok</div>
            </div>
            {labeledPhone('3a · Success', <S6_PaySuccess />)}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
            <div style={{ fontFamily:'Caveat', color:'#c43a48', fontWeight:700, lineHeight: 1, textAlign:'center', minWidth: 50 }}>
              <div style={{ fontSize: 34 }}>↘</div>
              <div style={{ fontSize: 16, marginTop: 2 }}>fail</div>
            </div>
            {labeledPhone('3b · Failed · retry or PIN', <PF1_BiometricFail />)}
          </div>
        </div>
      </div>

      {/* Notes strip below */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', gap: 14, marginTop: 24, maxWidth: 1700 }}>
        <Box className="brand tight" style={{ margin: 0 }}>
          <Mono up>Threshold</Mono>
          <div className="h-sm" style={{ marginTop: 2 }}><b>&gt; Rs. 25,000</b> → biometric mandatory</div>
        </Box>
        <Box className="brand tight" style={{ margin: 0 }}>
          <Mono up>Threshold</Mono>
          <div className="h-sm" style={{ marginTop: 2 }}><b>&lt; Rs. 25,000</b> → PIN also accepted</div>
        </Box>
        <Box className="brand tight" style={{ margin: 0 }}>
          <Mono up>Lockout</Mono>
          <div className="h-sm" style={{ marginTop: 2 }}>3 fails → force PIN; 6 fails → freeze account 5 min</div>
        </Box>
        <Box className="brand tight" style={{ margin: 0 }}>
          <Mono up>Variants</Mono>
          <div className="h-sm" style={{ marginTop: 2 }}>Face ID, Fingerprint, Voice all use the same overlay</div>
        </Box>
      </div>
    </div>
  );
}

function PF1_BiometricFail() {
  return (
    <Phone>
      <Header back title="" />
      <div className="wf-body center" style={{ flexDirection:'column', textAlign:'center', paddingTop: 40 }}>
        <Circ size={60} fill="#ffd8de" style={{ borderColor:'#c43a48', borderWidth: 2.2, color:'#c43a48', fontSize: 22 }}>!</Circ>
        <H size="lg" style={{ marginTop: 12 }}>Biometric failed</H>
        <Mono style={{ marginBottom: 14 }}>Couldn't recognise you</Mono>
        <Btn style={{ width: '100%' }}>Try biometric →</Btn>
        <Btn className="ghost" style={{ width: '100%' }}>Use PIN instead</Btn>
        <Mono style={{ display:'block', marginTop: 8 }}>3 attempts left</Mono>
      </div>
    </Phone>
  );
}

// PF2: Action needed → action detail → payment step 1
function PF2_ActionNeededFlow() {
  const labeled = (label, child) => (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap: 6 }}>
      <Mono up style={{ color:'#d97706' }}>{label}</Mono>
      {child}
    </div>
  );
  const arrow = (label) => (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minWidth: 60, fontFamily:'Caveat', color:'#d97706' }}>
      <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1 }}>→</div>
      {label && <div style={{ fontSize: 14, marginTop: 4, fontWeight: 600 }}>{label}</div>}
    </div>
  );
  return (
    <div style={{ padding: 24, fontFamily:'Kalam' }}>
      <div style={{ marginBottom: 16, maxWidth: 720 }}>
        <H size="lg">"Action needed" reuses the canonical 3-step pattern</H>
        <Mono>List item → action detail → standard payment step 1 with a context banner. Only the banner changes per payment type.</Mono>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap: 8, flexWrap:'nowrap' }}>
        {labeled('1 · App history · zoomed', <PF2_ListZoom />)}
        {arrow('tap')}
        {labeled('2 · Action needed detail', <PF2_ActionDetail />)}
        {arrow('Pay →')}
        {labeled('3 · Step 1 with context', <PF2_PayContext />)}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 14, marginTop: 24, maxWidth: 1500 }}>
        <Box className="brand tight" style={{ margin: 0 }}>
          <Mono up>Rule</Mono>
          <div className="h-sm" style={{ marginTop: 2 }}>"Action needed" always carries a <b>deadline date</b></div>
        </Box>
        <Box className="brand tight" style={{ margin: 0 }}>
          <Mono up>Reuse</Mono>
          <div className="h-sm" style={{ marginTop: 2 }}>Same 3-step pattern used for fines, fees, surcharges, top-ups</div>
        </Box>
        <Box className="brand tight" style={{ margin: 0 }}>
          <Mono up>Variation</Mono>
          <div className="h-sm" style={{ marginTop: 2 }}>Only the context banner & amount-lock change between contexts</div>
        </Box>
      </div>
    </div>
  );
}

function PF2_ListZoom() {
  // Zoomed list item only (not full phone)
  return (
    <div style={{ width: 300, padding: 14, background:'#fcfaf5', border:'2.5px solid #1a1815', borderRadius: 14, boxShadow:'0 6px 0 #1a1815', fontFamily:'Kalam' }}>
      <Mono up>List item · application history</Mono>
      <div style={{ height: 10 }} />
      <Box className="row" style={{ borderColor:'#d97706', background:'#fff0c8' }}>
        <Swatch fill="#fde8c4">🚗</Swatch>
        <div className="grow">
          <div className="h-sm" style={{ fontWeight:600 }}>Revenue licence renewal</div>
          <Mono tiny>Ref RL-2026-8001</Mono>
          <Mono tiny style={{ color:'#7a4f00' }}>Pay surcharge by 31 May</Mono>
        </div>
        <Pill className="amber">Action needed</Pill>
      </Box>
      <Anno style={{ position:'static', display:'block', marginTop: 8 }}>Always show a deadline date</Anno>
    </div>
  );
}

function PF2_ActionDetail() {
  return (
    <Phone>
      <Header back title="Action needed" />
      <div className="wf-body tight">
        <Mono up>Ref · RL-2026-8001</Mono>
        <Box className="amber-dark">
          <div className="h-md" style={{ color:'white' }}>Your renewal needs a surcharge</div>
          <Mono style={{ color:'#fde8c4', marginTop: 4 }}>Licence expired before renewal · Rs. 1,000 late fee</Mono>
          <Mono style={{ color:'#fde8c4', display:'block', marginTop: 4 }}>Pay by 31 May 2026 to avoid further penalties</Mono>
        </Box>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>What's needed</Mono>
        <Box>
          <div className="flex-b mb-2"><span className="h-sm"><span className="tick">✓</span> Renewal fee</span><span className="h-sm">Rs. 8,500</span></div>
          <div className="flex-b mb-2"><span className="h-sm">+ Late surcharge</span><span className="h-sm">Rs. 1,000</span></div>
          <Div />
          <div className="flex-b"><div className="h-md">Total</div><H size="lg" style={{ color:'#d97706' }}>Rs. 9,500</H></div>
        </Box>
        <Box className="row tight">
          <Swatch>🚗</Swatch>
          <div className="grow">
            <div className="h-sm" style={{ fontWeight:600 }}>CAB-2245 (Toyota Vitz)</div>
            <Mono>Colombo</Mono>
          </div>
        </Box>
        <Btn>Pay Rs. 9,500 now →</Btn>
        <Btn className="ghost sm">Contact DMT</Btn>
      </div>
    </Phone>
  );
}

function PF2_PayContext() {
  return (
    <Phone>
      <Header back title="Pay · Step 1 of 3" />
      <div className="wf-body tight">
        <Progress steps={3} filled={1} />
        <Box className="accent">
          <Mono up>Context</Mono>
          <div className="h-sm" style={{ marginTop: 2, fontWeight:600 }}>Revenue licence surcharge</div>
          <Mono>RL-2026-8001</Mono>
        </Box>
        <Input label="NIC" value="200234500123" filled />
        <Input label="Vehicle" value="CAB-2245" filled />
        <Input label="Amount" value="Rs. 9,500" filled />
        <Mono tiny style={{ display:'block', marginBottom: 8, color:'#1a6645' }}>🔒 Amount fixed by DMT</Mono>
        <Btn>Continue →</Btn>
        <Anno top={150} right={4}>same 3-step, different banner</Anno>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP N — NOTIFICATION DEEP-LINK MAP
// ═══════════════════════════════════════════════════════════════

function N1_DeepLinkMap() {
  const links = [
    { n:'Payment confirmed · Traffic fine Rs. 2,515', d:'Payment receipt · App history → receipt detail', c:'#1e9459', ic:'✓' },
    { n:'Revenue licence expires in 14 days', d:'D3 · Renewal deep-link', c:'#d97706', ic:'!' },
    { n:'EDL bill due in 3 days · Rs. 3,450', d:'B1 · Bill detail (EDL)', c:'#d97706', ic:'⚡' },
    { n:'QR payment sent · Cargills Rs. 1,890', d:'Profile · payment history', c:'#d97706', ic:'QR' },
    { n:'Aswesuma credited · Rs. 15,000 · May 2026', d:'M6 · Welfare history', c:'#7b35c4', ic:'♡' },
    { n:'New device login · iPhone 15', d:'Profile · Security · linked devices', c:'#c43a48', ic:'⚠' },
    { n:'Birth cert. now verified ✓', d:'Document detail (D2 style)', c:'#1e9459', ic:'📜' },
    { n:'NIC renewal ready for collection', d:'Service detail · collect instructions', c:'#2b5fa8', ic:'🪪' },
  ];
  return (
    <div style={{ padding: 24, fontFamily:'Kalam', background:'#fcfaf5', border:'2.5px solid #1a1815', borderRadius: 14, boxShadow:'0 6px 0 #1a1815', maxWidth: 820 }}>
      <H size="xl">Notification → destination map</H>
      <Mono style={{ marginBottom: 16, display:'block' }}>Every notification opens to a relevant screen. No dead-ends at home.</Mono>
      <div style={{ display:'grid', gridTemplateColumns: '1fr auto 1fr', gap: '10px 24px', alignItems:'center' }}>
        <Mono up>Notification</Mono>
        <span />
        <Mono up>Destination screen</Mono>
        {links.map((l,i)=>(
          <React.Fragment key={i}>
            <div style={{ border:'1.5px solid #1a1815', borderLeftWidth: 4, borderLeftColor: l.c, borderRadius: 8, padding: '8px 10px', background:'#fff' }}>
              <div className="flex-c">
                <Circ size={26} style={{ borderColor: l.c, color: l.c }}>{l.ic}</Circ>
                <div className="grow"><div className="h-sm" style={{ fontWeight:600 }}>{l.n}</div></div>
              </div>
            </div>
            <div style={{ fontFamily:'Caveat', color:'#d97706', fontSize: 24, textAlign:'center' }}>↦</div>
            <div style={{ border:'1.5px dashed #d97706', borderRadius: 8, padding: '8px 10px', background:'#fff8ed' }}>
              <Mono tiny style={{ color:'#d97706' }}>{l.d}</Mono>
            </div>
          </React.Fragment>
        ))}
      </div>
      <Box className="brand" style={{ marginTop: 18 }}>
        <Mono>🔔 Unread notifications add a red dot to the bell icon — count is on the home header.</Mono>
      </Box>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP HH — HOUSEHOLD MEMBERS (PHASE 2)
// ═══════════════════════════════════════════════════════════════

function HH1_Household() {
  return (
    <Phone>
      <Header back title="Household members" right={<Pill className="amber-fill">Phase 2</Pill>} />
      <div className="wf-body tight" style={{ position:'relative' }}>
        {/* Phase 2 watermark */}
        <div style={{ position:'absolute', top: '40%', left: '50%', transform:'translate(-50%,-50%) rotate(-18deg)', fontFamily:'Caveat', fontSize: 60, fontWeight: 700, color:'rgba(217,119,6,0.10)', pointerEvents:'none', whiteSpace:'nowrap' }}>
          Phase 2
        </div>
        <Box className="brand">
          <Mono>Manage services for your whole household from one account. Coming in a future update.</Mono>
        </Box>
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Current member</Mono>
        <Box className="brand-dark">
          <div className="flex-c">
            <Circ size={40} fill="#fcfaf5" style={{ color:'#2b5fa8' }}>SP</Circ>
            <div className="grow">
              <div className="h-md" style={{ color:'white' }}>Sampath K. Perera</div>
              <Mono style={{ color:'#cbd9ee' }}>Account holder</Mono>
            </div>
          </div>
        </Box>

        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Add member</Mono>
        {[
          ['💍','Add spouse / partner'],
          ['👶','Add child · school + health'],
          ['👴','Add elderly parent · 70+ benefits'],
        ].map(([i,t])=>(
          <Box key={t} className="dash tight" style={{ opacity: 0.55, background:'#f1ede4' }}>
            <div className="flex-c">
              <Swatch>{i}</Swatch>
              <div className="grow"><div className="h-sm" style={{ fontWeight: 600 }}>{t}</div></div>
              <Mono>🔒</Mono>
            </div>
          </Box>
        ))}

        <Mono up style={{ display:'block', margin:'10px 0 4px' }}>Why add household members?</Mono>
        <Box className="fill">
          <div className="h-sm" style={{ lineHeight: 1.7 }}>
            · School admissions for children<br/>
            · Elderly allowance for parents (70+)<br/>
            · Child health records<br/>
            · Aswesuma for the household unit
          </div>
        </Box>

        <Btn>Notify me when it launches →</Btn>
        <Mono style={{ color:'#d97706', display:'block', textAlign:'center' }}>← Back to Profile</Mono>
      </div>
    </Phone>
  );
}

// ═══════════════════════════════════════════════════════════════
// GROUP H — H1v2 ENHANCED HOME (compared to V1)
// ═══════════════════════════════════════════════════════════════

function H1v2_HomeV2() {
  return (
    <Phone>
      <div className="wf-header">
        <Swatch size="sm" fill="#fde8c4">LS</Swatch>
        <div className="grow">
          <div className="h-md">Good morning, Sampath</div>
          <Mono>Lanka Seva</Mono>
        </div>
        <div className="h-icon" style={{ position:'relative' }}>
          🔔
          <span style={{ position:'absolute', top:-3, right:-3, width: 8, height: 8, borderRadius:4, background:'#c43a48', border:'1.5px solid #fcfaf5' }} />
        </div>
        <Circ size={26}>SP</Circ>
      </div>
      <div className="wf-body tight" style={{ paddingBottom: 6 }}>
        <Box className="brand-dark">
          <Mono up style={{ color:'#cbd9ee' }}>Your status</Mono>
          <div className="h-lg" style={{ color:'white', marginTop: 2 }}>2 items need attention</div>
          <div className="flex gap-2 mt-2" style={{ flexWrap:'wrap' }}>
            <Pill className="amber-fill">Pay fine · Rs. 2,515</Pill>
            <Pill className="amber-fill">Renew licence (14d)</Pill>
          </div>
          {/* profile completeness nudge */}
          <div style={{ marginTop: 8, paddingTop: 8, borderTop:'1.5px dashed rgba(255,255,255,0.3)' }}>
            <div className="flex-b" style={{ marginBottom: 4 }}>
              <Mono up style={{ color:'#cbd9ee' }}>Profile · 80%</Mono>
              <Mono style={{ color:'white' }}>Add passport →</Mono>
            </div>
            <div style={{ height: 5, background:'rgba(255,255,255,0.18)', borderRadius: 2.5, border:'1px solid rgba(255,255,255,0.4)' }}>
              <div style={{ width: '80%', height: '100%', background:'#fde8c4', borderRadius: 2 }} />
            </div>
          </div>
        </Box>

        <div className="flex-b" style={{ marginTop: 6, marginBottom: 4 }}>
          <Mono up>Bills due</Mono>
          <Mono style={{ color:'#d97706' }}>All bills</Mono>
        </div>
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

        <Mono up style={{ display:'block', margin:'6px 0 4px' }}>Quick actions</Mono>
        <div className="grid-4 mb-3">
          {[['🚓','Fine'],['⚡','Bills'],['◔','Status'],['QR','Scan']].map(([i,l])=>(
            <Box key={l} className="tight" style={{ textAlign:'center', padding:'8px 4px', margin:0 }}>
              <div style={{ fontSize: 16 }}>{i}</div>
              <Mono tiny>{l}</Mono>
            </Box>
          ))}
        </div>

        {/* NEW: Expiring soon */}
        <Mono up style={{ display:'block', marginBottom: 4, color:'#d97706' }}>⚠ Expiring soon</Mono>
        <Box style={{ borderColor:'#d97706', background:'#fff0c8' }}>
          <div className="flex-c">
            <Swatch fill="#fff">🚗</Swatch>
            <div className="grow">
              <div className="h-sm" style={{ fontWeight:600 }}>Revenue Licence · CAB-2245</div>
              <Mono>14 days remaining</Mono>
            </div>
            <Btn className="sm" style={{ margin: 0, padding:'4px 10px' }}>Renew</Btn>
          </div>
          <Mono style={{ display:'block', textAlign:'right', marginTop: 4, color:'#8a8680' }}>Remind me later</Mono>
        </Box>

        {/* NEW: Recent activity */}
        <Mono up style={{ display:'block', margin:'8px 0 4px' }}>Recent</Mono>
        <Row left={<Swatch size="sm" fill="#fde8c4">QR</Swatch>}
          title="Cargills Food City" sub="Yesterday"
          badge={<span className="h-sm">Rs. 1,890</span>} chev={false} />
        <Row left={<Swatch size="sm" fill="#d8f0e2">✓</Swatch>}
          title="Traffic fine paid" sub="23 May"
          badge={<span className="h-sm">Rs. 2,515</span>} chev={false} />
        <Row left={<Swatch size="sm" fill="#d8e3f5">↑</Swatch>}
          title="Birth cert. submitted" sub="12 May"
          badge={<Pill className="blue">Pending</Pill>} chev={false} />
        <Mono style={{ color:'#d97706', display:'block', textAlign:'right' }}>View all activity →</Mono>

        {/* dismissible tip */}
        <Box className="brand" style={{ marginTop: 8 }}>
          <div className="flex-b">
            <div style={{ flex:1 }}>
              <Mono>💡 Pay your EDL & water bills here · add accounts now</Mono>
            </div>
            <Mono style={{ marginLeft: 6 }}>×</Mono>
          </div>
        </Box>
      </div>
      <TabBar active="home" />
    </Phone>
  );
}

Object.assign(window, {
  M1_Search, M1b_SearchEmpty, M2_QRError, M3_LocateEmpty, M4_EditProfile,
  M5_SinhalaA, M5_SinhalaB, M5_SinhalaC, M6_Welfare, M7_AddVehicle,
  D1a_Upload, D1b_Camera, D1c_Review, D1d_Submitted, D2_Passport, D3_RenewalDeeplink,
  B1_EnhancedBill, B1b_ScheduleSheet, B2_MultipleAccounts, B3_BillHistory,
  PF1_BiometricFlow, PF1_BiometricFail, PF2_ActionNeededFlow, PF2_ListZoom, PF2_ActionDetail, PF2_PayContext,
  N1_DeepLinkMap, HH1_Household, H1v2_HomeV2,
});
