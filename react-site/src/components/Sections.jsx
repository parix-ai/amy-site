import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Reveal, SectionHead, useVideo, Arrow } from './ui'
import { TIERS, QUOTES, CASES, POSTS } from '../data'

export const Badges = () => (
  <div className="badges badges--lt">
    {[['Certified', 'Career & Life Coach'], ['Certified', 'Professional Résumé Writer'], ["Certified · Master's in Marketing", 'Interview Coach']].map(([s, b]) =>
      <div key={b}><img src="assets/brand/butterfly-badge.png" alt="" /><div><span>{s}</span><b>{b}</b></div></div>)}
  </div>
)
const TICK = ['GS-14 & GS-15 leaders', 'Senior Executive Service', 'Retiring military officers', 'Federal program directors']
export const Audience = () => (
  <div className="audience"><div className="wrap">
    <b>Who Amy works with</b>
    {TICK.map((t) => <span key={t}>{t}</span>)}
  </div></div>
)

export const Statement = () => (
  <section className="section" id="why"><Reveal className="wrap statement">
    <p className="q">What's the #1 reason accomplished government and military leaders get passed over for private-sector roles?</p>
    <h2>They're reviewed for <em>responsibility</em> — when hiring committees are projecting <em>future impact.</em></h2>
    <div className="promises">
      {[['Translate your value', 'Grade levels, billets and acronyms become scope, results and business impact a CEO understands.'], ["Position, don't apply", 'Executive roles are won with a value proposition and a network — not the "Apply" button.'], ['Own the interview', 'Remove the jargon. Strengthen executive presence. Tell the leadership story behind every accomplishment.'], ['Land at your level', 'Stop accepting roles two levels below where you belong. Negotiate from a position of clarity.']].map(([b, p]) => <div className="promise" key={b}><b>{b}</b><p>{p}</p></div>)}
    </div>
    <Link className="btn btn--ghost" to="/contact" style={{ marginTop: 44 }}>Connect with Amy</Link>
  </Reveal></section>
)

export const Compare = () => (
  <section className="section alt" id="compare"><div className="wrap">
    <SectionHead eyebrow="See the transformation" title="Same career. Two very different résumés."><p className="lede">Left: how most federal résumés arrive. Right: how Amy positions the same leader for a private-sector executive role.</p></SectionHead>
    <Reveal className="cmp2">
      <div className="doc doc--before"><div className="doc__tag">Before</div><h4>JOHN A. DOE</h4><p className="doc__meta">Supervisory Program Manager, GS-0340-15 · Department of Defense · 40 hrs/week · Series 0340</p>
        <p className="doc__h">DUTIES AND RESPONSIBILITIES</p><p>Responsible for the oversight of acquisition program activities in accordance with DoD 5000.02, FAR/DFARS, and agency policy. Serves as COR on multiple contracts. Coordinates with PEO, DCMA, and stakeholder organizations. Prepares briefings for senior leadership. Supervises subordinate staff and ensures compliance with applicable regulations, directives and guidance. Participates in IPTs and working groups as required. Performs other duties as assigned.</p>
        <p className="doc__h">QUALIFICATIONS</p><p>Level III DAWIA certified in Program Management. Secret clearance. Proficient in Microsoft Office.</p></div>
      <div className="cmp2__mid"><span className="cmp2__arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span><b>Amy's<br />translation</b></div>
      <div className="doc doc--after"><div className="doc__tag doc__tag--after">After · Amy</div><h4>John A. Doe</h4><p className="doc__title">Vice President, Operations & Program Delivery</p>
        <p className="doc__sum">Executive who has led $45M+ portfolios and 120-person organizations through complex, regulated delivery — on time, under budget, with stakeholders aligned from the boardroom to the field.</p>
        <p className="doc__h">Leadership impact</p>
        <ul className="stagger-list">
          <li><b>Led a $45M P&L</b> across 3 business units; delivered 8% under budget two years running.</li>
          <li><b>Built a 120-person organization</b> through a restructuring that cut delivery cycle time 30%.</li>
          <li><b>Owned enterprise risk & compliance</b> for a $300M operation with zero audit findings.</li>
          <li><b>Advised C-suite and board-level stakeholders</b>; secured buy-in for a $12M modernization.</li>
        </ul></div>
    </Reveal>
    <div className="sec-foot">
      <Reveal as="p" className="cmp__note cmp__note--left">Illustrative example. Every client résumé is written from scratch by Amy — a certified résumé writer — never from a template.</Reveal>
      <Reveal as="figure" className="figure figure--inline">
        <img src="assets/img/resume-compare.webp" width="567" height="309" loading="lazy" alt="A static résumé rewritten as an impact résumé, with a stated result of 180% more interviews." />
      </Reveal>
    </div>
  </div></section>
)

