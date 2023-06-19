import { Component, OnInit } from '@angular/core';
import { SuperHeroesService } from '../super-heroes.service';
import { SuperHeroes } from '../super-heroes';

declare var window: any

@Component({
  selector: 'app-all-super-heroes',
  templateUrl: './all-super-heroes.component.html',
  styleUrls: ['./all-super-heroes.component.css']
})
export class AllSuperHeroesComponent implements OnInit {

  constructor(private superHeroSerivice: SuperHeroesService) { }

  superHeroes: SuperHeroes[] = []
  deleteModel :any;
  itemToDelete : string = ''

  ngOnInit(): void {
    this.deleteModel = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    )
    this.getAll()
  }

  openDeletePopup(id:string){
    this.itemToDelete = id
    this.deleteModel.show();
  }

  getAll() {
    this.superHeroSerivice.get().subscribe((data) => {
      this.superHeroes = data
    })
  }

  delete(){
    this.superHeroSerivice.delete(this.itemToDelete).subscribe(()=>{
      this.superHeroes = this.superHeroes.filter(data=>data._id !== this.itemToDelete)
      this.deleteModel.hide()
    })
  }
}
