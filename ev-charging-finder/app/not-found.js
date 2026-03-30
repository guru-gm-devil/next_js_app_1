import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div style={{textAlign:"center", padding:"80px"}}>

      <h1>606⚡</h1>

      <h2>Charging Station Not Found</h2>


      <p>
        The page you are looking for does not exist or the charging
        station is unavailable.
      </p>

      <Link href="/">
        Go Back Home
      </Link>

    </div>
  )
}