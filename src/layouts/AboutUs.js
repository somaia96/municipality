import AboutUsBody from "../components/AboutUsBody";
import Member from "../components/Member";
import { Container, Row, Col, Image } from "react-bootstrap";

function AboutUs() {
  return (
    <div>
      <AboutUsBody />
      <Container className="mt-5">
        <div className="font-header fw-bold color-main">
          أعضاء مجلس البلدية:
        </div>
        <Row>
          <Col sm={4}>
            <Member />
          </Col>
          <Col sm={4}>
            <Member />
          </Col>
          <Col sm={4}>
            <Member />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default AboutUs;
