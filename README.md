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


To start the project create a react project using command `npx create-react-app appname`
and then copy the App.js , index.css and index.js files. <br/>
These are the three files this whole project is based on . <br/>
Then  use command `npm start` to run the app 

## Screenshots of the App 
![Labtest2FullStackSS3](https://user-images.githubusercontent.com/78088098/144143246-b97ab0d3-947e-422b-8b87-c8bc104da2e9.JPG)
This is the first page  of the App.<br/>
User has to enter the city name to see the weather of the city entered.<br/>
Here are some examples of the city entered<br/>
![Labtest2FullStackSS1](https://user-images.githubusercontent.com/78088098/144143329-10f69061-f305-452c-96fd-da4a404645a6.JPG)
![Labtest2FullStackSS2](https://user-images.githubusercontent.com/78088098/144143344-e86bc8a5-07e8-41d7-9c07-d729ac3e004f.JPG)
![Labtest2FullStackSS4](https://user-images.githubusercontent.com/78088098/144143354-b8457727-1e50-437b-99ba-bc80384fa62c.JPG)
![Labtest2FullStackSS5](https://user-images.githubusercontent.com/78088098/144143359-8a13bcce-e2fc-4be6-940e-0381386912b4.JPG)

The data displayed here shows the - 
City name , Country name , Temp , Main , icon , Fells like , Min and Max temp and Wind speed .  <br/>
More things can be added but for display purpose and for UI i have added these all . <br/>
For example if you want more data to be dispalyed you can add the following code- <br/>
`<div className="weatherInfo">Pressure {(weather.main.pressure)} </div> ` <br/>
`<div className="weatherInfo">Humidity {(weather.main.humidity)} </div>`<br/>
`<div className="weatherInfo">Sunrise {weather.sys.sunrise} </div>`<br/>
` <div className="weatherInfo">Sunset {weather.sys.sunset} </div>`<br/>

If you add these things instead of min max and wind speed the oupt would be like this <br/>
![image](https://user-images.githubusercontent.com/78088098/144144101-b04b135d-36f1-468d-9c19-b17065511a77.png)

So it depends on your choice to add data .

<br/>
Other thing to be noticed is the background color .You can see the background changes as temp changes. When temp is warm background will be yellow and when greater than 16 degree celsius  it will be blue.


<br/>
Data is being fetched by - http://api.openweathermap.org/data/2.5/weather?q={city}&appid={{APIkey}} <br/>
Date and Day are not in the responses and are being displayed by writing a function whaich can be seen in App.js .<br/>
Icon is also dynamic and changes according to the value of the icon in response. 

## Postman Screenshots
![Labtest2FullStackPostmanSS1](https://user-images.githubusercontent.com/78088098/144144379-c0b2dcde-8efd-49e8-b930-a8c7bf5aeced.JPG)
![Labtest2FullStackPostmanSS2](https://user-images.githubusercontent.com/78088098/144144387-fb031e04-5cb0-4952-8361-b15a29778480.JPG)
![Labtest2FullStackPostmanSS3](https://user-images.githubusercontent.com/78088098/144144397-7b6b76c9-a0a8-4cf9-ae6e-c8c7fee46c8b.JPG)
![Labtest2FullStackPostmanSS4](https://user-images.githubusercontent.com/78088098/144144405-418667e6-22e5-435b-b2b4-6d29983a6e86.JPG)


## Test
You can check the response i.e the data fetched in the console . 

## Author
Sehajpreet Kaur Khurana
101282557_Comp3123_Labtest2
