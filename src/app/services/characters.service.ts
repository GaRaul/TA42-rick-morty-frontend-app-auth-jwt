import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("http://localhost:3000/characters");
  }

  getById(id: string){
    return this.http.get(`http://localhost:3000/characters/${id}`)
  }

  create(data: any) {
    return this.http.post(`http://localhost:3000/characters`, data)
  }

  update(id: any, data: any){
    return this.http.put(`http://localhost:3000/characters/${id}`, data)
  }

  delete(id: any) {
    return this.http.delete(`http://localhost:3000/characters/${id}`)
  }

}
