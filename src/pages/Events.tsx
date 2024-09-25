import CardNews from "../components/Home/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {useEffect, useState, ChangeEvent } from "react";
import { INewsApi } from "@/interfaces";
import instance from '../api/instance'
import { Button } from '../components/ui/button';
import CircularProgress from "@mui/material/CircularProgress";
import Alerting from '../components/ui/Alert';

interface IEventTabs{ 
    id: number, 
    name: string, 
  }
const pagesize = 2;

const Events = () => {
  const [newsData, setNewsData] = useState<INewsApi[]>([]);
  const [tabsData, setTabsData] = useState<IEventTabs[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setErr] = useState<boolean>(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await instance.get('/activity');
        setNewsData(res.data.data);
        
        const tabRes = await instance.get('/activity-type');
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

    const tabs:IEventTabs[] = tabsData;
    const [activeTab, setActiveTab] = useState<number>(1);
    const handlActiveTabClick = (tab:number) => {
      setActiveTab(tab);
    };
    let filteredEvents = newsData;
    if (activeTab !== 1) {
      filteredEvents = newsData.filter((newData) => newData.activity_type_id === activeTab);
    }

  const [Pag, setPag] = useState({
    from: 0,
    to: pagesize,
  });
  
  const handelPagination = ( event:ChangeEvent<unknown>,page:number) => {
    console.log(event);
    
    const from = (page - 1) * pagesize;
    const to = (page - 1) * pagesize + pagesize;
    setPag({ ...Pag, from: from, to: to });
  };

  return (
    <div className="my-10 container">
       {isLoading ? <div className='flex justify-center my-10'>
        <CircularProgress />
      </div> :err?<Alerting/>:<>
   <div className="font-header font-bold text-center text-primary">الفعاليات</div>
    
   <div className='flex lg:justify-center items-center gap-3 overflow-x-scroll my-2' style={{scrollbarColor:"transparent transparent"}}>
        {tabs.map((tab,i)=>(
          <Button key={i}
          onClick={() =>handlActiveTabClick(tab.id)}
           className={(activeTab === tab.id
            ? "active-button"
             : "disabled-button")+' w-28 md:w-36 border-0 focus-visible:ring-0 py-1 text-primary hover:text-white bg-white hover:bg-primary text-lg'}>{tab.name}</Button>
        ))}
      </div>



      {filteredEvents.slice(Pag.from, Pag.to).map((news) => (
        <CardNews news={news} key={news.id} />
      ))}

      <div className="flex justify-items-center justify-center	">
        <Stack spacing={2}></Stack>
        <Pagination
          dir="ltr"
          onChange={handelPagination}
          count={Math.ceil(filteredEvents.length / pagesize)}
          variant="outlined"
          color="primary"
        />
      </div>
      </>}
    </div>
  );
};

export default Events;
