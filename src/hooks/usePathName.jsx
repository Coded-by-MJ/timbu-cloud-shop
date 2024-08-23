import { useLocation } from "@tanstack/react-router"
import { useState, useEffect } from "react"

export const usePathName = () => {

    const [currentPathName, setCurrentPathName] = useState('')

    const { pathname } = useLocation()




    useEffect(() => {
     const updatePathName = () => {
         switch(pathname) {
           case "/":
             return setCurrentPathName('Store Front'); 
           case "/cart":
             return setCurrentPathName('Cart');    
           case "/checkout":
             return setCurrentPathName('Checkout');
            default:
              return setCurrentPathName('');
         }
       }
        updatePathName();
       },[pathname])


       return { currentPathName }
        
}
