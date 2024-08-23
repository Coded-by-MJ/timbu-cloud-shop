import { useLocation, Link } from "@tanstack/react-router";


const BreadCrumbs = () => {

    let jsx;
    
    const {pathname, maskedLocation} = useLocation();
 

    


   switch (true) {
     case pathname === "/":

       jsx = (
         <>
           <span className='text-[#CDD0D5] inline-block  text-center size-[20px] text-sm '>/</span> 
           <Link to={'/'} className='text-[#0A0D14] cursor-pointer'>Store Front</Link>
         </>
       );
       break;
 
     case pathname === "/cart":
       jsx = (
         <>
           <span className='text-[#CDD0D5] inline-block  text-center size-[20px] text-sm'>/</span> 
           <Link to='/' className='text-[#525866] cursor-pointer'>Store Front</Link>
           <span className='text-[#CDD0D5] inline-block  text-center size-[20px] text-sm'>/</span> 
           <p className='text-[#0A0D14] cursor-pointer'>Cart</p>
         </>
       );
       break;
 
     case pathname === "/checkout":
       jsx = (
         <>
           <span className='text-[#CDD0D5] inline-block  text-center size-[20px] text-sm'>/</span> 
           <Link to='/' className='text-[#525866] cursor-pointer'>Store Front</Link>
           <span className='text-[#CDD0D5] inline-block  text-center size-[20px] text-sm'>/</span> 
           <Link to='/cart' className='text-[#525866] cursor-pointer'>Cart</Link>
           <span className='text-[#CDD0D5] inline-block  text-center size-[20px] text-sm'>/</span> 
           <p className='text-[#0A0D14] cursor-pointer'>Checkout</p>
         </>
       );
       break;
       case /^\/[a-zA-Z0-9-]+$/.test(pathname): // Matches /product-name or any /:id
       jsx = (
         <>
           <span className='text-[#CDD0D5] inline-block text-center size-[20px] text-sm'>/</span> 
           <Link to='/' className='text-[#525866] cursor-pointer'>Store Front</Link>
           <span className='text-[#CDD0D5] inline-block text-center size-[20px] text-sm'>/</span> 
           <p className='text-[#0A0D14] capitalize cursor-pointer'>{maskedLocation?.pathname.split("/").pop().replace(/[0-9%]/g, ' ')}</p>
         </>
       );
       break;
       
     default:
       jsx = '';
   }





  return (
    <nav className='flex gap-[6px] h-[20px] items-center'>
       {jsx}
    </nav>
  )
}

export default BreadCrumbs