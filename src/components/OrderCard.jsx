
const OrderCard = ({name, imagePath, qtyBought, price}) => {


    let totalPrice = price * qtyBought;


  return (
    <div  className="flex gap-6 items-center w-full pr-4">
         <img src={imagePath} alt={name} className="h-[106px] flex-shrink-0 object-cover w-[92px]" /> 

           <div className="w-full flex flex-col xl:flex-row gap-4 xl:justify-between xl:items-center">
                       <div className="flex flex-col gap-3">
                          <h3 className="inline-block text-navy font-bold text-md">{name}</h3>
                          <div className="inline-flex gap-3">
                             <span className="inline-block text-[#8C93A3] text-sm">XXL</span>
                             <span className="inline-block text-[#8C93A3] text-sm">QTY {qtyBought}</span>
                          </div>
                        </div> 
                    
                     <span className="text-md xl:text-[18px]  text-navy ">${totalPrice.toFixed(2)}</span>
           </div>

        
    </div>
  )
}

export default OrderCard