import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { IInfo } from "../../interfaces";
interface IProps {
  news: IInfo,
  order?: number,
}
export default function CardNews({ order = 0, news }: IProps) {
  return (
    <Card className="w-full max-w-[100%] p-3 flex-col lg:flex-row my-3">
      <CardHeader
        shadow={false}
        floated={false}
        className="relative w-full lg:w-1/4 lg:shrink-0 lg:rounded-l-none"
        style={order != 0 ? { order: order, marginRight: "auto" } : {}}
      >
        <img
          src={`src/assets/images/${news.img}`}
          alt="card-image"
          className="lg:h-[224px] w-full object-cover"
        />
      </CardHeader>
      <CardBody className="lg:p-0 lg:py-6 lg:my-0">
        <Typography variant="h6" color="gray" className="mb-4 text-xl text-[#112D4F] uppercase">
          {news.title}
        </Typography>
        {news.date && <Typography variant="small" color="blue-gray" className="mb-2 text-sm text-gray-600">
          {news.date}
        </Typography>}
        <div color="gray" className="mb-2 text-base text-gray-900">
          {typeof (news.description) == "string" ? news.description : <ol type="1" className="list-decimal list-inside text-gray-700">
            {news.description.map((item, i) => <li key={i}>{item}</li>)}</ol>}
        </div>
      </CardBody>
    </Card>
  );
}