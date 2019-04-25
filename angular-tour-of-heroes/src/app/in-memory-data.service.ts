import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Mr. Nice", avatar: "assets/avatars/profile1.jpg", icon:"assets/avatars/avatar-all.png"},
      { id: 12, name: "Narco", avatar: "assets/avatars/profile2.jpg", icon:"assets/avatars/avatar-all.png"},
      { id: 13, name: "Bombasto" , avatar: "assets/avatars/profile3.jpg", icon:"assets/avatars/avatar-all.png"},
      { id: 14, name: "Celeritas" , avatar: "assets/avatars/profile4.jpg", icon:"assets/avatars/avatar-all.png"},
      { id: 15, name: "Magneta" , avatar: "assets/avatars/profile5.jpg", icon:"assets/avatars/avatar-all.png"},
      { id: 16, name: "RubberMan" , avatar: "assets/avatars/profile6.jpg", icon:"assets/avatars/avatar-all.png"},
      { id: 17, name: "Dynama" , avatar: "assets/avatars/profile7.jpg", icon:"assets/avatars/avatar-all.png"},
      { id: 18, name: "Dr IQ" , avatar: "assets/avatars/profile8.jpg", icon:"assets/avatars/avatar-all.png"},
      { id: 19, name: "Magma" , avatar: "assets/avatars/profile9.jpg", icon:"assets/avatars/avatar-all.png"},
      { id: 20, name: "Tornado" , avatar: "assets/avatars/profile10.jpg", icon:"assets/avatars/avatar-all.png"}
    ];
    return { heroes };
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
