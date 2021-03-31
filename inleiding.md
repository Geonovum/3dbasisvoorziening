# Inleiding

Driedimensionale (3D) stadsmodellen en 3D terreinmodellen worden steeds meer gebruikt bij het plannen en beheren van onze leefomgeving. Recente ontwikkelingen in technieken voor het inwinnen van 3D-hoogte-informatie, LiDAR en fotogrammetrie, hebben het relatief eenvoudig gemaakt om 3D-stadsmodellen automatisch te reconstrueren en deze data te gebruiken voor bijvoorbeeld planning en omgevingssimulaties. 

De huidige 3D stadsmodellen die door verschillende organisaties worden geproduceerd, verschillen echter nog steeds sterk vanwege verschillen in acquisitiemethoden, verschillen in applicaties waarvoor de 3D-gegevens worden ingewonnen, verschillen in datastructuren, bestandsformaten, enzovoort.

Daarom verschillen 3D-stadsmodellen (die meer omvatten dan 3D-gebouwen) vaak sterk van elkaar. Bovendien is er doorgaans geen plan om de eenmaal gegenereerde gegevens actueel te houden. Het gevolg is dat 3D-stadsmodellen geen deel uitmaken van de reguliere gegevensinfrastructuren en deze gegevens worden daardoor nog steeds onvoldoende gebruikt in besluitvormingsprocessen van de overheid.

