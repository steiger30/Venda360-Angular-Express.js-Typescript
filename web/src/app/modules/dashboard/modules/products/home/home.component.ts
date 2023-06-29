import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/core/services/api.service';
import { ConfirmationComponent } from 'src/app/shared/modal/confirmation/confirmation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isOpen = true
  public produtos!: any[]
  constructor(private router: Router, private modalService: NgbModal, private apiService: ApiService,) {

  }

  ngOnInit(): void {
    this.populaTable()
  }
  populaTable() {
    this.apiService.getV2('/produto').subscribe(data => {
      this.produtos = data
    })
  }
  goToDetalhesByState(produto: any) {
    this.router.navigateByUrl('/dashboard/produtos/editar-produto', {
      state: produto
    })
  }
  async deleteProduct(produto: any) {
    const confirmationModal = await this.openModal()
    if (confirmationModal) {
      this.apiService.delete(`/produto/${produto.id}`).subscribe(
        res => this.populaTable(),
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
