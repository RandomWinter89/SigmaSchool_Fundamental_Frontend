// https://arrivelah2.busrouter.sg/

let busID = 0;

function extractData() {
  const busStopId = document.getElementById('inputID').value;

    if (busStopId.trim().length == 0 || isNaN(busStopId) || busStopId == busID)
        return;

    busID = busStopId;

    document.getElementById('busID').innerHTML = busStopId;
    displayBusArrival(busStopId);
}

function displayBusArrival(busStopId) {
  fetchBusArrival(busStopId)
    .then(arrivalData => {
      formatArrivalData(arrivalData);
    })
    .catch(error => {
      console.error('Error: ', error);
    });
}

async function fetchBusArrival(busStopId) {
  const response = await fetch(`https://arrivelah2.busrouter.sg/?id=${busStopId}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Error fetching bus arrival data.');
  }
}


function formatArrivalData(arrivalData) {
    const familyList = document.getElementById('data').tBodies[0];
    familyList.innerHTML = '';

    const buses = arrivalData.services;
    
    if (buses === undefined || buses.length == 0)
        return document.getElementById('Date').innerHTML = `#${busID} Bus has no services available.`;

    let count = 0;
    buses.forEach((bus) => {
        count++;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>Bus ${bus.no}</strong></td>
            <td><strong>${bus.operator}</strong></td>
            <td><strong>${bus.next.destination_code}</strong></td>
        `;

        familyList.appendChild(row);
    })

    document.getElementById('Date').innerHTML = `#${busID} Bus has ${count} services available`;
}
