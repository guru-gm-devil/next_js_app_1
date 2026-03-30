import Image from "next/image"

export default function About() {
  return (
    <div style={{padding:"30px"}}>

      <h1>About EV Charging</h1>

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Tesla_Supercharger_station.jpg"
        alt="About EV"
        width={900}
        height={400}
      />

      <p>
        Electric vehicles are the future of sustainable transportation.
      </p>

    </div>
  )
}