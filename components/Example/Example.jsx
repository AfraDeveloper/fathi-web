import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/swiper.min.css";
import { motion } from 'framer-motion'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';
import { samples } from '../../data/db';
const CardItemSample = ({ item }) => {


    const cardRefEl = useRef(null);
    const [img, setImg] = useState(`/img/img${item.id}.webp`);

    const handleMouseEnter = (e) => {
        setImg(`/img/before${item.id}.webp`);
    };
    const handleMouseOver = () => {
        setImg(`/img/img${item.id+1}.webp`);
    };
    return (
        <div className=" z-10 rounded-md">
            <div className="h-80 z-10  grid grid-cols-2">
                <img
                    src={img}
                    ref={cardRefEl}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseOver}
                    alt=""
                    className="h-full aspect-video border-l border-red-500 border-dashed "
                />
                   <img
                    src={img}
                    ref={cardRefEl}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseOver}
                    alt=""
                    className="h-full aspect-video "
                />
            </div>
            <div className="flex justify-between text-white bg-gray-900 p-4 f-dast">
                <p> {item.name}</p>
                <p className="text-orange-400"> {item.time} روز</p>
            </div>
        </div>
    );
};
const ExperienceItem = ({ count, title }) => {
    return (
        <motion.div initial={{
            y: 500,
            opacity: 0,
            scale: 0.5,
        }}
            exit={{
                y: 500,
                opacity: 0,
                scale: 0.5,
            }}

            whileInView={{
                y: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{ duration: 1.5 }} className="experience__item text-white z-10 mt-24">
            <div className="ex__circle bg-gray-800">{count} +</div>
            <p className="text-xl text-gray-900 dark:text-white">{title}</p>
        </motion.div>
    );
};
export const Example = () => {
    // SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
    return (
        <div className='mt-16'>  <motion.h3
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, scale: 0 }}
            className="title mx-auto  w-32"> نمونه کار </motion.h3>
            <div className='container'>
                <Swiper

                    spaceBetween={50}
                    slidesPerView="3"

                    pagination navigation
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {samples.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardItemSample item={item} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className="container my-8">
                <div className="exprience md:w-9/12 lg:w-6/12 mx-auto gap-4 f-dast z-10 grid grid-cols-4  mt-24 container">
                    <ExperienceItem count={325} title="ورزشکار" />
                    <ExperienceItem count={90} title="برنامه" />
                    <ExperienceItem count={120} title="مشاوره" />
                    <ExperienceItem count={80} title="رژیم" />
                </div>
            </div>
        </div>
    )
}
