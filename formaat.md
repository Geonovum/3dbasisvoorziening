# Data-formaat en beschikbaarstellen

## Data-formaat
De 3D data wordt beschikbaar gesteld in [CityJSON](https://www.cityjson.org). Dit is een JSON codering van het [CityGML](https://www.ogc.org/standards/citygml) gegevensmodel (versie 2.0.0). CityGML is een open standaard en uitwisselingsformaat om digitale 3D-modellen van steden en landschappen te definiëren. CityGML is een officiële standaard van het Open Geospatial Consortium (OGC).

CityJSON beschrijft zowel de geometrie als de semantiek van de meest gebruikte 3D-objecten (zoals gebouwen, wegen, rivieren, bruggen, vegetatie en stadsmeubilair) en legt daarbij de relaties tussen objecten vast. Het definieert ook verschillende standaard LoDs voor de 3D-objecten, waardoor meerdere detailniveaus van objecten voor uiteenlopende toepassingen en doeleinden kunnen worden weergegeven.

CityJSON is ontwikkeld om programmeurs optimaal te faciliteren in het lezen en bewerken van 3D datasets door middel van tools en APIs. Omdat met name bij web- en mobiele toepassingen snelheid van belang is, is een CityJSON-object zo compact mogelijk beschreven, waarbij alle voor het object relevante informatie conform CityGML behouden blijft. 

<aside class='note'>Voor het visualiseren en bewerken van CityJSON files is verschillende software beschikbaar. Een lijst van software die CityJSON ondersteunt is hier te vinden: <a href='https://www.cityjson.org/software/'>https://www.cityjson.org/software/</a>.</aside> 

## Beschikbaarheid
Het 3D Basisbestand Volledig is beschikbaar via een [downloadservice op PDOK](https://www.pdok.nl/3d-basisvoorziening). Hier kunnen de bestanden gedownload worden in de vorm van tegels (5km x 6km) die worden aangeboden ter selectie op een geïndexeerde kaart. 

Objecten die in meerdere tegels vallen zijn weggeschreven in alle tegels waartoe zij behoren. Dit is gedaan om ervoor te zorgen dat een gebruiker niet naar de tegel hoeft te zoeken waarin een object dat een tegelgrens kruist, zich bevindt. De gekozen tegelgrootte sluit aan bij de kaartbladindeling van BRT (en AHN). 

Deze grootte van vooraf gedefinieerde tegels is een keuze met voor- en nadelen: hoe kleiner de tegelgrootte, des te kleiner het bestand, waardoor  de data beter te hanteren is. Maar bij een  kleine tegelgrootte vallen er meer objecten in meerdere tegels, waardoor het totale datavolume dat wordt aangeboden groter is. Een kleine tegelgrootte heeft daarnaast als nadeel dat meer objecten over meerdere tegels heen lopen.

In een later stadium wordt de beschikbaarheid op PDOK mogelijk uitgebreid met een 3D viewer. Indien haalbaar zal de service ook downloads op basis van een willekeurig interessegebied gaan ondersteunen. Met dat laatste zal het redundant wegschrijven van tegels, resulterend in enorme datavolumes, zijn opgelost omdat tegels on the fly (i.e. op het moment van opvragen) zullen worden gegenereerd.

In de loop van 2020 zullen ook het 3D Basisbestand Gebouwen en de 3D Hoogtestatistieken Gebouwen als downloads beschikbaar gesteld worden op PDOK.