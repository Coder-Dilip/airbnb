import ReactMapGL, { Marker, Popup } from 'react-map-gl';
    import { getCenter } from 'geolib';
    import { useState } from 'react';
    import RoomIcon from '@material-ui/icons/Room';

/* We connect the style, api token from mapbox: */
    function Map( {searchResults } ) {

    /*  State for location object / popup in the mapbox:*/
        const [ selectedLocation, setSelectedLocation ] = useState({});

    /* I transform the search results object into the  */
    /* E.G. { latitude: 52.516272, longitude: 13.377722 } object : */

        const coordinates = searchResults.map( result => ( {
            longitude: result.long,
            latitude: result.lat,

        } ));

    //The latitude and longitude of the center of location for coordinates
    //E.g. go to Mexico, map centers around the new coordinates
        const center = getCenter(coordinates);

    /* Viewport state to give the mapbox its size: */
        const [ viewport, setViewport ] = useState({
            width:'100%',
            height: '100%',
            latitude: center.latitude,
            longitude: center.longitude,
            zoom: 11,
        });
        

    /*  We return the ReactMapGL custom component: */
        return <ReactMapGL
            mapStyle='mapbox://styles/dilip123132/cks7rhc8q1exq18p1s71ayrjw'
            mapboxApiAccessToken={ process.env.mapbox_key } //from the next.config.js
            { ...viewport }
            onViewportChange={ (nextViewport) => setViewport(nextViewport) }
            /* onViewPortChange lets us move the viewport on the map: */
        >
        {/* Where we make a Marker and Popup: */}
            {searchResults.map( result => (
                <div key={ result.long }>
                    <Marker
                        longitude={ result.long }
                        latitude={ result.lat }
                        offsetTop={ -10 }
                        offsetLeft={ -20 }
                    >
                        <RoomIcon className="text-red-500 cursor-pointer text-2xl animate-bounce" aria-label="push-pin" onClick={() => setSelectedLocation(result) }>
                        📍
                        </RoomIcon>
                    </Marker>

                {/* Popup that should show if click on a Marker: */}
                    {selectedLocation.long === result.long ? (
                        <div className='relative top-[-17px] left-[-7px]'>
                        <Popup
                            onClose={ () => setSelectedLocation( {} )} //reset state
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {/* Can style as a div if want */}
                            { result.title }
                        </Popup>
                        </div>
                    ):(
                        false
                    )}

                </div>
            ))}


        </ReactMapGL>
    };

    export default Map;