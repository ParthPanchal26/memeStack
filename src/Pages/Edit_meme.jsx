import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Text from '../Components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const Edit_meme = () => {

  const [count, setCount] = React.useState(0)
  const [params] = useSearchParams()

  const memeRef = React.useRef()

  const addText = () => {
    setCount(count + 1)
  }

  return (
    <div className="flex justify-center">
      <section className="text-gray-600 body-font block m-auto">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="p-4 w-86 max-w-86 sm:w-86">
              <div style={{ boxShadow: "0 0 2px black" }} className="h-full border-0 p-2 shadow-inner sm:border-gray-200 border-opacity-0 rounded-md overflow-hidden">
                <span ref={memeRef} className='flex w-full border-b-2 pb-3 flex-col'>
                  <img className="lg:h-48 md:h-36 p-1 w-full object-contain" src={params.get("url")} alt="img" />
                  <p className='relative flex text-center'>
                    {
                      Array(count).fill(0).map((_, index) => (<Text key={index} />))
                    }
                  </p>
                </span>
                <div className="p-6">
                  <div className="flex justify-center">
                    <button onClick={addText} className="text-indigo-700 text-md border-2 rounded-md border-slate-950 px-5 py-2 inline-flex items-center m-1 md:mb-2 lg:mb-0">Add
                    </button>
                    <button onClick={() => exportComponentAsJPEG(memeRef)} className="text-slate-900 text-md border-2 rounded-md border-slate-950 px-5 py-2 inline-flex items-center m-1 md:mb-2 lg:mb-0">Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div>
  )
}

export default Edit_meme