import CardNews from '../components/Card';
import { useState } from "react";
import { INewsApi } from "@/interfaces";
import { Button } from '../components/ui/button';
import CircularProgress from "@mui/material/CircularProgress";
import Alerting from '../components/Complaint/Alert';
import instance from '../api/instance'
import { useQuery } from '@tanstack/react-query'

interface IEventTabs {
  id: number,
  name: string,
}
const Services = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ['serviceData'],
    queryFn: async () => {
      const serviceRes = await instance.get('/services')
      const tabRes = await instance.get('/service-categories');
      return { serviceRes, tabRes }
    }
  })

  const tabs = data?.tabRes.data.data;
  const [activeTab, setActiveTab] = useState<number>(1);
  const handlActiveTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  let filteredEvents = data?.serviceRes.data.data;
  if (activeTab !== 1) {
    filteredEvents = filteredEvents.filter((newData: INewsApi) => newData.service_category_id === activeTab);
  }
  if (isLoading) return <div className='flex justify-center my-10'>
    <CircularProgress />
  </div>

  if (error) return <Alerting />
  return (
    <div className='container my-5'>
      <div className="font-header font-bold text-center md:text-3xl text-primary">الخدمات</div>
      <div className='flex lg:justify-center items-center gap-3 overflow-x-scroll my-2' style={{ scrollbarColor: "transparent transparent" }}>
        {tabs.map((tab: IEventTabs) => (
          <Button key={tab.id}
            onClick={() => handlActiveTabClick(tab.id)}
            className={(activeTab === tab.id
              ? "active-button"
              : "disabled-button") + ' w-28 md:w-36 border-0 focus-visible:ring-0 py-1 text-primary hover:text-white bg-white hover:bg-primary text-lg'}>{tab.name}</Button>
        ))}
      </div>
      <div className='flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between'>
        {filteredEvents.map((item: INewsApi) => <CardNews key={item.id} order={2} news={item} />)}
      </div>
    </div>
  )
}

export default Services