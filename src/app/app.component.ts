import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <div class="greeting" aria-hidden="true">👋</div>
      <h1>Pozdrav, {{ userName }}!</h1>
      <p>Dobro došao na svoju Angular stranicu.</p>
    </main>
  `,
})
export class AppComponent {
  readonly userName = environment.userName;
}
