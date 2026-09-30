import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <div class="snow snow-1" aria-hidden="true"></div>
      <div class="snow snow-2" aria-hidden="true"></div>

      <div class="content">
        <div class="greeting" aria-hidden="true">👋</div>

        <h1>Pozdrav, {{ userName }}!</h1>

        <p>Dobro došao na svoju Angular stranicu.</p>
      </div>
    </main>
  `,
  styles: [`
    :host {
      display: block;
    }

    main {
      position: relative;
      display: grid;
      place-items: center;
      min-height: 100vh;
      overflow: hidden;
      background:
        radial-gradient(
          circle at top,
          #830000 0%,
          #000000 55%
        );
      color: white;
      font-family: Arial, Helvetica, sans-serif;
    }

    .content {
      position: relative;
      z-index: 2;
      text-align: center;
      padding: 2rem;
    }

    .greeting {
      font-size: 4rem;
      margin-bottom: 1rem;
      animation: wave 2s ease-in-out infinite;
      transform-origin: 70% 70%;
    }

    h1 {
      margin: 0;

      font-size: clamp(2.5rem, 8vw, 6rem);
      font-weight: 900;

      background: linear-gradient(
        90deg,
        #830000,
        #BC0202,
        #FF0000,
        #BC0202,
        #830000
      );

      background-size: 300% 100%;
      background-clip: text;
      -webkit-background-clip: text;

      color: transparent;
      -webkit-text-fill-color: transparent;

      filter:
        drop-shadow(0 0 4px #830000)
        drop-shadow(0 0 10px #BC0202)
        drop-shadow(0 0 22px #FF0000);

      animation: text-gradient 4s linear infinite;
    }

    p {
      margin-top: 1.5rem;
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
    }

    .snow {
      position: absolute;
      inset: -100% 0 0 0;
      z-index: 1;
      pointer-events: none;

      background-image:
        radial-gradient(circle, white 0 2px, transparent 2.5px),
        radial-gradient(circle, white 0 3px, transparent 3.5px),
        radial-gradient(circle, white 0 1.5px, transparent 2px),
        radial-gradient(circle, white 0 2px, transparent 2.5px);

      background-size:
        120px 130px,
        190px 210px,
        90px 110px,
        160px 170px;

      background-position:
        10px 20px,
        70px 90px,
        30px 60px,
        120px 30px;

      opacity: 0.75;
    }

    .snow-1 {
      animation: snowfall 12s linear infinite;
    }

    .snow-2 {
      opacity: 0.4;
      filter: blur(1px);
      transform: scale(1.4);
      animation: snowfall 20s linear infinite;
    }

    @keyframes snowfall {
      from {
        transform: translate3d(0, -50%, 0);
      }

      to {
        transform: translate3d(40px, 0, 0);
      }
    }

    @keyframes text-gradient {
      from {
        background-position: 0% 50%;
      }

      to {
        background-position: 300% 50%;
      }
    }

    @keyframes wave {
      0%,
      100% {
        transform: rotate(0deg);
      }

      25% {
        transform: rotate(15deg);
      }

      50% {
        transform: rotate(-8deg);
      }

      75% {
        transform: rotate(12deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .snow,
      .greeting,
      h1 {
        animation: none;
      }
    }
  `],
})
export class AppComponent {
  readonly userName = environment.userName;
}
