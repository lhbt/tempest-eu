import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'

const Map = withScriptjs(withGoogleMap(({
  className,
  ...props
}) => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={props.latLng}
    options={{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      rotateControl: false,
    }}
  >
    {props.isMarkerShown && <Marker position={props.latLng} />}
  </GoogleMap>
)))

Map.propTypes = {
  latLng: PropTypes.object.isRequired,
  isMarkerShown: PropTypes.bool,
  googleMapURL: PropTypes.string.isRequired,
  loadingElement: PropTypes.node.isRequired,
  containerElement: PropTypes.node.isRequired,
  mapElement: PropTypes.node.isRequired,
}

Map.defaultProps = {
  latLng: {
    lat: 53.48247,
    lng: -2.23540,
  },
  isMarkerShown: true,
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDJDCQCQkJlRLlGwatoNiDVf6WYRwdG4q8&v=3.exp&libraries=geometry,drawing,places',
  loadingElement: <div style={{ height: '100%' }} />,
  containerElement: <div style={{ height: '400px' }} />,
  mapElement: <div style={{ height: '100%' }} />,
}

export default Map
