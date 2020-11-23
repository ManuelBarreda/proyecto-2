let mapInstance, serviceInstance, rendererInstance

function initMap() {

    drawMap()
    drawResult()

}

function drawMap(){

    mapInstance = new google.maps.Map(document.querySelector('#travelMap'), { zoom: 12, center: { lat: 40.409344, lng: - 3.709200 }})

    serviceInstance = new google.maps.DirectionsService
    rendererInstance = new google.maps.DirectionsRenderer

    const directionRequest = {
        origin: 'Avenida de América 55, Granada',
        destination: 'Calle Santa Ana 1, Madrid',
        travelMode: 'DRIVING'
    }

    serviceInstance.route(
        directionRequest,
        route => drawResult(route)
    )
}

function drawResult(route){

    rendererInstance.setDirections(route)
    rendererInstance.setMap(mapInstance)

}


initMap()