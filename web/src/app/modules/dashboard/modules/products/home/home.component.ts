import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from 'src/app/shared/modal/confirmation/confirmation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isOpen = true
  public produtos: any[] = [
    { id: 32, nomeProduto: 'Processador core i3', preco: 999.59, descricao: "teste" },
    { id: 2, nomeProduto: 'Processador core i3', preco: 999.59, descricao: "usado" }
  ];
  constructor(private router: Router, private modalService: NgbModal) {

  }

  goToDetalhesByState(produto: any) {
    this.router.navigateByUrl('/dashboard-admin/produtos/editar-produto', {
      state: produto
    })
  }
  async deleteProduct(produto: any) {
    const confirmationModal = await this.openModal()
    if (confirmationModal) {
      console.log('foi')
    }
  }
  async openModal(): Promise<boolean> {

    const modalRef = this.modalService.open(ConfirmationComponent)
    modalRef.componentInstance.title = "Confirmação"
    modalRef.componentInstance.message = "Confirma a exclusão do produto ?"
    return modalRef.result
  }
}
