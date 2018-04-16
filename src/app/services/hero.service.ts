import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

@Injectable()
export class HeroService {
  private baseUrl: string = 'https://gateway.marvel.com:443/';
  private publicapikey = '835be829ed9be784b42dea742a875ec2';
  private privateapikey = 'eb90984bdb14a55104f0c521dcaaeb4637855204';
  private charactersEndPoint = `${this.baseUrl}v1/public/characters`;
  private limit = 100;
  private heroList: Hero[];

  constructor(private http: HttpClient) {}

  public GetHeroList():Observable<Hero[]>{
    return this.http.get<CharacterData>(`${this.charactersEndPoint}?apikey=${this.publicapikey}&limit=${this.limit}`).map(response => {
      let heroList = [];
      response.data.results.forEach(heroData => {
        heroList.push(new Hero(heroData.name, heroData.description));
      });
      return heroList;
    }).map(heroes =>{
      return heroes.filter(hero => {
        return !!hero.description;
      })
    }).catch(error => {
      console.log(error);
      return [];
    })
  }

  public GetHero(heroName:string):Observable<Hero>{
    return this.http.get<CharacterData>(`${this.charactersEndPoint}?apikey=${this.publicapikey}&name=${heroName}`).map(response => {
      console.log(response);      
      if(!response || !response.data){
        throw new Error("Marvel API unresponsive. Try again")
      } else if(response.data.count == 0){
        return null;
      } else {
        return new Hero(response.data.results[0].name, response.data.results[0].description);
      }
    })
  }
}

export interface CharacterData {
  data: any;
}
