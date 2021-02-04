import React, { useEffect, useRef } from "react";
import "./Map.css";

interface data {
    data: any;
}

const Map: React.FC<data> = ({ data }) => {
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
        } else {
            initMap(
                data?.location?.coordinates?.latitude,
                data?.location?.coordinates?.longitude
            );
        }
    }, [data]);

    // Initialize and add the map
    function initMap(inputLat: number, inputLng: number): void {
        // The location of user location
        const userLocation = {
            lat: +inputLat,
            lng: +inputLng,
        };
        // The map, centered at user location
        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            zoom: 2,
            center: userLocation,
            mapTypeControl: false,
            zoomControl: false,
            scaleControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            styles: [
                {
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#f5f5f5",
                        },
                    ],
                },
                {
                    elementType: "labels.icon",
                    stylers: [
                        {
                            visibility: "off",
                        },
                    ],
                },
                {
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#616161",
                        },
                    ],
                },
                {
                    elementType: "labels.text.stroke",
                    stylers: [
                        {
                            color: "#f5f5f5",
                        },
                    ],
                },
                {
                    featureType: "administrative.land_parcel",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#bdbdbd",
                        },
                    ],
                },
                {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#eeeeee",
                        },
                    ],
                },
                {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#757575",
                        },
                    ],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#e5e5e5",
                        },
                    ],
                },
                {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#9e9e9e",
                        },
                    ],
                },
                {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#ffffff",
                        },
                    ],
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#757575",
                        },
                    ],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#dadada",
                        },
                    ],
                },
                {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#616161",
                        },
                    ],
                },
                {
                    featureType: "road.local",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#9e9e9e",
                        },
                    ],
                },
                {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#e5e5e5",
                        },
                    ],
                },
                {
                    featureType: "transit.station",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#eeeeee",
                        },
                    ],
                },
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [
                        {
                            color: "#c9c9c9",
                        },
                    ],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [
                        {
                            color: "#9e9e9e",
                        },
                    ],
                },
            ],
        });

        // The marker, positioned at user location
        new google.maps.Marker({
            position: userLocation,
            map: map,
            icon: require("../assets/pin.svg"),
        });
    }

    return <div id="map"></div>;
};

export default Map;
