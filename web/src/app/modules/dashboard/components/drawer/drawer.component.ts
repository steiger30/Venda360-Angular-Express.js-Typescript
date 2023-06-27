import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Renderer2 } from '@angular/core';
import { faHouse, faMoneyCheckDollar, faUserFriends, faBagShopping } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
  chevron = faChevronRight;
  house = faHouse;
  cliente = faUserFriends;
  product = faBagShopping;
  dollar = faMoneyCheckDollar;
  constructor(private renderer: Renderer2) { }
  toogleEventListener() {
    const drawer = document.querySelector('.drawer');
    if (drawer?.classList.contains('close')) {
      this.renderer.removeClass(drawer, 'close');
    } else {
      this.renderer.addClass(drawer, 'close');
    }
  }
}
