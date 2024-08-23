import { useRef, useState } from "react"
import BreadCrumbs from "../components/BreadCrumbs"
import NewsLetter from "../components/NewsLetter"
import DeliveryForm from "../components/DeliveryForm"
import PaymentInfo from "../components/PaymentInfo"
import OrderCard from "../components/OrderCard"
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { showSuccessModal } from "../features/actions/actionsSlice"

const CheckoutPage = () => {

  const { inCart, total  } = useSelector((store) => store.cart)
  const dispatch = useDispatch()


  let percentage = (total * 10) / 100;
  let grandTotal = total + percentage;


   const [formData, setFormData] = useState({
         firstName: "",
         lastName: "", 
         address: "",
         city: "",
         zipcode: "",
         tel: '',
         email: "",
   })

   const formRef = useRef(null)


   const onChange = (e) => {
       setFormData({
          ...formData,
          [e.target.name] : e.target.value,
       })
   }


   const handleFormSubmit = (event) => {
    event.preventDefault();

    setFormData({
       ...formData,
        firstName: "",
        lastName: "", 
        address: "",
        city: "",
        zipcode: "",
        number: '',
        email: "",
  })
    
};

const triggerFormSubmit = () => {
  if (formRef.current) {
    // Check form validity
    if (formRef.current.checkValidity()) {
      // If valid, submit the form
      formRef.current.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true })
      );
      // Dispatch success modal and clear cart
      dispatch(showSuccessModal());
      dispatch(clearCart());
    } else {
      // If invalid, report validation errors
      formRef.current.reportValidity();
    }
  }
};











  return (
    <div className="px-4 mt-5 flex-col flex gap-5" >
        <BreadCrumbs />
          <div className="w-full xl:h-[942px] gap-8 grid grid-cols-1 xl:grid-cols-[auto_1fr] xl:grid-rows-2 mb-12">
             {/*order summary*/}
            <div className="flex w-full lg:row-start-1 lg:row-end-2  flex-col gap-8 lg:p-8 lg:border-[1px] border-[#CDD0D5]">
               <h2 className="flex items-center gap-2 font-bold w-full text-xl text-navy">Order Summary
                 <span className="inline-flex  items-center justify-center font-light text-sm size-6 rounded-full bg-navy text-white">
                   {inCart.length}
                 </span>
               </h2>
                
                  <div className=" xl:col-start-2 xl:col-end-3 scrollbar-thin scrollbar-track-[#B2B7C2] scrollbar-thumb-navy divide-y-[1px] divide-[#B2B7C2] py-2 flex flex-col gap-6 w-full max-h-[542px] overflow-y-auto">
                               {
                                  inCart.map((order) => (
                                     <OrderCard key={order._id} {...order} />
                                  ))
                               }
                  </div>

            </div>

             <DeliveryForm onChange={onChange} ref={formRef} formData={formData} onSubmit={handleFormSubmit} />

             <PaymentInfo subTotal={total} grandTotal={grandTotal} percentage={percentage}  submitOrder={triggerFormSubmit}/>

          </div>


          <NewsLetter />
    </div>
  )
}

export default CheckoutPage