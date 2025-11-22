import { Component } from '@angular/core';
import { CoordinateConverterComponent } from './components/coordinate-converter/coordinate-converter.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CoordinateConverterComponent],
    template: `
    <div class="app-container">
      <header class="app-header">
        <h1>RangerTrak 21</h1>
        <p>Professional Coordinate Management System</p>
      </header>
      <main class="app-main">
        <app-coordinate-converter></app-coordinate-converter>
      </main>
      <footer class="app-footer">
        <p>&copy; 2025 RangerTrak. Built with Angular v21 and Signals.</p>
      </footer>
    </div>
  `,
    styles: [`
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }

    .app-header {
      text-align: center;
      color: white;
      margin-bottom: 30px;
    }

    .app-header h1 {
      font-size: 3rem;
      margin: 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      font-weight: 700;
    }

    .app-header p {
      font-size: 1.2rem;
      margin: 10px 0 0 0;
      opacity: 0.9;
    }

    .app-main {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: calc(100vh - 200px);
    }

    .app-footer {
      text-align: center;
      color: white;
      opacity: 0.8;
      margin-top: 30px;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .app-container {
        padding: 10px;
      }

      .app-header h1 {
        font-size: 2rem;
      }

      .app-header p {
        font-size: 1rem;
      }
    }
  `]
})
export class AppComponent {
    title = 'RangerTrak 21';
}