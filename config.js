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
  specStatus: "GN-WV",
  specType: "AL",
  pubDomain: "3dbv",
//publishDate: "2020-01-17",
//  previousPublishDate: "2019-07-15",
//  previousMaturity: "GN-VV",
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
      name: "Vincent van Atena",
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
  },
};
