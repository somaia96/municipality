
import "./Services.css";
import SingleService from "./SingleService/SingleService";
function Services() {
  return (
    // Navbar Component
    <div className="container">
      <div className="services-header">
        <h2>انواع الخدمات:</h2>
        <div className="buttons">
          <ul>
            <li className="active">بيئية</li>
            <li>فنية</li>
            <li>ادارية</li>
            <li>صحية</li>
          </ul>
        </div>
      </div>
      <SingleService />
    </div>
    // Footer Component
  );
}

export default Services;
