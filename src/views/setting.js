import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import "../assets/css/switch.css"
import "../assets/css/btn_vul.css"
import { useEffect } from "react";
import axiosClient from "service/axiosClient";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Setting() {
  const [statusAcunetix, setStatusAcunetix] = useState(false);
  const [statusNuclei, setStatusNuclei] = useState(false);
  useEffect(() => {
    async function getStatus() {
      const resAcunetix = await axiosClient.get("/settings/acunetix");
      // console.log(res.data.enabled);
      setStatusAcunetix(resAcunetix.data.enabled);
      const resNuclei = await axiosClient.get("/settings/nuclei");
      // console.log(res.data.enabled);
      setStatusNuclei(resNuclei.data.enabled);
      console.log(setStatusAcunetix)
      console.log(statusNuclei)
    }
    getStatus();
  }, [statusAcunetix, statusNuclei]);
  const enableAcunetix=(e)=>{
    // e.preventDefault()
    setStatusAcunetix(true)
    axiosClient.post("/settings/acunetix/enable").then(res=>{
      console.log(res)
    })
  }
  const disableAcunetix=(e)=>{
    // e.preventDefault()
    setStatusAcunetix(false)
    axiosClient.post("/settings/acunetix/disable").then(res=>{
      console.log(res)
    })
  }
  const enableNuclei=(e)=>{
    // e.preventDefault()
    setStatusNuclei(true)
    axiosClient.post("/settings/nuclei/enable").then(res=>{
      console.log(res)
    })
  }
  const disableNuclei=(e)=>{
    // e.preventDefault()
    setStatusNuclei(false)
    axiosClient.post("/settings/nuclei/disable").then(res=>{
      console.log(res)
    })
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">

              <Card.Body className="table-full-width table-responsive px-0">
              <div>
              <label className="switch">
              <input type="checkbox" 
              checked={statusAcunetix}
              onChange={e=>{
                setStatusAcunetix(e.target.checked)
                e.target.checked ? enableAcunetix() : disableAcunetix()
              }}
              />
              <span className="slider round"></span>
              </label>
              <label><p className="acunetix">Acunetix</p></label>
              </div>

              <div>
              <label className="switch">
              <input type="checkbox"  
              checked={statusNuclei}
              onChange={e=>{
                setStatusNuclei(e.target.checked)
                e.target.checked ? enableNuclei() : disableNuclei()
              }}
              // onChange={e => {
              //   e.target.checked ? enableNuclei() : disableNuclei()}}
              />
              <span className="slider round"></span>
              
              </label>
              <label><p className="nuclei">Nuclei</p></label>
              </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Setting;
