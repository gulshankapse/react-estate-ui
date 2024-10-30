import { MapContainer, TileLayer } from "react-leaflet"
import "./map.scss"
import "leaflet/dist/leaflet.css"
import Pin from "../pin/pin"

function Map({items}) {
    return (
       <MapContainer className="map" center={[20.5937, 78.9629]} zoom={8} scrollWheelZoom={false}>
         <TileLayer
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         {items.map(item=>(
            <Pin item={item} key={item.id} />
         ))}
      </MapContainer>
    )
}

export default Map