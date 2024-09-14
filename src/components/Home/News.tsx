
import Head from "./Head"
import CardNews from "./Card"
import { newsInfo } from "../../data"

const News = () => {
  let ArrNews = newsInfo.slice(0, 3);
  return (
    <div className="my-10">
      <Head link={"/"} title="أهم الأخبار" />
      {ArrNews.map((news, i) => <CardNews news={news} key={i} />)}
    </div>
  )
}

export default News
