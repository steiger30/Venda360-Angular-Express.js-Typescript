import { Component } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  selectedItem = '';
  public produtos: any[] = [
    { id: 32, nomeProduto: 'Processador core i3', preco: 999.59, descricao: "teste" },
    { id: 2, nomeProduto: 'Processador core i3', preco: 999.59, descricao: "usado" }
  ];
  search = (text$: Observable<string>): Observable<string[]> => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.items.filter(item => item.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );
  }

  formatter = (result: string) => result;
}
