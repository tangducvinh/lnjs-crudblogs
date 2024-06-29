"use client"
import { useRouter } from "next/navigation"
import { Button } from "react-bootstrap"

const Facebook = () => {
  const router = useRouter()

  const handleNavigate = () => {
    router.push("/")
  }

  return (
    <div>
      <p>This is facebook's page</p>
      <Button variant="success" onClick={() => handleNavigate()}>
        back
      </Button>
    </div>
  )
}

export default Facebook
