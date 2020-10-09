//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Frank Terpstra/Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20180615 - FT  - Initiele versie
//-- . . . . . :  20181106 - JvG - verplaatst naar root KP-APIs
//-------------------------------------------------------------------------------------

var respecConfig = 
{
  //specStatus: "GN-BASIS",
  specStatus: "GN-WV",
  specType: "AL",
  pubDomain: "3dbv",
  //publishDate: "2020-09-03",
  //previousPublishDate: "2020-07-16",
  //previousMaturity: "GN-BASIS",
  editors: 
  [
    {
      name: "Linda van den Brink",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/",
    },
  ],
  authors: 
  [
    {
      name: "Vincent van Altena",
      company: "Kadaster",
      companyURL: "https://www.kadaster.nl/",
    },
    {
      name: "Tony Baving",
      company: "Kadaster",
      companyURL: "https://www.kadaster.nl/",
    },
    {
      name: "Willem van Hinsbergh",
      company: "Kadaster",
      companyURL: "https://www.kadaster.nl/",
    },
    {
      name: "Marc Post",
      company: "Kadaster",
      companyURL: "https://www.kadaster.nl/",
    },
    {
      name: "Bertjan Zwerver",
      company: "Kadaster",
      companyURL: "https://www.kadaster.nl/",
    },
    {
      name: "Jantien Stoter",
      company: "Kadaster",
      companyURL: "https://www.kadaster.nl/",
      extras: [{
        name:  "TU Delft",
        href:  "https://www.tudelft.nl",
      }],
    },
    {
      name: "Tom Commandeur",
      company: "TU Delft",
      companyURL: "https://www.tudelft.nl/",
    },
    {
      name: "Balázs Dukai",
      company: "TU Delft",
      companyURL: "https://www.tudelft.nl/",
    },
    {
      name: "Ravi Peters",
      company: "TU Delft",
      companyURL: "https://www.tudelft.nl/",
    },
  ],
  shortName: "prod",
  github: "https://github.com/geonovum/3dbasisvoorziening",
  //issueBase: "https://github.com/geonovum/API-Designrules/issues/",
  localBiblio: {
  "OAuth2": {
      href: "https://tools.ietf.org/html/rfc6749",
      title:
        "The OAuth 2.0 Authorization Framework",
      authors: ["D. Hardt"],
      date: "October 2012",
      publisher: "The Internet Engineering Task Force",
    },
    "CityGML2": {
        href: "https://portal.opengeospatial.org/files/?artifact_id=47842",
        title:
          "OGC City Geography Markup Language (CityGML) Encoding Standard",
        authors: ["Gerhard Gröger", "Thomas H. Kolbe", "Claus Nagel", "Karl-Heinz Häfele"],
        date: "04 April 2012",
        publisher: "Open Geospatial Consortium",
      },
      "Zebedin2008": {
          href: "https://doi.org/10.1007/978-3-540-88693-8_64",
          title:
            "Fusion of feature-and area-based information for urban buildings modeling from aerial imagery.",
          authors: ["Zebedin, L.", "Bauer, Joachim", "Karner, Konrad", "Bischof, Horst"],
          date: "2008",
          publisher: "European conference on computer vision",
          pages: "873-886",
        },
        "GeoPackage1.2": {
            href: "https://portal.opengeospatial.org/files/12-128r15",
            title:
              "GeoPackage Encoding Standard",
            authors: ["Jeff Yutzler", "Paul Daisey"],
            date: "06 September 2018",
            publisher: "Open Geospatial Consortium",
          },
  },
};
