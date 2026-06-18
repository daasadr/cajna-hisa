'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './Map.module.css';

const POSITION: [number, number] = [46.0511, 14.5051];

const customIcon = L.divIcon({
  html: `<div style="
    width:18px;height:26px;
    background:var(--tea-green,#4a7c59);
    border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    border:2.5px solid #2d5a3d;
    box-shadow:0 2px 8px rgba(45,90,61,0.4);
  "></div>`,
  className: '',
  iconSize: [18, 26],
  iconAnchor: [9, 26],
  popupAnchor: [0, -28],
});

interface MapProps {
  popupText: string;
}

export default function MapComponent({ popupText }: MapProps) {
  useEffect(() => {
    delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
  }, []);

  return (
    <div className={styles.mapWrap}>
      <MapContainer
        center={POSITION}
        zoom={14}
        className={styles.map}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={POSITION} icon={customIcon}>
          <Popup>
            <strong>Čajna hiša Dolina</strong>
            <br />
            Ljubljana, Slovenija
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
