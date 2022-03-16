import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MarkerFrontmatterProps, MarkerProps } from './definitions';

const StyledMap = styled.div`
  margin-bottom: 1rem;
  .map {
    height: 300px;
    .leaflet-popup-content {
      h6 {
        margin-bottom: 0;
      }
      p {
        margin: 8px 0;
      }
    }
  }
`;

const getBounds = (markers: MarkerProps[]) =>
  markers.length > 1
    ? L.latLngBounds(markers.map((x) => [x.frontmatter.lat, x.frontmatter.lon]))
    : L.latLng(markers[0].frontmatter.lat, markers[0].frontmatter.lon).toBounds(
        1000,
      );

const getPopup = (frontmatter: MarkerFrontmatterProps, html: string) => (
  <Popup>
    <h6>{frontmatter.name}</h6>
    <p>{html.slice(0, 100)}...</p>
    <Link to={`/location/${frontmatter.id}`}>Read More...</Link>
  </Popup>
);

const getMarkers = (markers: MarkerProps[], popups: boolean) =>
  markers.map(({ frontmatter, html = '' }) => (
    <Marker position={[frontmatter.lat, frontmatter.lon]} key={frontmatter.id}>
      {popups && getPopup(frontmatter, html)}
    </Marker>
  ));

interface LocationsMapProps {
  markers: MarkerProps[];
  popups?: boolean;
  scrollWheelZoom?: boolean;
}

export const LocationsMap: React.FC<LocationsMapProps> = ({
  markers = [],
  popups = true,
  scrollWheelZoom = false,
}) => {
  return (
    <StyledMap>
      {typeof window !== 'undefined' && (
        <MapContainer
          bounds={getBounds(markers)}
          boundsOptions={{ padding: [64, 64] }}
          className={'map'}
          gestureHandling={true}
          scrollWheelZoom={scrollWheelZoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {getMarkers(markers, popups)}
        </MapContainer>
      )}
    </StyledMap>
  );
};
