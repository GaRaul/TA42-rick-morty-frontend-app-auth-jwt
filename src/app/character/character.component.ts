import { Component, Input, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() characters: any = null;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.retornar()
      .subscribe(result => this.characters = result)
  }

}
