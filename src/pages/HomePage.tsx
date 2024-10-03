import News from '../components/Home/News'
import Services from '../components/Home/Services'
import instance from '../api/instance'
import { useQuery } from '@tanstack/react-query'
import Alerting from '../components/Complaint/Alert';
import CircularProgress from "@mui/material/CircularProgress";

const HomePage = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ['homeData'],
    queryFn: async () => {
      const resNew = await instance.get('/news');
      const eventRes = await instance.get('/activity')
      const tabEveRes = await instance.get('/activity-type');
      const resDes = await instance.get('/decision');
      const resSer = await instance.get('/services');
      const tabSerRes = await instance.get('/service-categories');
      return { resNew, eventRes, tabEveRes, resDes, resSer, tabSerRes }
    }
  })

  if (isLoading) return <div className='flex justify-center my-10'>
    <CircularProgress />
  </div>

  if (error) return <Alerting />
  return (
    <>
      <div className="container">
        <News newsInfo={data?.resNew.data.data} title='أحدث الأخبار' link='/news' />
        <Services servicesData={data?.resSer.data.data} serTabsData={data?.tabSerRes.data.data} />
        <News newsInfo={data?.eventRes.data.data} title='أحدث الفعاليات' link='/activeties' />
        <News modal={true} newsInfo={data?.resDes.data.data} title='أحدث القرارات' link='/decisions' />
      </div>
    </>
  )
}

export default HomePage
