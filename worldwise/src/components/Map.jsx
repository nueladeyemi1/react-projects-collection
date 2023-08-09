import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from 'react-leaflet'
import styles from './Map.module.css'
import { useCities } from '../contexts/CitiesProvider'
import { useState, useEffect } from 'react'
import { latLng } from 'leaflet'
import useUrlPosition from '../hooks/useUrlPosition'

const Map = () => {
  const { cities } = useCities()
  const [mapPosition, setMapPosition] = useState([40, 0])
  const [mapLat, mapLng] = useUrlPosition()

  useEffect(
    function() {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng])
    },
    [mapLat, mapLng]
  )

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        // center={[mapLat, mapLng]}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  )
}

function ChangeCenter({ position }) {
  const map = useMap()
  map.setView(position)
  return null
}

function DetectClick() {
  const navigate = useNavigate()

  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latLng.lat}&lng=${e.latLng.lng}`),
  })
}

export default Map
