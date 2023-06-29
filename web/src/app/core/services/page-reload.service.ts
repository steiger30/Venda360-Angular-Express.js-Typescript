import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageReloadService {
  private reloadSubject = new BehaviorSubject<boolean>(false);
  public reload$ = this.reloadSubject.asObservable();
  constructor() {
    window.addEventListener('beforeunload', () => {
      this.reloadSubject.next(true);
    });
  }
}
