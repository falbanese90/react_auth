import AuthContext from "../context/AuthProvider";
import { useContext } from "react";

const Something = () => {
    const { auth } = useContext(AuthContext);
    console.log(auth);
    return (
        <h1>Look</h1>
    )
}

export default Something