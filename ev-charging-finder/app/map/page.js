import Image from "next/image"

export default function MapPage() {
  return (
    <div>

      <section style={{textAlign:"center", padding:"30px"}}>
        <h1>EV Charging Map</h1>

        <Image
          src="/images/map.jpg"
          alt="Map"
          width={1000}
          height={400}
        />
      </section>

      <section style={{padding:"30px"}}>
        <p>
          Use the map to locate nearby charging stations and
          plan your EV routes effectively.
        </p>
      </section>

    </div>
  )
}