const STEPS = [['Translate value', 'Decode what your record really proves — program management, budgets, oversight, stakeholder alignment — and turn it into business value.'], ['Shift mindset', 'From applicant to candidate. From responsibility to impact. You learn to see, and say, the significance of your own leadership.'], ['Talk the talk', 'An executive résumé, a LinkedIn profile recruiters find, and an interview narrative free of jargon and full of presence.'], ['Walk the walk', 'Target-employer strategy, networking that gets you into rooms, and a 90-day plan so the first quarter confirms the hiring decision.']]
export const Framework = () => (
  <section className="section dark" id="framework"><div className="wrap framework">
    <Reveal><span className="eyebrow">Amy's framework</span>
      <h2>How do you move from public service to private-sector leadership? With the <em>Mission-to-Market Method<span className="tm">™</span></em></h2>
      <p className="lede">Four steps, in order, every time. It's the same sequence behind every successful transition Amy has guided — whether it takes six weeks or six months.</p>
      <p style={{ marginTop: 28 }}><Link className="btn btn--primary" to="/services">See the programs</Link></p></Reveal>
    <div className="fw-steps">{STEPS.map(([h, p], i) => <Reveal key={h} className="fw-step" delay={i * .12}><div><h3>{h}</h3><p>{p}</p></div></Reveal>)}</div>
  </div>
  <Reveal className="wrap fw-figure"><figure className="figure figure--inline">
    <img src="assets/img/journey-map.webp" width="1408" height="768" loading="lazy" alt="Five stages of the career transformation journey: assessment and clarity, strategy development, personal branding, job search and networking, and interview and launch." />
    <figcaption>Stage by stage — from the first assessment through to a signed offer.</figcaption>
  </figure></Reveal>
  </section>
)

export const MeetAmy = () => (
  <section className="section"><div className="wrap about">
    <Reveal className="about__side">
      <div className="portrait">
        <div className="portrait__frame"><img src="assets/img/amy-desk.jpg" alt="Amy Sindicic at her desk" /></div>
        <div className="portrait__tag"><span>Career strategist</span><b>Amy Sindicic</b></div>
      </div>
      <img className="portrait__logo" src="assets/brand/logo.png" alt="Transformations 123" />
    </Reveal>
    <Reveal><span className="eyebrow">Meet Amy</span>
      <h2>Thirty years of teaching leaders to say what they mean — and be heard.</h2>
      <p><strong>Amy Sindicic helps government and military professionals transition into private-sector leadership roles</strong> by clarifying their value, strengthening their positioning, and aligning their résumés, LinkedIn profiles and interview strategies to today's market expectations.</p>
      <p>A certified Career and Life Coach, Certified Résumé Writer and Interview Coach with a Master's in Marketing, Amy has worked globally across four continents, supporting senior professionals in articulating complex experience with clarity, precision and confidence.</p>
      <Link className="btn btn--ghost" to="/about">Meet Amy</Link></Reveal>
  </div></section>
)

export const Land = () => (
  <section className="section--tight alt"><Reveal className="wrap land"><h2>Where Amy's clients land</h2>
    <ul>{['Corporate leadership', 'Consulting', 'Compliance & regulatory', 'Healthcare administration', 'Operations', 'Defense & government contracting', 'Nonprofit executive roles', 'Senior Executive Service'].map((l) => <li key={l}>{l}</li>)}</ul></Reveal></section>
)

