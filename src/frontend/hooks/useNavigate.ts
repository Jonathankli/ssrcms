import { useContext } from "react"
import { PageContext } from "../PageContainer"

const useNavigate = () => {
    const { navigate } = useContext(PageContext);
    return navigate;
}

export default useNavigate;