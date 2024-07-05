import Map, {NavigationControl} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent: React.FC = () => {
  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: 9.29,
        latitude: 4.156,
        zoom: 16,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle={
        (localStorage.getItem("colorScheme")=="light")
          ? "mapbox://styles/enow-myke3/clxh2wdvi007g01qmfiwgh5q3"
          : "mapbox://styles/enow-myke3/clxioqfta009v01qmbr6he2dj"
      }
      mapboxAccessToken="pk.eyJ1IjoiZW5vdy1teWtlMyIsImEiOiJjbHhoMmowN2MxYWY4MnFxemNhYXk1bzA1In0.8tS9OAHUDgH43qMsOM0cww"
    >
      <div style={{ position: "absolute", top: 50, left: 20 }}>
        <NavigationControl showCompass={false} />
      </div>
    </Map>
  );
};

export default MapComponent;
