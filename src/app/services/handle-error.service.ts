import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }

  error(error): void {
    console.error('Une erreur est survenue :', error);
  }
}
