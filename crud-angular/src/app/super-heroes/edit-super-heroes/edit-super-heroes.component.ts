import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperHeroesService } from '../super-heroes.service';
import { CreateOrUpdate } from '../create-or-update';

@Component({
  selector: 'app-edit-super-heroes',
  templateUrl: './edit-super-heroes.component.html',
  styleUrls: ['./edit-super-heroes.component.css']
})
export class EditSuperHeroesComponent implements OnInit{

  constructor(private route:ActivatedRoute, private superHeroService : SuperHeroesService, private router:Router){}

  id:string = ''
  superHeroes: CreateOrUpdate = {
    name: '',
    powers: '',
    franchise: '',
    imageUrl: ''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.id = params.get('id') ?? ''
      this.getById()
    })
  }

  getById(){
    this.superHeroService.getById(this.id).subscribe((data)=>{
      this.superHeroes.name = data.name
      this.superHeroes.powers = data.powers
      this.superHeroes.franchise = data.franchise
      this.superHeroes.imageUrl = data.imageUrl
    })
  }

  update(){
    this.superHeroService.update(this.id,this.superHeroes).subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
}
