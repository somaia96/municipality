
import "./SingleService.css";
import img from "../../Assets/services.png";
import { ServicesInfo } from "../../data";
function SingleService() {
  return (
    <div className="container pt-5 ">
      <div className="row ">
        {ServicesInfo &&
          ServicesInfo.map((oneService) => {
            return (
              <div className="col-md-6 col-sm-12 " key={oneService.id}>
                <div className="content">
                  <div className="text">
                    <h5>{oneService.title}</h5>
                    <ol>
                      <li>تواجد صاحب العلاقة او وكيل قانوني حصرا</li>
                      <li>صورة شخصية </li>
                      <li>صورة هوية </li>
                      <li>لاحكم عليه</li>
                      <li>شهادة حرفية</li>
                      <li>سند ملكية محل</li>
                    </ol>
                  </div>
                  <div className="col-md-6 col-sm-12 ">
                    <div className="img-box">
                      <img src={img} alt="image" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SingleService;
