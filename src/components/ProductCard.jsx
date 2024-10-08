import { addToCart, removeItemFromCart, decreaseQty, increaseQty } from "../features/cart/cartSlice"
import { alertShow } from "../features/actions/actionsSlice"
import MobileAddToCart from "./MobileAddToCart"
import RemoveFromCartIcon from "./RemoveFromCartIcon"

import { useDispatch } from "react-redux"
import { memo, useCallback } from "react"


const ProductCard = ({_id, qtyBought, price, imagePath, name, description}) => {

   const dispatch = useDispatch()



  const handleAddToCart = () => {
    dispatch(addToCart(_id))
    dispatch(alertShow(`${name} has been added to cart`))

  }


 const handleAddToCartMobile = useCallback(() => {
    if(qtyBought > 0) {
      dispatch(removeItemFromCart(_id))
      dispatch(alertShow(`${name} has been removed from cart`))
    }else{
      dispatch(addToCart(_id))
      dispatch(alertShow(`${name} has been added to cart`))
    }
    
  },[_id, name, qtyBought])

  const handleRemoveCartItem = useCallback(() => {
    dispatch(removeItemFromCart(_id))
    dispatch(alertShow(`${name} has been removed from cart`))

  },[_id, name])


  const handleDecreaseQty = () => {
    dispatch(decreaseQty(_id))
  }
  
  const handleIncreaseQty = () => {
    dispatch(increaseQty(_id))
  }




  return (
    <div 
    className="flex flex-col justify-between gap-4 hover:shadow-inner  transition-all   w-full" >
      
           <img src={imagePath} alt={name} 
           className="md:h-[540px] h-[207px] object-cover w-full " loading="lazy" />
        

        <div className="w-full flex justify-between items-end">
            <div className="gap-2 flex flex-col flex-grow overflow-hidden">
                <h3 className="font-bold text-navy text-sm lg:text-md">{name}</h3>
                <p className="md:text-sm whitespace-nowrap max-w-[303px] overflow-hidden md:whitespace-normal text-[12px] font-light  text-[#525C76] text-ellipsis">
                    {description}
                </p>
                <span className="font-bold inline-block text-navy text-sm lg:text-md">${price}</span>
            </div>
                
                
                  <div className="md:hidden">
                     <MobileAddToCart onClick={handleAddToCartMobile} qtyBought={qtyBought} />
                  </div>
                  {  qtyBought === 0
                       
                       ?  (  <button 
                              onClick={handleAddToCart}
                               className="p-[8px] hover:bg-[#525C76] transition-all cursor-pointer hidden text-sm text-white w-[96px] items-center md:flex justify-center h-10 bg-[#20232D]">
                                    Add to Cart
                              </button>

                           )

                         :  (
                            <div className="hidden md:flex flex-col gap-[4px]">
                                <RemoveFromCartIcon onClick={handleRemoveCartItem}  />
                                <div className="flex cursor-pointer w-[106px] items-center bg-white h-10 p-[4px] gap-1.5">
                                              <button 
                                                onClick={handleDecreaseQty}
                                                disabled={qtyBought === 1}
                                              className="text-md size-6 bg-transparent text-navy disabled:text-[#CACDD5] flex justify-center items-center">
                                                  -
                                              </button>
                                                <span className="flex bg-transparent w-[38px] h-[20px] justify-center items-center text-sm">
                                                    {qtyBought}
                                                </span>
                                              <button 
                                              onClick={handleIncreaseQty}
                                              className="text-md size-6 bg-transparent text-navy flex justify-center items-center">
                                                  +
                                              </button> 

                                   </div>
                           </div>
                          )


                  }
                    
                

        </div>

    </div>
  )
}




export default memo(ProductCard)