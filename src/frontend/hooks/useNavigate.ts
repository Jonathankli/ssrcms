import { useContext } from "react"
import { PageContext } from "../PageContainer"
import { PageContext as PageContextCsr } from "../PageContainerCrs"

const useNavigate = () => {
    
    const { navigate } = useContext(typeof location != "undefined" && location.pathname.startsWith("/csr") ? PageContextCsr : PageContext);
    return navigate;
}

export default useNavigate;