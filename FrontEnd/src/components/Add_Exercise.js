import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import Axios from "axios";
import "../public/css/adform.css";
import NavBar_Admin from "../sidebar/NavBar_Admin";

// Cach viet 2
export default function PostForm() {
  const url = "http://localhost:8080/admin/exercise/add";
  const [question, setQuestion] = useState(null);
  const [name, setName] = useState(null);
  const [intro, setIntro] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
      Axios.post(url, {
        name: name,
        intro: intro,
        question: question,
        answer: answer,
      }).then((res) => {
        console.log(res.data);
      });
      alert("Add data successfully!");
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
        <Card.Body className="add-ex-css">
          <h1 className="text-center mb-3">Add Exercise</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={(e) => handleSubmit(e)}>
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
              Add
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}