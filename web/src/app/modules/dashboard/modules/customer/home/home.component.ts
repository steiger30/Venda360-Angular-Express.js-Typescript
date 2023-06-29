import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/core/services/api.service';
import { ConfirmationComponent } from 'src/app/shared/modal/confirmation/confirmation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public customers!: any[]
  constructor(private router: Router, private modalService: NgbModal, private apiService: ApiService) {

  }
  ngOnInit(): void {
    this.populaTable()
  }
  populaTable() {
    this.apiService.getV2('/cliente').subscribe(data => {
      this.customers = data
    })
  }
  goToDetalhesByState(customer: any) {
    this.router.navigateByUrl('/dashboard/clientes/editar-cliente', {
      state: customer
    })
  }
  async deleteProduct(customer: any) {
    const confirmationModal = await this.openModal()
    if (confirmationModal) {
      this.apiService.delete(`/cliente/${customer.id}`).subscribe(
        res => this.populaTable(),
        err => console.log(err)
      )
    }
  }
  async openModal(): Promise<boolean> {

    const modalRef = this.modalService.open(ConfirmationComponent)
    modalRef.componentInstance.title = "Confirmação"
    modalRef.componentInstance.message = "Confirma a exclusão do cliente ?"
    return modalRef.result
  }
}
