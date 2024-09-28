import Head from './Head'
import CardNews from '../Card';
import { Link } from "react-router-dom"
import { Button } from '../ui/button';
import {ISerTabs, INewsApi } from '@/interfaces';
interface IProps {
  servicesData: INewsApi[],
  serTabsData:ISerTabs[],
}
const Services = ({servicesData,serTabsData}:IProps) => {
  let arrServices = servicesData.slice(0,4);
  return (
    <div>
      <Head link='/services' title={"الخدمات المقدمة"} />
      <div className='flex lg:justify-center items-center gap-3 overflow-x-scroll mb-2' style={{scrollbarColor:"transparent transparent"}}>
        {serTabsData.map((item)=>(
          <Button key={item.id} className='w-28 md:w-36 border-0 focus-visible:ring-0 py-1 text-primary hover:text-white bg-white hover:bg-primary text-lg'>{item.name}</Button>
        ))}
      </div>
      <div className='flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between'>
        {arrServices.map((item) => <CardNews key={item.id} order={2} news={item} />)}
      </div>
      <Link className="flex justify-center md:hidden" to='/services' >
        <span className='w-fit text-primary font-bold border-primary border-b-2'>عرض المزيد</span>
      </Link>
    </div>
  )
}

export default Services
