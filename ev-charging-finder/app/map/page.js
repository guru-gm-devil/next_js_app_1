import Image from "next/image"

export default function MapPage() {
  return (
    <div style={{padding:"30px"}}>

      <h1>EV Charging Map</h1>

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Electric_car_charging_map.jpg"
        alt="EV Map"
        width={900}
        height={400}
      />

      <p>Locate charging stations using the map.</p>

    </div>
  )
}