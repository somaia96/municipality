import CardNews from "../components/Home/Card";
import { useEffect, useState, ChangeEvent } from "react";
import { INewsApi } from "@/interfaces";
import instance from '../api/instance'
import Alerting from '../components/ui/Alert';
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const pagesize = 2;

const NewsPage = () => {
  const [newsData, setNewsData] = useState<INewsApi[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setErr] = useState<boolean>(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await instance.get('/news');
        setNewsData(res.data.data);
        if (res.status === 200) return setIsLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error);
        setIsLoading(false);
        setErr(true);
      }
    };
    fetchNews();
  }, []);

  if (!newsData) setIsLoading(true)

  const [Pag, setPag] = useState({
    from: 0,
    to: pagesize,
  });

  const handelPagination = (event: ChangeEvent<unknown>, page: number) => {
    const from = (page - 1) * pagesize;
    const to = (page - 1) * pagesize + pagesize;
    setPag({ ...Pag, from: from, to: to });
  };

  return (
    <div className="my-10 container">
      {isLoading ? <div className='flex justify-center my-10'>
        <CircularProgress />
      </div> : err ? <Alerting /> : <>
        {newsData.slice(Pag.from, Pag.to).map((news) => (
          <CardNews news={news} key={news.id} />
        ))}
        <div className="flex justify-items-center justify-center	">
          <Stack spacing={2}>
            <Pagination
              onChange={handelPagination}
              count={Math.ceil(newsData.length / pagesize)}
              color="primary"
              shape="rounded"
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowForwardIcon, next: ArrowBackIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      </>}
    </div>
  );
};

export default NewsPage;
