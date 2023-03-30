import{useEffect, useState} from "react"

export default function useDebounce(value, time = 200){
    let timeout

    const [debounced, setDebounced] = useState("")

    useEffect(()=>{

        timeout = setTimeout(()=>{
            setDebounced(value)
        }, time)

        ()=>clearTimeout(timeout)
    }, [value, time])


    return debounced
}