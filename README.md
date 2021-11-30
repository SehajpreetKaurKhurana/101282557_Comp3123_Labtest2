###  Weather App

This project is made according to the requirements of the COMP3123 course Lab Test 2. <br/>
The project  reads the response fields details from: <br/>
https://openweathermap.org/forecast16  <br/>
https://openweathermap.org/weather-conditions <br/>

As the weather to be found is for Toronto the end point is: <br/>
http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid={{APIkey}} <br/>

API Key  is written in the App.js file.<br/>
All the css is in index.css. <br/>
## Start the project 

To start the project create a react project and then copy the App.js , index.css and index.js files.

## Screenshots of the App 



You can see there i s a search bar . Enter the city of which you want to see the weather.  <br/>



This screenshot shows the data <br/>
Data is being fetched by - http://api.openweathermap.org/data/2.5/weather?q={city}&appid={{APIkey}} <br/>
Date and Day are not in the responses and are being displayed by writing a function whaich can be seen in App.js .<br/>
Icon is also dynamic and changes according to the value of the icon in response. 

## Postman Screenshots

## Test
You can check the response i.e the data fetched in the console . 

## Author
Sehajpreet Kaur Khurana
82557_Comp3123_Labtest2
