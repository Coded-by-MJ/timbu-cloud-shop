import { Link } from "@tanstack/react-router"
import SearchForm from "./SearchForm"

import image from "../assets/topbg.png"
import { useSelector, useDispatch } from "react-redux"
import { toggleIsOpen } from "../features/actions/actionsSlice"
import { usePathName } from "../hooks/usePathName"
import { useEffect} from "react"
import { updateCartAndTotal, getProducts } from "../features/cart/cartSlice"




const MobileNavBar = ({title}) => {

  const { isOpen } = useSelector((store) => store.actions)

  const dispatch = useDispatch()





  return (
          <div className={`${isOpen ? 'translate-x-0 left-0 min-h-screen' : ' -translate-x-[100%] -left-1/2 min-h-0'}  absolute z-40 transition-all top-0 lg:hidden w-full bg-[#B7B7B780]/50 backdrop-blur-sm`} >
                 <div className="h-[414px] w-full py-8 px-6 bg-white">
                     <div className="flex justify-between items-start pb-4 border-b-[1px] border-solid border-[#B2B7C2]">
                        <svg width="76" height="39" viewBox="0 0 76 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M16.7548 8.808V17H13.2188V8.808H9.60281V5.992H20.3548V8.808H16.7548ZM21.9497 17V5.992H25.4857V17H21.9497ZM37.2884 17V13.032C37.2884 12.5413 37.3044 12.04 37.3364 11.528C37.3791 11.0053 37.4218 10.568 37.4644 10.216C37.5071 9.864 37.5338 9.64 37.5444 9.544H37.4804L35.4484 17H32.6804L30.6324 9.56H30.5684C30.5791 9.656 30.6058 9.88 30.6484 10.232C30.7018 10.5733 30.7498 11.0053 30.7924 11.528C30.8351 12.04 30.8564 12.5413 30.8564 13.032V17H27.6084V5.992H32.6004L34.2644 12.344H34.3284L35.9764 5.992H40.7924V17H37.2884ZM50.0938 5.992C50.6485 5.992 51.1551 6.10933 51.6138 6.344C52.0831 6.568 52.4511 6.888 52.7178 7.304C52.9951 7.72 53.1338 8.184 53.1338 8.696C53.1338 10.0507 52.5205 10.904 51.2938 11.256V11.32C52.6911 11.64 53.3898 12.5573 53.3898 14.072C53.3898 14.648 53.2458 15.16 52.9578 15.608C52.6805 16.0453 52.2965 16.3867 51.8058 16.632C51.3151 16.8773 50.7765 17 50.1898 17H42.7658V5.992H50.0938ZM46.3018 10.28H48.7338C48.9685 10.28 49.1605 10.2 49.3098 10.04C49.4698 9.86933 49.5498 9.66133 49.5498 9.416V9.256C49.5498 9.02133 49.4698 8.824 49.3098 8.664C49.1498 8.49333 48.9578 8.408 48.7338 8.408H46.3018V10.28ZM46.3018 14.44H48.9898C49.2245 14.44 49.4165 14.36 49.5658 14.2C49.7258 14.0293 49.8058 13.8213 49.8058 13.576V13.416C49.8058 13.1707 49.7258 12.968 49.5658 12.808C49.4165 12.6373 49.2245 12.552 48.9898 12.552H46.3018V14.44ZM65.5811 12.568C65.5811 14.072 65.1064 15.2187 64.1571 16.008C63.2077 16.7973 61.8584 17.192 60.1091 17.192C58.3597 17.192 57.0051 16.7973 56.0451 16.008C55.0957 15.2187 54.6211 14.072 54.6211 12.568V5.992H58.1571V12.52C58.1571 13.1387 58.3224 13.6347 58.6531 14.008C58.9837 14.3707 59.4637 14.552 60.0931 14.552C60.7224 14.552 61.2024 14.3653 61.5331 13.992C61.8744 13.6187 62.0451 13.128 62.0451 12.52V5.992H65.5811V12.568Z" fill="black"/>
                         <path d="M5.66019 33.192C4.78552 33.192 4.00685 32.9787 3.32419 32.552C2.64152 32.1147 2.10285 31.4907 1.70819 30.68C1.31352 29.8587 1.11619 28.8827 1.11619 27.752C1.11619 26.8987 1.22819 26.1413 1.45219 25.48C1.68685 24.808 2.01219 24.232 2.42819 23.752C2.85485 23.272 3.34552 22.9093 3.90019 22.664C4.46552 22.4187 5.07885 22.296 5.74019 22.296C6.38019 22.296 6.94019 22.4293 7.42019 22.696C7.91085 22.952 8.30019 23.2453 8.58819 23.576L7.93219 24.36C7.65485 24.0507 7.33485 23.8053 6.97219 23.624C6.62019 23.432 6.21485 23.336 5.75619 23.336C5.07352 23.336 4.47619 23.5173 3.96419 23.88C3.45219 24.232 3.05219 24.7387 2.76419 25.4C2.48685 26.0507 2.34819 26.824 2.34819 27.72C2.34819 28.6267 2.48152 29.4107 2.74819 30.072C3.02552 30.7333 3.41485 31.2453 3.91619 31.608C4.42819 31.9707 5.02552 32.152 5.70819 32.152C6.23085 32.152 6.68952 32.0453 7.08419 31.832C7.48952 31.6187 7.86285 31.32 8.20419 30.936L8.86019 31.672C8.45485 32.152 7.99085 32.5253 7.46819 32.792C6.94552 33.0587 6.34285 33.192 5.66019 33.192ZM11.8416 33.192C11.5536 33.192 11.3136 33.128 11.1216 33C10.9296 32.8827 10.7909 32.7067 10.7056 32.472C10.6202 32.2267 10.5776 31.928 10.5776 31.576V21.576H11.7296V31.672C11.7296 31.864 11.7669 32.0027 11.8416 32.088C11.9162 32.1733 12.0016 32.216 12.0976 32.216C12.1296 32.216 12.1669 32.216 12.2096 32.216C12.2522 32.2053 12.3109 32.1947 12.3856 32.184L12.5456 33.08C12.4602 33.1013 12.3589 33.1227 12.2416 33.144C12.1349 33.176 12.0016 33.192 11.8416 33.192ZM17.3616 33.192C16.7322 33.192 16.1456 33.032 15.6016 32.712C15.0576 32.392 14.6202 31.9333 14.2896 31.336C13.9589 30.728 13.7936 29.992 13.7936 29.128C13.7936 28.264 13.9589 27.528 14.2896 26.92C14.6202 26.312 15.0576 25.848 15.6016 25.528C16.1456 25.208 16.7322 25.048 17.3616 25.048C17.9909 25.048 18.5722 25.208 19.1056 25.528C19.6496 25.848 20.0869 26.312 20.4176 26.92C20.7589 27.528 20.9296 28.264 20.9296 29.128C20.9296 29.992 20.7589 30.728 20.4176 31.336C20.0869 31.9333 19.6496 32.392 19.1056 32.712C18.5722 33.032 17.9909 33.192 17.3616 33.192ZM17.3616 32.216C17.8309 32.216 18.2416 32.088 18.5936 31.832C18.9562 31.576 19.2336 31.2187 19.4256 30.76C19.6282 30.2907 19.7296 29.7467 19.7296 29.128C19.7296 28.52 19.6282 27.9813 19.4256 27.512C19.2336 27.0427 18.9562 26.68 18.5936 26.424C18.2416 26.1573 17.8309 26.024 17.3616 26.024C16.9029 26.024 16.4922 26.1573 16.1296 26.424C15.7776 26.68 15.5002 27.0427 15.2976 27.512C15.1056 27.9813 15.0096 28.52 15.0096 29.128C15.0096 29.7467 15.1056 30.2907 15.2976 30.76C15.5002 31.2187 15.7776 31.576 16.1296 31.832C16.4922 32.088 16.9029 32.216 17.3616 32.216ZM25.1062 33.192C24.3062 33.192 23.7142 32.936 23.3302 32.424C22.9462 31.912 22.7542 31.16 22.7542 30.168V25.24H23.9062V30.024C23.9062 30.7707 24.0289 31.32 24.2742 31.672C24.5195 32.0133 24.9142 32.184 25.4582 32.184C25.8635 32.184 26.2315 32.0773 26.5622 31.864C26.8929 31.64 27.2502 31.288 27.6342 30.808V25.24H28.8022V33H27.8262L27.7302 31.768H27.6822C27.3195 32.1947 26.9355 32.5413 26.5302 32.808C26.1249 33.064 25.6502 33.192 25.1062 33.192ZM33.9388 33.192C32.9681 33.192 32.1948 32.84 31.6188 32.136C31.0428 31.4213 30.7548 30.4187 30.7548 29.128C30.7548 28.296 30.9095 27.576 31.2188 26.968C31.5388 26.36 31.9548 25.8907 32.4668 25.56C32.9788 25.2187 33.5335 25.048 34.1308 25.048C34.5895 25.048 34.9841 25.128 35.3148 25.288C35.6455 25.448 35.9868 25.672 36.3388 25.96L36.2908 24.616V21.576H37.4428V33H36.4828L36.3868 32.056H36.3388C36.0401 32.3653 35.6828 32.632 35.2668 32.856C34.8615 33.08 34.4188 33.192 33.9388 33.192ZM34.1948 32.2C34.5681 32.2 34.9255 32.1093 35.2668 31.928C35.6081 31.736 35.9495 31.4587 36.2908 31.096V26.888C35.9388 26.5787 35.6028 26.36 35.2828 26.232C34.9628 26.104 34.6375 26.04 34.3068 26.04C33.8695 26.04 33.4695 26.1733 33.1068 26.44C32.7548 26.696 32.4721 27.0587 32.2588 27.528C32.0561 27.9867 31.9548 28.52 31.9548 29.128C31.9548 30.0773 32.1468 30.8293 32.5308 31.384C32.9255 31.928 33.4801 32.2 34.1948 32.2ZM45.9861 33.192C45.2501 33.192 44.5727 33.048 43.9541 32.76C43.3354 32.472 42.7967 32.0933 42.3381 31.624L43.0581 30.808C43.4421 31.2133 43.8847 31.5387 44.3861 31.784C44.8981 32.0293 45.4367 32.152 46.0021 32.152C46.7274 32.152 47.2927 31.9867 47.6981 31.656C48.1034 31.3147 48.3061 30.872 48.3061 30.328C48.3061 29.9547 48.2261 29.656 48.0661 29.432C47.9061 29.1973 47.6927 29.0053 47.4261 28.856C47.1594 28.696 46.8554 28.5413 46.5141 28.392L44.9941 27.72C44.6741 27.5813 44.3487 27.4 44.0181 27.176C43.6874 26.952 43.4101 26.6693 43.1861 26.328C42.9727 25.9867 42.8661 25.5547 42.8661 25.032C42.8661 24.5093 43.0047 24.0453 43.2821 23.64C43.5594 23.224 43.9434 22.8987 44.4341 22.664C44.9247 22.4187 45.4794 22.296 46.0981 22.296C46.7274 22.296 47.3034 22.4187 47.8261 22.664C48.3594 22.9093 48.8021 23.2187 49.1541 23.592L48.5141 24.36C48.2047 24.04 47.8474 23.7893 47.4421 23.608C47.0474 23.4267 46.5994 23.336 46.0981 23.336C45.4901 23.336 44.9941 23.4853 44.6101 23.784C44.2367 24.072 44.0501 24.4667 44.0501 24.968C44.0501 25.32 44.1407 25.608 44.3221 25.832C44.5034 26.056 44.7274 26.2427 44.9941 26.392C45.2714 26.5307 45.5434 26.6587 45.8101 26.776L47.3301 27.448C47.7461 27.6187 48.1141 27.8213 48.4341 28.056C48.7541 28.2907 49.0101 28.584 49.2021 28.936C49.4047 29.288 49.5061 29.7253 49.5061 30.248C49.5061 30.792 49.3621 31.288 49.0741 31.736C48.7967 32.184 48.3914 32.5413 47.8581 32.808C47.3354 33.064 46.7114 33.192 45.9861 33.192ZM51.3184 33V21.576H52.4704V24.744L52.4384 26.376C52.8118 26.0027 53.2064 25.688 53.6224 25.432C54.0384 25.176 54.5078 25.048 55.0304 25.048C55.8518 25.048 56.4491 25.304 56.8224 25.816C57.2064 26.328 57.3984 27.08 57.3984 28.072V33H56.2304V28.216C56.2304 27.4693 56.1078 26.9253 55.8624 26.584C55.6278 26.2427 55.2384 26.072 54.6944 26.072C54.2891 26.072 53.9211 26.1787 53.5904 26.392C53.2598 26.5947 52.8864 26.904 52.4704 27.32V33H51.3184ZM62.7431 33.192C62.1137 33.192 61.5271 33.032 60.9831 32.712C60.4391 32.392 60.0017 31.9333 59.6711 31.336C59.3404 30.728 59.1751 29.992 59.1751 29.128C59.1751 28.264 59.3404 27.528 59.6711 26.92C60.0017 26.312 60.4391 25.848 60.9831 25.528C61.5271 25.208 62.1137 25.048 62.7431 25.048C63.3724 25.048 63.9537 25.208 64.4871 25.528C65.0311 25.848 65.4684 26.312 65.7991 26.92C66.1404 27.528 66.3111 28.264 66.3111 29.128C66.3111 29.992 66.1404 30.728 65.7991 31.336C65.4684 31.9333 65.0311 32.392 64.4871 32.712C63.9537 33.032 63.3724 33.192 62.7431 33.192ZM62.7431 32.216C63.2124 32.216 63.6231 32.088 63.9751 31.832C64.3377 31.576 64.6151 31.2187 64.8071 30.76C65.0097 30.2907 65.1111 29.7467 65.1111 29.128C65.1111 28.52 65.0097 27.9813 64.8071 27.512C64.6151 27.0427 64.3377 26.68 63.9751 26.424C63.6231 26.1573 63.2124 26.024 62.7431 26.024C62.2844 26.024 61.8737 26.1573 61.5111 26.424C61.1591 26.68 60.8817 27.0427 60.6791 27.512C60.4871 27.9813 60.3911 28.52 60.3911 29.128C60.3911 29.7467 60.4871 30.2907 60.6791 30.76C60.8817 31.2187 61.1591 31.576 61.5111 31.832C61.8737 32.088 62.2844 32.216 62.7431 32.216ZM68.2477 36.328V25.24H69.2077L69.3037 26.168H69.3517C69.7037 25.8587 70.093 25.5973 70.5197 25.384C70.957 25.16 71.405 25.048 71.8637 25.048C72.5357 25.048 73.101 25.2133 73.5597 25.544C74.0184 25.864 74.3597 26.3227 74.5837 26.92C74.8184 27.5067 74.9357 28.2 74.9357 29C74.9357 29.8853 74.7757 30.6427 74.4557 31.272C74.1464 31.8907 73.7357 32.3653 73.2237 32.696C72.7117 33.0267 72.1624 33.192 71.5757 33.192C71.2237 33.192 70.861 33.112 70.4877 32.952C70.1144 32.792 69.741 32.568 69.3677 32.28L69.3997 33.656V36.328H68.2477ZM71.3837 32.2C71.8424 32.2 72.2477 32.072 72.5997 31.816C72.9517 31.56 73.229 31.192 73.4317 30.712C73.6344 30.232 73.7357 29.6667 73.7357 29.016C73.7357 28.4293 73.661 27.912 73.5117 27.464C73.373 27.016 73.1437 26.6693 72.8237 26.424C72.5144 26.168 72.1037 26.04 71.5917 26.04C71.2504 26.04 70.8984 26.136 70.5357 26.328C70.1837 26.5093 69.805 26.7867 69.3997 27.16V31.352C69.7837 31.6613 70.1464 31.88 70.4877 32.008C70.829 32.136 71.1277 32.2 71.3837 32.2Z" fill="black"/>
                        </svg>

                         <button
                          onClick={() => dispatch(toggleIsOpen())}
                           className="size-10 border-[1px] border-solid group transition-all border-black hover:border-white hover:bg-black cursor-pointer bg-white no-underline flex justify-center items-center"
                         >
                               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.0001 8.93951L13.7126 5.22701L14.7731 6.28751L11.0606 10L14.7731 13.7125L13.7126 14.773L10.0001 11.0605L6.28755 14.773L5.22705 13.7125L8.93955 10L5.22705 6.28751L6.28755 5.22701L10.0001 8.93951Z" fill="#525866" className="group-hover:fill-white transition-all"/>
                               </svg>
                          </button>
                     </div>

                     <span className="inline-block my-2.5 text-center text-sm text-[#525866]">
                        {title}
                     </span>
                      <br/>


                           <SearchForm /> 
                 </div>
                 
            
          </div>
  ) 

}












