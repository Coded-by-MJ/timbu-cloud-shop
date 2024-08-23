import AtmIcon from "./AtmIcon"


const PaymentInfo = ({submitOrder, percentage, subTotal, grandTotal}) => {



  return (
    <div className="xl:row-span-full col-start-1 xl:w-[424px] flex flex-col gap-8 xl:p-8 xl:border-[1px] border-[#CDD0D5]">
           <h2 className="text-md font-bold text-navy">Payment Information</h2>

           <div className="flex flex-col gap-8">

            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                    <span className="text-sm font-light text-navy">Pay With</span>

                    <div className="flex flex-col gap-4">
                    <div className="inline-flex gap-2">
                        <input type="radio" name="card" id="debit" readOnly checked className="accent-blue-600 cursor-not-allowed"/>
                        <label htmlFor="debit"className="text-sm font-light text-navy" >Debit / Credit Card</label>
                    </div>
                    <div className="inline-flex gap-2">
                        <input type="radio" name="card" id="delivery" readOnly  className="accent-blue-600 cursor-not-allowed"/>
                        <label htmlFor="delivery" className="text-sm font-light text-navy" >Pay on delivery</label>
                    </div>
                  </div>
                </div>


                <div className="flex flex-col gap-5">
                    <span className="text-sm font-light text-navy">Enter Card Information</span>

                    <div className="w-full gap-2 flex flex-col">
                        <label htmlFor="cardHolder" className=" text-sm font-light text-navy">
                            Card holder&apos;s name
                        </label>
                        <input type="text" id="cardHolder" name="cardHolder" readOnly 
                         className="h-10 bg-white outline-0 text-sm p-[10px] cursor-not-allowed"
                         placeholder="John Doe"
                        />
                    </div>  
                    
                     <div className="w-full flex flex-col gap-2 ">
                        <label htmlFor="cardNumber" className=" text-sm font-light text-navy">
                            Card Number
                        </label>
                        <div className="h-10 bg-white w-full flex justify-between items-center p-[10px] cursor-not-allowed">
                         <input type="number" id="cardNumber" name="cardNumber" readOnly 
                          placeholder="5061 2345 6789 1234"
                         className="hide-spinner bg-transparent w-full outline-0 text-sm"
                        />
                              <AtmIcon />

                        </div>
                       
                    </div>

                    <div className="flex justify-between items-center">
                           
                        <div className="w-[157px] flex flex-col gap-2 ">
                            <label htmlFor="expiry" className="text-sm font-light text-navy">
                                Expiry Date
                            </label>
                            <div className="h-10 bg-white w-full flex justify-between items-center p-[10px] cursor-not-allowed">
                            <input type="number" id="expiry" name="expiry" readOnly 
                            placeholder="04/2026"
                            className="hide-spinner bg-transparent w-full outline-0 text-sm"
                            />
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M14.25 3.25H17.25C17.4489 3.25 17.6397 3.32902 17.7803 3.46967C17.921 3.61032 18 3.80109 18 4V16C18 16.1989 17.921 16.3897 17.7803 16.5303C17.6397 16.671 17.4489 16.75 17.25 16.75H3.75C3.55109 16.75 3.36032 16.671 3.21967 16.5303C3.07902 16.3897 3 16.1989 3 16V4C3 3.80109 3.07902 3.61032 3.21967 3.46967C3.36032 3.32902 3.55109 3.25 3.75 3.25H6.75V1.75H8.25V3.25H12.75V1.75H14.25V3.25ZM12.75 4.75H8.25V6.25H6.75V4.75H4.5V7.75H16.5V4.75H14.25V6.25H12.75V4.75ZM16.5 9.25H4.5V15.25H16.5V9.25Z" fill="#868C98"/>
                                 </svg>


                            </div>
                        
                        </div>
                        
                        <div className="w-[157px] flex flex-col gap-2 ">
                            <label htmlFor="cvv" className="text-sm font-light text-navy">
                                CVV
                            </label>
                            <div className="h-10 bg-white w-full flex justify-between items-center p-[10px] cursor-not-allowed">
                            <input type="number" id="cvv" name="cvv" readOnly 
                             placeholder="208"
                            className="hide-spinner bg-transparent w-full outline-0 text-sm"
                            />
                                 <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M14.25 3.25H17.25C17.4489 3.25 17.6397 3.32902 17.7803 3.46967C17.921 3.61032 18 3.80109 18 4V16C18 16.1989 17.921 16.3897 17.7803 16.5303C17.6397 16.671 17.4489 16.75 17.25 16.75H3.75C3.55109 16.75 3.36032 16.671 3.21967 16.5303C3.07902 16.3897 3 16.1989 3 16V4C3 3.80109 3.07902 3.61032 3.21967 3.46967C3.36032 3.32902 3.55109 3.25 3.75 3.25H6.75V1.75H8.25V3.25H12.75V1.75H14.25V3.25ZM12.75 4.75H8.25V6.25H6.75V4.75H4.5V7.75H16.5V4.75H14.25V6.25H12.75V4.75ZM16.5 9.25H4.5V15.25H16.5V9.25Z" fill="#868C98"/>
                                 </svg>


                            </div>
                        
                        </div>
                       
                    </div>

                </div>


                <div className="flex gap-6 flex-col w-full ">
                   <div className="w-full flex gap-4 py-4 flex-col border-[#B2B7C2]/20 border-y-[1px] ">
                       <div className="flex justify-between w-full">
                        <span className=" text-sm font-light text-navy inline-block">Subtotal</span> 
                         <span className="inline-block text-sm text-navy font-light">${subTotal.toFixed(2)}</span>
                      </div> 

                       <div className="flex justify-between w-full">
                       <span className=" text-sm text-navy font-light inline-block">Tax (10%)</span> 
                       <span className=" text-sm text-navy font-light inline-block">${percentage.toFixed(2)}</span> 
                       </div> 
                       
                       <div className="flex justify-between w-full">
                       <span className=" text-sm text-navy font-light inline-block">Shipping</span> 
                       <span className=" text-sm text-navy font-light inline-block">$0</span> 
                       </div>
                    
                   </div>
                   
                   
                      <div className="flex justify-between w-full">
                         <span className="text-[18px] text-navy font-normal inline-block">Total</span> 
                         <span className="inline-block text-[18px] text-navy font-normal">${grandTotal.toFixed(2)}</span>
                      </div>
                 
                
              </div>

            </div>


            <button className="text-white text-sm h-12 bg-[#20232D] p-[10px] flex items-center justify-center" 
             onClick={submitOrder}
            >
                Pay ${Math.round(grandTotal)}
            </button>
           </div>
    </div>
  )
}

export default PaymentInfo