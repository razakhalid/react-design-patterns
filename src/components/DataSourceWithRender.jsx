import React, { useState, useEffect } from "react";
export const DataSourceWithRender = ({ getData = () => {}, render }) => {
    const [ resource, setResource ] = useState(null);
    useEffect(() => {
        (async () => {
            const data = await getData();
            setResource(data);
        })()
    }, [getData]);

    return render(resource);
}