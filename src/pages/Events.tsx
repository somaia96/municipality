import CardNews from "../components/Card";
import { useState, ChangeEvent } from "react";
import { INewsApi } from "@/interfaces";
import instance from '../api/instance'
import { Button } from '../components/ui/button';
import Alerting from '../components/Complaint/Alert';
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useQuery } from '@tanstack/react-query'

interface IEventTabs {
  id: number,
  name: string,
}
const pagesize = 2;

const Events = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ['activityData'],
    queryFn: async () => {
      const eventRes = await instance.get('/activity')
      const tabRes = await instance.get('/activity-type');
      return { eventRes, tabRes }
    }
  })

  const tabs = data?.tabRes.data.data;
  const [activeTab, setActiveTab] = useState<number>(1);
  const handlActiveTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  let filteredEvents = data?.eventRes.data.data;
  if (activeTab !== 1) {
    filteredEvents = filteredEvents.filter((eveData: INewsApi) => eveData.activity_type_id === activeTab);
  }
  const [Pag, setPag] = useState({
    from: 0,
    to: pagesize,
  });

  const handelPagination = (event: ChangeEvent<unknown>, page: number) => {
    console.log(event);
    const from = (page - 1) * pagesize;
    const to = (page - 1) * pagesize + pagesize;
    setPag({ ...Pag, from: from, to: to });
  };

  if (isLoading) return <div className='flex justify-center my-10'>
    <CircularProgress />
  </div>

  if (error) return <Alerting />
  return (
    <div className="my-10 container">
      <div className="font-header md:text-3xl font-bold text-center text-primary">الفعاليات</div>
      <div className='flex lg:justify-center items-center gap-3 overflow-x-scroll my-2' style={{ scrollbarColor: "transparent transparent" }}>
        {tabs.map((tab: IEventTabs) => (
          <Button key={tab.id}
            onClick={() => handlActiveTabClick(tab.id)}
            className={(activeTab === tab.id
              ? "active-button"
              : "disabled-button") + ' w-28 md:w-36 border-0 focus-visible:ring-0 py-1 text-primary hover:text-white bg-white hover:bg-primary text-lg'}>{tab.name}</Button>
        ))}
      </div>
      {filteredEvents.slice(Pag.from, Pag.to).map((news: INewsApi) => (
        <CardNews news={news} key={news.id} />
      ))}
      <div className="flex justify-items-center justify-center	">
        <Stack spacing={2}>
          <Pagination
            onChange={handelPagination}
            count={Math.ceil(filteredEvents.length / pagesize)}
            color="primary"
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowForwardIcon, next: ArrowBackIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Events;
