import React from "react";
import { Form } from "react-bootstrap";
import { useFormInput } from "../hooks/forms";

export default function CredentialsForm({ credentials, onCredentialsChange }) {
  const emailFormInput = useFormInput(
    credentials.email,
    handleCredentialsChange
  );
  const passwordFormInput = useFormInput(
    credentials.password,
    handleCredentialsChange
  );

  function handleCredentialsChange() {
    onCredentialsChange({
      email: emailFormInput.value,
      password: passwordFormInput.value,
    });
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...emailFormInput}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...passwordFormInput}
        />
      </Form.Group>
    </Form>
  );
}
