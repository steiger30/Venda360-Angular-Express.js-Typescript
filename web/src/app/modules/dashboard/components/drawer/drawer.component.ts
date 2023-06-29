import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Renderer2 } from '@angular/core';
import { faHouse, faMoneyCheckDollar, faUserFriends, faBagShopping,faRemove, faFolderClosed } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from 'src/app/shared/modal/confirmation/confirmation.component';
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
  remover = faRemove
  sairConta = faFolderClosed
  constructor(private renderer: Renderer2, private modalService: NgbModal, private apiService: ApiService, private router: Router) { }
  toogleEventListener() {
    const drawer = document.querySelector('.drawer');
    if (drawer?.classList.contains('close')) {
      this.renderer.removeClass(drawer, 'close');
    } else {
      this.renderer.addClass(drawer, 'close');
    }
  }

  sair() {
    localStorage.removeItem('token');
    window.location.reload();
    this.router.navigate(['']);
  }
  async exluirConta() {
    const confirmationModal = await this.openModal()
    if (confirmationModal) {

      this.apiService.delete("/users").subscribe(
        res => this.sair(),
        err => console.log(err)
      )
    }
  }
  async openModal(): Promise<boolean> {

    const modalRef = this.modalService.open(ConfirmationComponent)
    modalRef.componentInstance.title = "Confirmação"
    modalRef.componentInstance.message = "Confirma a exclusão do produto ?"
    return modalRef.result
  }
}
