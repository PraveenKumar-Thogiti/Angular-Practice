import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }
  test= 'false';

  ngOnInit(): void {
  }
  Name = 'sushi'
change(){
  this.Name= 'praveen';
  this.test= 'best';
}
company = ''

}
