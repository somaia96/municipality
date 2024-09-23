import { Row, Col, Image } from "react-bootstrap";
import "../CssFolder/EventsCss.css";
import EventImage from "../images/EventImage.jpg";
import Image1 from "../images/Event1.jpg";
import Image2 from "../images/Event2.jpg";
import Image3 from "../images/Event3.jpg";
function Event() {
  return (
    <Row className="back-event mt-3 rounded-meduim main-shadow p-3">
      <Col md={4} className="px-0">
        <Image className="rounded main-shadow h-100" src={EventImage} fluid />
      </Col>
      <Col md={8}>
        <Row>
          <div className="fs-5 fw-bold main-color text-justify">
            رفع سوية الاقتصاد وفرص العمل في المنطقة
          </div>
          <div className="fw-500 fs-6 mt-2 color-gray">3/آب/2024</div>
          <div className="fw-500 fs-6 mt-2 text-justify">
            تعزيز التنمية الاقتصادية: نجح مجلس البلدية في جذب الاستثمارات وتشجيع
            إقامة المشاريع الصناعية والتجارية في المدينة. تم توفير فرص عمل جديدة
            وتعزيز النشاط الاقتصادي المحلي. كما تم تنفيذ سياسات داعمة لريادة
            الأعمال وتشجيع الابتكار وتطوير الصناعات المحلية، مما أدى إلى زيادة
            الاستدامة الاقتصادية وتحسين مستوى المعيشة للسكان.
          </div>
        </Row>
        <Row>
          <Col className="mt-3" md={2} xs={4}>
            <Image className="h-100 rounded main-shadow" src={Image1} fluid />
          </Col>
          <Col className="mt-3" md={2} xs={4}>
            <Image className="h-100 rounded main-shadow" src={Image2} fluid />
          </Col>
          <Col className="mt-3" md={2} xs={4}>
            <Image className="h-100 rounded main-shadow" src={Image3} fluid />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Event;
