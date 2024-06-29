import { Metadata } from "next"

export const metadata: Metadata = {
  title: "View detail blog",
  description: "This is view detail blog",
}

export default function ViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
