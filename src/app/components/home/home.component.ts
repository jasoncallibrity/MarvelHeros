import { Component, OnInit, NgModule } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingAlert } from '../../styles/loading-alert/loading-alert'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

@NgModule({
  imports: [NgbModule],
  declarations: [LoadingAlert]
})

export class HomeComponent implements OnInit {
  // public heroes:Hero[];
  public hero:Hero;
  public model={search:""};
  public searching:boolean = false;
  public error:string;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    // this.heroService.GetHeroList().subscribe(heroes => {
    //   this.heroes = heroes;
    // })
  }

  onSubmit() {
    this.searching = true;
    this.error = null;
    this.hero = null;
    this.heroService.GetHero(this.model.search)
      .catch(error => {
        this.error = error;
        this.searching = false;
        return Observable.throw(error);
      })
      .subscribe(hero => {      
        if(!hero){
          this.error = "What you searched for didn't work human. Try again!"
        } else {
          this.hero = hero;         
        }
        this.searching = false;
    });    
  }
}