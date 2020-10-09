# Semantisch model

## Inhoud van de 3D basisvoorziening
De data die in de 3D basisvoorziening beschikbaar wordt gesteld, volgt het semantisch model zoals gedefinieerd in CityGML [[CityGML2]] en gebruikt door CityJSON (zie [Hoofdstuk 4](#data-formaat-en-beschikbaar-stellen)). CityJSON bevat de volgende klassen waar de gebruikte BGT en BAG klassen onder vallen:

- `LandUse`
- `GenericCityObject`
- `Building`
- `Plantcover`
- `Bridge`
- `Road`
- `WaterBody`

De oorspronkelijke BAG en BGT gegevens zijn nog aanwezig samen met enkele andere extra attributen die nodig zijn voor het ontwikkelproces van de 3D bestanden. Zo is voor de BAG een extra attribuut gecreëerd om na controle van de vlakken het oorspronkelijke BAG ID opnieuw toe te voegen aan elk object. 

De brugdelen van de BGT zijn samengevoegd tot één brugobject en komen dus niet meer overeen met de afzonderlijke delen van de brug, zoals die in de BGT zijn opgenomen. 

Voor het maken van de 3D geometrie van gebouwen is de BAG als basis genomen, omdat de BAG geometrieën de gebouwen van bovenaf modelleren en het meest geschikt zijn om op te trekken op basis van hoogtes uit luchtfoto’s (die ook van bovenaf worden ingewonnen). 

BAG-panden en omringende BGT-terreinen sluiten topologisch niet altijd perfect op elkaar aan. Hierdoor kunnen gaten ontstaan in het terrein model, wat kan leiden tot een onjuiste 3D-reconstructie van een gebouw. Om dit op te lossen is de BGT representatie van de panden toegevoegd aan de terreinobjecten. Hierdoor ontstaat een gesloten terreinmodel.

## Attribuutspecificatie van het 3D Basisbestand Gebouwen

In het 3D Basisbestand Gebouwen komen de volgende attributen voor:

Attribuutnaam|Beschrijving
-------------|------------
`fid`	| Feature ID (alleen uniek binnen de tabel).
`identificatie` |	BAG identificatie
`h_maaiveld` | NAP hoogte van gebouw
`dak_type` | Daktype van het gebouw. Zie onderstaande tabel.
`pw_datum` | Inwinningsdatum van de puntenwolk.
`pw_actueel` | Past de datum van de puntenwolk bij het bouwjaar van het gebouw?
`pw_bron` | Bron van de puntenwolk.
`reconstructie_methode` | Gebruikte reconstructie methode.
`versie_methode` | Versie nummer van de gebruikte reconstructie methode.
`lod` |	Level of Detail (detailniveau) van het gebouw.
`kas_warenhuis` | Het gebouw is een kas of warenhuis (volgens TOP10NL).
`ondergronds_type` | Ondergrondse klasse van het gebouw. Zie onderstaande tabel.
`rmse` | Root Mean Square Error van de reconstructie.

De attributen `dak_type` en `ondergronds_type` hebben als inhoud een gelimiteerde waardelijst. Zie daarvoor de onderstaande tabellen.

### Waardelijst dak_type
waarde | betekenis
-------|----------
`2` |	dak met minimaal één schuin vlak
`1` |	dak bestaand uit meerdere horizontale vlakken
`0` |	dak bestaand uit een enkelvoudig horizontaal vlak
`-1` | geen hoogtepunten gevonden voor het gebouw
`-2` | geen dakvlak kon gedetecteerd worden, ook al werden hoogtepunten gevonden

### Waardelijst ondergronds_type
waarde | betekenis
-------|----------
`0` | gebouw is volledig bovengronds.
`1` |	gebouw is volledig ondergronds.
`2` |	gebouw bevindt zich boven ander gebouw

## Attribuutspecificatie van het product 3D Hoogtestatistieken Gebouwen
In het product 3D Hoogtestatistieken Gebouwen komen de volgende attributen voor:

Attribute Name | `lod13_2d` | `lod13_3d` | Description
---------------|------------|------------|------------
`fid`|x|x|Identificatie (ID) van het geo-object (alleen uniek binnen de tabel).
`identificatie`|x|x|BAG identificatie.
`pand_deel_id`|x|	|ID van een onderdeel van een pand (BuildingPart).
`dd_id`|x| |ID van een dakonderdeel (Roof part).
`h_maaiveld`|x|x|NAP hoogte boven maaiveld (groundlevel). Berekend als het 5e percentiel van de grondpunten die gevonden zijn binnen een 4 meter radius van het gebouw. Eenheid: meter
`dd_h_dak_min`|x|	|NAP hoogte op dakniveau. Berekend als het minimum van alle hoogtepunten op het corresponderende deel van het dak. Eenheid: meter
`dd_h_dak_50p`|x|	|NAP hoogte op dakniveau. Berekend als het mediaan van alle hoogtepunten op het corresponderende deel van het dak. Eenheid: meter
`dd_h_dak_70p`|x|	|NAP hoogte op dakniveau. Berekend als het 70ste percentiel van alle hoogtepunten op het corresponderende deel van het dak. Eenheid: meter
`dd_h_dak_max`|x|	|NAP hoogte op dakniveau. Berekend als het maximum van alle hoogtepunten op het corresponderende deel van het dak. Eenheid: meter
`dd_data_coverage`|x|	|Oppervlakte van het deel van het dak dat bedekt is met AHN3 punten.
`dak_type`|x|x|Het soort dak van het gebouw. Zie [tabel met waarden](#waardelijst-dak_type).
`pw_datum`|x|x|Inwinningsdatum van de puntenwolk. In het geval van AHN3 is dit de veronderstelde inwinningsdatum, die wordt vastgesteld op de 1e december in het jaar voorafgaand aan het officieel gerapporteerde inwinjaar van een specifieke AHN3 tegel.
`pw_actueel`|x|x|Komt de datum van de puntenwolk overeen met het bouwjaar van het gebouw?
`pw_bron`|x|x|Bron van de puntenwolk.
`reconstructie_methode`|x|x|Reconstructiemethode van het gebouwmodel.
`versie_methode`|x|x|Versie van de gebouwreconstructiemethode.
`kas_warenhuis`|x|x|Het gebouw is een kas of warenhuis (volgens Top10NL).
`ondergronds_type`|x|x|Ondergrondklasse van het gebouw. Zie [tabel met waarden](#waardelijst-ondergronds_type). 
`kwaliteits_klasse`|x|x|Indicatie van de mate van zekerheid dat de reconstructie realistisch is, vergeleken met het gebouw in de werkelijkheid. Zie [opmerking](#opmerkingen-over-attributen). 
`rmse`|	|x|Gemiddelde kwadratische fout (RMSE) tussen de puntenwolk en het LoD1.3 model.
`geom`|x|x|Geometie. Voor `lod13_2d` is dit de 2D dakonderdeel geometrie (Polygon, EPSG 28992). Voor `lod13_3d` is dit de 3D geometrie van het gebouw (MultiPolygonZ, EPSG 7415).
`lod`|x|x|Het Level of Detail (detailniveau) van de gereconstrueerde geometrie. De defaultwaarde is 1.3, maar in sommige gevallen was dit niet mogelijk en is een LoD1.2 geometrie geproduceerd. 
