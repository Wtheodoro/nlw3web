import Leaflet from 'leaflet'
import mapMarkerImg from '../images/map-marker.svg'


const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconAnchor: [29, 68],
    iconSize: [58, 68],
    popupAnchor: [0, -60]
})

export default mapIcon