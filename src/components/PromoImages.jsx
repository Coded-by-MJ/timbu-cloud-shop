import mobilebg from "../assets/mobilebg.svg"
import desktopbg from "../assets/desktopbg.svg"
import mobilebrands from "../assets/mobilebrands.svg"
import desktopbrands from "../assets/desktopbrands.svg"




export const PromoImages = () => {
  return (
    <>
       <img src={mobilebg} alt="promotional image" title="promotional image" className="w-full lg:hidden h-auto object-cover" />
                    
      <img src={desktopbg} alt="promotional image" title="promotional image" className="w-auto hidden lg:block h-auto object-cover" />
    </>
  )
}

export const BrandImages = () => {
  return (
      <>
       <img src={mobilebrands} alt="our trusted brands logos" className="w-full lg:hidden h-auto object-cover" />
                    
        <img src={desktopbrands} alt="our trusted brands logos"  className="w-full hidden lg:block h-auto object-cover" />
      
      </>
  )
}
