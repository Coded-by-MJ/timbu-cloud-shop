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





  return (
        <RouterProvider router={router} />
  )
}

export default App
