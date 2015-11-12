(function(window, undefined) {
  var dictionary = {
    "452621a7-4cca-4c59-afd8-f022c66659a7": "Hovedside_Lærer_tilbake",
    "a57e56f1-0392-48fa-9ce4-4bb23a8f7b18": "Hovedside_Lærer_FramMenuSlide",
    "ad7617ee-83c5-4c1c-a3ae-65d79c33c759": "Help_lærer",
    "0e876c44-d11d-4dfd-8422-51a0029a6bee": "Help_MenuSlide",
    "768a2d18-b12c-43d2-b279-af5fca5c8e70": "Help_lærer_MenuSlide",
    "26a34009-ba47-493d-88be-3b5397a5fe13": "Finn_Studie",
    "e6a565a6-b8f9-4842-af1d-623ef9ea2d50": "Hovedside_Lærer_Fram",
    "19060770-9b31-41e7-b688-e1e076870a35": "Help",
    "07689d6e-291f-4738-b83a-211c38fd2290": "Hovedside_Lærer_MenuSlide",
    "dd7a92a1-bcc1-4581-81d0-6e9a71c0a250": "Hovedside_Lærer",
    "5584f61c-0fed-4e35-83a8-730eca8f4449": "Menu_Slide",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LogIn",
    "baff60f2-e2f4-4cd0-ae22-25a6fff3ab7b": "Hovedside_FinnStudieOREmne",
    "a4c3ae6b-d38f-4b85-bca9-12ff15cae899": "Hovedside_Lærer_tilbake_MenuSlide",
    "004cba93-ae6c-4239-a106-3de1fa170820": "Hovedside_FinnStudieOREmne_MenuSlide",
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