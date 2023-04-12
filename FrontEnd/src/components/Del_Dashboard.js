import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import Axios from "axios";
import "../public/css/adform.css";
import NavBar_Admin from "../sidebar/NavBar_Admin";

// Cach viet 1
export default function PostForm() {
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const url = `http://localhost:8080/admin/dashboard/del/${id}`;

  const onChangeId = (event) => {
    const value = event.target.value;
    setId(value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.delete(url).then((res) => {
        console.log(res.data);
      });
      alert("Delete data successfully!");
    } catch {
      setError("Failed to add data!");
    }

    setLoading(false);
  }

  return (
    <>
      <NavBar_Admin />
      <Card>
        <div className="bd-admin1">
          <a href="http://localhost:3000/add-dashboard">
            <button className="button">Add</button>
          </a>
          <a href="http://localhost:3000/update-dashboard">
            <button className="button button-mid">Update</button>
          </a>
          <a href="http://localhost:3000/delete-dashboard">
            <button className="button">Delete</button>
          </a>
        </div>
        <Card.Body className="del-db-css">
          <h1 className="text-center mb-3">Delete Dashboard</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" placeholder="ID..." type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Delete
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}