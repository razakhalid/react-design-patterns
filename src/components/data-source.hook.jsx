import {useEffect, useState} from "react";

export const useDataSource = (getData) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await getData();
            setData(response.data);
        })();
    }, [getData]);

    return data;
}