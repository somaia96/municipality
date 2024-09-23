
import Header from '../components/Home/Header'
import News from '../components/Home/News'
import Services from '../components/Home/Services'
// import Todays from '../components/Home/Todays'
import { newsImgInfo, newsInfo } from "../data"
const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        {/* <Todays /> */}
        <News newsInfo={newsImgInfo} title='أحدث الأخبار' link='/news' />
        <Services />
        <News newsInfo={newsImgInfo} title='أحدث الفعاليات' link='/activeties' />
        <News newsInfo={newsInfo} title='أحدث القرارات' link='/decisions' />

      </div>
    </>
  )
}

export default HomePage
