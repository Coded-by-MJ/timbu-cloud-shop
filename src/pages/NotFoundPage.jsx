import { Link } from "@tanstack/react-router"



const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-[60px] stroke-yellow-400">
       <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>

    <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
    <p className="text-xl mb-5">This page does not exist</p>
    <Link
      to="/"
      className="text-white bg-navy cursor-pointer rounded-md px-3 py-2 mt-4"
      >Go Back
      </Link>
    
     </section>
  )
}

export default NotFoundPage