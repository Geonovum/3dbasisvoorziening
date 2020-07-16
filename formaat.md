# Data-formaat en beschikbaarstellen

## Data-formaat
De 3D data wordt beschikbaar gesteld in CityJSON, dit is een JSON codering van het CityGML gegevensmodel (versie 2.0.0). CityGML is een open standaard en uitwisselingsformaat om digitale 3D-modellen van steden en landschappen te definiëren. CityGML is een officiële standaard van het Open Geospatial Consortium (OGC).

<aside class='note'>Voor meer achtergrond zie: <a href='https://www.cityjson.org'>https://www.cityjson.org</a></aside>

CityJSON beschrijft zowel de geometrie als de semantiek van de meest gebruikte 3D-objecten (zoals gebouwen, wegen, rivieren, bruggen, vegetatie en stadsmeubilair) en legt daarbij de relaties tussen objecten vast. Het definieert ook verschillende standaard LoDs voor de 3D-objecten, waardoor meerdere detailniveaus van objecten voor uiteenlopende toepassingen en doeleinden kunnen worden weergegeven.

CityJSON is ontwikkeld om programmeurs optimaal te faciliteren in het lezen en editen van 3D datasets door middel van tools en API's. Omdat met name bij web- en mobiele toepassingen snelheid van belang is, is een CityJSON-object zo compact mogelijk beschreven, waarbij alle voor het object relevante informatie volgens de CityGML behouden wordt. 

<aside class='note'>Voor het visualiseren en bewerken van CityJSON files is verschillende software beschikbaar. Een lijst van software die CityJSON ondersteunt is hier te vinden: <a href='https://www.cityjson.org/software/'>https://www.cityjson.org/software/</a>.</aside> 

## Beschikbaarheid
Het 3D Basisbestand Volledig is beschikbaar via een [downloadservice op PDOK](https://www.pdok.nl/3d-basisvoorziening). Hier kunnen de bestanden gedownload worden door middel van tegels (5km x 6km) die worden aangeboden door selectie op een geïndexeerde kaart. 

Objecten die in meerdere tiles vallen zijn weggeschreven in alle tiles waartoe zij behoren. Dit is gedaan om ervoor te zorgen dat een gebruiker niet naar de tile op zoek hoeft waarin een object dat een tile-grens kruist zich bevindt. De gekozen tile-grootte sluit aan bij de kaartbladindeling van BRT (en AHN). Deze grootte van vooraf gedefinieerde tiles is een keuze waarbij soms tussen verschillende “kwaden” moet worden besloten: hoe kleiner de tile-size hoe beter de data te hanteren is. Maar hoe kleiner de tile size, hoe meer objecten er in meerdere tile vallen, dus hoe groter het datavolume.  Een kleine tile-size heeft ook als nadeel dat meer objecten over meerdere tiles heenlopen. 

Later wordt de beschikbaarheid op PDOK mogelijk uitgebreid met een 3D viewer en indien haalbaar zal de service ook downloads op basis van een willekeurig interessegebied gaan ondersteunen. Met dat laatste zal het redundant wegschrijven resulterend in enorme datavolumes zijn opgelost, omdat tiles on the fly (“on user request”) zullen worden gegenereerd.

Later dit jaar zullen ook het 3D Basisbestand Gebouwen en de 3D Hoogtestatistieken Gebouwen als downloads beschikbaar gesteld worden op PDOK.