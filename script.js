window.addEventListener('DOMContentLoaded', () => {
 

  const dateElement = document.getElementById('date');
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');
  const temperatureMaxElement = document.getElementById('max')
  const temperatureMinElement = document.getElementById('min')
  const humidityElement = document.getElementById('humidity');
  const windSpeedElement = document.getElementById('wind-speed');

  let locationIcon = document.querySelector('.weather-icon');

  const apiUrl = `https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.body.style.background = data[0].backgroundColor;
      dateElement.textContent = `${data[0].date}`;
      temperatureElement.textContent = `${data[0].current}°C`;
      descriptionElement.textContent = data[0].customDescription.text;
      temperatureMaxElement.textContent = data[0].max;
      temperatureMinElement.textContent = data[0].min;
      const icon = data[0].weather.icon;
      locationIcon.innerHTML = `<img src="icons/${icon}.png">`;


      function generateTable(data) {  
        let table = '<table>';  
        table += '<tr><th>min</th><th>max</th><th>icon</th><th>day</th></tr>';  
        data.forEach(item => {  
        table += `<tr><td>${item.min}</td><td>${item.max}</td><td>'<img src="icons/${item.weather.icon}.png">'</td><td>${item.dateTitle}</td></tr>`;  
        });  
        table += '</table>';  
        return table;  
        }  
        consttableContainer = document.getElementById('table-container');  
        consttableContainer.innerHTML = generateTable(data);  


    })
    .catch(error => {
      console.log('خطا در دریافت اطلاعات آب و هوا: ', error);
    })
  
});