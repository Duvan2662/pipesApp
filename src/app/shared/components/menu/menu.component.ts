import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
          label: 'Pipes de angular',
          icon: 'pi pi-desktop',
          items:[
            {
              label: 'Textos y fechas',
              icon: 'pi pi-align-left',
              routerLink:'/'
            },
            {
              label: 'Numeros',
              icon: 'pi pi-dollar',
              routerLink:'/numbers'

            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink:'/uncommon'
            },

          ]
      },
      {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog',
          items:[
            {
              label: 'Custom Pipes',
              icon: 'pi pi-cog',
              routerLink: '/custom'
            }
          ]
      }
    ];

  }

}
