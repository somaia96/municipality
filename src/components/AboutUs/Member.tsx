import { IMember } from "../../interfaces";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
function Member({ member }: { member: IMember }) {
  return (
    <Card>
      <CardHeader shadow={false} floated={false} >
        <img src={member.img} alt="card-image" className="lg:h-[224px] w-full object-cover" />
      </CardHeader>
      <CardBody className="flex flex-col items-center justify-center ">
        <Typography variant="h4" className="mb-2 text-primary uppercase">
          {member.name}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2 text-primary">
          {member.position}
        </Typography>
        <Typography variant="paragraph" color="blue-gray" className="text-center text-sm text-gray-600">
          {member.description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default Member;
