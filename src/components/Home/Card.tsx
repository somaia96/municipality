import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { IInfo } from "../../interfaces";
import { txtSlicer } from "../../utils/functions";
interface IProps {
  news: IInfo,
  order?: number,
}
export default function CardNews({ order = 0, news }: IProps) {
  return (
    <Card className={(order != 0 ? "max-w-full md:max-w-[49%] " : "")+"w-full max-w-[100%] p-3 md:gap-5 flex-col lg:flex-row my-3"}>
      <CardHeader
        shadow={false}
        floated={false}
        className={(order != 0 ? "hidden md:block " : "")+"relative m-0 w-full lg:w-1/4 lg:shrink-0 lg:rounded-l-none"}
        style={order != 0 ? { order: order, marginRight: "auto" } : {}}
      >
        <img
          src={`/images/${news.img}`}
          alt="card-image"
          className="lg:h-[224px] w-full object-cover"
        />
      </CardHeader>
      <CardBody className="flex flex-col lg:p-0 lg:py-6 lg:my-0">
        <Typography variant="h6" className="mb-4 text-xl text-primary uppercase">
          {news.title}
        </Typography>
        {news.date && <Typography variant="small" color="blue-gray" className="mb-2 text-sm text-gray-600">
          {news.date}
        </Typography>}
        <div color="gray" className="mb-3 text-base text-gray-900">
          {typeof (news.description) == "string" ? txtSlicer(news.description,(news.imgs?undefined:250)) : <ol type="1" className="list-decimal list-inside text-gray-700">
            {news.description.map((item, i) => <li key={i}>{item}</li>)}</ol>}
        </div>
        { news.imgs ? <div className="flex max-w-full justify-center items-center md:justify-start w-full gap-3 mb-5 md:mb-0 -order-1 md:order-12">
          {news.imgs.map((img,i)=>(
              <img className="flex-1 md:max-w-[90px] md:h-14" key={i} src={`/images/${img}`} />
          ))}
        </div> : null

        }
      </CardBody>
    </Card>
  );
}