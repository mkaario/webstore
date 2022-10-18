<!-- - ostoskorin pitää olla skrollattava -->
<!-- - ratkaise mobiilissa pitkien nimien rivittyminen kontrollien kanssa ostoskorissa (probs %-leveydet ja flex) -->
<!-- - menu ja cart -painikkeiden pitää ottaa toisensa huomioon, myöskin headerView pitää uudelleennimetä cartbuttonViewksi, sitä kun se on atm -->
<!-- - muista laittaa logiikkatsekki paikalleen kun itemeitä ei ole enää stockissa ja silloin yrittää lisätä. -->

- tarkasta semanttinen HTML + mahdollisuuksien mukaan muut accessibility jutut:
  - jokainen store item on jo h2:lla varustettu (check)
  - painikkeet on buttoneita, ei divejä etc. normaalisälää (check)
  - ei line-break entiteettejä tekstissä sekottamassa screen readereita (check)
  - semanttiset header, nav, main ja footer generoituu minne pitääkin (check)
  - article-elementin tarpeellisuus on vähän kyseenalainen tässä tapauksessa (storen toistuvissa elementeissä). Palaa tähän.
  - CLS
  - alt tekstit ja aria-labelit (check)
  - Lighthouse audit antaa 100 sekä accessibilitystä että best practisesta (check)
