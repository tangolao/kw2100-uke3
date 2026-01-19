import React, {useEffect, useRef} from "react";
import { createRoot } from "react-dom/client";

import "./application.css";

import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import {useGeographic} from "ol/proj";

useGeographic();

const map = new Map({
    layers:[new TileLayer({source: new OSM()})],
    view: new View({center: [10, 59], zoom: 7})
})
function Application() {
    const  mapRef = useRef();
    useEffect(() => {
         mapRef.current.innerText = "Hei, fra JaScripts " + (6*7)
        map.setTarget(mapRef.current);
    }, []);
    return <>
        <h1>Hello Map Application</h1>
        <div ref={mapRef}>Here I want the map</div>
    </>

}

createRoot(document.getElementById("root")!).render(<Application/>);