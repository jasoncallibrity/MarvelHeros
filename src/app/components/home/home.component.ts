import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public heroes:Hero[];

  constructor(private heroService: HeroService) {  
    
    
  }

  ngOnInit() {
    this.heroService.GetHeroList().subscribe(heroes => {
      console.log("made it to subscribe")
      this.heroes = heroes;
    })
  }

}
