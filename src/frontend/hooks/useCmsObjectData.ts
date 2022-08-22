import { useContext } from "react"
import { PageContext } from "../PageContainer"

const useCmsObjectData = (id: string) => {
    const { data } = useContext(PageContext);
    return data[id] || {};
}

export default useCmsObjectData;