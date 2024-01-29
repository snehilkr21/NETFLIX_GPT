import React from 'react'
import { useSelector } from 'react-redux'
import lang from "../../utils/LanguageConstant"
const GPTSearchInputBox = () => {
  const selectedLang = useSelector((store)=>store?.config?.lang)
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12'>
            <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[selectedLang].gptSearchPlaceholder}/>
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'>{lang[selectedLang].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchInputBox