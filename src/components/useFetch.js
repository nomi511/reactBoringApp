import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [load, loading] = useState(true);
    const [err, error] = useState(null);


    useEffect( () => {

        fetch(url)
        .then ( res => {
            if(!res.ok)
            {
                throw Error ("Unexpected Error")
            }

            return res.json();
        }).then( val => {
            setdata(val)
            loading(false)
            error(null)
         }).catch(err => {
             error(err)
             loading(false)
         })


    }, [url] )



    return {data, load, err};
}
 
export default useFetch;