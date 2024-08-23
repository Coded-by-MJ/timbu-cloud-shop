
const NewsLetter = () => {




  return (
    <div className='px-4 flex gap-6 flex-col max-w-[710px] mx-auto items-center'>
       <div className='gap-4 flex flex-col w-full'>
         <h2 className='font-sans font-bold text-wrap text-center text-navy text-2xl'>Subscribe to our news update to get our latest collection</h2>
         <p className='text-balance text-center text-[#8C93A3] text-md'>By subcribing to our news you get 10% off on your first order</p>
       </div>


           <div className='flex items-center max-w-[442px] w-full'>
              <div className='bg-white w-full p-[10px] h-10 flex gap-[8px]'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M3.25 3.75H16.75C16.9489 3.75 17.1397 3.82902 17.2803 3.96967C17.421 4.11032 17.5 4.30109 17.5 4.5V15.5C17.5 15.6989 17.421 15.8897 17.2803 16.0303C17.1397 16.171 16.9489 16.25 16.75 16.25H3.25C3.05109 16.25 2.86032 16.171 2.71967 16.0303C2.57902 15.8897 2.5 15.6989 2.5 15.5V4.5C2.5 4.30109 2.57902 4.11032 2.71967 3.96967C2.86032 3.82902 3.05109 3.75 3.25 3.75ZM16 6.9285L10.054 12.2535L4 6.912V14.75H16V6.9285ZM4.38325 5.25L10.0457 10.2465L15.6265 5.25H4.38325Z" fill="#868C98"/>
                 </svg>

                  <input type="email" name="newsletter" placeholder='Enter your email'  readOnly value={''} 
                   className='outline-0 focus:outline-0 text-[12px] text-[#868C98] bg-transparent'
                  />
              </div>
                <button className='cursor-not-allowed h-10 w-[96px] flex justify-center items-center bg-[#20232D] text-sm text-white'>
                   Subscribe
                </button>
           </div>
    </div>
  )
}

export default NewsLetter