import Link from "next/link"

export default function NavBar() {
  return (
    <nav style={{padding: "20px", background: "black", color: "white"}}>
      <h2>EV Charging ⚡</h2>

      <div style={{display: "flex", gap: "20px"}}>
        <Link href="/">Home</Link>
        <Link href="/stations">Stations</Link>
        <Link href="/map">Map</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}