import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentIndex;
  currentList : number[] 
  totalPageCount;
  repoList;
  constructor(private appService : AppService) { 
    this.currentList = [1,2,3];
    this.totalPageCount = 8 ;
    this.currentIndex = 1;
    
  }

  resetList(){
    this.currentList = [];
    for(var i = this.currentIndex ; ( i < (this.currentIndex)+ 3 && i <= this.totalPageCount) ; i++){
      this.currentList.push(i);
    }
    this.appService.getGiRepos(this.currentIndex).subscribe(data =>{
      console.log("data .... ",data);
      this.repoList = data;
    });
  }
  getPrev(){
    this.currentIndex = this.currentIndex - 1;
    this.resetList();
  }
  getNext(){
    this.currentIndex = this.currentIndex + 1;
    this.resetList();
  }
  setIndex(i){
    this.currentIndex = i;
    this.resetList();
  }

  ngOnInit() {
    this.appService.getGiRepos(this.currentIndex).subscribe(data =>{
      console.log("data .... ",data);
      this.repoList = data;
    });
  }

}
