// import "./intro.css";
import Image from "next/image";
import model from "../assets/img/banner.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// import { UilStethoscopeAlt } from "@iconscout/react-unicons";
import { UilChartBar } from "@iconscout/react-unicons";
import { UilHeartbeat } from "@iconscout/react-unicons";
import {
  UilInstagram,
  UilFacebookF,
  UilLinkedinAlt,
  UilCrockery,
  UilDumbbell,
  UilStethoscopeAlt,
} from "@iconscout/react-unicons";
import Banner from "./Banner";

const Intro = () => {
  return (
    <div className="intro_img w-full" dir="rtl">
      <div className="intro grid grid-cols-1 lg:grid-cols-2 p-4 md:p-8  lg:w-max[90%] h-screen relative lg:h[77vh]  w-full">
        <div className="intro__right relative z-10">
          <div
            className="lg:py-16 text-xl rounded-md  z-10
        flex gap-2 md:gap-4  dark:shadow-xl flex-col justify-center  
        dark:text-white dark:bg-gray-800/70 px-4 py-8 md:p-12 "
          >
            <span className="text-white  dark:text-white text-2xl lg:text-5xl font-extrabold">
              من{" "}
              <span className="text-gray-200 px-2 dark:text-orange-500">
                محمد فتحی
              </span>{" "}
              هستم
            </span>

            <TypeAnimation
              sequence={[
                "مربی بین المللی بدنسازی", // Types 'One'
                1000, // Waits 1s
                "متخصص تغذیه", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                " داور بین المللی مسابقات ورزشی",
                3000,
                "مربی انجمن قدرت و آمادگی جسمانی",
                4000,
                () => {
                  // console.log('Done typing!'); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "24px", color: "white" }}
            />
          </div>

          <div className="intro__boxes gap-2 sm:gap-4 md:gap-8 mt-8 lg:mt-4">
            <div className="intro__box  box_intro">
              <div className=" box_circle">
                <span className="text-white  dark:text-orange-500">
                  <UilCrockery size={40} />
                </span>
              </div>
              <h5 className="text-base h-16 mt-2">ارائه رژیم غذایی</h5>
            </div>
            <div className="intro__box  box_intro">
              <div className="box_circle">
                <span className="text-white  dark:text-orange-500">
                  <UilDumbbell size={40} />
                </span>
              </div>
              <h5 className="text-base h-16 mt-2">طراحی برنامه ورزشی </h5>
            </div>
            <div className="intro__box  box_intro">
              <div className="box_circle">
                <span className="text-white  dark:text-orange-500">
                  <UilStethoscopeAlt size={40} />
                </span>
              </div>
              <h5 className="text-base h-16 mt-2">مشاوره سلامت </h5>
            </div>
          </div>
          <div className="intro__icons mx-auto  lg:mr-16 text-gray-400 dark:text-orange-500">
            <UilInstagram size={34} />
            <UilFacebookF size={34} />
            <UilLinkedinAlt size={34} />
          </div>
        </div>
        <div className="intro__left  ">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.2,
            }}
            exit={{
              opacity: 0,
              scale: 0.2,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1 }}
          >
            <Banner />
            <div className="absolute top-0 left-0 w-full h-full ">
              <span className="bg-blue-500 top-0 left-0 absolute text-white inline-block p-3 lg:p-8 rounded-full">
                <UilDumbbell size={34} />
              </span>
              <span className="bg-rose-500 top-24 -right-8 absolute text-white inline-block p-3 lg:p-8 rounded-full">
                <UilHeartbeat size={34} />
              </span>
              <span className="bg-orange-600 bottom-24 -left-8 absolute text-white inline-block p-3 lg:p-8 rounded-full">
                <UilChartBar size={34} />
              </span>
            </div>
            {/* <Image src={model} alt="" className="hover:translate-x-8 duration-500 lg:-translate-y-12 " /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
