import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"

type info = {
  title: string,
  link?: string,
}
const Head = ({ title, link }: info) => {
  return (
    <div className='flex py-5 items-center justify-between' dir='rtl'>
      <div className='flex-1'>
        <h2 className='font-bold text-xl'>{title}</h2>
      </div>
      {link && <Link to={link} >
        <Button className='bg-gray-50 hover:text-white hover:bg-[#112D4F] text-[#112D4F] border-0'>عرض الكل</Button>
      </Link>}
    </div>
  )
}

export default Head
