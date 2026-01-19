import React, {useEffect, useRef} from "react";
import { createRoot } from "react-dom/client";
import {Map} from "ol";
import "./application.css";


const map = new Map({

})
function Application() {
    const  mapRef = useRef();
    useEffect(() => {
         mapRef.current.innerText = "Hei, fra JaScripts " + (6*7)
        map.setTarget(mapRef.current);
    }, []);
    return <>
        <h1>Hello Map Application</h1>
        <h1>Hello Map Application</h1>
        <div ref={mapRef}>Here I want the map</div>
    </>

}

createRoot(document.getElementById("root")!).render(<Application/>);