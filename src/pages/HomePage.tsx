
import { useEffect, useState } from 'react'
import Header from '../components/Home/Header'
import News from '../components/Home/News'
import Services from '../components/Home/Services'
// import Todays from '../components/Home/Todays'
import instance from '../api/instance'
import {ISerTabs, INewsApi } from '@/interfaces'
const HomePage = () => {
  const [newsData, setNewsData] = useState<INewsApi[]>([]);
  const [servicesData, setServicesData] = useState<INewsApi[]>([]);
  const [serTabsData, setSerTabsData] = useState<ISerTabs[]>([]);
  const [eventsData, setEventsData] = useState<INewsApi[]>([]);
  const [decisionsData, setDecisionsData] = useState<INewsApi[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const resNew = await instance.get('/news');
        setNewsData(resNew.data.data);
        const resSer = await instance.get('/services');
        setServicesData(resSer.data.data);
        const resEvent = await instance.get('/activity');
        setEventsData(resEvent.data.data);
        const resDes = await instance.get('/decision');
        setDecisionsData(resDes.data.data);
        const tabRes = await instance.get('/service-categories');
        setSerTabsData(tabRes.data.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        {/* <Todays /> */}
        <News newsInfo={newsData} title='أحدث الأخبار' link='/news' />
        <Services servicesData={servicesData} serTabsData={serTabsData}/>
        <News newsInfo={eventsData} title='أحدث الفعاليات' link='/activeties' />
        <News newsInfo={decisionsData} title='أحدث القرارات' link='/decisions' />

      </div>
    </>
  )
}

export default HomePage
