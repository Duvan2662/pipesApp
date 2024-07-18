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
          label: 'Documents',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-plus'
              },
              {
                  label: 'Search',
                  icon: 'pi pi-search'
              }
          ]
      },
      {
          label: 'Profile',
          items: [
              {
                  label: 'Settings',
                  icon: 'pi pi-cog'
              },
              {
                  label: 'Logout',
                  icon: 'pi pi-sign-out'
              }
          ]
      }
    ];
  }

}
