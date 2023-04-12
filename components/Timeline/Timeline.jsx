import { UilGraduationCap } from "@iconscout/react-unicons";
import { UilAward } from "@iconscout/react-unicons";
import { motion, useScroll } from "framer-motion";
const TimelineItem = ({ icon, title, body, year }) => {
  const { scrollYProgress } = useScroll();
  const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex items-start gap-4 mb-8 "
    >
      <div
        className="border-2 border-sky-500 dark:border-orange-500 rounded-full p-1 timeline_icon
         after:bg-sky-500 dark:after:bg-orange-500 relative"
      >
        {icon}
      </div>
      <div>
        <p className="text-slate-400 text-xs">{year}</p>
        <p className="my-1">{title} </p>
        <p className="text-slate-400 text-sm">{body} </p>
      </div>
    </motion.div>
  );
};
const Timeline = () => {
  return (
    <div className="dark:bg-gray-800/50 py-8 w-full z-10 mt-32 relative">
      <div className="w-full md:container">
        <h3 className="title mx-auto  w-32">رزومه من </h3>
        <div className="flex flex-col px-12 md:px-4 md:flex-row lg:items-start md:justify-around lg:gap-32">
          <div className="">
            <p className="p-3 border-b mb-4 w-72">تحصیلات</p>

            <div className="">
              <TimelineItem
                icon={<UilGraduationCap />}
                title="مهندسی پزشکی"
                body="دانشگاه شهید بهشتی"
                year="1396"
              />
              <TimelineItem
                icon={<UilGraduationCap />}
                title="کارشناسی ارشد تربیت بدنی "
                body="دانشگاه شهید بهشتی"
                year="1396"
              />
              <TimelineItem
                icon={<UilGraduationCap />}
                title="مدرک بین المللی مربی گری "
                body="دانشگاه شهید بهشتی"
                year="1396"
              />
              <TimelineItem
                icon={<UilGraduationCap />}
                title="مهندسی پزشکی"
                body="دانشگاه شهید بهشتی"
                year="1396"
              />
              <TimelineItem
                icon={<UilGraduationCap />}
                title="مهندسی پزشکی"
                body="دانشگاه شهید بهشتی"
                year="1396"
              />
            </div>
          </div>
          <div className="">
            <p className="p-3 border-b mb-4 w-72">دوره ها و گواهینامه ها</p>

            <div className="">
              <TimelineItem
                icon={<UilAward />}
                title="مربیگری بدنسازی تخصص "
                body="دانشگاه شهید بهشتی"
                year="1396"
              />
              <TimelineItem
                icon={<UilAward />}
                title=" کارگاه ارزیابی بدنی،تست ها و برنامه نویسی تمرین"
                body="دانشگاه شهید بهشتی"
                year="1396"
              />
              <TimelineItem
                icon={<UilAward />}
                title=" کارگاه تخصصی پیشرفته شکم و پهلو"
                body="دانشگاه شهید بهشتی"
                year="1396"
              />
              <TimelineItem
                icon={<UilAward />}
                title=" دوره تخصصی تربیت مربی فیتنس وبدنسازی ویژه سالمندان"
                body="دانشگاه شهید بهشتی"
                year="1396"
              />
              <TimelineItem
                icon={<UilAward />}
                title=" استاديار دانشکده پيراپزشکي تهران"
                body="دانشگاه شهید بهشتی"
                year="1396"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
