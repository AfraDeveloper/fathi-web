import { motion } from 'framer-motion'
import Image from 'next/image'

import { arts } from '../../data/db'

const Articles = () => {
    return (
        <div className='w-full mt-24'>
            <motion.h3
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                exit={{ opacity: 0, scale: 0 }}
                className="title mx-auto  w-32"> مقالات  </motion.h3>
            <div className="container">
                <div className="grid grid-cols-4 gap-8">
                    {arts.map(art => (
                        <motion.div initial={{
                            y: 500,
                            opacity: 0,
                            scale: 0.9,
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
                            transition={{ duration: 1 }} key={art.id} className="relative rounded-lg overflow-hidden">
                            <Image src={`/img/art${art.id}.jpg`} alt="Picture of the author"
                                width={500}
                                height={500}
                                priority />
                            <div className='bg-gray-900/80 h-12 text-white text-sm absolute left-0 w-full bottom-0 p-2'>
                                {art.title}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Articles