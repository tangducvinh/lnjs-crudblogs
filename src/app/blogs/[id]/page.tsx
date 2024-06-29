"use client"

import Link from "next/link"
import useSWR, { Fetcher } from "swr"

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json())

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <Link href="/blogs">Go back</Link>

      <p>{data?.title}</p>
      <p>{data?.author}</p>
      <p>{data?.content}</p>
    </div>
  )
}

export default ViewDetailBlog
