import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero; //recieves hero object and stores into its hero Property
  constructor(  
    private route: ActivatedRoute, // holds information about the route to this instance of the HeroDetailComponent.
    //This component is interested in the route's bag of parameters extracted from the URL. The "id" parameter is the id of the hero to display.
    private heroService: HeroService, //gets hero data from the remote server and this component will use it to get the hero-to-display.
    private location: Location //is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.
    ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //route.snapshot is a static image of the route information shortly after the component was created.
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}
