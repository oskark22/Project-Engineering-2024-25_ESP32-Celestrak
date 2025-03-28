import SatelliteItem from './SatelliteItem';
import classes from './SatelliteList.module.css';

function SatelliteList(props) {
  return (
    <ul className={classes.list}>
      {props.satellites && props.satellites.length > 0 ? (

      props.satellites.map((satellite) => (
        <SatelliteItem
          key={satellite.satelliteId || satellite.name}
          id={satellite.id || satellite.name}
          type={satellite.type}
          country={satellite.country}
          latitude={satellite.latitude}
          longitude={satellite.longitude}
        />
      ))
    ):(
      <p>No satellites found</p>
    )}
    </ul>
  );
}

export default SatelliteList;
