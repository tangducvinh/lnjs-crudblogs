"use client"

import Table from "react-bootstrap/Table"
import { Button, ToastHeader } from "react-bootstrap"
import Model from "../model/Model"
import { useState } from "react"
import Link from "next/link"
import { toast } from "react-toastify"
import { mutate } from "swr"

interface IProps {
  blogs: IBlog[]
}

function TableHome(props: IProps) {
  const { blogs } = props
  const [status, setStatus] = useState<boolean>(false)

  const [currentBlog, setCurrentBlog] = useState<IBlog | undefined>()

  const handleDeleteBlog = async (id: number) => {
    let text;
    if (confirm("Press a button")) {
      const res = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "delete",
      })
  
      const result = await res.json()
  
      if (result) {
        toast.success("Delete successfully")
        mutate("http://localhost:8000/blogs")
      }
    } else {
      text = 'You canceled'
    }
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h3>Table Blogs</h3>

        <Button onClick={() => setStatus(true)}>Add Blog</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                <Button>
                  <Link href={`/blogs/${item.id}`}>View</Link>
                </Button>
                <Button
                  onClick={() => {
                    setStatus(true)
                    setCurrentBlog(item)
                  }}
                  variant="warning"
                  className="mx-3"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDeleteBlog(item.id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Model
        data={currentBlog}
        status={status}
        setStatus={setStatus}
        setCurrentBlog={setCurrentBlog}
      ></Model>
    </>
  )
}

export default TableHome
