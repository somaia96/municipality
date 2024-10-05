import { IMember } from "../../interfaces";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
function Member({ member }: { member: IMember }) {
  return (
    <Card className="h-full">
      <CardHeader shadow={false} floated={false} >
      {member.photo ? <img src={member.photo} 
        alt="card-image" 
        className="lg:h-[224px] w-full object-cover" /> : <img
          src={`/images/empty.jpg`}
          alt="card-image"
          className="lg:h-[224px] w-full object-cover"
        />}
      </CardHeader>
      <CardBody className="flex flex-col items-center justify-center ">
        <Typography variant="h4" className="mb-2 text-primary uppercase text-sm">
          {member.name}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default Member;
