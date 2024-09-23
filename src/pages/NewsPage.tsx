import CardNews from "../components/Home/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState,ChangeEvent } from "react";
import { IInfo } from "@/interfaces";

interface IProps {
  newsInfo: IInfo[];
}
const pagesize = 2;

const NewsPage = ({ newsInfo }: IProps) => {
  const ArrNews = newsInfo;
  const [Pag, setPag] = useState({
    from: 0,
    to: pagesize,
  });
  
  const handelPagination = ( event:ChangeEvent<unknown>,page:number) => {
    const from = (page - 1) * pagesize;
    const to = (page - 1) * pagesize + pagesize;
    setPag({ ...Pag, from: from, to: to });
  };

  return (
    <div className="my-10 container">
      {ArrNews.slice(Pag.from, Pag.to).map((news) => (
        <CardNews news={news} key={news.id} />
      ))}

      <div className="flex justify-items-center justify-center	">
        <Stack spacing={2}></Stack>
        <Pagination
          dir="ltr"
          onChange={handelPagination}
          count={Math.ceil(ArrNews.length / pagesize)}
          variant="outlined"
          color="primary"
        />
      </div>
    </div>
  );
};

export default NewsPage;
