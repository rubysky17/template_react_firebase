import { MapContainer, TileLayer } from "react-leaflet";

import "./styles.scss";

const RMapContainer: any = MapContainer;

const Map = () => {
  const position = [10.7889431, 106.6429622]; // [latitude, longitude]
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
    </RMapContainer>
  );
};

export default Map;