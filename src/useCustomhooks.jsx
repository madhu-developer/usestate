import {useEffect} from 'react'

const useCustomhooks = (count) => {
    useEffect(()=>{
        document.title=`count - ${count}`
    },[count])
}

export default useCustomhooks





