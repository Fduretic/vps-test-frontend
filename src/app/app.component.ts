import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="scene">
      <div class="sun" aria-hidden="true"></div>
      <div class="mountain mountain-back" aria-hidden="true"></div>
      <div class="mountain mountain-front" aria-hidden="true"></div>

      <div class="vines" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <section class="board">
        <div class="board__top">
          <span class="status-dot"></span>
          <span>HYPERION // EXPEDITION BOARD</span>
          <span class="board__id">KLM-5895</span>
        </div>

        <div class="cargo">
          <span class="cargo__label">CONTAINER 01</span>

          <div class="greeting" aria-hidden="true">
            🌿
          </div>

          <p class="eyebrow">KILIMANJARO BASE SIGNAL</p>

          <h1>
            Pozdrav,
            <span>{{ userName }}</span>
          </h1>

          <p class="description">
            Signal je aktivan. Džungla diše, vrh je iznad oblaka,
            a ekspedicijska ploča čeka sljedeću komandu.
          </p>

          <div class="controls">
            <button type="button">
              ENTER BOARD
            </button>

            <div class="coordinates">
              <span>LAT 03°04′S</span>
              <span>LON 37°21′E</span>
            </div>
          </div>
        </div>

        <div class="board__footer">
          <span>TARZAN LINK // ACTIVE</span>
          <span>ALT 5,895 M</span>
        </div>
      </section>

      <div class="grain" aria-hidden="true"></div>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }

    * {
      box-sizing: border-box;
    }

    .scene {
      --black: #080a07;
      --green: #13251a;
      --green-light: #284b32;
      --yellow: #ffd900;
      --yellow-soft: #ffe86b;
      --cream: #f4f0d0;

      position: relative;
      min-height: 100vh;
      overflow: hidden;

      display: grid;
      place-items: center;

      padding: 2rem;

      background:
          radial-gradient(
              circle at 70% 20%,
              rgba(255, 217, 0, 0.08),
              transparent 28%
          ),
          linear-gradient(
              180deg,
              #0f1d14 0%,
              #0b120d 45%,
              #080a07 100%
          );

      color: var(--cream);
      font-family:
          "Courier New",
          ui-monospace,
          monospace;
    }

    .sun {
      position: absolute;
      top: 8%;
      right: 12%;

      width: 220px;
      aspect-ratio: 1;

      border-radius: 50%;

      background:
          radial-gradient(
              circle,
              #fff6a3 0%,
              #ffd900 30%,
              rgba(255, 217, 0, 0.25) 65%,
              transparent 70%
          );

      filter: blur(1px);
      opacity: 0.9;

      animation: sun-pulse 5s ease-in-out infinite;
    }

    .mountain {
      position: absolute;
      bottom: -12vh;
      left: 50%;

      width: min(90vw, 1100px);
      height: 60vh;

      transform: translateX(-50%);

      clip-path: polygon(
          0% 100%,
          18% 70%,
          30% 75%,
          50% 5%,
          66% 66%,
          79% 62%,
          100% 100%
      );
    }

    .mountain-back {
      background: #17281c;
      opacity: 0.72;
      transform: translateX(-48%) scale(1.18);
    }

    .mountain-front {
      background:
          linear-gradient(
              115deg,
              #0b110d 0%,
              #13251a 55%,
              #070907 100%
          );

      filter: drop-shadow(0 -20px 60px rgba(0, 0, 0, 0.35));
    }

    .mountain-front::before {
      content: '';

      position: absolute;

      inset: 0;

      background:
          linear-gradient(
              145deg,
              transparent 0 35%,
              rgba(255, 255, 255, 0.16) 36% 41%,
              transparent 42%
          );

      clip-path: polygon(
          43% 0%,
          50% 4%,
          57% 25%,
          48% 20%
      );
    }

    .vines {
      position: absolute;
      inset: 0;

      pointer-events: none;
    }

    .vines span {
      position: absolute;
      top: -80px;

      width: 8px;
      height: 45vh;

      border-radius: 999px;

      background:
          linear-gradient(
              180deg,
              #284b32,
              #13251a
          );

      transform-origin: top;

      animation: vine-sway 5s ease-in-out infinite;
    }

    .vines span::after {
      content: '';

      position: absolute;

      width: 45px;
      height: 20px;

      left: -5px;
      top: 55%;

      border-radius: 100% 0 100% 0;

      background: #315f3e;

      transform: rotate(35deg);
    }

    .vines span:nth-child(1) {
      left: 7%;
      height: 40vh;
    }

    .vines span:nth-child(2) {
      left: 16%;
      height: 30vh;
      animation-delay: -1.5s;
    }

    .vines span:nth-child(3) {
      right: 9%;
      height: 36vh;
      animation-delay: -3s;
    }

    .board {
      position: relative;
      z-index: 5;

      width: min(820px, 100%);

      border:
          1px solid
          rgba(255, 217, 0, 0.32);

      background:
          linear-gradient(
              180deg,
              rgba(12, 16, 12, 0.94),
              rgba(6, 8, 6, 0.96)
          );

      box-shadow:
          0 30px 100px rgba(0, 0, 0, 0.55),
          0 0 60px rgba(255, 217, 0, 0.06);

      backdrop-filter: blur(14px);
    }

    .board__top,
    .board__footer {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      min-height: 46px;
      padding: 0.75rem 1rem;

      font-size: 0.72rem;
      letter-spacing: 0.14em;

      color: #d3ca7b;

      background:
          repeating-linear-gradient(
              -45deg,
              rgba(255, 217, 0, 0.025) 0 8px,
              transparent 8px 16px
          );
    }

    .board__top {
      border-bottom:
          1px solid
          rgba(255, 217, 0, 0.18);
    }

    .board__footer {
      justify-content: space-between;

      border-top:
          1px solid
          rgba(255, 217, 0, 0.18);
    }

    .board__id {
      margin-left: auto;

      color: var(--yellow);
    }

    .status-dot {
      width: 8px;
      height: 8px;

      border-radius: 50%;

      background: var(--yellow);

      box-shadow:
          0 0 8px var(--yellow),
          0 0 18px rgba(255, 217, 0, 0.5);

      animation: blink 1.8s ease-in-out infinite;
    }

    .cargo {
      position: relative;

      padding:
          clamp(2rem, 6vw, 4.5rem);

      overflow: hidden;
    }

    .cargo::before {
      content: '';

      position: absolute;
      inset: 0;

      pointer-events: none;

      background:
          repeating-linear-gradient(
              90deg,
              transparent 0 45px,
              rgba(255, 255, 255, 0.015) 45px 47px
          );
    }

    .cargo__label {
      position: absolute;
      top: 1rem;
      right: 1rem;

      padding: 0.35rem 0.55rem;

      border:
          1px solid
          rgba(255, 217, 0, 0.35);

      color: var(--yellow);

      font-size: 0.65rem;
      letter-spacing: 0.15em;
    }

    .greeting {
      position: relative;

      display: inline-grid;
      place-items: center;

      width: 70px;
      height: 70px;

      margin-bottom: 1.8rem;

      border:
          1px solid
          rgba(255, 217, 0, 0.35);

      font-size: 2.4rem;

      background:
          rgba(255, 217, 0, 0.04);

      box-shadow:
          inset 0 0 30px
          rgba(255, 217, 0, 0.05);

      animation: float 4s ease-in-out infinite;
    }

    .eyebrow {
      margin: 0 0 0.9rem;

      color: var(--yellow);

      font-size: 0.72rem;
      letter-spacing: 0.24em;
    }

    h1 {
      margin: 0;

      max-width: 12ch;

      font-family:
          Impact,
          Haettenschweiler,
          "Arial Narrow Bold",
          sans-serif;

      font-size:
          clamp(3rem, 9vw, 6.8rem);

      line-height: 0.9;
      letter-spacing: 0.01em;
      text-transform: uppercase;

      color: var(--cream);
    }

    h1 span {
      display: block;

      color: transparent;

      -webkit-text-stroke:
          2px var(--yellow);

      text-shadow:
          0 0 20px
          rgba(255, 217, 0, 0.22);
    }

    .description {
      max-width: 580px;

      margin: 2rem 0 0;

      color: rgba(244, 240, 208, 0.65);

      font-size: 0.95rem;
      line-height: 1.8;
    }

    .controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;

      margin-top: 2.5rem;
    }

    button {
      position: relative;

      padding: 0.95rem 1.4rem;

      border: 0;

      background: var(--yellow);

      color: #111;

      font: inherit;
      font-size: 0.76rem;
      font-weight: 900;
      letter-spacing: 0.12em;

      cursor: pointer;

      transition:
          transform 160ms ease,
          box-shadow 160ms ease;
    }

    button:hover {
      transform: translateY(-3px);

      box-shadow:
          0 10px 30px
          rgba(255, 217, 0, 0.22);
    }

    button:active {
      transform: translateY(0);
    }

    .coordinates {
      display: grid;
      gap: 0.35rem;

      text-align: right;

      color: #8b936d;

      font-size: 0.68rem;
      letter-spacing: 0.14em;
    }

    .grain {
      position: absolute;
      inset: 0;
      z-index: 20;

      pointer-events: none;

      opacity: 0.2;

      background-image:
          repeating-radial-gradient(
              circle at 0 0,
              transparent 0,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 2px
          );

      background-size: 5px 5px;

      mix-blend-mode: overlay;
    }

    @keyframes vine-sway {
      0%,
      100% {
        transform: rotate(2deg);
      }

      50% {
        transform: rotate(-4deg);
      }
    }

    @keyframes blink {
      0%,
      100% {
        opacity: 0.35;
      }

      50% {
        opacity: 1;
      }
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(0) rotate(-2deg);
      }

      50% {
        transform: translateY(-8px) rotate(2deg);
      }
    }

    @keyframes sun-pulse {
      0%,
      100% {
        transform: scale(1);
        opacity: 0.75;
      }

      50% {
        transform: scale(1.06);
        opacity: 1;
      }
    }

    @media (max-width: 650px) {
      .scene {
        padding: 1rem;
      }

      .cargo {
        padding:
            4.5rem 1.5rem
            2rem;
      }

      .controls {
        align-items: flex-start;
        flex-direction: column;
      }

      .coordinates {
        text-align: left;
      }

      .board__top {
        flex-wrap: wrap;
      }

      .board__id {
        width: 100%;
        margin-left: 1.5rem;
      }

      h1 span {
        -webkit-text-stroke-width: 1px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
      }
    }
  `],
})
export class AppComponent {
  readonly userName = environment.userName;
}
