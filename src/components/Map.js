import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import PreviousMap from 'postcss/lib/previous-map'

export default React.memo((props) => {
  const listHemos = props.listHemos
  console.log(listHemos)
  
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
  
  const center = {
    lat: -3.745,
    lng: -38.523
  }

  const config = {
    setZoomControlsEnabled: false,
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={config}
      ></GoogleMap>
  ) : <></>
})