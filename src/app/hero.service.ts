import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Hero } from './hero'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Observable<Hero[]>;
  private heroesUrl ='api/heroes'; //url to web API using In Memory
  constructor(
    private messageService: MessageService,
    private http: HttpClient,

  ) { }

  private log(message: String){
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
