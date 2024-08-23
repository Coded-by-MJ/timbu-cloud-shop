import BreadCrumbs from "../components/BreadCrumbs"
import { memo, useCallback } from "react"

import NewsLetter from "../components/NewsLetter"
import { BrandImages, PromoImages } from "../components/PromoImages"
import { useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"




const SearchPage = ({ query }) => {

    const { products } = useSelector((store) => store.cart)


    const handleFindMatch = useCallback(() => {
        const productsMatch = products.filter(product => 
          product.name.match(new RegExp(query, 'i'))
        );
      
        return productsMatch
  
    }, [products, query])



    const queryMatch = handleFindMatch()






  return (
    <div className="w-full flex flex-col gap-12 mt-5">
    <div className="px-4 w-full">
        <BreadCrumbs />
        <div className="w-full flex flex-wrap gap-4 justify-between items-center mt-5">
          <p className="text-wrap font-light text-sm font-sans text-black">
             Showing <span className="font-bold">{queryMatch.length}</span> results of <span className="font-bold">{queryMatch.length}</span> items
          </p>
        </div>

        <h2 className="text-navy text-md font-bold mt-3 mb-10">FEATURED PRODUCTS</h2>

        <div className="grid-cols-auto-mobile md:grid-cols-auto-desktop justify-center grid w-full gap-[24px]">
          
            { queryMatch.length > 0
                     ? queryMatch.map(product => (
                        <ProductCard key={product._id} {...product} />
                      ))

                     : <h1 className="font-bold text-xl text-navy">No Results for &quot;{query}&quot; </h1>
          }

        </div>
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

export default memo(SearchPage)