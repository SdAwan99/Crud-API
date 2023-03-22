import { Component } from '@angular/core';
import { User } from 'src/app/interface/user';
import { WepApiService } from 'src/app/Service/wep-api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  body: User[]=[]

  constructor (private userapiservice:WepApiService){}

  ngOnInit(): void {
this.userapiservice.getAll().subscribe((data:User[])=>{
this.body = data
console.log(this.body)
})  
  
}
}
