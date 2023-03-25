import React from 'react'
import SocialIcons from './SocialIcons'

const NewLess = () => {
    return (
        <div className='mt-24 flex flex-col justify-center items-center z-[50]'>
            <h4 className='text-center text-xl'>عضویت در خبرنامه</h4>
            <p className='text-center py-4'>رایگان ثبت نام کنید و اولین نفری باشید که از مطالب  جدید مطلع می شوید.</p>
            <div className="flex mx-auto justify-center items-center  mb-8 z-[50] h-12 w-11/12 md:w-[500px] overflow-hidden rounded-l bg-gray-300">
                <input type="number" className='w-full bg-gray-200 text-gray-900 h-full indent-2 placeholder:text-sm'
                    placeholder='شماره تلفن خود را وارد کنید' />
                <button className='bg-indigo-500 dark:bg-orange-500 text-white h-full px-8'>ثبت</button>
            </div>
            <SocialIcons />
        </div>
    )
}

export default NewLess