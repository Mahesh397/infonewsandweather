import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

   public API:string;
   public API_KEY:string;

   constructor(private http:HttpClient) {
     this.API ='https://api.openweathermap.org/data/2.5';
     this.API_KEY = '186b3e909594b28cae40b201e742c92a';
   }

  getCurrentWeather(lat,log){
    let url = `${this.API}/weather?lat=${lat}&lon=${log}&units=metric&appid=${this.API_KEY}`;
    return this.http.get(url);

  }

 

 

 


}