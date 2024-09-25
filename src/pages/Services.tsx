import CardNews from '../components/Home/Card';
import { useEffect, useState } from "react";
import { INewsApi } from "@/interfaces";
import { Button } from '../components/ui/button';
import CircularProgress from "@mui/material/CircularProgress";
import Alerting from '../components/ui/Alert';
import instance from '../api/instance'
interface IEventTabs {
  id: number,
  name: string,
}
const Services = () => {
  const [newsData, setNewsData] = useState<INewsApi[]>([]);
  const [tabsData, setTabsData] = useState<IEventTabs[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setErr] = useState<boolean>(false);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await instance.get('/services');
        setNewsData(res.data.data);
        const tabRes = await instance.get('/service-categories');
        setTabsData(tabRes.data.data);
        if (res.status === 200) return setIsLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error);
        setIsLoading(false)
        setErr(true);
      }
    };
    fetchNews();
  }, []);

  if (!newsData) setIsLoading(true)

  const tabs: IEventTabs[] = tabsData;
  const [activeTab, setActiveTab] = useState<number>(1);
  const handlActiveTabClick = (tab: number) => {
    setActiveTab(tab);
  };
  let filteredEvents = newsData;
  if (activeTab !== 1) {
    filteredEvents = newsData.filter((newData) => newData.service_category_id === activeTab);
  }
  return (
    <div className='container my-5'>
      {isLoading ? <div className='flex justify-center my-10'>
        <CircularProgress />
      </div> :err?<Alerting/>: <>
        <div className="font-header font-bold text-center text-primary">الخدمات</div>
        <div className='flex lg:justify-center items-center gap-3 overflow-x-scroll my-2' style={{ scrollbarColor: "transparent transparent" }}>
          {tabs.map((tab) => (
            <Button key={tab.id}
              onClick={() => handlActiveTabClick(tab.id)}
              className={(activeTab === tab.id
                ? "active-button"
                : "disabled-button") + ' w-28 md:w-36 border-0 focus-visible:ring-0 py-1 text-primary hover:text-white bg-white hover:bg-primary text-lg'}>{tab.name}</Button>
          ))}
        </div>
        <div className='flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-between'>
          {filteredEvents.map((item) => <CardNews key={item.id} order={2} news={item} />)}
        </div>
      </>
      }
    </div>
  )
}

export default Services