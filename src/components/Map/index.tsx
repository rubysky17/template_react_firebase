import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from 'leaflet';

import "./styles.scss";



import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const RMapContainer: any = MapContainer;
const RMarker: any = Marker;

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: icon
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const position = [10.791329, 106.6926877]; // [latitude, longitude]
  const zoomLevel = 15;

  return (
    <RMapContainer
      center={position}
      zoom={zoomLevel}
      scrollWheelZoom={false}
      className='map-tiles'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      />

      <RMarker position={position}></RMarker>
    </RMapContainer>
  );
};

export default Map;