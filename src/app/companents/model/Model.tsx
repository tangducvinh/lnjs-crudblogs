"use client"

import { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { toast } from "react-toastify"
import { mutate } from "swr"

interface IProps {
  status: boolean
  setStatus: (v: boolean) => void
  data: IBlog | undefined
  setCurrentBlog: (v: IBlog | undefined) => void
}

interface DataPass {
  author: string
  title: string
  content: string
}

function Model(props: IProps) {
  const { status, setStatus, data, setCurrentBlog } = props

  const [title, setTitle] = useState<string>("")
  const [author, setAuthor] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [id, setId] = useState<number | undefined>()

  const postDataToServer = async (data: DataPass) => {
    const res = await fetch("http://localhost:8000/blogs", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(data),
    })

    const result = await res.json()

    if (result) {
      toast.success("Create new blog succeed")
      handleCloseModel()
      mutate("http://localhost:8000/blogs")
    }
  }

  const updateBlog = async (data: DataPass, id: number | undefined) => {
    const res = await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(data),
    })

    const result = await res.json()

    if (result) {
      toast.warning("Update new blog succeed")
      handleCloseModel()
      mutate("http://localhost:8000/blogs")
    }
  }

  const handleSubmit = () => {
    if (!title) {
      toast.error("Not empty title")
      return
    }
    if (!author) {
      toast.error("Not empty author")
      return
    }
    if (!content) {
      toast.error("Not empty content")
      return
    }

    if (data) {
      updateBlog({ author, title, content }, id)
    } else {
      postDataToServer({ author, title, content })
    }
  }

  const handleCloseModel = () => {
    setTitle("")
    setAuthor("")
    setContent("")
    setCurrentBlog(undefined)
    setStatus(false)
  }

  useEffect(() => {
    if (data) {
      setTitle(data?.title)
      setAuthor(data?.author)
      setContent(data?.content)
      setId(data?.id)
    }
  }, [data])

  return (
    <>
      <Modal
        show={status}
        onHide={() => {
          handleCloseModel()
        }}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModel}>
            Close
          </Button>
          <Button onClick={handleSubmit} variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Model
