import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: any = null;
  id: any = null;
  message = '';
  edit: boolean = false;

  constructor(private _route: ActivatedRoute, private charactersService: CharactersService, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.id = this._route.snapshot.paramMap.get('id');
    this.charactersService.getById(this.id)
      .subscribe(result => this.character = result)
  }

  updateStatus(status: string): void {
    const data = {
      id: this.character.id,
      name: this.character.name,
      status: status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: this.character.image
    }

    this.charactersService.update(this.character.id, data)
      .subscribe({
        next: response => { this.character.status = status;
          console.log(response);
          this.router.navigate(['/characters']);
      },
        error: error => {
          console.log(error);
        }});
  }

  deleteCharacter(): void {
    this.charactersService.delete(this.character.id)
    .subscribe({
      next: response => {
      console.log(response);
      this.router.navigate(['/characters']);
    },
      error: error => {
        console.log(error)
      }});
  }

}
