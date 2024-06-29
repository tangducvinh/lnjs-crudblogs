import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blogs list",
  description: "This is blogs list",
}

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
