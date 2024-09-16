import Head from './Head'
import { ServicesInfo } from '../../data'
import CardNews from './Card';
import { Link } from "react-router-dom"

const Services = () => {
  let arrServices = ServicesInfo;
  return (
    <div>
      <Head link='/services' title={"الخدمات المقدمة"} />
      <p className=''>تجدون هنا بعض الخدمات المتوافرة في بلدية المزة، مع شرح للخدمات وكيفية الحصول عليها وذكر الأوراق المطلوبة لكل منها:</p>
      <div className='flex gap-3 flex-col lg:flex-row'>
        {arrServices.map((item, i) => <CardNews key={i} order={2} news={item} />)}
      </div>
      <Link className="flex justify-center md:hidden" to='/services' >
        <span className='w-fit text-primary font-bold border-primary border-b-2'>عرض المزيد</span>
      </Link>
    </div>
  )
}

export default Services
