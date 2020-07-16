# Methodes van inwinning, voorbewerking en reconstructie

Voor het reconstrueren van de 3D data is gebruik gemaakt van 2D geometrieën uit de BAG, BGT en van hoogte die gebaseerd is op puntenwolken. Voor het vervaardigen van puntenwolken worden luchtfoto’s uit de winter van 2018 gebruikt. Aangezien bronhouders van de BGT en de BAG ook gebruik maken van deze luchtfoto’s om hun bestanden te actualiseren, hebben we een latere peildatum voor de BAG en BGT gekozen. Daarmee streven we naar een zo klein mogelijk actualiteitsverschil tussen de hoogtepunten en 2D geometrieën, zie Tabel 1. 

**Tabel 1:** actualiteit en toepassing van de brondata

Brondata|Toepassing|Peildatum / inwinperiode
--------|----------|------------------------
BGT|Terrein|01-01-2019
BAG|Gebouwen|01-01-2019
Luchtfoto's|hoogtepunten|winter 2018

## Voorbewerking van BAG en BGT
Om de geometrieën van de BAG en de BGT als input te kunnen gebruiken voor het automatische reconstructie proces zijn een aantal voorbewerkingen uitgevoerd om de objecten te valideren en daarnaast te verrijken met informatie of geometrisch te integreren met omliggende objecten. Hierbij moet worden opgemerkt dat niet alle geometrische bewerkingen correcties zijn op de BGT, maar dat het gaat om het geschikt maken van de data voor het 3D reconstructieproces. Hierdoor zijn de 2D objecten niet altijd meer dezelfde als in de oorspronkelijke BGT en BAG. 

De belangrijkste geometrische bewerkingen zijn:
- het verwijderen van self-intersecties en arcs
- het verwijderen van dubbele objecten waarbij zoveel mogelijk het nieuwste object behouden wordt.
- het snappen van objecten die elkaar raken (hoek, overlap of gedeelde grens) waarbij eventueel datapunten worden toegevoegd. Dit wordt gedaan om gaten in - het BGT maaiveld dicht te krijgen, maar ook om in de BAG aansluitende panden ook werkelijk te laten aansluiten.
- het uitlijnen van datapunten op een grid ten behoeve van de nauwkeurigheid van alle validaties. Alle resulterende coördinaten worden in mm opgeslagen

Om de objecten te integreren met hun omgeving worden twee bewerkingen uitgevoerd: 
- De topologie tussen verschillende hoogteniveaus wordt hersteld om 3d reconstructie mogelijk te maken. Hierbij worden waar nodig datapunten op gedeelde grenzen en bij kruisende objecten geïntroduceerd. Dit speelt met name voor overbruggingsdelen en bijzondere objecten.
- Topologische fouten die problemen kunnen veroorzaken in het reconstructieproces, zoals overlappingen, gaten, en zgn. spikes, worden opgespoord en automatisch gecorrigeerd. Hierbij worden ongeclassificeerde objecten gecreëerd voor gaten in de BGT.

