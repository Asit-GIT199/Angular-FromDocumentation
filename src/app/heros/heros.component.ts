import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes: Hero[];
  //heroes = HEROES;
  //selectedHero: Hero;
  // hero: Hero = {
  //   id: 1,
  //   name:  'Windstorm'
  // };
  constructor( private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

//   onSelect(hero: Hero): void {
//   this.selectedHero = hero;
// }

  getHeros(): void{
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heros => this.heroes = heros);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
