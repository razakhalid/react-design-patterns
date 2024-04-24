import {useEffect, useState} from "react";
import axios from "axios";

export const includeUser = (Component, userId) => {
    return (props) => {
        const [user, setUser] = useState();
        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
            })()
        }, []);

        return <Component {...props} user={user} />
    }
}