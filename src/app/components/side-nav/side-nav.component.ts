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
      icon:"fa-solid fa-users",
      route:"/usuarios",
    },
    {
      number:"3",
      name:"Motivos",
      icon:"fa-solid fa-person-chalkboard",
      route:"/motivos",
    },
    {
      number: "4",
      name: "Almacen",
      icon: "fa-solid fa-cubes-stacked",
      route: "/almacen",
    },
    {
      number:"5",
      name:"Entradas de Materiales",
      icon:"fa-solid fa-right-to-bracket",
      route:"/entradas-materiales",
    },
    {
      number:"6",
      name:"Salidas de Materiales",
      icon:"fa-solid fa-right-from-bracket",
      route:"/salidas-materiales",
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
