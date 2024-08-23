import { Outlet } from "@tanstack/react-router"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import AlertModal from "../modal/AlertModal"
import RemoveAllModal from "../modal/RemoveAllModal"
import SuccessModal from "../modal/SuccessModal"
import { useSelector } from "react-redux"


const MainLayout = () => {



  const { alert, removeAllModal, successModal } = useSelector((store) => store.actions)


 


  return (
    <>
     <NavBar />
     <Outlet />   
     <Footer />
    { alert.show &&  <AlertModal />} 
    { removeAllModal && <RemoveAllModal /> } 
    { successModal && <SuccessModal />}
    </>
  )
}

export default MainLayout