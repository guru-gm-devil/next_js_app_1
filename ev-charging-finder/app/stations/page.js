import Image from "next/image"

export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section style={{textAlign:"center", padding:"40px"}}>
        <h1>EV Charging Finder ⚡</h1>

        <Image
          src="/images/home.jpg"
          alt="EV Charging"
          width={1000}
          height={400}
        />

        <p>
          Locate EV charging stations quickly and travel with confidence.
        </p>
      </section>


      {/* FEATURES SECTION */}
      <section style={{padding:"40px", background:"#f4f4f4"}}>
        <h2>Why Use Our Platform?</h2>

        <ul>
          <li>✔ Find nearby charging stations</li>
          <li>✔ Check charger availability</li>
          <li>✔ Plan long distance EV trips</li>
        </ul>
      </section>


      {/* INFO SECTION */}
      <section style={{padding:"40px"}}>
        <h2>About Electric Vehicles</h2>

        <p>
          Electric vehicles are becoming the future of sustainable
          transportation. Reliable charging infrastructure helps EV
          drivers travel longer distances with ease.
        </p>
      </section>

    </div>
  )
}