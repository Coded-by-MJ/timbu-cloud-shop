import { addToCart, removeItemFromCart } from "../features/cart/cartSlice"
import { alertShow } from "../features/actions/actionsSlice"
import MobileAddToCart from "./MobileAddToCart"
import QtyControl from "./QtyControl"
import RemoveFromCartIcon from "./RemoveFromCartIcon"
import { useDispatch } from "react-redux"
import { memo, useCallback } from "react"


const ProductCard = ({_id, qtyBought, price, imagePath, name, description}) => {


  // const imageUrl = `${import.meta.env.VITE_API_MEDIA}${(image[0])}?key=${import.meta.env.VITE_IMG_KEY}`

   const dispatch = useDispatch()


  


  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(_id))
    dispatch(alertShow(`${name} has been added to cart`))

  },[_id, name, dispatch])  
  
  const handleRemoveCartItem = useCallback(() => {
    dispatch(removeItemFromCart(_id))
    dispatch(alertShow(`${name} has been removed from cart`))

  },[_id, name, dispatch])

 const handleAddToCartMobile = useCallback(() => {
    if(qtyBought > 0) {
      dispatch(removeItemFromCart(_id))
      dispatch(alertShow(`${name} has been removed from cart`))
    }else{
      dispatch(addToCart(_id))
      dispatch(alertShow(`${name} has been added to cart`))
    }
    
  },[_id, name, dispatch, qtyBought])






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
                                  <QtyControl id={_id} qtyBought={qtyBought} />
                           </div>
                          )


                  }
                    
                

        </div>

    </div>
  )
}

export default memo(ProductCard)