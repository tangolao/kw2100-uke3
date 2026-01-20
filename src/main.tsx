import {useEffect, useRef, useState} from "react";
import { createRoot } from "react-dom/client";
import * as React from "react";
import "./application.css";

import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import {useGeographic} from "ol/proj";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {GeoJSON} from "ol/format";

useGeographic();

const kommuneSource = new VectorSource({
    url: "/geojson/kommuner.geojson",
    format: new GeoJSON()
});
const layers = [
    new TileLayer({source: new OSM()}),
    new VectorLayer({
        source: kommuneSource
    })
];
const map = new Map({
    layers: layers,
    view: new View({center: [10, 59], zoom: 7})
})

function Application() {
    const  mapRef = useRef<HTMLDivElement | null>(null);
    const [avtiveKommuner, setAktiveKommuner] = useState([]);
    useEffect(() => {
         mapRef.current.innerText = "Hei, fra JaScripts " + (6*7)
        map.setTarget(mapRef.current);
         map.on("pointermove", e => {
             setAktiveKommuner(kommuneSource.getFeaturesAtCoordinate(e.coordinate))
         })


    }, []);
    return <>
        <h1>Hello Map Application {avtiveKommuner.length > 0 && avtiveKommuner[0].getProperties()["kommunenavn"]}</h1>
        <div ref={mapRef}>Here I want the map</div>
    </>

}

createRoot(document.getElementById("root")!).render(<Application/>);