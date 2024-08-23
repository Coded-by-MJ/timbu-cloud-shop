import { Link } from "@tanstack/react-router"

const SuccessModal = () => {
  return (
    <div className={`animate-alertIn -translate-y-[100%] -translate-x-1/2 w-full opacity-0 transition-all flex  fixed justify-center top-0 left-1/2 min-h-full bg-transparent`}>
    <div className={` flex items-center justify-center p-6 w-[335px] h-[230px] mt-36 bg-white rounded-md`}>
             <div className="flex flex-col w-full h-[175px] items-center justify-between">
                   <div className="flex gap-2 flex-col items-center">
                   <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_305_3871)">
                      <path d="M28.0002 3.11108C23.0777 3.11108 18.2657 4.57079 14.1727 7.30562C10.0797 10.0404 6.88967 13.9276 5.00589 18.4754C3.12211 23.0233 2.62923 28.0276 3.58957 32.8556C4.54992 37.6835 6.92035 42.1183 10.4011 45.5991C13.8819 49.0799 18.3167 51.4503 23.1446 52.4106C27.9726 53.371 32.9769 52.8781 37.5248 50.9943C42.0726 49.1105 45.9598 45.9205 48.6946 41.8275C51.4294 37.7345 52.8891 32.9225 52.8891 28C52.8891 21.399 50.2669 15.0684 45.5993 10.4009C40.9318 5.7333 34.6012 3.11108 28.0002 3.11108ZM28.0002 49.7778C23.693 49.7778 19.4825 48.5005 15.9011 46.1075C12.3198 43.7146 9.52849 40.3133 7.88019 36.334C6.23188 32.3546 5.8006 27.9758 6.6409 23.7513C7.48121 19.5269 9.55534 15.6464 12.601 12.6008C15.6467 9.55508 19.5271 7.48095 23.7516 6.64065C27.9761 5.80035 32.3549 6.23162 36.3342 7.87993C40.3136 9.52824 43.7148 12.3196 46.1078 15.9009C48.5008 19.4822 49.778 23.6927 49.778 28C49.778 33.7758 47.4836 39.3151 43.3994 43.3992C39.3153 47.4833 33.7761 49.7778 28.0002 49.7778Z" fill="#44AC21"/>
                      <path d="M43.5557 18.8222C43.2643 18.5325 42.87 18.3699 42.4591 18.3699C42.0481 18.3699 41.6538 18.5325 41.3624 18.8222L24.0957 36.0111L14.7624 26.6778C14.4777 26.3704 14.0826 26.1887 13.664 26.1727C13.2454 26.1566 12.8375 26.3076 12.5302 26.5922C12.2228 26.8769 12.0411 27.272 12.0251 27.6906C12.009 28.1092 12.16 28.5171 12.4446 28.8244L24.0957 40.4444L43.5557 21.0311C43.7015 20.8865 43.8173 20.7145 43.8962 20.5249C43.9752 20.3353 44.0159 20.132 44.0159 19.9267C44.0159 19.7213 43.9752 19.518 43.8962 19.3284C43.8173 19.1389 43.7015 18.9668 43.5557 18.8222Z" fill="#44AC21"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_305_3871">
                      <rect width="56" height="56" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>


                       <h2 className="text-navy text-center font-bold text-md">Payment Successful</h2>
                       <p className="text-balance text-center text-sm text-[#8C93A3]">
                           your order is now on the way
                        </p>

                       
                   </div>
                   <Link to={'/'} className="w-full h-[41px] text-white text-sm bg-black flex justify-center gap-2 items-center">                     
                      Back to Store
                   </Link>
             </div>
          
    </div>
  
</div>
  )
}

export default SuccessModal