import Image from "next/image"

export default function Stations() {
  return (
    <div style={{padding:"30px"}}>

      <h1>EV Charging Stations</h1>

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Electric_vehicle_charging_station_BMW_i3.jpg"
        alt="Stations"
        width={900}
        height={400}
      />

      <p>List of available EV charging stations.</p>

    </div>
  )
}