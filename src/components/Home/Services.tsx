import Head from './Head'
import { FilterArr, ServicesInfo } from '../../data'
import CardNews from './Card';
import { Link } from "react-router-dom"
import { Button } from '../ui/button';

const Services = () => {
  let arrServices = ServicesInfo.slice(0,5);
  return (
    <div>
      <Head link='/services' title={"الخدمات المقدمة"} />
      <div className='flex lg:justify-center items-center gap-3 overflow-x-scroll mb-2' style={{scrollbarColor:"transparent transparent"}}>
        {FilterArr.map((item)=>(
          <Button className='w-28 md:w-36 border-0 focus-visible:ring-0 py-1 text-primary hover:text-white bg-white hover:bg-primary text-lg'>{item}</Button>
        ))}
      </div>
      <div className='flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between'>
        {arrServices.map((item, i) => <CardNews key={i} order={2} news={item} />)}
      </div>
      <Link className="flex justify-center md:hidden" to='/services' >
        <span className='w-fit text-primary font-bold border-primary border-b-2'>عرض المزيد</span>
      </Link>
    </div>
  )
}

export default Services
