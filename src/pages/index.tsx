
import Layout from '../components/Layout';
import Link from 'next/link';
export default function Home(){
  return (<Layout>
    <h1>Help, safely — right now.</h1>
    <p>Connect to trusted CT resources. Download emergency packs. Submit a brief for a 48‑hour build.</p>
    <section className="cards">
      <div className="card">
        <h3>Fire or Flood</h3><p>Step‑by‑step Family Packs for emergencies (printable).</p>
        <p><Link className="btn" href="/get-help/fire">Family Fire Pack →</Link></p>
        <p><Link className="btn" style={{background:'#0ea5e9'}} href="/get-help/flood">Family Flood Pack →</Link></p>
      </div>
      <div className="card">
        <h3>Housing & Shelter (CT)</h3><p>Find a safe place tonight. Search by county, topic, language.</p>
        <p><Link className="btn" href="/resources/ct">Open Directory →</Link></p>
      </div>
      <div className="card">
        <h3>Talk to Someone Now</h3><p><b>CT 2‑1‑1</b>, <b>988 Lifeline</b>, <b>DV Hotline 800‑799‑SAFE</b>.</p>
        <p><a className="btn" href="tel:211">Call 2‑1‑1</a></p>
      </div>
    </section>
  </Layout>)
}