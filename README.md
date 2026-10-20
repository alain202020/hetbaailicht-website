# Website Het Baailicht

Dit is de website van wooncoöperatie Het Baailicht (in oprichting). Het zijn gewone HTML-pagina's met één stylesheet en een klein script. Er is geen framework, geen database en geen login, dus er valt weinig te hacken of bij te houden.

**Status:** conceptversie, oktober 2026. Zoekmachines worden geweerd tot de livegang.

**Stijl:** de opbouw volgt de site van wooncoöperatie De Warren: grote beeldvlakken over de hele breedte, gecentreerde koppen, ronde knoppen en rustige witte blokken ertussen. Kleuren, logo en illustraties zijn van Het Baailicht zelf. De illustraties zijn tijdelijk; eigen foto's kunnen ze later vervangen.

## Wat wel en niet op de site hoort

De site is openbaar. Zet er alleen algemene informatie op: wie we zijn, waar we voor staan en hoe je meedoet.

- **Wel:** onze visie, uitleg over wooncoöperaties, voorbeelden van andere wooncoöperaties (zoals De Warren), nieuws dat voor iedereen bedoeld is.
- **Niet:** interne informatie, zoals verslagen van vergaderingen, statuten, contributie, groepsgrootte of wie wat doet.
- **Namen en foto's van leden:** alleen met hun toestemming.

## Wat staat waar

| Bestand of map | Wat het is |
| --- | --- |
| `index.html` | Homepage |
| `over-ons.html`, `ons-plan.html`, `wooncooperatie.html`, `meedoen.html`, `nieuws.html`, `contact.html`, `privacy.html` | De andere pagina's |
| `404.html` | Wat je ziet als een link niet bestaat |
| `assets/css/style.css` | Alle opmaak. Kleuren en maten staan bovenaan als variabelen |
| `assets/js/main.js` | Het enige script: het menu op een telefoon |
| `assets/fonts/` | De lettertypes Bricolage Grotesque (koppen) en Literata (tekst), met hun licentie (OFL-1.1) |
| `assets/img/` | Het logo (voor lichte en donkere achtergrond), de beeldvlakken (`band-…`) en de drie beelden bij het verhaal van de naam (`naam-…`) |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Icoontjes voor browser en telefoon |
| `robots.txt`, `.well-known/security.txt`, `.nojekyll` | Technische bestanden. Laten staan |

## Bekijken op je eigen computer

Dubbelklik op `index.html`. De site opent in je browser.

## Iets aanpassen

- **Tekst:** open de pagina, zoek de zin en pas alleen de woorden aan. Laat alles tussen `<` en `>` staan.
- **Menu of voettekst:** die staan op elke pagina. Pas ze dus op alle pagina's op dezelfde manier aan.
- **Nieuwsbericht toevoegen:** kopieer in `nieuws.html` een blok `<article class="bericht" ...>` naar boven, geef het een nieuwe `id` en pas titel, datum en tekst aan. Zet het bericht ook in het rijtje "Nieuws" op `index.html` (daar staan de nieuwste).
- **De route van idee tot huis:** staat op twee plekken, kort op `index.html` en uitgebreid op `ons-plan.html`. Het is een algemene uitleg, niet onze eigen voortgang.
- **Conceptmelding weghalen:** zoek op `Conceptversie` (bovenaan elke pagina).
- **Een illustratie vervangen door een foto:** zet de foto in `assets/img/` (liefst als `.jpg`, ongeveer 1600 pixels breed) en verander in de pagina `band-honingraat.svg` (of `band-groen.svg`, `band-water.svg`) in de naam van je foto. De donkere sluier over het beeld blijft, zodat de tekst leesbaar blijft. Alleen foto's waarvan jullie de rechten hebben, en mensen alleen met hun toestemming.

Twijfel je? Vraag het aan Claude en geef dit bestand mee.

## Veiligheid

- Elke pagina heeft een Content-Security-Policy: de site laadt alleen bestanden van zichzelf. Zet er dus geen scripts, video's of kaarten van andere sites in (YouTube, Google Maps, statistieken) zonder eerst die regel en de privacyverklaring aan te passen.
- Zet tweestapsverificatie aan op GitHub en op TransIP. Een gestolen wachtwoord is het grootste risico.
- Zet nooit wachtwoorden of sleutels in deze map. Wat op GitHub staat, is openbaar.

## Publiceren op GitHub Pages (demo)

1. Maak op GitHub een nieuwe, openbare repository, bijvoorbeeld `hetbaailicht-website`.
2. Zet alle bestanden uit deze map erin, ook `.nojekyll` en de map `.well-known`.
3. Ga naar **Settings → Pages**. Kies bij *Build and deployment* voor **Deploy from a branch**, branch **main**, map **/ (root)**, en klik op **Save**.
4. Na een paar minuten staat de site op `https://<jouw-account>.github.io/hetbaailicht-website/`.

## Live gaan op hetbaailicht.nl

1. De groep keurt de teksten goed. Haal daarna alle conceptmeldingen weg.
2. Laat zoekmachines toe: haal op elke pagina de regel `<meta name="robots" content="noindex, nofollow">` weg en vervang de inhoud van `robots.txt` (de nieuwe tekst staat in het bestand).
3. Verifieer het domein eerst bij GitHub en voeg het daarna toe onder **Settings → Pages → Custom domain**. Die volgorde voorkomt dat iemand anders het domein kan kapen. Zie de [uitleg van GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
4. Pas bij TransIP de DNS van hetbaailicht.nl aan (gecontroleerd op 19 oktober 2026):
   - vier A-records voor `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - optioneel vier AAAA-records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - een CNAME-record voor `www` naar `<jouw-account>.github.io`
   - **laat de MX-records staan**, anders werkt info@hetbaailicht.nl niet meer
5. Zet in GitHub **Enforce HTTPS** aan zodra die optie verschijnt (dat kan tot 24 uur duren).
6. Beter vindbaar maken: voeg canonical-links, een deelafbeelding (og:image), een `sitemap.xml` en gestructureerde gegevens toe. Vraag Claude daarbij.
7. `.well-known/security.txt` verloopt op 19 oktober 2027. Vernieuw de datum vóór die tijd.

Goed om te weten: zolang de site op `github.io/hetbaailicht-website/` staat, ziet de foutpagina er bij diepe, kapotte links soms kaal uit. Op het eigen domein werkt hij gewoon.

## Getest op 20 oktober 2026

- HTML-validatie met html-validate: geen fouten
- Toegankelijkheid met axe-core (WCAG 2.2 A en AA plus best practices), op computer en telefoon: geen fouten
- Contrast van witte tekst op de beeldvlakken, gemeten op 320, 390 en 1280 pixels breed: minstens 9 : 1 (de norm is 4,5 : 1)
- Menu op telefoon, toetsenbord, "direct naar de inhoud", zonder JavaScript en met "minder beweging": werkt
- Alle interne links en ankers: werken; geen fouten of waarschuwingen in de browserconsole

## Licenties

- Lettertypes: Bricolage Grotesque en Literata, SIL Open Font License 1.1 (zie `assets/fonts/`)
- Teksten, logo en illustraties: © Het Baailicht
