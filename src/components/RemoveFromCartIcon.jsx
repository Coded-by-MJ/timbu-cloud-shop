

const RemoveFromCartIcon = ({ onClick }) => {



  return (

    <button 
     onClick={onClick}
      className='bg-transparent cursor-pointer w-[44px] h-10 flex items-center justify-center self-end'>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16.5 6.6H21V8.4H19.2V20.1C19.2 20.3387 19.1052 20.5676 18.9364 20.7364C18.7676 20.9052 18.5387 21 18.3 21H5.7C5.46131 21 5.23239 20.9052 5.0636 20.7364C4.89482 20.5676 4.8 20.3387 4.8 20.1V8.4H3V6.6H7.5V3.9C7.5 3.66131 7.59482 3.43239 7.7636 3.2636C7.93239 3.09482 8.1613 3 8.4 3H15.6C15.8387 3 16.0676 3.09482 16.2364 3.2636C16.4052 3.43239 16.5 3.66131 16.5 3.9V6.6ZM17.4 8.4H6.6V19.2H17.4V8.4ZM13.2726 13.8L14.8638 15.3912L13.5912 16.6638L12 15.0726L10.4088 16.6638L9.1362 15.3912L10.7274 13.8L9.1362 12.2088L10.4088 10.9362L12 12.5274L13.5912 10.9362L14.8638 12.2088L13.2726 13.8ZM9.3 4.8V6.6H14.7V4.8H9.3Z" fill="#20232D"/>
              </svg>
     </button>
  )
}

export default RemoveFromCartIcon