"use client"

import Link from "next/link"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Link className="mr-3" href="/">
        Home
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link href="/blogs">Blogs</Link>
          {/* <Link className="px-3" href="/youtube">
            Youtube
          </Link>
          <Link href="/instagram">Instagram</Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbars
