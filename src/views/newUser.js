import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import apiAdmin from "../service/Admin/apiAdmin";
import axiosClient from "service/axiosClient";
import { useHistory } from "react-router-dom";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

function newUser() {
  const [listUsers, setlistUsers] = useState([]);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [is_accepted, setis_accepted] = useState("");
  const [role, setrole] = useState("");
  const data = {
    email: email,
    password: password,
    is_accepted: is_accepted,
    role: role,
  };
  console.log(data);
  async function addItem() {
    console.log("token");

    const re = await axiosClient.post("users/create", data);
    console.log(re);
    alert("Thêm mới thành công");
  }

    const history = useHistory();
    const goBack = () => history.push("/admin/tableUser");

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thêm người dùng mới</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          type="Email"
                          onChange={(event) => setemail(event.target.value)}
                          value={email}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          type="password"
                          onChange={(event) => setpassword(event.target.value)}
                          value={password}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>is_accepted</label>
                        <br />
                        <Form.Select
                          aria-label="Default select example"
                          value={is_accepted}
                          onChange={(event) =>
                            setis_accepted(event.target.value)
                          }
                        >
                          <option>Open this select menu</option>
                          <option value="True">True</option>
                          <option value="False">False</option>
                          {console.log(is_accepted)}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Role</label>
                        <Form.Control
                          type="text"
                          onChange={(event) => setrole(event.target.value)}
                          value={role}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    variant="info"
                    type="button"
                    onClick={() => addItem()}
                  >
                    Add
                  </Button>
                  <span> </span>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  onClick={()=>goBack()}>
                    Back
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default newUser;
