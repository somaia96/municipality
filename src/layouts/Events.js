import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from '@mui/styles';
import EventsCss from "../CssFolder/EventsCss.css";
import Event from "../components/Evenet";
// to swith the arrow of the pagination 
const useStyles = makeStyles((theme) => ({
    rtlPagination: {
      '& .MuiPaginationItem-icon': {
        transform: 'scaleX(-1)', // Flip the arrow horizontally
      },
    },
  }));
function Events() {
  const tabs = ["الكل", "الأعمال", "الفعاليات", "النشاطات"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handlActiveTabClick = (tab) => {
    setActiveTab(tab);
  };
  const classes = useStyles();
  return (
    <Container className="mt-3">
      <div className="font-header fw-bold text-align color-main">الفعاليات</div>
      <Row className="justify-content-center mt-2 mb-3 px-3">
        {tabs.map((tab) => (
          <Col className="flex justify-content-center" xs={3} lg={2}>
            <button
              className={
                activeTab === tab
                  ? "active-button main-shadow font-tab"
                  : "disabled-button main-shadow font-tab"
              }
              key={tab}
              onClick={() => handlActiveTabClick(tab)}
            >
              {tab}
            </button>
          </Col>
        ))}
      </Row>
      <div className="px-3">
        {activeTab === "الكل" && (
          <div className="flex flex-col">
            <Event />
            <Event />
            <Event />
            <Event />
          </div>
        )}
        {activeTab === "الأعمال" && (
          <div className="flex flex-col">
            <Event />
            <Event />
            <Event />
          </div>
        )}
        {activeTab === "الفعاليات" && (
          <div className="flex flex-col">
            <Event />
            <Event />
          </div>
        )}
        {activeTab === "النشاطات" && (
          <div className="flex flex-col">
            <Event />
          </div>
        )}
      </div>
      <Row className="justify-content-center mt-4">
        <Col className="flex justify-content-center" xs={12} md={8}>
          <Stack spacing={1}>
            <Pagination
              count={99}
              shape="rounded"
              classes={{ ul: classes.rtlPagination }}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Events;
