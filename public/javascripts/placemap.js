
let mapInstance, serviceInstance, rendererInstance, destinationCityMap, arrivalCityMap



function getEventsDataFromAPI() {

    
    axios
        .get('/api/travels')
        .then(response => drawMap(response.data))
        .catch(err => console.log('Hubo un error:', err))
    
    
   
}


function initMap() {

    getEventsDataFromAPI() 
    drawResult()

}


function drawMap(dataTravel) {
    

    let origin = dataTravel[1].originCity
    let destiny = dataTravel[1].destinationCity

    console.log(typeof origin)
    console.log(destiny)
    
    mapInstance = new google.maps.Map(document.querySelector('#travelMap'))

    serviceInstance = new google.maps.DirectionsService
    rendererInstance = new google.maps.DirectionsRenderer

    const directionRequest = {
        origin: origin.toString(),
        destination: destiny.toString(),
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



initMap();

