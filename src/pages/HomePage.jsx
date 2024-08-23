import BreadCrumbs from "../components/BreadCrumbs"
import NewsLetter from "../components/NewsLetter"
import SearchPage from "./SearchPage"
import { useSearch } from "@tanstack/react-router"
import ProductCard from "../components/ProductCard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { hideSuccessModal } from "../features/actions/actionsSlice"
import Spinner from "../components/Spinner"
import { BrandImages, PromoImages } from "../components/PromoImages"


const HomePage = () => {

  const search = useSearch({strict: false}); 
  const dispatch = useDispatch()
  const { products, isLoading } = useSelector((store) => store.cart)


  useEffect(() => {
       dispatch(hideSuccessModal())
  },[])
  

  // Access the query parameters

  if (search.search) {
    return <SearchPage query={search.search} />;
  }



  return (
     <div className="w-full flex flex-col gap-12 mt-5">
       <div className="px-4 w-full">
           <BreadCrumbs />
           <div className="w-full flex flex-wrap gap-4 justify-between items-center mt-5">
             <p className="text-wrap font-light text-sm font-sans text-black">
                Showing <span className="font-bold">{products.length}</span> results of <span className="font-bold">{products.length}</span> items
             </p>
             <div className="flex gap-4 items-center">
               <span className="inline-block text-sm font-light">Sorted by</span>
                <button className="h-[40px] cursor-not-allowed border-[#8C93A3] w-[117px] items-center border-[1px] p-[6px] flex justify-between">
                  <span className="text-sm font-normal text-[#0F1D40]">
                    Popularity
                  </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12.0001 13.0548L16.4551 8.59979L17.7277 9.87239L12.0001 15.6L6.27246 9.87239L7.54506 8.59979L12.0001 13.0548Z" fill="#0F1D40"/>
                    </svg>

                </button>
             </div>
           </div>

           <h2 className="text-navy text-md font-bold mt-3 mb-10">FEATURED PRODUCTS</h2>
             { isLoading 
             
             
                ?  (<Spinner isLoading={isLoading} />)

                : (
                          <div className={` grid-cols-auto-mobile md:grid-cols-auto-desktop justify-center grid w-full gap-[24px]`}>
                          {
                            products.map((product) => (
                                <ProductCard key={product._id} {...product} />
                            ))
                          }
                       </div>
                  )

             }

    
    </div>

             <div className="w-full flex items-center justify-center">
                 <PromoImages />
                  
                 
             </div> 
             
              <div className="w-full flex flex-col items-start gap-6">
                  <h2 className="lg:text-3xl text-2xl font-medium font-sans  text-navy pl-4">Our trusted brands</h2>
              
                
                   <BrandImages />
                 
             </div>
               <NewsLetter />

    </div>
 
  )
}

export default HomePage