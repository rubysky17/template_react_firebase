import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from 'leaflet';

import "./styles.scss";
import icon from 'leaflet/dist/images/marker-icon.png';

const RMapContainer: any = MapContainer;
const RMarker: any = Marker;

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: icon
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = (props: any) => {
  const position = [10.7910566, 106.691152]; // [latitude, longitude]
  const zoomLevel = 15;
  const { customClass } = props;

  return (
    <RMapContainer
      center={position}
      zoom={zoomLevel}
      scrollWheelZoom={true}
      doubleClickZoom={false}
      className={`map-tiles ${customClass}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
      />

      <RMarker position={[10.7910566, 106.691152]}></RMarker>
    </RMapContainer>
  );
};

export default Map;