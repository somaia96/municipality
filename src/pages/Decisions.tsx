import CardNews from "../components/Home/Card"
import { IInfo } from "@/interfaces";
interface IProps {
  newsInfo: IInfo[],
}
const Decisions = ({newsInfo}:IProps) => {
  let ArrNews = newsInfo;
  return (
    <div className="my-10">
      {ArrNews.map((news) => <CardNews news={news} key={news.id} />)}
    </div>
  )
}

export default Decisions
