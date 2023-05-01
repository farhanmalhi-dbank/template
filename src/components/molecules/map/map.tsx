import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import * as LeafLet from 'leaflet';
import { generateUniqueId } from '../../../utils/generate-unique-id/generate-unique-id';
type Numbers = [number, number];

export interface MapDataProps {
  data: Numbers[];
  center: Numbers;
}

const iconUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png';
const icon = LeafLet.icon({
  iconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});
const Map = ({ data, center }: MapDataProps) => {
  return (
    <MapContainer attributionControl={false} data-test-id="map" center={center} zoom={8} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MarkerClusterGroup
        maxClusterRadius={150}
        spiderfyOnMaxZoom={true}
        key={generateUniqueId()}
        polygonOptions={{
          fillColor: '#ffffff',
          color: '#f00800',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.8
        }}
        showCoverageOnHover={false}>
        {data.map(([lat, lng]) => {
          return (
            <Marker position={LeafLet.latLng(lat, lng)} key={lat} icon={icon}>
              <Popup>
                A pretty popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
