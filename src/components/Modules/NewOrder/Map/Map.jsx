import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import L from "leaflet";
import { useMap } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";
import styles from "./Map.module.css";
export default function Map({lat=24.884,lon=67.001}) {
  var customIcon = L.icon({
    iconUrl: "/marker.png", // Replace with the path to your custom icon image
    iconSize: [40, 40], // Icon size in pixels
    iconAnchor: [16, 32], // The point of the icon which should correspond to the marker's location
  });

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={{lat,lon}}
        zoom={5}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={{lat,lon}} customIcon>
          <Popup>Hello</Popup>
        </Marker>
        <ChangeView position={{lat,lon}}/>
      </MapContainer>
    </div>
  );
}

const ChangeView=({position})=>{
const map = useMap();
map.setView(position);
return null;

}
