import { Component, OnInit, NgModule } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  public heroes:Hero[] = [];
  public model={search:""};
  public searching:boolean = false;
  public error:string;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.searching = true;
    this.error = null;
    this.heroService.GetHero(this.model.search)
      .map((hero:Hero) => {
        const exists = this.heroes.find((h:Hero) => {
          return h.name === hero.name;
        })
        if(exists){
          throw new Error("Hero already in list idiot!");
        } else {
          return hero;
        }
      })
      .catch((err:Error) => {
        this.error = err.message;
        return Observable.throw(err);
      })
      .finally(() => {
        this.searching = false;
      })
      .subscribe(hero => {
        this.heroes.unshift(hero);
    });
  }
}