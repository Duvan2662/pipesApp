import { Component } from '@angular/core';

@Component({
  selector: 'pages-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'duvan';
  public nameUpper: string = 'DUVAN';
  public fullName: string = 'DuVaN DaViD RiAñO SaLaZaR';

  public customDate:Date = new Date();


}
