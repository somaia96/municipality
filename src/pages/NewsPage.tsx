import CardNews from "../components/Home/Card"
import { IInfo } from "@/interfaces";
interface IProps {
  newsInfo: IInfo[],
}
const NewsPage = ({newsInfo}:IProps) => {
  let ArrNews = newsInfo;
  return (
    <div className="my-10 container">
      {ArrNews.map((news) => <CardNews news={news} key={news.id} />)}
    </div>
  )
}

export default NewsPage
