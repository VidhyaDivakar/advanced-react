import { useEffect, useState } from "react";

export const useFetch = <T,> (url: string) => {
    const [data, setData] = useState<T | null> (null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
// costom hook to handle API call, loading, error, date
    useEffect (() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error("Something went wrong");
                }
               const result = await response.json();
               setData(result); 
            } catch (err){
               if (err instanceof Error) {
          setError(err.message);
        }
            }finally {
                setLoading(false);
            }
        };
        fetchData(); 
    }, [url]);
    return { data, loading, error };
};