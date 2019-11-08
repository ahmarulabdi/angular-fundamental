import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes'
import {  Hero } from './hero'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Observable<Hero[]>;
  constructor(
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHero(id: Number): Observable<Hero>{
    this.messageService.add(`HeroService: fetched Hero Id : ${id}`);
    return of(HEROES.find(hero => hero.id === id ));
  }
}
