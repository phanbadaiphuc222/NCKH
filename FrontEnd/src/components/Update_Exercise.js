import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import Axios from "axios";
import "../public/css/adform.css";
import NavBar_Admin from "../sidebar/NavBar_Admin";

// Cach viet 1
export default function PostForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [intro, setIntro] = useState("");
  const url = `http://localhost:8080/admin/exercise/editAll/${id}`;
  const url1 = `http://localhost:8080/admin/exercise/editQuestion/${id}`;
  const url2 = `http://localhost:8080/admin/exercise/editAnswer/${id}`;
  const url3 = `http://localhost:8080/admin/exercise/editNameExercise/${id}`;
  const url4 = `http://localhost:8080/admin/exercise/editIntro/${id}`;

  const onChangeId = (event) => {
    const value = event.target.value;
    setId(value);
  };
  const onChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const onChangeIntro = (event) => {
    const value = event.target.value;
    setIntro(value);
  };
  const onChangeQuestion = (event) => {
    const value = event.target.value;
    setQuestion(value);
  };
  const onChangeAnswer = (event) => {
    const value = event.target.value;
    setAnswer(value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url, {
        name: name,
        question: question,
        answer: answer,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update data successfully!");
    } catch {
      setError("Failed to add data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateName(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url3, {
        name: name,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update dashboard name successfully!");
    } catch {
      setError("Failed to add data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateIntro(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url4, {
        intro: intro,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update introduction question successfully!");
    } catch {
      setError("Failed to add data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateQuestion(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url1, {
        question: question,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update question successfully!");
    } catch {
      setError("Failed to add data!");
    }
    setLoading(false);
  }

  async function handleSubmitUpdateAnswer(e) {
    e.preventDefault();
    e.target.reset();
    try {
      setError("");
      setLoading(true);
      Axios.put(url2, {
        answer: answer,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Update answer successfully!");
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
          <a href="http://localhost:3000/add-exercise">
            <button className="button">Add</button>
          </a>
          <a href="http://localhost:3000/update-exercise">
            <button className="button button-mid">Update</button>
          </a>
          <a href="http://localhost:3000/delete-exercise">
            <button className="button">Delete</button>
          </a>
        </div>

        <Card.Body className="update-ex-css">
          <h1 className="text-center mb-3">Update Dashboard</h1>
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

        <Card.Body className="update-ex-css">
          <h1 className="text-center mb-3">Update Introduction Question</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmitUpdateIntro(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeIntro}>
              <Form.Label>Intro</Form.Label>
              <Form.Control id="intro" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="update-ex-css">
          <h1 className="text-center mb-3">Update Question</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmitUpdateQuestion(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeQuestion}>
              <Form.Label>Question</Form.Label>
              <Form.Control id="question" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="update-ex-css">
          <h1 className="text-center mb-3">Update Answer</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmitUpdateAnswer(e)}>
            <Form.Group onChange={onChangeId}>
              <Form.Label>ID</Form.Label>
              <Form.Control id="id" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeAnswer}>
              <Form.Label>Answer</Form.Label>
              <Form.Control id="answer" type="text" />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>

        <Card.Body className="update-ex-css">
          <h1 className="text-center mb-3">Update Exercise</h1>
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
            <Form.Group onChange={onChangeIntro}>
              <Form.Label>Intro</Form.Label>
              <Form.Control id="intro" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeQuestion}>
              <Form.Label>Question</Form.Label>
              <Form.Control id="question" type="text" />
            </Form.Group>
            <Form.Group onChange={onChangeAnswer}>
              <Form.Label>Answer</Form.Label>
              <Form.Control id="answer" type="text" />
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
