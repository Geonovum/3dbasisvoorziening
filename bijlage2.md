# Bijlage: Attribuut specificatie van het 3D Basisbestand Gebouwen  
Het 3D Basisbestand Gebouwen bevat het gereconstrueerde 3D model van het BAG gebouw. De gebouwen die zich volledig ondergronds bevinden of boven één of meerdere andere gebouwen zweven, zijn uitgesloten van deze tabel. De ondergrondse delen van een gebouw zijn tijdens de reconstructie afgesneden en uit deze tabel verwijderd.

## Opmerkingen op geometrieën
- Kassen / warenhuizen (uit TOP10NL) en andere grote gebouwen (area >80 000 m2) zijn altijd gereconstrueerd in LoD1.2
- Voor elk dakdeel wordt de gemiddelde hoogte gebruikt.

## Opmerkingen op attributen
- Waarden van kwaliteits_klasse zijn nog niet definitief (d.w.z. dat het aantal klassen kan veranderen)

## Bekende issues
- De waarde voor h_maaiveld is incorrect (te laag) voor sommige gebouwen.
- Niet alle 3D geometrieën zijn valide. Voor sommige gebouwen zijn de faces  incorrect of niet aanwezig (percentage van invalide gebouwen is ~3.75%).
- Gebouwen met glazen daken zijn mogelijk niet realistisch gereconstrueerd.
- Sommige gebouwen ontbreken of worden slechts door een hele kleine geometrie gerepresenteerd.

## Attributen

Attribuutnaam|Beschrijving
-------------|------------
``fid``	| Feature ID (alleen uniek binnen de tabel).
``identificatie`` |	BAG identificatie
``h_maaiveld`` | NAP hoogte van gebouw
``dak_type`` | Daktype van het gebouw. Zie tabel.
``pw_datum`` | Inwinningsdatum van de point cloud.
``pw_actueel`` | Past de datum van de  point cloud bij het bouwjaar van het gebouw?
``pw_bron`` | Bron van de point cloud.
``kas_warenhuis`` | Het gebouw is een kas van warenhuis (volgens TOP10NL).
``ondergronds_type`` | Ondergrondse klasse van het gebouw. Zie tabel.
``rmse`` | Root Mean Square Error van de reconstructie.
``geom3D`` | geometrie van MultiPolygonZ, EPSG 7415.

## Waardenlijsten

### dak_type
waarde | betekenis
-------|----------
``2`` |	dak met minimaal een diagonaal vlak
``1`` |	dak bestaand uit meerdere horizontale vlakken
``0`` |	dak bestaand uit een enkelvoudig horizontal vlak
``-1`` | geen hoogtepunten gevonden voor het gebouw
``-2`` | dakvlak kon niet gedetecteerd worden, ook al werden hoogtepunten gevonden

### ondergronds_type
waarde | betekenis
-------|----------
``0`` | gebouw is volledig bovengronds.
``1`` |	gebouw is volledig ondergronds.
``2`` |	gebouw bevindt zich boven ander gebouw