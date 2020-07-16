# Semantisch model

De data wordt semantisch gemodelleerd volgens de klassen van CityJSON (zie hoofdstuk 4). CityJSON bevat de volgende klassen waar de gebruikte BGT en BAG klassen onder vallen:

- LandUse 
- GenericCityObject
- Building
- Plantcover
- Bridge
- Road
- WaterBody

De oorspronkelijke BAG en BGT attributen zijn nog aanwezig samen met enkele andere extra attributen die nodig zijn voor het proces. Zo is voor de BAG een extra attribuut gecreëerd om na validatie van de vlakken het oorspronkelijke BAG ID weer terug te zetten. 

De brugdelen van de BGT zijn samengevoegd voor het proces en komen dus niet meer overeen met de delen in de BGT. 

Voor het reconstrueren van gebouwen is gekozen voor de BAG omdat de BAG geometrien de gebouwen van bovenaf modelleren en het meest geschikt is om op te trekken op basis van hoogtes uit luchtfoto’s (die ook van bovenaf worden ingewonnen). 

BAG-panden en omringende BGT-terreinen sluiten topologisch niet altijd. Om toch een waterdicht terrein te hebben,  is het BGT pand object meegenomen als terrein (als BGT pand object gemodelleerd met een 3D vlak).
