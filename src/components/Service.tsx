
import img from "/images/services.png";
import { ServicesInfo } from "../data";
function Service() {
  return (
    <div className="container pt-5">
      <div className="flex flex-col md:flex-row flex-wrap">
        {ServicesInfo &&
          ServicesInfo.map((oneService) => {
            return (
              <div className="md:w-6/12" key={oneService.id}>
                <div className="content flex-col md:flex-row flex justify-between items-center bg-white p-5 rounded-3xl m-2 min-h-[320px]">
                  <div className="text">
                    <h5 className="mb-3 font-bold">{oneService.title}</h5>
                    <ol>
                      <li>تواجد صاحب العلاقة او وكيل قانوني حصرا</li>
                      <li>صورة شخصية </li>
                      <li>صورة هوية </li>
                      <li>لاحكم عليه</li>
                      <li>شهادة حرفية</li>
                      <li>سند ملكية محل</li>
                    </ol>
                  </div>
                  <div className="md:w-6/12 -order-1 md:order-1 mb-3 md:mb-0">
                    <div className="img-box">
                      <img src={img} alt="image" className="object-contain img-fluid" />
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

export default Service;
