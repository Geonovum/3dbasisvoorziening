# Semantisch model

De data die in de 3D basisvoorziening beschikbaar wordt gesteld, volgt het semantisch model zoals gedefinieerd in [CityGML 2.0](https://www.ogc.org/standards/citygml) en gebruikt door CityJSON (zie [Hoofdstuk 4](#formaat)). CityJSON bevat de volgende klassen waar de gebruikte BGT en BAG klassen onder vallen:

- `LandUse`
- `GenericCityObject`
- `Building`
- `Plantcover`
- `Bridge`
- `Road`
- `WaterBody`

De oorspronkelijke BAG en BGT gegevens zijn nog aanwezig samen met enkele andere extra attributen die nodig zijn voor het ontwikkelproces van de 3D bestanden. Zo is voor de BAG een extra attribuut gecreëerd om na controle van de vlakken het oorspronkelijke BAG ID opnieuw toe te voegen aan elk object. 

De brugdelen van de BGT zijn samengevoegd tot één brugobject en komen dus niet meer overeen met de afzonderlijke delen van de brug, zoals die in de BGT zijn opgenomen. 

Voor het maken van de 3D geometrie van gebouwen is de BAG als basis genomen, omdat de BAG geometriën de gebouwen van bovenaf modelleren en het meest geschikt zijn om op te trekken op basis van hoogtes uit luchtfoto’s (die ook van bovenaf worden ingewonnen). 

BAG-panden en omringende BGT-terreinen sluiten topologisch niet altijd perfect op elkaar aan. Hierdoor kunnen gaten ontstaan in het terrein model, wat kan leiden tot een onjuiste 3D-reconstructie van een gebouw. Om dit op te lossen is de BGT representatie van de panden toegevoegd aan de terreinobjecten. Hierdoor ontstaat een gesloten terreinmodel.
