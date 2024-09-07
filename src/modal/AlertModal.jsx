import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { alertHide } from "../features/actions/actionsSlice";

const AlertModal = () => {
  const { alert } = useSelector((store) => store.actions);
  const dispatch = useDispatch();

  useEffect(() => {
    const delay = setTimeout(() => dispatch(alertHide()), 2000);

    return () => clearTimeout(delay);
  }, [dispatch]);

  return (
    <div
      className={`animate-notifyIn -translate-y-[100%] opacity-0
     transition-all duration-500  top-0 w-full z-50  h-8 max-w-[400px] py-[8px] px-4 gap-[8px] items-center bg-[#C2D6FF] left-1/2 -translate-x-1/2  fixed inline-flex `}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 14C4.6862 14 2 11.3138 2 8C2 4.6862 4.6862 2 8 2C11.3138 2 14 4.6862 14 8C14 11.3138 11.3138 14 8 14ZM7.4 7.4V11H8.6V7.4H7.4ZM7.4 5V6.2H8.6V5H7.4Z"
          fill="#162664"
        />
      </svg>
      <span className="text-[#162664] text-sm font-light ">{alert.text}</span>
    </div>
  );
};

export default AlertModal;
