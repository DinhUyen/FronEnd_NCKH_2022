import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axiosClient from "service/axiosClient";
import {Link,useLocation} from 'react-router-dom'
import queryString from 'query-string'

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

const Detail = ({ data }) => {
  console.log(data);
  const [detail, setDetail] = useState();
  const location = useLocation();
  const search = location.search
  console.log(search);
  React.useEffect(() => {
    async function getDetail() {
      console.log(data);
      const url = `vulnerabilities/${data}`;
      const res = await axiosClient.get(url);
      // console.log(res.data);
      setDetail(res.data);
      // console.log("detail");
      // console.log(detail);
    }
    getDetail();
  }, [data]);
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <>
                      <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                    <Link to={`/admin/vulnerability${search}`} onClick={handleClick}>
                    <i className="nc-icon nc-simple-remove" style={{position: "absolute", right: -470, top: -15}}></i>
      </Link>
                   
                    </div>
                  </Col>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Thuộc tính</th>
                      <th className="border-0">Nội dung</th>
                    </tr>
                  </thead>
                  <tbody>
                  {detail && Object.entries(detail).map(([key, value]) => {
                      return (
                        <tr>
                          <td>{key}</td>
                          <td>{value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Detail;
