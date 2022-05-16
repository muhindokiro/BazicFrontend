import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CocktailsService } from 'src/app/core/services/cocktails.service';
// import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loadingCocktails = false;
  cocktailList: any[] = [];
  loadingPost=false
  cockTailForm!: FormGroup;
  constructor(
    private cocktailService:CocktailsService,
    private router:Router,
    // private toaster:ToastrService
  ) { }

  ngOnInit(): void {
    this.getCocktails()

    this.cockTailForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
      ingredients: new FormControl(''),

    })
  }
  getCocktails() {
    this.loadingCocktails = true
    this.cocktailService.getCocktails().subscribe((data)=>{
      let cocktails = data.drinks;
      const size = 5
      const items = cocktails.slice(0, size)
      this.cocktailList = items
      this.loadingCocktails=false
    })
}
addCockTail(){
const payload={
  name:this.cockTailForm.get('name')?.value,
  description:this.cockTailForm.get('description')?.value,
  ingredients:this.cockTailForm.get('ingredients')?.value
}
console.log(payload,"THE PAYLOAD WE EXPECT!!");

  this.loadingPost=true
  this.cocktailService.addCockTail(payload).subscribe(res=>{
    // this.toaster.success("You have successfully created a drink")
    this.router.navigate(['/home'])
    this.loadingPost=false
  },
  (error) => {
          // this.toaster.warning(error.error.message);
          this.loadingPost= false;
        });
}
}
