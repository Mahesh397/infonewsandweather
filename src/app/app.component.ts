import { Component, OnInit} from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import {TranslateService} from '@ngx-translate/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('800ms', style({ transform: 'translateY(0%)', 'opacity': 1 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title;
  articles;
  url='https://gnews.io/api/v4/search?';
  apikey='f51f953e3f3efc34c4592ef26d426580';
  languages='ml';
  quer='news';
  getkeyword;
  locallang;

constructor(private translate: TranslateService,private httpClient:HttpClient){

  translate.setDefaultLang('ml');

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "20px";
  } else {
    document.getElementById("header").style.fontSize = "15px";
  }
}
}

  useLanguage(language: string){
    this.locallang=language;
    this.translate.use(language);
   return this.httpClient.get(this.url+'q='+this.quer+'&'+'lang='+language+'&token='+this.apikey).subscribe((data)=>{
   console.log(data);
    this.articles=data['articles'];
                  })
            
                }
  

  ngOnInit(){
   
    return this.httpClient.get(this.url+'q='+this.quer+'&'+'lang='+this.languages+'&token='+this.apikey).subscribe((data)=>{
console.log(data);
this.articles=data['articles'];
    })
  }

  fetchkey(getkey:string){
    this.quer=getkey;
    return this.httpClient.get(this.url+'q='+getkey+'&'+'lang='+this.locallang+'&token='+this.apikey).subscribe((data)=>{
      console.log(data);
      this.articles=data['articles'];
          })
          
  }

  
  }


