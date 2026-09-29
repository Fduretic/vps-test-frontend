# Angular pozdrav

Jednostavna Angular aplikacija prikazuje **Pozdrav, Ivan!**. Ime se čita iz
varijable `USER_NAME`. Projekt je izveden iz VPS Admin Angular predloška.

## Lokalno pokretanje

Potreban je Node.js 22.12+ na grani 22.x ili Node.js 24.x
([Angular kompatibilnost](https://angular.dev/reference/versions)).

```bash
cp .env.example .env
npm ci
npm start
```

Otvori `http://localhost:4200`. Za drugi port: `npm start -- --port 4300`.
U `.env` promijeni `USER_NAME=Ivan`, primjerice u `USER_NAME=Marko`, te ponovno
pokreni `npm start`. Ako varijabla nije zadana ili sadrži samo razmake,
koristi se `Ivan`. Okolinska varijabla procesa ima prednost pred `.env`.

`npm start` i `npm run build` automatski generiraju
`src/environments/environment.ts`. Ta se datoteka ne uređuje ručno i nije
namijenjena Gitu. Angular komponenta koristi `environment.userName`.

```bash
npm run build
```

Produkcijske datoteke nalaze se u `dist/browser/`.

## VPS Admin

1. Objavi sadržaj ove mape u zaseban GitHub repozitorij. U korijenu moraju biti
   `vps-admin.yaml`, `compose.yaml`, `Dockerfile` i `package-lock.json`.
2. U VPS Adminu dodaj projekt s tim repozitorijem i odabranom Git granom.
3. Kreiraj instalaciju, upiši domenu (primjerice `pozdrav.localhost`, bez porta)
   i u **Environment** postavi `USER_NAME`.
4. Pokreni deploy i otvori poveznicu instalacije. Ako lokalni proxy koristi port
   8088, adresa je `http://pozdrav.localhost:8088/`.
5. Za promjenu imena spremi novu vrijednost pa klikni **Redeploy**.
   **Check & deploy latest** pokreće build samo kada postoji novi Git commit.

`USER_NAME` je javna build varijabla, proslijeđena kroz Compose `build.args`.
Ime se ugrađuje u JavaScript i vidljivo je posjetiteljima; tu ne stavljaj tajne.
Angular build konfiguracija je opisana u [službenoj dokumentaciji](https://angular.dev/tools/cli/environments).
Svaka instalacija može imati svoje ime iz istog repozitorija.

Nginx sluša na portu 80 u kontejneru. Compose ne objavljuje host portove i ne
definira mreže ili Traefik oznake; njima upravlja VPS Admin. Healthcheck provjerava
da Nginx može poslužiti izgrađeni `index.html`. Baza, backend, migracije, trajna
pohrana i OpenAPI nisu potrebni ovoj aplikaciji.

`.env`, generirani environment, ovisnosti i build izlaz isključeni su iz Gita i
Docker build konteksta. Commitaj lockfile i koristi `npm ci`.

Kontrolni popis i status provjera: [docs/deployment.md](docs/deployment.md).