Om actuele 3D gegevens over grootschalige (dat wil zeggen, zeer gedetailleerde) topografie uniform beschikbaar te hebben voor diverse overheidsprocessen, zou deze, vanuit technisch oogpunt, het beste kunnen worden ingewonnen als onderdeel van de [Basisregistratie Grootschalige Topografie](https://www.geobasisregistraties.nl/basisregistraties/grootschalige-topografie) (BGT) en [Basisregistratie Adressen en Gebouwen](https://www.geobasisregistraties.nl/basisregistraties/adressen-en-gebouwen) (BAG) onder de verantwoordelijkheid van de verschillende bronhouders van deze gegevens. Maar op dit moment is het niet haalbaar en ook niet wenselijk voor alle BAG en BGT bronhouders om aanvullende 3D-gegevens te verzamelen.

Daarom heeft het Kadaster een 3D basisvoorziening ingericht om, vooruitlopend op een 3D BAG/BGT in de (verre) toekomst, actuele 3D gegevens voor heel Nederland beschikbaar te stellen. De 3D basisgegevens in deze voorziening zijn gereconstrueerd op basis van BGT en BAG. Dit gebeurt op een volledig automatische wijze. De 3D gegevens worden landsdekkend, dat wil zeggen voor heel Nederland, gereconstrueerd en beschikbaar gesteld in de open standaard [CityJSON](https://www.cityjson.org) via het overheidsplatform voor open geoinformatie, [PDOK](https://www.pdok.nl). De 3D basisvoorziening die in de zomer van 2021 beschikbaar is gekomen, is gebaseerd op zowel puntenwolken gegenereerd uit luchtfoto’s (ingewonnen in 2019) als Actueel Hoogtebestand Nederland (AHN) versie 3 (ingewonnen tussen 2014 en 2019). De 3D basisvoorziening zorgt ook voor beheer en periodieke updates van de 3D gegevens, en sluit daarbij aan op andere informatie-initiatieven zoals [Doorontwikkeling in Samenhang](https://www.geobasisregistraties.nl/basisregistraties/doorontwikkeling-in-samenhang) (DiSGeo) en de daarbij behorende [samenhangende objectenregistratie](https://www.geobasisregistraties.nl/basisregistraties/doorontwikkeling-in-samenhang/objectenregistratie) (SOR).

We zijn benieuwd naar de gebruikerservaringen en de mogelijke onvolkomenheden om het bestand te verbeteren.

## De 3D Basisvoorziening

De 3D Basisvoorziening bestaat uit drie producten die allemaal automatisch worden gegenereerd:

1. Het 3D Basisbestand Volledig: een combinatie van LoD1.2 gebouwen, terrein en bruggen.
1. Het 3D Basisbestand Gebouwen: LoD1.3 gebouwen, met daaraan gekoppeld attributen die de kwaliteit van ieder gebouwmodel beschrijven.
1. Het 3D Hoogtestatistieken Gebouwen: tweedimensionale (2D) gebouwen waaraan verschillende hoogte-waarden zijn toegekend.

<aside class="note"><b>LoD</b> (Level of Detail) beschrijft  het detailniveau waarop de hoogte van gebouwen beschikbaar is. Dit wordt in <a href="#lod">figuur 3</a> nader toegelicht.</aside>

### 3D Basisbestand Volledig

<figure id="3dvolledig">
    <img src="media/image4.png"/>
    <figcaption>visualisatie van data uit het 3D Basisbestand Volledig</figcaption>
</figure>

Het product 3D Basisbestand Volledig, een combinatie van LoD1.2 gebouwen met terrein en bruggen, bestaat uit terreinvlakken, gegenereerd uit BGT maaiveld-objecten met in het terrein geïntegreerde gebouwen.

<figure id="brugvlakken">
    <img src="media/image1.png"/>
    <figcaption>gereconstrueerde brugvlakken</figcaption>
</figure>

De gebouwen in dit product worden gegenereerd door de BAG-geometrie van het gebouw op te trekken tot een enkele hoogte,  de zogenaamde LoD1.2-weergave (zie onderstaande figuur). Het horizontale grondvlak van de gebouwmodellen is altijd ingesteld op het laagste snijpunt met het maaiveld om te voorkomen dat het gebouw gaat zweven.

<figure id="lod">
    <img src="media/image3.png"/>
    <figcaption>Levels of Detail voor gebouwen (F. Biljecki, <a href="https://filipbiljecki.com/publications/2016_ceus_improved_lod.pdf">An improved LOD specification for 3D building models)</a></figcaption>
</figure>

### 3D Basisbestand Gebouwen
Het 3D Basisbestand Gebouwen bevat blok-modellen waarbij hoogtesprongen van meer dan 3 meter binnen een gebouw in het model worden onderscheiden (conform LoD1.3). Denk bijvoorbeeld aan een kerk met een toren of een huis met een aangebouwde schuur. Gebouwen die zich volledig ondergronds bevinden of boven één of meerdere andere gebouwen zweven, zijn gefilterd uit deze dataset. Voor de situaties waarbij een reconstructie van LoD1.3 niet mogelijk is, is het bestand aangevuld met LoD1.2 geometrieën.

### 3D Hoogtestatistieken Gebouwen
In het product 3D Hoogtestatistieken Gebouwen zijn de 2D BAG-geometrieën van gebouwen door middel van de gedetecteerde hoogtesprongen opgesplitst in zogenaamde dakdelen. Ieder dakdeel is gemodelleerd als een 2D polygoon waaraan verschillende hoogte-waarden zijn toegekend, zoals hoogste dakrand, laagste dakrand en de mediane dakhoogte. Deze verschillende hoogte-waarden representeren verschillende referentiehoogten die berekend worden op basis van verschillende statistische parameters van de hoogtepunten die zich binnen het dakdeel bevinden. Afhankelijk van de toepassing kan een gebruiker beslissen welke referentiehoogte moet worden gebruikt om het 3D model te reconstrueren. Het bestand 3D Hoogtestatistieken Gebouwen is (zoveel als mogelijk) in LoD1.3 beschikbaar. Daarbij is de geometrie opgeknipt in verschillende delen op basis van hoogtesprongen. Voor de situaties waarbij een reconstructie van LoD1.3 niet mogelijk is, is het bestand aangevuld met LoD1.2 geometrieën met minder diversiteit aan statistische waarden.