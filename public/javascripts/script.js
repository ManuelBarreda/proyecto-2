const travelAPI = new APIHandler(`http://localhost:3000/api/travels`)


document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);



travelAPI

  .getTravelsList()
  .then(res => {

    let allInfo = res.data.reverse()
    let InfoHtml = ""

    allInfo.forEach(elm => {
      InfoHtml += `<div class=\"travel-info\">
              <hr>
              <div class=\"title-alltravels\"><h4>${elm.originCity} - ${elm.destinationCity}</h4></div>
              <div class=\"row\">
              <div class=\"col-md-6\">
              <div class=\"origin\">Origen:<br> ${elm.originCity}</div>
              </div>
              <div class=\"col-md-6\">
              <div class=\"destination\">Destino:<br> ${elm.destinationCity}</div>
              </div>
              <div class=\"date\">Fecha y hora: ${elm.date}</div>
              </div>
              <div class=\"button\">
                <a href=\"/travel-details/${elm._id}\">Detalles del viaje</a>
              </div>
              </div>`
    });
    document.querySelector('.travel-container').innerHTML = InfoHtml // El enlace debería llevar a /travel-details:id
  })


  .catch(err => console.log('HUBO UN ERROR!', err))

