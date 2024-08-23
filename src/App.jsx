import {
  createRouter,
  createRoute,
  createRootRoute,
  RouterProvider,
} from "@tanstack/react-router"
import MainLayout from "./layout/MainLayout"
import NotFoundPage from "./pages/NotFoundPage"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import { useEffect } from "react"
import { getProducts } from "./features/cart/cartSlice"
import { calculateTotal } from "./features/cart/cartSlice"
import { useSelector, useDispatch } from "react-redux"





function App() {
 
  const rootRoute = createRootRoute({
     component: MainLayout,
  })

  const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage
  }) 
  const cartRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/cart',
    component: CartPage
  }) 
  const checkoutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/checkout',
    component: CheckoutPage
  })  
  
  






  const routeTree = rootRoute.addChildren([
    homeRoute, cartRoute, checkoutRoute

  ])





  const router = createRouter({ routeTree,
    defaultNotFoundComponent: NotFoundPage
  })


  const { products } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    const cacheProducts = async () => {
      if(products.length > 1){
            await  new Promise((resolve) => setTimeout(resolve, 10 * 60 * 1000))
            dispatch(getProducts())
        
     }else{
       dispatch(getProducts())
     }
    }

    cacheProducts()
  },[products.length])


  useEffect(() => {
    dispatch(calculateTotal())
},[products])



  return (
        <RouterProvider router={router} />
  )
}

export default App
