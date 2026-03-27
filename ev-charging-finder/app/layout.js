export const metadata = {
  title: "EV Charging Finder",
  description: "Find EV charging stations easily",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}