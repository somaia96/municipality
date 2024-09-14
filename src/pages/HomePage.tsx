
import Header from '../components/Home/Header'
import News from '../components/Home/News'
import Services from '../components/Home/Services'
import Todays from '../components/Home/Todays'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Todays />
        <Services />
        <News />
      </div>
    </div>
  )
}

export default HomePage
