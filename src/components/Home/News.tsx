import { Link } from "react-router-dom"
import Head from "./Head"
import CardNews from "./Card"
import { IInfo } from "@/interfaces";
interface IProps {
  newsInfo: IInfo[],
  title: string,
  link?: string,
}
const News = ({newsInfo,title, link}:IProps) => {
  let ArrNews = newsInfo.slice(0, 2);
  return (
    <div className="my-10">
      <Head link={link} title={title} />
      {ArrNews.map((news, i) => <CardNews news={news} key={i} />)}
      {link && <Link className="flex justify-center md:hidden" to={link} >
        <span className='w-fit text-primary font-bold border-primary border-b-2'>عرض المزيد</span>
      </Link>}
    </div>
  )
}

export default News
