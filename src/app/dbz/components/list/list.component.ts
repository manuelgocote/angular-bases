import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      id: "asapScheduler",
      name: "Trunks",
      power: 10
    }
  ]

  //onDeleteID
  @Output()
  public onDeleteID: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string) {
    if (!id) return;
    this.onDeleteID.emit(id);
  }


}
