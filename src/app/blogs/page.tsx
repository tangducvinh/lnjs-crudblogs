"use client"

import TableHome from "../companents/table/TableHome"
import useSWR from "swr"

function Blogs() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  // const getData = async () => {
  //   let res = await fetch("")
  //   res = await res.json()
  //   console.log({ res })
  // }

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  // useEffect(() => {
  //   getData()
  // }, [])
  if (isLoading) {
    return <div>loading...</div>
  }

  return <TableHome blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
}
export default Blogs