<aside class='note'>
Voor een goede 3D-reconstructie moeten de overbruggingssituaties voldoen aan de standaard die voor de BGT is voorgeschreven, zie (http://imgeo.geostandaarden.nl/def/imgeo-object/overbruggingsdeel/overbruggingsdeel). Bovendien moeten de wegdelen op bruggen, die zijn gemodelleerd boven het maaiveld, aansluiten op de wegdelen die op maaiveldhoogte zijn gemodelleerd.</aside>

## Het genereren van de puntenwolken
Voor de reconstructie van 2D naar 3D is hoogte nodig voor de hoogtebepaling van BAG-panden en voor de hoogtebepaling van de maaiveld objecten (BGT). Deze hoogte wordt door middel van [semi-global matching](https://en.wikipedia.org/wiki/Semi-global_matching) verkregen. Deze techniek wordt toegepast op de stereofoto’s die ingewonnen worden in de [landelijke voorziening beeldmateriaal](https://www.beeldmateriaal.nl/). Deze voorziening koopt voor de overheidspartijen in Nederland landsdekkend beeldmateriaal in voor het bijhouden van de basisregistraties BAG, BGT en BRT. Voor de hoogtebepaling uit beeldmateriaal worden de stereofoto’s van de wintervlucht gebruikt. 

**Tabel 2:** kenmerken stereofoto’s 2018

Kenmerk|waarde|toelichting
-------|------|-----------
Ground Sampling Distance (GSD)|10cm| 
Overlap in de strook|60%| 
Overlap tussen de stroken|30%| 
Vlieghoogte|+/- 1700m|groot deel van Nederland
 |+/-  4300m|westelijk Nederland rondom Schiphol

De nauwkeurigheid van de resulterende hoogte wordt onder andere door de overlap in de strook en de vlieghoogte bepaald. Voor punten die worden gegenereerd uit luchtfoto’s ingewonnen op een vlieghoogte van 1700m is dat 15cm; voor punten gebaseerd op beelden ingewonnen op een vlieghoogte van 4300m is dat 35cm (sigma-1).

<aside class='note'>Meer technische achtergronden kunnen gevonden worden in de artikelen: <a href='https://pdfs.semanticscholar.org/1691/09ca918dc5283a0ecf09ac38f7568fc6a0a1.pdf'>https://pdfs.semanticscholar.org/1691/09ca918dc5283a0ecf09ac38f7568fc6a0a1.pdf</a> en <a href='https://en.wikipedia.org/wiki/Computer_stereo_vision'>https://en.wikipedia.org/wiki/Computer_stereo_vision</a>.</aside>

In een tweede stap wordt er een Digital Surface Model (DSM) gegenereerd op basis van de verkregen puntenwolken. Dit 2.5D model bevat voor elke gedefinieerde pixel in het grid één hoogtewaarde. Deze waarde wordt bepaald door de meest betrouwbare hoogste waarde te nemen. Gekozen is voor een pixelmaat van 20cm. Dus elke m2 bevat maximaal 25 punten. De nodata gebieden worden niet geïnterpoleerd.

Als laatste stap wordt het DSM geclassificeerd in de klassen gebouw, water, bruggen, hoge vegetatie, ground en not classified (de rest). Hierbij wordt voor water en bruggen gebruik gemaakt van BGT polygonen, voor gebouwen van BAG polygonen. De classificatie van hoge vegetatie maakt gebruikt van de infrarood gegevens van de lage resolutie zomervlucht van de LV Beeldmateriaal. Wanneer de ground detectie niet in staat is om maaiveld te detecteren in bosgebieden wordt data uit het AHN gebruikt. De klasse ground (ook wel aan te duiden met Digital Terrain Model (DTM)) wordt uitgedund naar 4 punten per m2.

Nu is de puntenwolk geschikt om in de reconstructie te gebruiken met 3Dfier om van 2D geometrieën uit de BAG/BGT 3D versies te genereren.

## 3D reconstructie met 3dfier
Voor de hoogte-toekenning aan de BGT maaiveld objecten gebruiken we de open source software [3dfier](http://tudelft3d.github.io/3dfier/). Deze software is ontwikkeld in een samenwerking tussen Kadaster en de 3D geoinformation group van de TU Delft en kan voor verschillende scenario’s ingezet worden. 

<aside class='note'>De gebruikte configuratie voor de reconstructie van het 3D Basisbestand zijn opgenomen in de bijlage.</aside>

De software genereert automatisch 3D-representaties op basis van 2D-topografie en puntenwolken en houdt daarbij ook rekening met de semantiek van elke polygoon. De opgetrokken polygonen worden aan elkaar "gestikt" zodat één digitaal oppervlaktemodel wordt gereconstrueerd.

<aside class='note'>Zie voor verdere details <a href='http://tudelft3d.github.io/3dfier/'>http://tudelft3d.github.io/3dfier/</a></aside>

<figure>
    <figcaption>een landsdekkend waterdicht terreinmodel met gebouwvolumes</figcaption>
    <img src="media/image2.png"/>
</figure>

Hiermee wordt een landsdekkend waterdicht 3D terreinmodel verkregen, zonder overlap en gaten, waarbij BGT-gebouwen geïntegreerd zijn in het maaiveld om dit “dicht te rekenen”. Dit 3D terreinmodel kan vervolgens worden gebruikt als input voor bijvoorbeeld simulatiesoftware.

De LoD1.2 gebouwen zijn gereconstrueerd op basis van hun BAG geometrie en de 3D puntenwolk, waarbij een maximale en minimale hoogte is gebruikt om een volume te construeren. De maximale hoogte is bepaald op basis van het 90 percentiel van de hoogtepunten die binnen een BAG geometrie vallen. Om te voorkomen dat gebouwen boven het maaiveld zweven wordt het laagste punt in het maaiveld dat door de BAG geometrie geraakt wordt gebruikt voor de bepaling van de hoogte van het grondvlak. 
