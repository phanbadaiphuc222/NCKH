import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import Axios from "axios";
import "../public/css/adform.css";
import NavBar_Admin from "../sidebar/NavBar_Admin";

export default function PostForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [theory, setTheory] = useState("");
  const [declare, setDeclare] = useState("");
  const [example, setExample] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const url = `http://localhost:8080/admin/dashboard/editAll/${id}`;
  const url1 = `http://localhost:8080/admin/dashboard/editName/${id}`;
  const url2 = `http://localhost:8080/admin/dashboard/editTheory/${id}`;
  const url3 = `http://localhost:8080/admin/dashboard/editDeclare/${id}`;
  const url4 = `http://localhost:8080/admin/dashboard/editExample/${id}`;
  const onChangeId = (event) => {
    const value = event.target.value;
    setId(value);
  };
  const onChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const onChangeTheory = (event) => {
    const value = event.target.value;
    setTheory(value);
  };
  const onChangeDeclare = (event) => {
    const value = event.target.value;
    setDeclare(value);
  };
  const onChangeExample = (event) => {
    const value = event.target.value;
    setExample(value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url, {
        name: name,
        theory: theory,
        declare: declare,
        example: example,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update data successfully!");
    } catch {
      setError("Failed to update data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateName(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url1, {
        name: name,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update name successfully!");
    } catch {
      setError("Failed to update data!");
    }

    setLoading(false);
  }

  async function handleSubmitUpdateTheory(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url2, {
        theory: theory,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update theory successfully!");
    } catch {
      setError("Failed to update data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateDeclare(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url3, {
        declare: declare,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update declare successfully!");
    } catch {
      setError("Failed to update data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateExample(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url4, {
        example: example,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update example successfully!");
    } catch {
      setError("Failed to update data!");
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
        <Card.Body className="update-db-css">
          <h1 className="text-center mb-3">Update Name</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmitUpdateName(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeName}>
              <Form.Label>Name</Form.Label>
              <Form.Control id="name" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="update-db-css">
          <h1 className="text-center mb-3">Update Theory</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmitUpdateTheory(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeTheory}>
              <Form.Label>Theory</Form.Label>
              <Form.Control id="theory" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="update-db-css">
          <h1 className="text-center mb-3">Update Declare</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmitUpdateDeclare(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeDeclare}>
              <Form.Label>Declare</Form.Label>
              <Form.Control id="declare" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="update-db-css">
          <h1 className="text-center mb-3">Update Example</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmitUpdateExample(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeExample}>
              <Form.Label>Example</Form.Label>
              <Form.Control id="example" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="update-db-css">
          <h1 className="text-center mb-3">Update Dashboard</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeName}>
              <Form.Label>Name</Form.Label>
              <Form.Control id="name" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeTheory}>
              <Form.Label>Theory</Form.Label>
              <Form.Control id="theory" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeDeclare}>
              <Form.Label>Declare</Form.Label>
              <Form.Control id="declare" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeExample}>
              <Form.Label>Example</Form.Label>
              <Form.Control id="example" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}