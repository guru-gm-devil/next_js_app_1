"use client"

export default function Error({ error, reset }) {
  return (
    <div style={{textAlign:"center", padding:"80px"}}>
      <h1>Something went wrong ⚠️</h1>

      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        style={{
          padding:"10px 20px",
          background:"green",
          color:"white",
          border:"none",
          cursor:"pointer"
        }}
      >
        Try Again
      </button>
    </div>
  )
}