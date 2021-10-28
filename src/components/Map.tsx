import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '700px',
    height: '400px'
  };
  
  const centered = {
    lat: -3.745,
    lng: -38.523
  };



  interface MapProps {
    center: typeof centered;
    
  }


const Map = ({
    center,
  }: MapProps) => {

const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
    }, [])
  
    console.log("This is center:", center)
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={center} />
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
};
  
export default Map;