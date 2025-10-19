
import Link from 'next/link';
import QuickExit from './QuickExit';
export default function Layout({children}:{children:React.ReactNode}){
  return (<>
    <QuickExit/>
    <header>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <strong>Spot Safe Harbor</strong>
        <nav style={{display:'flex',gap:12}}>
          <Link href="/">Home</Link>
          <Link href="/resources/ct">CT Directory</Link>
          <Link href="/get-help/fire">Fire</Link>
          <Link href="/get-help/flood">Flood</Link>
          <Link href="/submit">Submit</Link>
          <Link href="/nexus">Nexus</Link>
        </nav>
      </div>
    </header>
    <div className="ribbon">If you're in immediate danger, call <b>911</b>. If you can, use a <b>safe device</b> and <b>private browser</b>.</div>
    <main className="container">{children}</main>
    <footer className="container" style={{marginTop:24,borderTop:'1px solid #e5e7eb',paddingTop:16}}>
      <div>We minimize data collection and never sell data. CT-first resources. WCAG AA targeted.</div>
    </footer>
  </>)
}