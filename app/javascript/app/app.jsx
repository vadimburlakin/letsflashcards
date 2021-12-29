import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./home";
import RegistrationPage from "./registration/registration-page";
import EmailConfirmationPage from "./registration/email-confirmation-page";

import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { SCREEN_SIGNIN, SCREEN_SIGNUP } from "./registration/registration-page";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Let's! Flashcards</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/sign-out">Sign Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-in" element={<RegistrationPage />} />
          <Route
            exact
            path="/confirm-email"
            element={<EmailConfirmationPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