export function Tiers({ compact, picker }) {
  const [pick, setPick] = useState(null)
  const choose = (i) => { setPick(i); document.getElementById('tier-' + TIERS[i].id)?.scrollIntoView({ behavior: 'smooth', block: 'center' }) }
  return (<>
    {picker && <Reveal className="picker"><span className="picker__label">Which sounds like you?</span>
      {["I don't know what I can do in the private sector", "I know my target — but I'm not competitive yet", 'I want the full path, from direction to offer'].map((l, i) => <button key={l} type="button" className={pick === i ? 'on' : ''} onClick={() => choose(i)}>{l}</button>)}</Reveal>}
    <div className="tiers">
      {TIERS.map((t, i) => (
        <Reveal key={t.id} as="article" delay={i * .1} className={'tier' + (t.hi ? ' tier--hi' : '') + (pick === i ? ' hot' : pick != null ? ' dim' : '')} id={'tier-' + t.id}>
          {t.flag && <div className="tier__flag">{t.flag}</div>}
          <div className="tier__who">{t.who}</div><h3>{t.name}</h3><p className="tier__q">{t.q}</p>
          <div className="tier__price"><sup>$</sup>{t.price}</div><div className="tier__meta">{t.meta}</div>
          <ul>{(compact ? t.items.slice(0, 5) : t.items).map((it) => <li key={it}>{it}</li>)}</ul>
          <Link className={'btn ' + (t.hi ? 'btn--primary' : 'btn--ghost')} to={`/contact?program=${t.id}`}>{t.cta}</Link>
        </Reveal>))}
    </div>
  </>)
}

export function Testimonials({ featured = true, items = QUOTES }) {
  const [cur, setCur] = useState(0); const reduce = useReducedMotion(); const feat = QUOTES.slice(0, 4)
  useEffect(() => { if (!featured || reduce) return; const t = setInterval(() => setCur((c) => (c + 1) % feat.length), 5500); return () => clearInterval(t) }, [featured, reduce, feat.length])
  return (
    <section className="section dark"><div className="wrap">
      <SectionHead eyebrow="Happy clients" title="What clients say after the interviews start" />
      {featured && <Reveal className="feature-quote"><div className="feature-quote__mark">“</div>
        <div className="feature-quote__track"><AnimatePresence mode="wait">
          <motion.blockquote key={cur} className="on" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .5 }}><p>{feat[cur].t}</p><footer>{feat[cur].n}</footer></motion.blockquote>
        </AnimatePresence></div>
        <div className="feature-quote__dots">{feat.map((_, i) => <button key={i} className={i === cur ? 'on' : ''} aria-label={'Testimonial ' + (i + 1)} onClick={() => setCur(i)} />)}</div></Reveal>}
      <Reveal className="quotes">{items.map((q) => <blockquote className="quote" key={q.n}><div className="stars">★★★★★</div><p>{q.t}</p><footer><span>{q.n}<em>{q.r}</em></span></footer></blockquote>)}</Reveal>
    </div></section>
  )
}

export const Results = () => (
  <section className="section"><div className="wrap"><SectionHead eyebrow="Results to expect" title="What changes when you work with Amy" />
    <div className="results">{[['Clarity', '3–5 named target roles at the right level, and a written blueprint for reaching them.'], ['Confidence', 'An interview narrative you can say out loud — with executive presence and without jargon.'], ['Traction', "Clients often secure interviews quickly once their résumé and LinkedIn speak the market's language."], ['A better role', 'Transitions into positions with stronger compensation, autonomy and growth potential.']].map(([h, p], i) => <Reveal key={h} className="result" delay={i * .1}><h3>{h}</h3><p>{p}</p></Reveal>)}</div>
  </div></section>
)

export const CaseGrid = ({ items = CASES, section = true }) => {
  const grid = <div className="cases">{items.map((c, i) => <Reveal key={c.id} delay={i * .08}><Link className="case" to={'/case-studies#' + c.id}><img src={c.img} alt="" /><div className="case__body"><span className="case__path">{c.path}</span><h3>{c.title}</h3><p>{c.sum}</p><span className="more">Read the case study →</span></div></Link></Reveal>)}</div>
  return section ? <section className="section alt"><div className="wrap"><SectionHead eyebrow="Case studies" title="Leaders who made the move"><p className="lede">Names changed for privacy. Journeys real. Each one started exactly where you are now.</p></SectionHead>{grid}</div></section> : grid
}

export function Dual() {
  const openVideo = useVideo()
  return (
    <section className="section"><div className="wrap"><SectionHead eyebrow="Let's get started" title="Two ways to begin" />
      <Reveal className="dual">
        <Link to="/contact"><small>Ready for a change?</small><h3>Book a discovery call.</h3><span className="btn btn--primary">Book Amy</span></Link>
        <Link to="/about"><small>Want to learn more first?</small><h3>Get to know Amy.</h3><span className="btn btn--ghost">Meet Amy</span></Link>
      </Reveal>
      <Reveal className="explore">
        <a href="#" onClick={(e) => { e.preventDefault(); openVideo() }}>Watch Amy's video <span>→</span></a>
        <Link to="/resources">Download free resources <span>→</span></Link>
        <Link to="/case-studies">Read the case studies <span>→</span></Link>
      </Reveal>
    </div></section>
  )
}

