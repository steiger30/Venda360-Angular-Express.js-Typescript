import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="loading">
      <div class="spinner"></div>
    </div>
  `,
  styles: [
    `
      .loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3949ab;
        z-index: 9999;
      }

      .spinner {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #3498db;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoadingComponent {

}
