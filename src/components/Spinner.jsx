import { MoonLoader } from "react-spinners"

const override = {
    display: "block",
    margin: "100px auto"
}
const Spinner = ({isLoading}) => {
  return (
   <MoonLoader 
    loading={isLoading}
    cssOverride={override}
    size={120}
    color="#0f1d40"
    />
)
}

export default Spinner