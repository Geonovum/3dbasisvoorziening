# Bijlage: Meer informatie over het 3D Basisbestand Gebouwen  
Het 3D Basisbestand Gebouwen bevat het gereconstrueerde 3D model van het BAG gebouw. De gebouwen die zich volledig ondergronds bevinden of boven één of meerdere andere gebouwen zweven, zijn gefilterd uit deze dataset. De ondergrondse delen van een gebouw zijn tijdens de reconstructie afgesneden en verwijderd.

## Bekende issues met het 3D Basisbestand Gebouwen 
Er wordt nog actief gewerkt aan de reconstructie methode voor LoD1.3 gebouwen. Momenteel zijn de volgende issues bekend:
- De waarde voor `h_maaiveld` is incorrect (te laag) voor sommige gebouwen.
- Niet alle 3D geometrieën zijn valide. Voor sommige gebouwen kunnen een of meerdere vlakken incorrect of niet aanwezig zijn. 
- Gebouwen met een glazen dak zijn mogelijk niet realistisch gereconstrueerd.
- Sommige gebouwen ontbreken of worden slechts door een hele kleine geometrie gerepresenteerd.
