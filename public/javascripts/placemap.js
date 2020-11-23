let mapInstance, serviceInstance, rendererInstance



// travelAPI = new APIHandler()

// travelAPI

//     .getTravelsList()
//     .then(res => {
//         let allInfo = res.data
//         let originPrueba = ""
//         let destinoPrueba = ""

//         allInfo.forEach(elm => {
//             originPrueba = elm.originCity
//             destinoPrueba = elm.destinationCity
//         });
//         console.log(originPrueba)

//     })


function initMap() {

    drawMap()
    drawResult()
    // getPlacesFromAPI() 
    // drawPlaces(travels) 
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



// function getPlacesFromAPI() {
//     axios
//         .get('/api/travel-details')
//         .then(response => drawPlaces(response.data))
//         .catch(err => console.log(err))
// }


initMap();















// function drawPlaces(travels) {

//     travels.forEach(elm => {

//         let cityOrigin = elm.originCity
//         let cityArrival = elm.destinationCity
//     }),

//     console.log(cityOrigin)
// }
        

 

        // new google.maps.Marker({
        //     map: mapInstance,
        //     position,
        //     title: elm.name
        // })