import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title =`${title} | Toy Stacks`;
    },[title])
}

export default useTitle;