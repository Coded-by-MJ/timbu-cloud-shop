import QtyControl from "./QtyControl"
import RemoveFromCartIcon from "./RemoveFromCartIcon"
import { useDispatch } from "react-redux"
import { removeItemFromCart } from "../features/cart/cartSlice"
import { alertShow } from "../features/actions/actionsSlice"
import { memo, useCallback } from "react"


const CartCard = ({qtyBought, _id, name, imagePath, price}) => {

  const dispatch = useDispatch()

  const handleRemoveCartItem = useCallback(() => {
    dispatch(removeItemFromCart(_id))
    dispatch(alertShow(`${name} has been removed from cart`))

  },[_id, dispatch, name])



  return (
    <div className="flex gap-6 items-center w-full pr-4">
        <img src={imagePath} alt={name} className="object-cover flex-shrink-0 w-[169px] lg:w-[210px]  lg:h-[240px]  h-[207px]" />


          <div className="flex gap-6 flex-col w-full">
              <div className="flex flex-col gap-[12px]">
              <div className="flex justify-between items-center w-full">
                <span className="text-navy font-bold text-md inline-block">{name}</span>  
               <span className="inline-block text-md font-bold text-navy">${price}</span>
             </div>
              <span className="lg:text-md text-sm text-[#8C93A3]">XXL</span>
             </div>
               
                <div className="flex justify-between">
                     <QtyControl  qtyBought={qtyBought} id={_id} />
                     <RemoveFromCartIcon onClick={handleRemoveCartItem} />
                </div>
          </div>
        
    </div>
  )
}

export default memo(CartCard)