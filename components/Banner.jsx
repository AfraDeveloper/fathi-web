import Image from "next/image";
import Avatar from "./../assets/img/boy.png";
import {
  UilInstagram,
  UilFacebookF,
  UilLinkedinAlt,
  UilCrockery,
  UilDumbbell,
  UilStethoscopeAlt,
} from "@iconscout/react-unicons";
const Banner = () => {
  return (
    <div className="avatar border w-[320px] h-[320px] p-20 lg:w-[500px] lg:h-[500px] overflow-hidden  border-dashed scale-110 rounded-full border-gray-500">
      <div className="w-full h-full rounded-full border scale-125 border-gray-600"></div>
      <div className="absolute -bottom-12">
        <Image src={Avatar} />
      </div>
    </div>
  );
};

export default Banner;
