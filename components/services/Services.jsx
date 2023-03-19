import React from 'react'
import ServiceCard from './ServiceCard';
import {
  UilCrockery,
  UilDumbbell,
  UilStethoscopeAlt,
} from "@iconscout/react-unicons";
import Form from './Form';
// import "./services.css";
const Services = () => {

  return (
    <div className='mt-24'>
      <h3 className="title mx-auto  w-24">خدمات </h3>

      <div className="px-4 md:px-8 lg:px-24 gap-8 lg:gap-16 mt-12 w-full flex flex-col items-center ">
        <div className="flex  flex-col col-span-2 items-center mt-2 md:mt-8 z-10 h-full">
          <p className="text-xl mb-2">خدمات توسعه دهنده</p>
          <p className='text-justify'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که
          </p>
        </div>
        <div className=" grid md:grid-cols-3 z-10 col-span-3  items-center gap-8">
          <ServiceCard

            title="  دریافت رژیم غذایی"
            icon={<UilCrockery size={45} />}
            text="بهترین روش برای رسیدن به وزن ایده آل"
          />
          <ServiceCard
            title="  دریافت مشاوره سلامت"
            icon={<UilStethoscopeAlt size={45} />}
            text=" مشاوره ای برای سلامتی بهتر"
          />
          <ServiceCard
            title=" دریافت برنامه بدنسازی"
            icon={<UilDumbbell size={45} />}
            text=" با ما باشید با بهترین برنامه بدنسازی"
          />
        </div>

        <Form />

        <div className="text-3xl f-dast  bg-sky-100 dark:bg-gray-800/50 rounded-md p-8 translate-y-12 text-sky-600 dark:text-orange-400 font-semibold">
          من برای تولید کار های شگفت انگیز اشتیاق دارم
        </div>
      </div>
    </div>

  );

}

export default Services