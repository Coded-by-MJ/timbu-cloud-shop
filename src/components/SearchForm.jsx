import { useSelector, useDispatch } from "react-redux";
import { toggleIsOpen, updateSearch } from "../features/actions/actionsSlice";
import { useNavigate } from "@tanstack/react-router";

const SearchForm = () => {
 
   const mediaQuery = window.matchMedia('(max-width: 1024px)');


   const { searchValue } = useSelector((store) => store.actions);
   const { products } = useSelector((store) => store.cart);

   const dispatch = useDispatch();
   const navigate = useNavigate();


  


   const onSubmit = (e) => {
       e.preventDefault();

       if(searchValue.length < 1) return;

       navigate({
         to: '/',
         search: { search: searchValue }, 
       });

       dispatch(updateSearch(''))
       mediaQuery.matches && dispatch(toggleIsOpen()) 

   }
   

   




    return (
       <form className="w-full lg:w-[250px] cursor-pointer  bg-white h-10 p-2 flex items-center gap-2"
         onSubmit={onSubmit}
       >
  
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5232 13.4627L17.7355 16.6742L16.6742 17.7355L13.4627 14.5232C12.2678 15.4812 10.7815 16.0022 9.25 16C5.524 16 2.5 12.976 2.5 9.25C2.5 5.524 5.524 2.5 9.25 2.5C12.976 2.5 16 5.524 16 9.25C16.0022 10.7815 15.4812 12.2678 14.5232 13.4627ZM13.0187 12.9062C13.9706 11.9274 14.5021 10.6153 14.5 9.25C14.5 6.349 12.1502 4 9.25 4C6.349 4 4 6.349 4 9.25C4 12.1502 6.349 14.5 9.25 14.5C10.6153 14.5021 11.9274 13.9706 12.9062 13.0187L13.0187 12.9062V12.9062Z" fill="#525866" className="lg:fill-[#868C98]"/>
          </svg>
  
          <input 
           type="text"
           value={searchValue}
           name="search"
           placeholder="Search"
           onChange={(e) => dispatch(updateSearch(e.target.value))}
           className="border-none focus:outline-0 outline-0 h-5 w-full bg-transparent flex-grow lg:text-[#868C98] text-[#525866] font-light text-sm"
          />

          
         
       </form>
    )
  }



  export default SearchForm