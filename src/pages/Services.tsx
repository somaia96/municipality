import Service from "../components/Service";
function Services() {
  return (
    <div className="my-5">
      <div className="services-header flex flex-col md:flex-row justify-center items-center">
        <h2 className="ml-4 hidden md:block font-bold">انواع الخدمات:</h2>
        <h2 className="text-center md:hidden font-bold text-primary text-xl my-3">الخدمات</h2>

        <div className="buttons">
          <ul className="p-0 m-0 justify-center flex list-none">
            <li className="active">بيئية</li>
            <li>فنية</li>
            <li>ادارية</li>
            <li>صحية</li>
          </ul>
        </div>
      </div>
      <Service />
    </div>
  );
}

export default Services;
