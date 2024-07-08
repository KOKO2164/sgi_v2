import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number:"1",
      name:"Inicio",
      icon:"fa-solid fa-house",
      route:"/",
    },
    {
      number:"2",
      name:"Usuarios",
      icon:"fa-solid fa-gear",
      route:"/usuarios",
    },
    {
      number:"3",
      name:"Entradas de Materiales",
      icon:"fa-solid fa-box",
      route:"/entradas-materiales",
    },
    {
      number:"4",
      name:"Salidas de Materiales",
      icon:"fa-solid fa-box",
      route:"/salidas-materiales",
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
