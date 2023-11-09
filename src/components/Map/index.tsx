import { MapContainer, TileLayer } from "react-leaflet";

const RMapContainer: any = MapContainer;

const Map = () => {
  const position = [10.7889431, 106.6429622]; // [latitude, longitude]
  const zoomLevel = 15;

  return (
    <RMapContainer
      center={position}
      zoom={zoomLevel}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />
    </RMapContainer>
  );
};

export default Map;