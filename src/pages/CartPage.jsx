import { Link } from "@tanstack/react-router"
import BreadCrumbs from "../components/BreadCrumbs"
import NewsLetter from "../components/NewsLetter"
import CartCard from "../components/CartCard"
import { showRemoveAllModal } from "../features/actions/actionsSlice"
import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import { calculateTotal } from "../features/cart/cartSlice"

const CartPage = () => {


   const dispatch = useDispatch()
   const { total, products  } = useSelector((store) => store.cart)





    const handleCart = useCallback(() => {
        const inCart = products.filter(item => item.qtyBought > 0)

        dispatch(calculateTotal())
         let percentage = (total * 10) / 100;
         let grandTotal = total + percentage;


        return {inCart, percentage, grandTotal}
   },[products, total])



   const {inCart, percentage, grandTotal} = handleCart()










   
  return (
    <div className="px-4 mt-5 flex flex-col gap-5">
           <BreadCrumbs />
      
      { inCart.length === 0 

               ? (  <div className="flex justify-center items-center w-full h-80">
                        <p className="text-md text-[#8C93A3] text-center text-balance"> <span className="font-bold">Your Cart is Empty!</span>  Looks like you haven&apos;t added any stylish 
                           pieces yet. Browse our latest collection and find your next favorite outfit!
                           </p>
                     </div>
                 )

               :  ( <div className="mb-8 flex justify-between items-start gap-10 w-full max-lg:flex-col max-lg:justify-start max-lg:items-center">
                     <div className="flex flex-col gap-6 w-full">
                        <div className="flex justify-between items-center w-full">
                           <h2 className="text-navy text-md font-bold">CART</h2>
                           <button 
                              onClick={() => dispatch(showRemoveAllModal())}
                           className="cursor-pointer p-[10px] transition-all flex h-10 w-[125px] group border-[1px] border-[#20232D] justify-between items-center bg-transparent hover:bg-navy hover:border-white">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                 <path d="M16.5 6.6H21V8.4H19.2V20.1C19.2 20.3387 19.1052 20.5676 18.9364 20.7364C18.7676 20.9052 18.5387 21 18.3 21H5.7C5.46131 21 5.23239 20.9052 5.0636 20.7364C4.89482 20.5676 4.8 20.3387 4.8 20.1V8.4H3V6.6H7.5V3.9C7.5 3.66131 7.59482 3.43239 7.7636 3.2636C7.93239 3.09482 8.1613 3 8.4 3H15.6C15.8387 3 16.0676 3.09482 16.2364 3.2636C16.4052 3.43239 16.5 3.66131 16.5 3.9V6.6ZM17.4 8.4H6.6V19.2H17.4V8.4ZM13.2726 13.8L14.8638 15.3912L13.5912 16.6638L12 15.0726L10.4088 16.6638L9.1362 15.3912L10.7274 13.8L9.1362 12.2088L10.4088 10.9362L12 12.5274L13.5912 10.9362L14.8638 12.2088L13.2726 13.8ZM9.3 4.8V6.6H14.7V4.8H9.3Z" fill="#20232D" className="group-hover:fill-white transition-all"/>
                              </svg>

                              <span className=" transition-all inline-block text-sm group-hover:text-white text-[#20232D]">Remove all</span>
                           </button>
                        </div>
                     


                        {/*cart card*/}
                           <div className="scrollbar-thin scrollbar-track-[#B2B7C2] scrollbar-thumb-navy gap-6 divide-y-[1px] divide-[#B2B7C2] py-2 flex flex-col w-full max-h-[800px] overflow-y-auto">
                                 {
                                       inCart.map((item) => (
                                          <CartCard  key={item._id} {...item} />
                                       ))
                                 }
                           </div>
                     </div>


                        <div className="flex gap-4 flex-col border-[#B2B7C2] h-[250px] border-[1px] w-full max-w-[413px] p-6">
                              <div className="w-full flex gap-3 flex-col">
                                 <div className="flex justify-between w-full">
                                    <span className=" text-sm font-light text-navy inline-block">Subtotal</span> 
                                    <span className="inline-block text-md text-navy font-bold">${total.toFixed(2)}</span>
                                 </div> 
                                 <div className="flex justify-between w-full">
                                 <span className=" text-sm font-light text-navy inline-block">Discount</span> 
                                 <span className=" text-sm font-light text-[#8C93A3] inline-block">$0</span> 
                                 </div>
                                 
                                 <div className="flex justify-between w-full">
                                 <span className=" text-sm font-light text-navy inline-block">Tax(10%)</span> 
                                 <span className=" text-sm font-light text-[#8C93A3] inline-block">${percentage.toFixed(2)}</span> 
                                 </div>
                              
                              </div>
                              
                              <div className="w-full border-[#8C93A3] flex flex-col gap-4 pt-4 border-t-[1px] border-dashed">
                                 <div className="flex justify-between w-full">
                                    <span className=" text-sm font-light text-navy inline-block">Grand Total</span> 
                                    <span className="inline-block text-md text-navy font-bold">${grandTotal.toFixed(2)}</span>
                                 </div>
                                 <Link to={"/checkout"} className=" h-10 cursor-pointer transition-all no-underline  flex bg-[#20232D] justify-center items-center text-white text-sm bg-">
                                    Checkout now
                                 </Link>
                              </div>
                        </div>

                   </div>
                 )


 }



            <NewsLetter />

    </div>


 
  )
}

export default CartPage