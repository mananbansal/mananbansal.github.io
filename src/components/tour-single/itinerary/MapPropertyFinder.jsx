import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapPropertyFinder() {
  const defaultProps = {
    center: {
      lat: 30.5812379,
      lng: 78.9537696,
    },
    zoom: 11,
  };

  return (
    // Important! Alwys set the container height explicitlya

    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDep1S7-Bp4VSztQv-c5xb28riy6ISpNYI" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={30.5812379} lng={78.9537696} text="My Marker" />
    </GoogleMapReact>
  );
}
