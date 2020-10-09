# Semantisch model

## Klassen
De data die in de 3D basisvoorziening beschikbaar wordt gesteld, volgt het semantisch model zoals gedefinieerd in [[CityGML2]] en gebruikt door CityJSON (zie [Hoofdstuk 4](#formaat)). CityJSON bevat de volgende klassen waar de gebruikte BGT en BAG klassen onder vallen:

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

## Attributen

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

## Waardelijsten

### dak_type
waarde | betekenis
-------|----------
`2` |	dak met minimaal één schuin vlak
`1` |	dak bestaand uit meerdere horizontale vlakken
`0` |	dak bestaand uit een enkelvoudig horizontaal vlak
`-1` | geen hoogtepunten gevonden voor het gebouw
`-2` | geen dakvlak kon gedetecteerd worden, ook al werden hoogtepunten gevonden

### ondergronds_type
waarde | betekenis
-------|----------
`0` | gebouw is volledig bovengronds.
`1` |	gebouw is volledig ondergronds.
`2` |	gebouw bevindt zich boven ander gebouw