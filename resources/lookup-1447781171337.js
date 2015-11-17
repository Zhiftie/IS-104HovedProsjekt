(function(window, undefined) {
  var dictionary = {
    "e5910452-21ba-4f4b-a38a-fb3af8e0d8b6": "Finn_emne",
    "baff60f2-e2f4-4cd0-ae22-25a6fff3ab7b": "Hovedside_FinnStudieOREmne",
    "99e4d716-2c87-4f4d-83fa-cd6c8475f43c": "FinnStudie_VisUkePlan_Tilbake_MenuSlide",
    "a4c3ae6b-d38f-4b85-bca9-12ff15cae899": "Hovedside_Lærer_tilbake_MenuSlide",
    "945ec712-ede4-455d-a3b7-e009497f7adf": "FinnStudie_VisUkePlan_tilbake",
    "452621a7-4cca-4c59-afd8-f022c66659a7": "Hovedside_Lærer_tilbake",
    "88a08295-f104-4cf8-af64-7b973aec2ed1": "FinnStudie_VisUkePlan#1_MenuSlide",
    "8dbe56f8-160e-48d7-b1bd-c441dfa7274a": "Innstillinger",
    "33730764-9eaf-4861-b6a5-97d4d192af16": "IS104",
    "9cbfa62f-59b3-4f7d-8565-1e2218b0810a": "Favoritter",
    "5a178052-a06c-457c-9e47-e907e7a4603d": "FinnStudie_VisUkePlan_Frem",
    "69150d1f-650d-4b40-a3b1-57d1c259540a": "Finn_emne_MenuSlide",
    "dd7a92a1-bcc1-4581-81d0-6e9a71c0a250": "Hovedside_Lærer",
    "ad7617ee-83c5-4c1c-a3ae-65d79c33c759": "Help_lærer",
    "cfe14d31-c9d8-4eff-845b-2799e64c848a": "FinnStudie_VisUkePlan_Frem_MenuSlide",
    "a57e56f1-0392-48fa-9ce4-4bb23a8f7b18": "Hovedside_Lærer_FramMenuSlide",
    "20ad7d26-2f33-410b-b65c-316d4b5aa2ea": "Lærer_mine_emne",
    "b8db64b7-ae61-4891-9b20-88b34d7edcac": "FinnStudie_VisUkePlan#1",
    "004cba93-ae6c-4239-a106-3de1fa170820": "Hovedside_FinnStudieOREmne_MenuSlide",
    "768a2d18-b12c-43d2-b279-af5fca5c8e70": "Help_lærer_MenuSlide",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LogIn",
    "47c240e0-8e90-42d7-b3c1-677369bc6914": "lærer_finnemne_menuslide",
    "e6a565a6-b8f9-4842-af1d-623ef9ea2d50": "Hovedside_Lærer_Fram",
    "9c37ec69-fd39-4cf1-bdb0-21e8c6157fb1": "IS104_Menuslide",
    "07689d6e-291f-4738-b83a-211c38fd2290": "Hovedside_Lærer_MenuSlide",
    "0e876c44-d11d-4dfd-8422-51a0029a6bee": "Help_MenuSlide",
    "e6e8c0cd-a7c6-4102-8801-dd6847605a3d": "Favoritter_MenuSlide",
    "19060770-9b31-41e7-b688-e1e076870a35": "Help",
    "831a05d1-6f1a-4f55-a7e3-ded40409abf6": "Innstillinger_lærer_menuSlide",
    "7259c357-2848-499a-bf2e-925bd84f56f3": "LogUtBekreftelse",
    "26a34009-ba47-493d-88be-3b5397a5fe13": "Finn_Studie",
    "c70bdd0c-27c9-441e-bc77-62fb42663f9f": "Innstillinger_lærer",
    "e1187ff4-bbef-4306-9ef6-16aabf49f4cc": "Finn_Studie_MenuSlide",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);