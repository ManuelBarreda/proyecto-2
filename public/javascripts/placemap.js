let mapInstance

function getEventsDataFromAPI() {

    let dataTravel = []

    axios
        .get('/api/travels')
        .then(response => {
            let travelID = window.location.pathname.slice(23)
            dataTravel.push(response.data.find(obj => obj._id === travelID))
            drawMap(dataTravel)
        })
        .catch(err => new Error(err))
  
}

function initMap() {

    getEventsDataFromAPI() 
    drawResult()

}

function drawMap(dataTravel) {

    let origin = dataTravel[0].originCity
    let destiny = dataTravel[0].destinationCity
    
    mapInstance = new google.maps.Map(document.querySelector('#travelMap'))
    
    const serviceInstance = new google.maps.DirectionsService()
    
    const directionRequest = {
        origin: origin,
        destination: destiny,
        travelMode: 'DRIVING'
    }

    serviceInstance.route(
        directionRequest,
        route => drawResult(route)
    )

}

function drawResult(route){
    
    const rendererInstance = new google.maps.DirectionsRenderer()

    rendererInstance.setDirections(route)
    rendererInstance.setMap(mapInstance)

}

initMap();