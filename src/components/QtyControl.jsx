import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty } from "../features/cart/cartSlice";


const QtyControl = ({qtyBought, id}) => {


  const dispatch = useDispatch();



  return (
    <div className="flex  cursor-pointer w-[106px] items-center bg-white h-10 p-[4px] gap-1.5">
        <button 
           onClick={() => dispatch(decreaseQty(id))}
          disabled={qtyBought === 1}
         className="text-md size-6 bg-transparent text-navy disabled:text-[#CACDD5] flex justify-center items-center">
            -
        </button>
           <span className="flex bg-transparent w-[38px] h-[20px] justify-center items-center text-sm">
               {qtyBought}
           </span>
        <button 
         onClick={() => dispatch(increaseQty(id))}
        className="text-md size-6 bg-transparent text-navy flex justify-center items-center">
             +
        </button> 

        
    </div>
  )
}

export default QtyControl