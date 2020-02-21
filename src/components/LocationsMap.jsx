import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Map, TileLayer, Marker, Popup, withLeaflet } from 'react-leaflet';
import L from 'leaflet';

const StyledLocationsMap = styled.div`
  margin-bottom: 16px;
  .map {
    height: 300px;
    .leaflet-popup-content {
      h6 { margin-bottom: 0; }
      p { margin: 8px 0; }
    }
  }
`;

const getBounds = (markers) => markers.length > 1 ?
  L.latLngBounds(markers.map(x => [x.lat, x.lon])) :
  L.latLng(markers[0].lat, markers[0].lon).toBounds(1000);

const getPopup = (marker) => (
  <Popup>
    <h6>{marker.title}</h6>
    <p>{marker.description.slice(0, 100)}...</p>
    <Link to={`/locations/${marker.slug}`}>Read More...</Link>
  </Popup>
);

const getMarkers = (markers, popups) => markers.map(
  x => (
    <Marker position={[x.lat, x.lon]} key={x.slug}>
      {popups && getPopup(x)}
    </Marker>
  )
);

const LocationsMap = (props) => {
  return (
    <StyledLocationsMap>
      {typeof window !== 'undefined' && <Map
        bounds={getBounds(props.markers)}
        className={'map'}
        gestureHandling={true}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {getMarkers(props.markers, props.popups)}
      </Map>}
    </StyledLocationsMap>
  );
};

LocationsMap.propTypes = {
  markers: PropTypes.array,
  popups: PropTypes.bool
};

LocationsMap.defaultProps = {
  markers: [],
  popups: true
};

export default LocationsMap;
