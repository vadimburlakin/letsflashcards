import React, { useState } from "react";
import { Container, Row, Tabs, Tab, Button } from "react-bootstrap";

import CredentialsForm from "./credentials-form";

export const SCREEN_SIGNIN = "SIGN_IN";
export const SCREEN_SIGNUP = "SIGN_UP";

export default function RegistrationPage() {
  const DEFAULT_SCREEN = SCREEN_SIGNIN;
  const [screen, setScreen] = useState(DEFAULT_SCREEN);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  return (
    <>
      <Container>
        <Row>
          <Tabs
            activeKey={screen}
            onSelect={setScreen}
            id="registration-page"
            className="mb-3"
          >
            <Tab eventKey={SCREEN_SIGNIN} title="Sign In"></Tab>
            <Tab eventKey={SCREEN_SIGNUP} title="Sign Up"></Tab>
          </Tabs>
          <CredentialsForm
            credentials={credentials}
            onCredentialsChange={setCredentials}
          />
        </Row>
        <Row className="p-3">
          {screen === SCREEN_SIGNIN && (
            <Button variant="primary" type="submit">
              Log in
            </Button>
          )}
          {screen === SCREEN_SIGNUP && (
            <Button variant="primary" type="submit">
              Register a new account
            </Button>
          )}
        </Row>
      </Container>
    </>
  );
}
