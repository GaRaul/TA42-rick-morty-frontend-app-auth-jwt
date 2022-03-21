import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  character: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: ''
  };
  enviado = false;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
  }

  saveCharacter(): void {
    const data = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: this.character.image
    };

    this.charactersService.create(data)
    .subscribe(
      response => {
      console.log(response);
      this.enviado = true;
    },
      error => {
        console.log(error);
      });

  }

  newCharacter(): void {
    this.enviado = false;
    this.character = {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',
      image: ''
    }
  };

}
