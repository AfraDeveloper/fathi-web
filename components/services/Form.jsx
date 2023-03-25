import { UilCheck } from '@iconscout/react-unicons'
import { useState } from 'react'
const Form = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [toggle, setToggle] = useState(false)
  const handleHeight = e => {
    setHeight(parseFloat(e.target.value))
  }
  const handleWeight = e => {
    setWeight(parseFloat(e.target.value))
  }
  return (
    <div className="w-full 2xl:w-1/2 border border-salte-300 shadow-md dark:border-slate-500 rounded-md p-4 md:p-16">
      <form className="w-full">
        <div className="flex flex-col sm:flex-row w-full gap-3 mb-4">
          <div className="radio-group radio-group1 w-full">
            <input type="radio" id="sport" className="hidden" name="type" defaultChecked={true} />
            <label htmlFor="sport" className="w-full relative">
              <span>برنامه ورزشی</span>
              <span className='absolute right-2 check '>
                <UilCheck />
              </span>
            </label>
          </div>
          <div className="radio-group radio-group1 w-full">
            <input type="radio" id="cheep" className="hidden" name="type" />
            <label htmlFor="cheep" className="w-full ">
              <span>رژیم غذایی </span>
              <span className='absolute right-2 check '>
                <UilCheck />
              </span>
            </label>
          </div>
          <div className="radio-group radio-group1 w-full">
            <input type="radio" id="cheep2" className="hidden" name="type" />
            <label htmlFor="cheep2" className="w-full ">
              <span>مشاوره سلامت  </span>
              <span className='absolute right-2 check '>
                <UilCheck />
              </span>
            </label>
          </div>
        </div>
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
        <div className="form-row form-row-4 w-full">
          <div className="form-group">
            <label> وزن : </label>
            <input type="number" name='weight' value={weight} onChange={handleWeight} placeholder="مقدار به کیلوگرم" />
          </div>
          <div className="form-group">
            <label> قد  :</label>
            <input type="number" name='height' value={height} onChange={handleHeight} placeholder="مقدار به سانتیمتر" />
          </div>
          <div className="form-group">
            <label>دور گردن :</label>
            <input type="number" placeholder="مقدار به سانتیمتر" />
          </div>
          <div className="form-group">
            <label>دور بازو :</label>
            <input type="number" placeholder="مقدار به سانتیمتر" />
          </div>
        </div>
        <div className="form-row form-row-4 w-full">
          <div className="form-group">
            <label> دور سینه  :</label>
            <input type="number" placeholder="مقدار به سانتیمتر" />
          </div>
          <div className="form-group">
            <label> دور باسن : </label>
            <input type="number" placeholder="مقدار به سانتیمتر" />
          </div>
          <div className="form-group">
            <label>دور شکم :</label>
            <input type="number" placeholder="مقدار به سانتیمتر" />
          </div>
          <div className="form-group">
            <label>گروه خونی  :</label>
            <select name="" id="">
              <option>A -</option>
              <option>A +</option>
              <option>A -</option>
              <option>B +</option>
              <option>B -</option>
              <option>AB +</option>
              <option>AB +</option>
              <option>O +</option>
              <option>O +</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  w-full items-start">
          <div className="form-group md:col-span-1">
            <label>سابقه بیماری   :</label>
            <select name="" id="">
              <option>ندارم</option>
              <option>دارم</option>

            </select>
          </div>
          <div className="form-group md:col-span-3  md:col-span-2">
            <label>  توضیحات  :</label>
            <textarea className='w-full'></textarea>
          </div>
          {weight > 0 && height > 0 &&
            <div className="border flex h-16 self-center rounded-md mt-2 items-center justify-center p-2">
              <label htmlFor="">BMI :</label>
              <p className='px-2'>{(weight / ((height / 100) ** 2)).toFixed(2)}</p>
            </div>}

        </div>

        {toggle && <div className="form-row form-row-3 border border-stone-300 p-4  rounded-md">
          <div className="form-group">
            <label htmlFor="">عکس از جلو :</label>
            <div class="block">
              <span className="sr-only"> انتخاب فایل </span>
              <input type="file" className="file_input" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">عکس از بغل :</label>
            <div class="block">
              <span className="sr-only"> انتخاب فایل </span>
              <input type="file" className="file_input" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">عکس از عقب :</label>
            <div class="block">
              <span className="sr-only"> انتخاب فایل </span>
              <input type="file" className="file_input" />
            </div>
          </div>
        </div>}
        <div className="flex gap-6 justify-end w-full">
          <button type='button' onClick={() => setToggle(!toggle)} className='bg-sky-500 text-sm h-10 px-2 rounded-md'>ارسال عکس </button>
          <button className='bg-green-500 text-sm text-white h-10 px-2 rounded-md'>ثبت درخواست  </button>
        </div>
      </form>
    </div>
  )
}

export default Form