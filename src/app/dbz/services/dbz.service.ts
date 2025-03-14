import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 1000
  }, {
    id: uuid(),
    name: "Goku",
    power: 5000
  }, {
    id: uuid(),
    name: "Vegeta",
    power: 2500
  }];

  onNewCharacter(character: Character) {
    const newCharacter: Character = { id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
