import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ModalAdd() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                    onChange={(event) => setis_accepted(event.target.value)}
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
              <Col className="pr-1" md="6">
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
              onClick={() => goBack()}
            >
              Back
            </Button>
            <div className="clearfix"></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAdd;
