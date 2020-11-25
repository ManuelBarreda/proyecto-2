let mapInstance

function getEventsDataFromAPI() {

    let dataTravel = []

    axios
        .get('/api/travels')
        .then(response => {
            allTravels = response.data
        })
        .then(res => {
            let travelID = window.location.pathname.slice(16)
            dataTravel.push(allTravels.find(obj => obj._id === travelID))
        })
        .then(res => drawMap(dataTravel))
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

