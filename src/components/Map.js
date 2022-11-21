import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

export default React.memo((props) => {
  const listHemos = props.listHemos

  // const [center, setCenter] = useState({ lat: -6.892060, lng: -38.558639 })
  const center = props.center || { lat: -6.892060, lng: -38.558639 }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_KEY_GOOGLE_MAPS
  })

  const containerStyle = {
    width: '100%',
    height: '37.5rem',
    border: '4px solid #fff',
    borderRadius: "15px",
    marginTop: "2rem"
  }

  const config = {
    setZoomControlsEnabled: false,
  }

  const listMarker = listHemos.map(element => {
    const position = {
      lat: element.geometry.coordinates[0],
      lng: element.geometry.coordinates[1]
    }
    return <Marker position={position} label={element.properties.title}></Marker>
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={config}
      >
        {listMarker}
      </GoogleMap>
  ) : <></>
})