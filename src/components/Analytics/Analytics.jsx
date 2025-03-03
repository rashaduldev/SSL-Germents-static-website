import ReactGA from "react-ga4";


import { useEffect } from "react";

const Analytics=()=>{
    useEffect(()=>{
        ReactGA.initialize("G-H0266CMHJP");
    },[])

    return null;
}

export default Analytics;