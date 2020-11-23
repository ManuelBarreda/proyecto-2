const travelAPI = new APIHandler(`http://localhost:3000/api/travels`)


document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);



travelAPI

  .getTravelsList()
  .then(res => {

    let allInfo = res.data
    let InfoHtml = ""

    allInfo.forEach(elm => {
      InfoHtml += `<div class=\"travel-info\">
              <div class=\"origin\">Origin City: ${elm.originCity}</div>
              <div class=\"destination\">Destination: ${elm.destinationCity}</div>
              </div>`
    });
        document.querySelector('.travel-container').innerHTML = InfoHtml

  })


  .catch(err => console.log('HUBO UN ERROR!', err))

