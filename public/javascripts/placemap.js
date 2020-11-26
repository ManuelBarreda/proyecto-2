let mapInstance

function getEventsDataFromAPI() {

    let dataTravel = []

    axios
        .get('/api/travels')
        .then(response => {
            let travelID = window.location.pathname.slice(23)
            console.log(travelID)
            dataTravel.push(response.data.find(obj => obj._id === travelID))
            console.log(dataTravel)
            drawMap(dataTravel)
        })
        .catch(err => console.log('Hubo un error:', err))
    
    
   
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
    console.log(directionRequest)
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

