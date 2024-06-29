import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home page",
  description: "This is metadata",
}

const Home = () => {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json())

  // const getData = async () => {
  //   let res = await fetch("")
  //   res = await res.json()
  //   console.log({ res })
  // }

  // const { data, error, isLoading } = useSWR(
  //   "http://localhost:8000/blogs",
  //   fetcher,
  //   {
  //     revalidateIfStale: false,
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //   }
  // )

  // useEffect(() => {
  //   getData()
  // }, [])
  // if (!data) {
  //   return <div>loading...</div>
  // }

  return (
    <div className="mt-[50px] mb-3">
      {/* <TableHome blogs={data?.sort((a: any, b: any) => b.id - a.id)} /> */}
      This is home's page
    </div>
  )
}

export default Home
