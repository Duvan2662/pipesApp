import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select

  public name : string = 'Duvan';
  public gender : 'male'| 'female' = 'male';
  public invitationMap = {
    male : 'invitarlo',
    female : 'invitarla'
  }



  /**
   * ChangeClient
   * metodo para cambiar la persona
   */
  public ChangeClient = () => {
    this.name = 'Melissa';
    this.gender = 'female';
  }

}
