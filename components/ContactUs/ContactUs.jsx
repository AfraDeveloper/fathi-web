import React from 'react'

const ContactUs = () => {
  return (
    <div className='w-full md:10/12 lg:8/12 xl:w-1/2 mx-auto px-2'>
         <h4 className='text-center text-xl mb-4'>تماس با ما  </h4>
        <form action="">
        <div className="form-row form-row-2 w-full">
          <div className="form-group">
            <label>نام و نام خانوادگی :</label>
            <input type="text" placeholder="نام و نام خانوداگی به صورت کامل" />
          </div>
          <div className="form-group">
            <label>شماره تماس :</label>
            <input type="text" placeholder="مثال : 0912345678" />
          </div>
        </div>
        <div className="">
            <textarea className='w-full' name="" id="" placeholder='متن پیام' rows="8"></textarea>
        </div>
        <div className="flex gap-6 justify-end w-full">
          <button className='bg-green-500 text-sm text-white h-10 px-2 rounded-md'>ارسال پیام   </button>
        </div>
        </form>
    </div>
  )
}

export default ContactUs