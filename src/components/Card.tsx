import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { INewsApi } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Modal from "./Decision/Modal";
import { useState } from "react";

interface IProps {
  news: INewsApi,
  order?: number,
  modal?:boolean,
}
export default function CardNews({modal= false, order = 0, news }: IProps) {
  const [openDecision, setOpenDecision] = useState(false)
 
  let timestamp = news.activity_date ? new Date(news.activity_date!): new Date(news.created_at!);

  const showDecision =(modal:boolean)=>{
    if(modal){
    setOpenDecision(true)
    }
    
  }
  return (
    <Card onClick={()=>showDecision(modal)} className={(order != 0 ? "max-w-full md:max-w-[49%] " : "")+"w-full max-w-[100%] p-3 md:gap-5 flex-col lg:flex-row my-3"}>
      <CardHeader
        shadow={false}
        floated={false}
        className={(order != 0 ? "hidden md:block " : "")+" relative m-0 w-full lg:w-1/4 lg:shrink-0 lg:rounded-l-none"}
        style={order != 0 ? { order: order, marginRight: "auto" } : {}}
      >
        {news.img?<img
          src={`/images/${news.img}`}
          alt="card-image"
          className="lg:h-[224px] w-full object-cover"
        />:<img
        src={`/images/empty.jpg`}
        alt="card-image"
        className="lg:h-[224px] w-full object-cover"
      />}
      </CardHeader>
      <CardBody className="flex flex-col lg:p-0 lg:py-6 lg:my-0">
        <Modal news={news} setOpenDecision={setOpenDecision} openDecision={openDecision}/>
        <Typography variant="h6" className="mb-4 text-xl text-primary uppercase">
          {news.title}
        </Typography>
        {timestamp && <Typography variant="small" color="blue-gray" className="mb-2 text-sm text-gray-600">
          {timestamp.toUTCString()}
        </Typography>}
        <div color="gray" className="mb-3 text-base text-gray-900">
          {typeof (news.description) == "string" ? txtSlicer(news.description,(news.photos?undefined:250)) : <ol type="1" className="list-decimal list-inside text-gray-700">
            {news.description.map((item, i) => <li key={i}>{item}</li>)}</ol>}
        </div>
        { news.photos ? <div className="flex max-w-full justify-center items-center md:justify-start w-full gap-3 mb-5 md:mb-0 -order-1 md:order-12">
          {news.photos.map((img,i)=>(
              <img className="w-auto h-14" key={i} src={img} />
          ))}
        </div> : null

        }
      </CardBody>
    </Card>
  );
}