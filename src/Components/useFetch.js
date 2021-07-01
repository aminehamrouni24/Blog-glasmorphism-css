import {useState ,useEffect} from 'react';

const useFecth =(url)=>{
    const [data,setData]=useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //cleanup the useeffect
        const abortCont= new AbortController();
        setTimeout(() => {
            fetch(url, {signal:abortCont.signal})
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
                setData(data)
                setLoading(false)
            })
            .catch((err)=>{
                console.log(err)
            })
            
        },1000);

     return ()=>abortCont.abort();
    }, [url])
    return {data , loading}
}
export default useFecth;