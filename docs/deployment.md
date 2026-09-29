# Deployment kontrolni popis

Prilagođeno dostavljenom VPS Admin playbooku. Ovo je frontend bez trajnih podataka.

## Priprema hosta

- Na Ubuntu VPS-u slijediti `docs/deployment.md` u repozitoriju **VPS Admin**.
  Njegov `scripts/bootstrap-ubuntu.sh` pripada panelu, ne ovoj aplikaciji.
- Provjeriti Docker Engine i Compose, korisnička prava i produkcijski worker.
- Za lokalni panel koristiti postojeći launcher; ne pokretati drugi ni `sudo npm run local`.
- Ne prekidati postojeći Apache ili druge servise. Ako su 80/443 zauzeti, postaviti
  lokalne proxy portove u `.env` panela, primjerice 8088/8443.
- Za javni VPS provjeriti DNS, firewall, slobodne portove 80/443 i HTTPS.
  Lokalni zamjenski portovi ne prenose se na VPS.

## Projekt i objava

- [x] Jedna aplikacija u zasebnoj mapi s datotekama repozitorija u korijenu.
- [x] Compose s jednim javnim servisom i healthcheckom, bez host portova/mreža/oznaka.
- [x] Manifest navodi servis, port, tehnologije i javni `USER_NAME` build argument.
- [x] Lockfile uključen; stvarni `.env` isključen iz Gita i Docker konteksta.
- [ ] Commitati i pushati projekt u zaseban GitHub repozitorij.
- [ ] Na odabranoj grani na GitHubu potvrditi prisutnost manifesta i Compose datoteke.
- [ ] Deployati instalaciju i provjeriti log, healthcheck i pozdrav u pregledniku.
- [ ] Promijeniti `USER_NAME`, kliknuti Redeploy i provjeriti novi pozdrav.
- [ ] Po potrebi otvoriti drugu instalaciju s drugim imenom i potvrditi neovisnost.
- [ ] Pushati vidljivu promjenu i provjeriti Check & deploy latest.
- [ ] Za javni VPS provjeriti DNS/TLS i dostupnost nakon ponovnog pokretanja servera.

Podatkovne migracije, backup baze i storage restore nisu primjenjivi jer ova
aplikacija nema bazu niti korisničke datoteke. GitHub i VPS provjere ne smatraju se
odrađenima samo zato što postoje ove upute.

## Izvršene lokalne provjere — 2026-09-29

- Čista instalacija `npm ci` i produkcijski `npm run build` prolaze.
- Angular je ažuriran na 21.2.24; npm audit prijavljuje 0 ranjivosti.
- Manifest i Compose prolaze stvarni validator iz lokalnog VPS Admin repozitorija.
- Docker build s `USER_NAME=Marko` prolazi; konačni image u Chromiumu prikazuje
  `Pozdrav, Marko!`, uključujući ponovno učitavanje dublje rute.
- Lokalni razvojni server prikazao je `Pozdrav, Ivan!`.
- Mobilni prikaz širine 375 px nema horizontalnog prelijevanja; nema browser grešaka.
- Nginx `/health` vraća HTTP 200 i sadržaj izgrađene aplikacije.
- Provjereni su čitanje `.env`, hrvatski znakovi, navodnici i zadana vrijednost za prazno ime.
- Git ignorira `.env`, `node_modules`, `dist` i generirani environment.

Testni server i kontejner zaustavljeni su nakon provjere. Git repozitorij je
inicijaliziran na grani `main`; commit, GitHub objava i deploy kroz panel nisu izvršeni.
