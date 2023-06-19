import { Component } from '@angular/core';
import { CreateOrUpdate } from '../create-or-update';
import { SuperHeroesService } from '../super-heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-super-heroes',
  templateUrl: './add-super-heroes.component.html',
  styleUrls: ['./add-super-heroes.component.css']
})
export class AddSuperHeroesComponent {

  constructor(private superHeroesServices : SuperHeroesService
    ,private router:Router
    ){}

  superHeroes: CreateOrUpdate = {
    name: '',
    powers: '',
    franchise: '',
    imageUrl: ''
  }

  create(){
    this.superHeroesServices.create(this.superHeroes).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
}
