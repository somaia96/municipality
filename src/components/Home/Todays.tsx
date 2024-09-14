
import { Card, CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import Head from "./Head"

const Todays = () => {
  let arrCarousel = ["today1.png", "today2.png", "today3.png", "today1.png", "today2.png", "today3.png", "today1.png"]
  return (
    <div className="mb-10 mt-5">
      <Head title="أخبار اليوم، الأحد 6/أيلول/2024" />
      <Carousel className="w-full" dir="ltr">
        <CarouselContent className="-ml-1">
          {arrCarousel.map((item, index) => (
            <CarouselItem key={index} className="overflow-hidden md:basis-1/2 lg:basis-1/3">
              <div className="">
                <Card className="border rounded-3xl">
                  <CardContent className="flex relative p-0 items-center justify-center">

                    <img className=" w-full h-full object-cover" src={`/images/${item}`} />
                    <span className="text-center absolute bottom-10 left-1/2 text-white transform -translate-x-1/2">تتواجد سيارة اللقاحات الجوالة عند نزلة الإسكان في منتصف المزة</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Todays
