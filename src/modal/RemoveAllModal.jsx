import { useDispatch } from "react-redux"
import { hideRemoveAllModal } from "../features/actions/actionsSlice"
import { clearCart } from "../features/cart/cartSlice"

const RemoveAllModal = () => {

      const dispatch = useDispatch()



      const removeAll = () => {
         dispatch(clearCart())
         dispatch(hideRemoveAllModal())
      }




  return (
    <div className={`animate-alertIn -translate-y-[200%] -translate-x-1/2 w-full opacity-0 flex transition-all  fixed justify-center top-0 left-1/2 min-h-screen bg-transparent`}>
          <div className={` inline-flex items-start justify-between p-6 w-[335px] h-[200px] mt-36 bg-white rounded-md`}>
                   <div className="flex flex-col w-[240px] h-[141px] items-center justify-between">
                         <div className="flex gap-2.5 flex-col items-center">
                             <h2 className="text-navy text-center font-bold text-md">Remove All Items From Cart</h2>
                             <p className="text-balance text-center text-sm text-[#8C93A3]">
                                Are you sure you want to remove all items from your cart?
                             </p>

                             
                         </div>
                         <button
                          onClick={removeAll}
                         className="w-full h-[41px] bg-black flex justify-center gap-2 items-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.5 6.6H21V8.4H19.2V20.1C19.2 20.3387 19.1052 20.5676 18.9364 20.7364C18.7676 20.9052 18.5387 21 18.3 21H5.7C5.46131 21 5.23239 20.9052 5.0636 20.7364C4.89482 20.5676 4.8 20.3387 4.8 20.1V8.4H3V6.6H7.5V3.9C7.5 3.66131 7.59482 3.43239 7.7636 3.2636C7.93239 3.09482 8.1613 3 8.4 3H15.6C15.8387 3 16.0676 3.09482 16.2364 3.2636C16.4052 3.43239 16.5 3.66131 16.5 3.9V6.6ZM17.4 8.4H6.6V19.2H17.4V8.4ZM13.2726 13.8L14.8638 15.3912L13.5912 16.6638L12 15.0726L10.4088 16.6638L9.1362 15.3912L10.7274 13.8L9.1362 12.2088L10.4088 10.9362L12 12.5274L13.5912 10.9362L14.8638 12.2088L13.2726 13.8ZM9.3 4.8V6.6H14.7V4.8H9.3Z" fill="#ffffff"/>
                              </svg>
                                <span className="text-sm text-white">Remove all</span>
                         </button>
                   </div>
                   <button className="cursor-pointer size-6 flex justify-center items-center"
                   
                    onClick={() => dispatch(hideRemoveAllModal())}
                   >
                     <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0001 8.93951L13.7126 5.22701L14.7731 6.28751L11.0606 10L14.7731 13.7125L13.7126 14.773L10.0001 11.0605L6.28755 14.773L5.22705 13.7125L8.93955 10L5.22705 6.28751L6.28755 5.22701L10.0001 8.93951Z" fill="#000"/>
                     </svg>

                   </button>
          </div>
        
    </div>
  )
}

export default RemoveAllModal