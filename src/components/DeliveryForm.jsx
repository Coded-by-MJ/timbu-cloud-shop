import React from 'react';

const DeliveryForm = React.forwardRef((props, ref) => {
  const { formData, onChange, onSubmit } = props;

  return (
    <div className='xl:h-[455px] flex flex-col gap-8  xl:p-8 xl:border-[1px] border-[#CDD0D5] xl:row-start-2 xl:row-end-3'>
      <h2 className="text-md font-bold text-navy">Delivery Information</h2>
      <form ref={ref} onSubmit={onSubmit} className='flex flex-col gap-[20px]' >
          <div className='gap-8 flex flex-col xl:flex-row xl:justify-between'>
           <div className='w-full flex flex-col gap-2 xl:w-[310px]'>
            <label htmlFor='firstName' className='text-black font-light text-sm'>First Name</label>
             <input autoComplete='given-name' type="text" id='firstName'
              name='firstName' value={formData.firstName} onChange={onChange}
               className='w-full bg-white h-10 outline-0 p-[10px] text-[#868C98] text-sm'
               required
               
             />
           </div>

           <div className='w-full xl:w-[310px] flex flex-col gap-2'>
            <label htmlFor='lastName' className='text-black font-light text-sm'>Last Name</label>
             <input autoComplete='family-name' type="text"
               className='w-full h-10 outline-0 p-[10px] text-[#868C98] text-sm bg-white'
               id='lastName' name='lastName' value={formData.lastName} onChange={onChange}
               required
             />
           </div>

           </div>


           <div className='w-full flex flex-col gap-2'>
            <label htmlFor='address' className='text-black font-light text-sm'>Address</label>
             <input autoComplete='street-address' type="text"
               className='w-full bg-white h-10 outline-0 p-[10px] text-[#868C98] text-sm '
               id='address' name='address' value={formData.address} onChange={onChange}
             />
           </div>


            <div className='gap-8 flex flex-col xl:flex-row xl:justify-between'>
            <div className='w-full flex flex-col gap-2 xl:w-[310px]'>
            <label htmlFor='city' className='text-black font-light text-sm'>City/Town</label>
             <input autoComplete='address-level2' type="text"
               className='w-full bg-white h-10 outline-0 p-[10px] text-[#868C98] text-sm '
               id='city' name='city' value={formData.city} onChange={onChange}
             />
           </div>
           
           <div className='w-full flex flex-col gap-2 xl:w-[310px]'>
            <label htmlFor='zipcode' className='text-black font-light text-sm'>Zip code</label>
             <input autoComplete='postal-code' type="number"
               className='w-full bg-white hide-spinner h-10 outline-0 p-[10px] text-[#868C98] text-sm '
               id='zipcode' name='zipcode' value={formData.zipcode} onChange={onChange}
             />
           </div>
           </div>
           
           <div className='gap-8 flex flex-col xl:flex-row xl:justify-between'>
           <div className='w-full flex flex-col gap-2 xl:w-[310px]'>
            <label htmlFor='tel' className='text-black font-light text-sm'>Mobile Number</label>
             <input autoComplete='tel' type="tel"
               className='w-full h-10 outline-0 p-[10px] text-[#868C98] text-sm bg-white'
               id='tel' name='tel' value={formData.tel} onChange={onChange}
             />
             
           </div>
           
           <div className='w-full flex flex-col gap-2 xl:w-[310px]'>
            <label htmlFor='email' className='text-black font-light text-sm'>Email Address</label>
             <input autoComplete='email' type="email"
               className='w-full h-10 outline-0 p-[10px] text-[#868C98] text-sm bg-white'
               id='email' name='email' value={formData.email} onChange={onChange}
             />
           </div>

           </div >
         
      </form>
    </div>
  );
});


DeliveryForm.displayName = 'DeliveryForm';



export default DeliveryForm;

