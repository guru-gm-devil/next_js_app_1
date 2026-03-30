import Image from "next/image"

export default function Home() {
  return (
    <section style={{textAlign:"center", padding:"40px"}}>

      <h1>EV Charging Finder ⚡</h1>

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Electric_vehicle_charging_station.jpg"
        alt="EV Charging"
        width={900}
        height={400}
      />

      <p>Find nearby EV charging stations easily.</p>

    </section>
  )
}