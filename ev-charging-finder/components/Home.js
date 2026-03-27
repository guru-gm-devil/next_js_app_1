import Image from "next/image"

export default function Stations() {
  return (
    <div style={{padding:"20px"}}>

      <h1>Available EV Charging Stations</h1>

      <Image
        src="/images/stations.jpg"
        alt="Charging Station"
        width={900}
        height={400}
      />

      <p>
        Below are some of the most popular EV charging stations available
        in the city.
      </p>

      <ul>
        <li>Whitefield EV Charging Hub – Bangalore</li>
        <li>Electronic City Fast Charging Station</li>
        <li>Indiranagar EV Charging Point</li>
        <li>MG Road Green Energy Charging Station</li>
      </ul>

    </div>
  )
}