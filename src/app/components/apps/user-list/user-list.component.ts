
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const ALERTS = [ {
  id:"1",
  photo:"./assets/images/users/female/6.jpg",
  name:"Adam Cotter",
  date:"09 Dec 2017",
  progresscolor:"success",
  number:60
}, {
  id:"2",
  photo:"./assets/images/users/female/5.jpg",
  name:"Pauline Noble",
  date:"26 Jan 2022",
  progresscolor:"secondary",
  number:"40"
}, {
  id:"3",
  photo: "./assets/images/users/male/4.jpg",
  name:"Sherilyn Metzel",
  date:"27 Jan 2022",
  progresscolor:"warning",
  number:"70"
}, {
  id:"4",
  photo: "./assets/images/users/male/8.jpg",
  name:"Terrie Boaler",
  date:"20 Jan 2022",
  progresscolor:"primary",
   number:"45"

}, {
  id:"5",
  photo: "./assets/images/users/female/9.jpg",
  name:"Rutter Pude",
  date:"13 Jan 2022",
  progresscolor:"pink",
   number:"60"

}, {
  id:"6",
  photo: "./assets/images/users/male/2.jpg",
  name:"Clifford Benjamin",
  date:"25 Jan 2022",
  progresscolor:"danger",
   number:"30"

}, {
  id:"7",
  photo: "./assets/images/users/female/1.jpg",
  name:"Thedric Romans",
  date:"12 Jan 2022",
  progresscolor:"cyan",
  number:"40"
}, {
  id:"8",
  photo: "./assets/images/users/female/3.jpg",
  name:"Haily Carthew",
  date:"27 Jan 2022",
  progresscolor:"primary",
   number:"80"
},
{
  id:"9",
  photo:"./assets/images/users/male/5.jpg",
  name:"Dorothea Joicey",
  date:"12 Dec 2021",
  progresscolor:"success",
   number:"50"

}, {
  id:"10",
  photo:"./assets/images/users/female/5.jpg",
  name:"Mikaela Pinel",
  date:"10 Dec 2021",
  progresscolor:"info",
   number:"70"

}, {
  id:"11",
  photo: "./assets/images/users/female/6.jpg",
  name:"Donnell Farries",
  date:"03 Dec 2021",
  progresscolor:"warning",
  number:"40"
},
{
  id:"12",
  photo: "./assets/images/users/male/4.jpg",
  name:"Letizia Puncher",
  date:"09 Dec 2021",
  progresscolor:"danger",
   number:"70"

}
];

@Component({
  selector: 'app-user-list',
  templateUrl:'./user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  user = ALERTS

  constructor() { }

  ngOnInit(): void {
  }


  click = (id:any)=>{
    var data = this.user.filter(x =>{
      return x.id != id
    })
    this.user = data
  }

}





