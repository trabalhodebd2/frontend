import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

export default React.memo((props) => {
  const markers = props.elements

  const center = props.center || { lat: -6.892060, lng: -38.558639 }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_KEY_GOOGLE_MAPS
  })

  const containerStyle = {
    width: '100%',
    height: props.height || '37.5rem',
    border: `4px solid #fff`,
    borderRadius: "15px",
    marginTop: "2rem"
  }

  const config = {
    minZoom: 4,
    maxZoom: 15,
    disableDefaultUI: true,
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={config}
        onClick={props.onClick || ""}
      >
        {markers}
      </GoogleMap>
  ) : <></>
})