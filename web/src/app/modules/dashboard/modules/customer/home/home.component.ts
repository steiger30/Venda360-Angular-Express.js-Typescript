import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from 'src/app/shared/modal/confirmation/confirmation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public customers: any[] = [
    { id:32, nome: 'Renan Steiger', cpf: '05831228924', email: "renansteiger@live.com", telefone:'456456498', dataNascimento: "484894",endereco:"centro do centro" },
    { id: 2, nome: 'Renan Steiger', cpf: '05831228924', email: "renansteiger@live.com", telefone:'456456498', dataNascimento: "484894",endereco:"centro do centro" },

  ];
  constructor(private router: Router, private modalService: NgbModal) {

  }

  goToDetalhesByState(customer: any) {
    this.router.navigateByUrl('/dashboard-admin/clientes/editar-cliente', {
      state: customer
    })
  }
  async deleteProduct(customer: any) {
    const confirmationModal = await this.openModal()
    if (confirmationModal) {
      console.log('foi')
    }
  }
  async openModal(): Promise<boolean> {

    const modalRef = this.modalService.open(ConfirmationComponent)
    modalRef.componentInstance.title = "Confirmação"
    modalRef.componentInstance.message = "Confirma a exclusão do cliente ?"
    return modalRef.result
  }
}
