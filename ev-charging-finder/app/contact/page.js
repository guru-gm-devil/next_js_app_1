import Image from "next/image"

export default function Contact() {
  return (
    <div style={{padding:"30px"}}>

      <h1>Contact Us</h1>

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Electric_vehicle_charging_plug.jpg"
        alt="Contact"
        width={900}
        height={400}
      />

      <p>Email: support@evcharging.com</p>

    </div>
  )
}