export const PostCard = ({ p, i = 0 }) => {
  const body = <><img src={p.img} alt="" /><div className="post__body"><span>{p.cat}</span><h3>{p.title}</h3><em>Read →</em></div></>
  return <Reveal delay={i * .05}>{p.to ? <Link className="post" to={p.to}>{body}</Link> : <a className="post" href={p.href} target="_blank" rel="noopener">{body}</a>}</Reveal>
}
export const Posts = () => (
  <section className="section alt"><div className="wrap">
    <SectionHead eyebrow="What's new" title="Thinking for leaders in transition"><Link className="btn btn--ghost" to="/blog" style={{ justifySelf: 'start' }}>All articles</Link></SectionHead>
    <div className="posts">{POSTS.slice(0, 3).map((p, i) => <PostCard key={p.title} p={p} i={i} />)}</div>
  </div></section>
)

export const ShowBand = () => (
  <section className="showband" id="presence">
    <img className="showband__media" src="assets/img/amy-presence.jpg" alt="" aria-hidden="true" />
    <div className="wrap"><Reveal className="showband__inner">
      <span className="eyebrow">Executive presence</span>
      <h2>Thirty years in front of rooms like this — <em>teaching leaders to be heard.</em></h2>
      <p className="lede">Executive presence isn't volume, and it isn't polish. It's saying the significant thing, in the language the room is listening for. Amy has taught that in lecture halls, agency transition programs and boardrooms on four continents — and it's exactly what she builds with you, one to one.</p>
      <div className="showband__stats">
        {[['30+', 'years teaching professional communication'], ['4', 'continents of senior clients served'], ['1:1', 'every engagement, directly with Amy']].map(([b, t]) => <div key={t}><b>{b}</b><span>{t}</span></div>)}
      </div>
    </Reveal></div>
  </section>
)

export const MethodStrip = () => (
  <section className="strip">
    <img className="strip__media" src="assets/img/amy-boardroom.jpg" alt="" aria-hidden="true" />
    <div className="wrap">
      <Reveal><span className="eyebrow">The method</span><h2>Every transition follows <em>the same four steps.</em></h2></Reveal>
      <Reveal as="a" className="btn btn--primary" href="#framework">See the method <Arrow /></Reveal>
    </div>
  </section>
)

const TILES = [
  ['assets/img/amy-coaching.jpg', 'Amy Sindicic reviewing a résumé with a client', 'One to one', 'Across the table', 'Your résumé, your LinkedIn, your interview story — rebuilt together, in your own words.'],
  ['assets/img/amy-podcast.jpg', 'Amy Sindicic recording a podcast interview', 'On the mic', 'In the conversation', 'Podcasts, panels and agency transition programs on what actually moves senior candidates forward.'],
  ['assets/img/amy-keynote.jpg', 'Amy Sindicic presenting career transition strategies to a lecture hall', 'In the lecture hall', 'Teaching the room', 'Agency transition programs and university lecture halls — where hundreds of leaders first meet the method.'],
]
export const Mosaic = () => (
  <section className="section alt"><div className="wrap">
    <SectionHead eyebrow="How the work happens" title="Where you'll find Amy"><p className="lede">The workshops, the podcasts and the lecture halls are how leaders find her. The work itself happens across a table — one conversation at a time.</p></SectionHead>
    <div className="mosaic">
      {TILES.map(([img, alt, tag, h, p], i) => (
        <Reveal key={h} as="article" className="mosaic__tile" delay={i * .1}>
          <img src={img} alt={alt} />
          <div className="mosaic__body"><span>{tag}</span><h3>{h}</h3><p>{p}</p></div>
        </Reveal>))}
      <Reveal as="article" className="mosaic__tile mosaic__tile--cta" delay={.2}>
        <span>Start here</span><h3>A conversation costs nothing.</h3>
        <p>Bring where you want to go. Leave with an honest read on what it takes to get there.</p>
        <Link className="btn" to="/contact">Book a discovery call</Link>
      </Reveal>
    </div>
  </div></section>
)
