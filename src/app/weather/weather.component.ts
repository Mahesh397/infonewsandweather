import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from './weather.service';
import { trigger, transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  animations: [

    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('800ms', style({ transform: 'translateY(0%)', 'opacity': 1 }))
      ])
    ])
  ]
})
export class WeatherComponent implements OnInit {

  public current = new Weather(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '');

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {

    navigator.geolocation.getCurrentPosition((pos)=>{
   this.weatherService.getCurrentWeather(pos.coords.latitude,pos.coords.longitude)
    .subscribe((data:any)=>{
     this.current = new Weather(
        data.name,
        data.sys.country,
        data.weather[0].icon,
        data.weather[0].description,
        data.main.temp,
        data.main.pressure,
        data.main.humidity,
        data.wind.speed
        );
      });

    });
   

  }

}