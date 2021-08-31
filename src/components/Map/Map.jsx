import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAdFCa0kK29y6rqgvuXX85z7xFjR6gjA5U' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(event) => {
          setCoordinates({ lat: event.center.lat, lng: event.center.lng });
          setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
        }}
        onnChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