const NavBar = () => {

  const { currentPathName } = usePathName()
  const { inCart, products } = useSelector((store) => store.cart)

  const dispatch = useDispatch()



  useEffect(() => {
    const cacheProducts = async () => {
      if(products.length > 0){
            await  new Promise((resolve) => setTimeout(resolve, 1000 * 60 * 10))
            dispatch(getProducts())
        
     }else{
       dispatch(getProducts())
     }
    }

    cacheProducts()
  },[products.length])






  useEffect(() => {
    dispatch(updateCartAndTotal())
 },[products])







 
  return (
     <header className="w-full relative flex justify-between items-center px-6 py-5 bg-cover bg-no-repeat h-20"
      style={{backgroundImage: `url(${image})`}}
     >
       <div className="flex gap-6 ">
         <Link
          to={"/"}
          className="cursor-pointer no-underline"
         >
             <svg width="76" height="40" viewBox="0 0 76 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16.7548 9.308V17.5H13.2188V9.308H9.60281V6.492H20.3548V9.308H16.7548ZM21.9497 17.5V6.492H25.4857V17.5H21.9497ZM37.2884 17.5V13.532C37.2884 13.0413 37.3044 12.54 37.3364 12.028C37.3791 11.5053 37.4218 11.068 37.4644 10.716C37.5071 10.364 37.5338 10.14 37.5444 10.044H37.4804L35.4484 17.5H32.6804L30.6324 10.06H30.5684C30.5791 10.156 30.6058 10.38 30.6484 10.732C30.7018 11.0733 30.7498 11.5053 30.7924 12.028C30.8351 12.54 30.8564 13.0413 30.8564 13.532V17.5H27.6084V6.492H32.6004L34.2644 12.844H34.3284L35.9764 6.492H40.7924V17.5H37.2884ZM50.0938 6.492C50.6485 6.492 51.1551 6.60933 51.6138 6.844C52.0831 7.068 52.4511 7.388 52.7178 7.804C52.9951 8.22 53.1338 8.684 53.1338 9.196C53.1338 10.5507 52.5205 11.404 51.2938 11.756V11.82C52.6911 12.14 53.3898 13.0573 53.3898 14.572C53.3898 15.148 53.2458 15.66 52.9578 16.108C52.6805 16.5453 52.2965 16.8867 51.8058 17.132C51.3151 17.3773 50.7765 17.5 50.1898 17.5H42.7658V6.492H50.0938ZM46.3018 10.78H48.7338C48.9685 10.78 49.1605 10.7 49.3098 10.54C49.4698 10.3693 49.5498 10.1613 49.5498 9.916V9.756C49.5498 9.52133 49.4698 9.324 49.3098 9.164C49.1498 8.99333 48.9578 8.908 48.7338 8.908H46.3018V10.78ZM46.3018 14.94H48.9898C49.2245 14.94 49.4165 14.86 49.5658 14.7C49.7258 14.5293 49.8058 14.3213 49.8058 14.076V13.916C49.8058 13.6707 49.7258 13.468 49.5658 13.308C49.4165 13.1373 49.2245 13.052 48.9898 13.052H46.3018V14.94ZM65.5811 13.068C65.5811 14.572 65.1064 15.7187 64.1571 16.508C63.2077 17.2973 61.8584 17.692 60.1091 17.692C58.3597 17.692 57.0051 17.2973 56.0451 16.508C55.0957 15.7187 54.6211 14.572 54.6211 13.068V6.492H58.1571V13.02C58.1571 13.6387 58.3224 14.1347 58.6531 14.508C58.9837 14.8707 59.4637 15.052 60.0931 15.052C60.7224 15.052 61.2024 14.8653 61.5331 14.492C61.8744 14.1187 62.0451 13.628 62.0451 13.02V6.492H65.5811V13.068Z" fill="white"/>
                  <path d="M5.66019 33.692C4.78552 33.692 4.00685 33.4787 3.32419 33.052C2.64152 32.6147 2.10285 31.9907 1.70819 31.18C1.31352 30.3587 1.11619 29.3827 1.11619 28.252C1.11619 27.3987 1.22819 26.6413 1.45219 25.98C1.68685 25.308 2.01219 24.732 2.42819 24.252C2.85485 23.772 3.34552 23.4093 3.90019 23.164C4.46552 22.9187 5.07885 22.796 5.74019 22.796C6.38019 22.796 6.94019 22.9293 7.42019 23.196C7.91085 23.452 8.30019 23.7453 8.58819 24.076L7.93219 24.86C7.65485 24.5507 7.33485 24.3053 6.97219 24.124C6.62019 23.932 6.21485 23.836 5.75619 23.836C5.07352 23.836 4.47619 24.0173 3.96419 24.38C3.45219 24.732 3.05219 25.2387 2.76419 25.9C2.48685 26.5507 2.34819 27.324 2.34819 28.22C2.34819 29.1267 2.48152 29.9107 2.74819 30.572C3.02552 31.2333 3.41485 31.7453 3.91619 32.108C4.42819 32.4707 5.02552 32.652 5.70819 32.652C6.23085 32.652 6.68952 32.5453 7.08419 32.332C7.48952 32.1187 7.86285 31.82 8.20419 31.436L8.86019 32.172C8.45485 32.652 7.99085 33.0253 7.46819 33.292C6.94552 33.5587 6.34285 33.692 5.66019 33.692ZM11.8416 33.692C11.5536 33.692 11.3136 33.628 11.1216 33.5C10.9296 33.3827 10.7909 33.2067 10.7056 32.972C10.6202 32.7267 10.5776 32.428 10.5776 32.076V22.076H11.7296V32.172C11.7296 32.364 11.7669 32.5027 11.8416 32.588C11.9162 32.6733 12.0016 32.716 12.0976 32.716C12.1296 32.716 12.1669 32.716 12.2096 32.716C12.2522 32.7053 12.3109 32.6947 12.3856 32.684L12.5456 33.58C12.4602 33.6013 12.3589 33.6227 12.2416 33.644C12.1349 33.676 12.0016 33.692 11.8416 33.692ZM17.3616 33.692C16.7322 33.692 16.1456 33.532 15.6016 33.212C15.0576 32.892 14.6202 32.4333 14.2896 31.836C13.9589 31.228 13.7936 30.492 13.7936 29.628C13.7936 28.764 13.9589 28.028 14.2896 27.42C14.6202 26.812 15.0576 26.348 15.6016 26.028C16.1456 25.708 16.7322 25.548 17.3616 25.548C17.9909 25.548 18.5722 25.708 19.1056 26.028C19.6496 26.348 20.0869 26.812 20.4176 27.42C20.7589 28.028 20.9296 28.764 20.9296 29.628C20.9296 30.492 20.7589 31.228 20.4176 31.836C20.0869 32.4333 19.6496 32.892 19.1056 33.212C18.5722 33.532 17.9909 33.692 17.3616 33.692ZM17.3616 32.716C17.8309 32.716 18.2416 32.588 18.5936 32.332C18.9562 32.076 19.2336 31.7187 19.4256 31.26C19.6282 30.7907 19.7296 30.2467 19.7296 29.628C19.7296 29.02 19.6282 28.4813 19.4256 28.012C19.2336 27.5427 18.9562 27.18 18.5936 26.924C18.2416 26.6573 17.8309 26.524 17.3616 26.524C16.9029 26.524 16.4922 26.6573 16.1296 26.924C15.7776 27.18 15.5002 27.5427 15.2976 28.012C15.1056 28.4813 15.0096 29.02 15.0096 29.628C15.0096 30.2467 15.1056 30.7907 15.2976 31.26C15.5002 31.7187 15.7776 32.076 16.1296 32.332C16.4922 32.588 16.9029 32.716 17.3616 32.716ZM25.1062 33.692C24.3062 33.692 23.7142 33.436 23.3302 32.924C22.9462 32.412 22.7542 31.66 22.7542 30.668V25.74H23.9062V30.524C23.9062 31.2707 24.0289 31.82 24.2742 32.172C24.5195 32.5133 24.9142 32.684 25.4582 32.684C25.8635 32.684 26.2315 32.5773 26.5622 32.364C26.8929 32.14 27.2502 31.788 27.6342 31.308V25.74H28.8022V33.5H27.8262L27.7302 32.268H27.6822C27.3195 32.6947 26.9355 33.0413 26.5302 33.308C26.1249 33.564 25.6502 33.692 25.1062 33.692ZM33.9388 33.692C32.9681 33.692 32.1948 33.34 31.6188 32.636C31.0428 31.9213 30.7548 30.9187 30.7548 29.628C30.7548 28.796 30.9095 28.076 31.2188 27.468C31.5388 26.86 31.9548 26.3907 32.4668 26.06C32.9788 25.7187 33.5335 25.548 34.1308 25.548C34.5895 25.548 34.9841 25.628 35.3148 25.788C35.6455 25.948 35.9868 26.172 36.3388 26.46L36.2908 25.116V22.076H37.4428V33.5H36.4828L36.3868 32.556H36.3388C36.0401 32.8653 35.6828 33.132 35.2668 33.356C34.8615 33.58 34.4188 33.692 33.9388 33.692ZM34.1948 32.7C34.5681 32.7 34.9255 32.6093 35.2668 32.428C35.6081 32.236 35.9495 31.9587 36.2908 31.596V27.388C35.9388 27.0787 35.6028 26.86 35.2828 26.732C34.9628 26.604 34.6375 26.54 34.3068 26.54C33.8695 26.54 33.4695 26.6733 33.1068 26.94C32.7548 27.196 32.4721 27.5587 32.2588 28.028C32.0561 28.4867 31.9548 29.02 31.9548 29.628C31.9548 30.5773 32.1468 31.3293 32.5308 31.884C32.9255 32.428 33.4801 32.7 34.1948 32.7ZM45.9861 33.692C45.2501 33.692 44.5727 33.548 43.9541 33.26C43.3354 32.972 42.7967 32.5933 42.3381 32.124L43.0581 31.308C43.4421 31.7133 43.8847 32.0387 44.3861 32.284C44.8981 32.5293 45.4367 32.652 46.0021 32.652C46.7274 32.652 47.2927 32.4867 47.6981 32.156C48.1034 31.8147 48.3061 31.372 48.3061 30.828C48.3061 30.4547 48.2261 30.156 48.0661 29.932C47.9061 29.6973 47.6927 29.5053 47.4261 29.356C47.1594 29.196 46.8554 29.0413 46.5141 28.892L44.9941 28.22C44.6741 28.0813 44.3487 27.9 44.0181 27.676C43.6874 27.452 43.4101 27.1693 43.1861 26.828C42.9727 26.4867 42.8661 26.0547 42.8661 25.532C42.8661 25.0093 43.0047 24.5453 43.2821 24.14C43.5594 23.724 43.9434 23.3987 44.4341 23.164C44.9247 22.9187 45.4794 22.796 46.0981 22.796C46.7274 22.796 47.3034 22.9187 47.8261 23.164C48.3594 23.4093 48.8021 23.7187 49.1541 24.092L48.5141 24.86C48.2047 24.54 47.8474 24.2893 47.4421 24.108C47.0474 23.9267 46.5994 23.836 46.0981 23.836C45.4901 23.836 44.9941 23.9853 44.6101 24.284C44.2367 24.572 44.0501 24.9667 44.0501 25.468C44.0501 25.82 44.1407 26.108 44.3221 26.332C44.5034 26.556 44.7274 26.7427 44.9941 26.892C45.2714 27.0307 45.5434 27.1587 45.8101 27.276L47.3301 27.948C47.7461 28.1187 48.1141 28.3213 48.4341 28.556C48.7541 28.7907 49.0101 29.084 49.2021 29.436C49.4047 29.788 49.5061 30.2253 49.5061 30.748C49.5061 31.292 49.3621 31.788 49.0741 32.236C48.7967 32.684 48.3914 33.0413 47.8581 33.308C47.3354 33.564 46.7114 33.692 45.9861 33.692ZM51.3184 33.5V22.076H52.4704V25.244L52.4384 26.876C52.8118 26.5027 53.2064 26.188 53.6224 25.932C54.0384 25.676 54.5078 25.548 55.0304 25.548C55.8518 25.548 56.4491 25.804 56.8224 26.316C57.2064 26.828 57.3984 27.58 57.3984 28.572V33.5H56.2304V28.716C56.2304 27.9693 56.1078 27.4253 55.8624 27.084C55.6278 26.7427 55.2384 26.572 54.6944 26.572C54.2891 26.572 53.9211 26.6787 53.5904 26.892C53.2598 27.0947 52.8864 27.404 52.4704 27.82V33.5H51.3184ZM62.7431 33.692C62.1137 33.692 61.5271 33.532 60.9831 33.212C60.4391 32.892 60.0017 32.4333 59.6711 31.836C59.3404 31.228 59.1751 30.492 59.1751 29.628C59.1751 28.764 59.3404 28.028 59.6711 27.42C60.0017 26.812 60.4391 26.348 60.9831 26.028C61.5271 25.708 62.1137 25.548 62.7431 25.548C63.3724 25.548 63.9537 25.708 64.4871 26.028C65.0311 26.348 65.4684 26.812 65.7991 27.42C66.1404 28.028 66.3111 28.764 66.3111 29.628C66.3111 30.492 66.1404 31.228 65.7991 31.836C65.4684 32.4333 65.0311 32.892 64.4871 33.212C63.9537 33.532 63.3724 33.692 62.7431 33.692ZM62.7431 32.716C63.2124 32.716 63.6231 32.588 63.9751 32.332C64.3377 32.076 64.6151 31.7187 64.8071 31.26C65.0097 30.7907 65.1111 30.2467 65.1111 29.628C65.1111 29.02 65.0097 28.4813 64.8071 28.012C64.6151 27.5427 64.3377 27.18 63.9751 26.924C63.6231 26.6573 63.2124 26.524 62.7431 26.524C62.2844 26.524 61.8737 26.6573 61.5111 26.924C61.1591 27.18 60.8817 27.5427 60.6791 28.012C60.4871 28.4813 60.3911 29.02 60.3911 29.628C60.3911 30.2467 60.4871 30.7907 60.6791 31.26C60.8817 31.7187 61.1591 32.076 61.5111 32.332C61.8737 32.588 62.2844 32.716 62.7431 32.716ZM68.2477 36.828V25.74H69.2077L69.3037 26.668H69.3517C69.7037 26.3587 70.093 26.0973 70.5197 25.884C70.957 25.66 71.405 25.548 71.8637 25.548C72.5357 25.548 73.101 25.7133 73.5597 26.044C74.0184 26.364 74.3597 26.8227 74.5837 27.42C74.8184 28.0067 74.9357 28.7 74.9357 29.5C74.9357 30.3853 74.7757 31.1427 74.4557 31.772C74.1464 32.3907 73.7357 32.8653 73.2237 33.196C72.7117 33.5267 72.1624 33.692 71.5757 33.692C71.2237 33.692 70.861 33.612 70.4877 33.452C70.1144 33.292 69.741 33.068 69.3677 32.78L69.3997 34.156V36.828H68.2477ZM71.3837 32.7C71.8424 32.7 72.2477 32.572 72.5997 32.316C72.9517 32.06 73.229 31.692 73.4317 31.212C73.6344 30.732 73.7357 30.1667 73.7357 29.516C73.7357 28.9293 73.661 28.412 73.5117 27.964C73.373 27.516 73.1437 27.1693 72.8237 26.924C72.5144 26.668 72.1037 26.54 71.5917 26.54C71.2504 26.54 70.8984 26.636 70.5357 26.828C70.1837 27.0093 69.805 27.2867 69.3997 27.66V31.852C69.7837 32.1613 70.1464 32.38 70.4877 32.508C70.829 32.636 71.1277 32.7 71.3837 32.7Z" fill="white"/>
                </svg>

         </Link>
           <div className="w-[89px] text-sm font-sans text-[#CDD0D5] text-center h-[36px] hidden lg:flex items-center  text">
               {currentPathName}
           </div>

         </div>

           <div className="flex w-full justify-end gap-4 h-10">
               <div className="hidden lg:block">
                  <SearchForm />
               </div>
              
              <Link
               to={'/cart'}
               className="relative size-10 cursor-pointer bg-white no-underline flex justify-center items-center"
              >
                <span className={`${inCart.length > 0 ? 'bg-red-500' : 'bg-navy'} absolute size-[18px] -top-1.5 -right-0.5  text-sm font-sans font-bold flex text-white rounded-full justify-center items-center `}>
                          {inCart.length}
                </span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M4 13V4H2.5V2.5H4.75C4.94891 2.5 5.13968 2.57902 5.28033 2.71967C5.42098 2.86032 5.5 3.05109 5.5 3.25V12.25H14.8285L16.3285 6.25H7V4.75H17.29C17.404 4.75 17.5165 4.776 17.619 4.826C17.7214 4.87601 17.8111 4.94871 17.8813 5.03859C17.9514 5.12847 18.0001 5.23315 18.0237 5.34468C18.0473 5.45622 18.0452 5.57166 18.0175 5.68225L16.1425 13.1823C16.1019 13.3444 16.0082 13.4884 15.8764 13.5913C15.7446 13.6941 15.5822 13.75 15.415 13.75H4.75C4.55109 13.75 4.36032 13.671 4.21967 13.5303C4.07902 13.3897 4 13.1989 4 13V13ZM5.5 18.25C5.10218 18.25 4.72064 18.092 4.43934 17.8107C4.15804 17.5294 4 17.1478 4 16.75C4 16.3522 4.15804 15.9706 4.43934 15.6893C4.72064 15.408 5.10218 15.25 5.5 15.25C5.89783 15.25 6.27936 15.408 6.56066 15.6893C6.84197 15.9706 7 16.3522 7 16.75C7 17.1478 6.84197 17.5294 6.56066 17.8107C6.27936 18.092 5.89783 18.25 5.5 18.25ZM14.5 18.25C14.1022 18.25 13.7206 18.092 13.4393 17.8107C13.158 17.5294 13 17.1478 13 16.75C13 16.3522 13.158 15.9706 13.4393 15.6893C13.7206 15.408 14.1022 15.25 14.5 15.25C14.8978 15.25 15.2794 15.408 15.5607 15.6893C15.842 15.9706 16 16.3522 16 16.75C16 17.1478 15.842 17.5294 15.5607 17.8107C15.2794 18.092 14.8978 18.25 14.5 18.25Z" fill="#525866"/>
                     </svg>


              </Link>
              <button
               className="size-10 cursor-not-allowed bg-white no-underline flex justify-center items-center"
              >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 17.5C4 15.9087 4.63214 14.3826 5.75736 13.2574C6.88258 12.1321 8.4087 11.5 10 11.5C11.5913 11.5 13.1174 12.1321 14.2426 13.2574C15.3679 14.3826 16 15.9087 16 17.5H14.5C14.5 16.3065 14.0259 15.1619 13.182 14.318C12.3381 13.4741 11.1935 13 10 13C8.80653 13 7.66193 13.4741 6.81802 14.318C5.97411 15.1619 5.5 16.3065 5.5 17.5H4ZM10 10.75C7.51375 10.75 5.5 8.73625 5.5 6.25C5.5 3.76375 7.51375 1.75 10 1.75C12.4863 1.75 14.5 3.76375 14.5 6.25C14.5 8.73625 12.4863 10.75 10 10.75ZM10 9.25C11.6575 9.25 13 7.9075 13 6.25C13 4.5925 11.6575 3.25 10 3.25C8.3425 3.25 7 4.5925 7 6.25C7 7.9075 8.3425 9.25 10 9.25Z" fill="#525866"/>
                    </svg>


              </button>

               <button
                 onClick={() => dispatch(toggleIsOpen())}
                 className="size-10  lg:hidden cursor-pointer bg-white no-underline flex justify-center items-center"
                 >
                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 14.5V16H4.75V14.5H13ZM16.75 9.25V10.75H3.25V9.25H16.75ZM15.25 4V5.5H7V4H15.25Z" fill="#525866"/>
                         </svg>
              </button>
           </div>

           <MobileNavBar  title={currentPathName}/> 


  
     </header>
  )
}

export default NavBar