const Config = {
  "en":{
    "user": {
      "step1": "Detective at keyword",
      "step2": "please identify yourself:",
      "step4": "There is no record of your name on Interpol files.",
      "step5": "Are you new here?",
      "step7a": "You have been identified",
      "step7b": "We load your personal information",
      "step8": "Your current rank is"
    },
    "menu": {
      "entry1": { 
        "name":"Game",
        "item1": "About this game",
        "item2": "New",
        "item3": "Save", 
        "item4": "Restore"
      },
      "entry2": {
        "name": "Dossiers"
      },
      "entry3": {
        "name": "Config",
        "item1": "Set lang to en (default)",
        "item2": "Set lang to fr",
        "item3": "Sound on/off"
      },
      "save": "Save successful! ",
      "restore": "Save loaded! "
    },
    "buttons": {
      "start": "Press the button to start the investigation",
      "continue": "Press the button to continue",
      "game": "Press the button to start the game",
      "yes": "Yes",
      "no": "No",
      "back": "Back",
      "restart": "Restart"
    },
    "modals": {
      "close": "CLOSE",
      "compute": "COMPUTE"
    },
    "crime": [
      {
        "key": "sex",
        "label": "Sex",
        "options": [
          {"key":"female", "value": "Female"},
          {"key":"male","value":"Male"}
        ]
      },
      {
        "key": "hobby",
        "label": "Hobby",
        "options": [
          {"key":"climber","value":"Climber"},
          {"key":"croquet","value":"Croquet"},
          {"key":"tennis","value":"Tennis"},
          {"key":"fitness","value":"Fitness aerobic"}
        ]
      },
      {
        "key": "hair",
        "label": "Hair",
        "options": [
          {"key":"brown","value":"Brown"},
          {"key":"blond","value":"Blond"},
          {"key":"black","value":"Black"},
          {"key":"red","value":"Red"}
        ]
      },
      {
        "key": "feature",
        "label": "Feature",
        "options": [
          {"key":"tattoo","value":"Tattoo"},
          {"key":"diamond","value":"Diamond"},
          {"key":"ring","value":"Ring"}
        ]
      },
      {
        "key": "vehicule",
        "label": "Vehicule",
        "options": [
          {"key":"limousine","value":"Limousine"},
          {"key":"motorcycle","value":"Motorcycle"},
          {"key":"decapotable","value":"Decapotable"}
        ]
      }
    ],
    "warrant": {
      "arrest": "You now have a warrant to arrest",
      "arrestwarrant": "**** WARRANT ****",
      "none": "The information provided eliminates all possible suspects!",
      "nowarrant": "No warrant has been issued.",
      "suspects" : " suspects found:"
    },
    "endSuccess": {
      "wait": "oh wait a minute...",
      "thanks1": "Thanks to your help, the",
      "thanks2": "police have apprehended",
      "thanks4": "We here at Interpol thank you to for your good work on this case.",
      "thanks5": "Good job,",
      "thanks6": "you have earned a promotion.",
      "ready": "Ready for your next case ?"
    },
    "endFail": {
      "loser": "LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER! LOSER!  ",
      "timeOut": "Expiration time",
      "noWarrant": "You have no warrant to arrest "
    } 
  },
  "fr":{
    "user": {
      "step1": "Détective au clavier",
      "step2": "Veuillez vous identifier :",
      "step4": "Aucune trace de votre nom dans les fichiers d'Interpol.",
      "step5": "Êtes-vous nouveau ici ?",
      "step7a": "Vous avez été identifié",
      "step7b": "Nous chargeons vos informations personnelles",
      "step8": "Votre grade actuel est"
    },
    "menu": {
      "entry1": { 
        "name":"Jeu",
        "item1": "Crédits du jeu",
        "item2": "Nouveau",
        "item3": "Enregistrer", 
        "item4": "Restaurer"
      },
      "entry2": {
        "name": "Dossiers"
      },
      "entry3": {
        "name": "Configuration",
        "item1": "Passer la langue en anglais",
        "item2": "Passer la langue en français (x)",
        "item3": "Activer / désactiver le son"
      },
      "save": "Sauvegarde effectuée ! "
    },
    "buttons": {
      "start": "Appuyer sur le bouton pour commencer l'enquête",
      "continue": "Appuyer sur le bouton pour continuer",
      "game": "Appuyer sur le bouton pour démarrer l'enquête",
      "yes": "Oui",
      "no": "Non",
      "back": "Retour",
      "restart": "Recommencer"
    },
    "modals": {
      "close": "FERMER",
      "compute": "ANALYSER"
    },
    "crime": [
      {
        "key": "sex",
        "label": "Sexe",
        "options": [
          {"key":"femme", "value": "Femme"},
          {"key":"homme","value":"Homme"}
        ]
      },
      {
        "key": "hobby",
        "label": "Hobby",
        "options": [
          {"key":"grimpeur","value":"Grimpeur"},
          {"key":"croquet","value":"Croquet"},
          {"key":"tennis","value":"Tennis"},
          {"key":"fitness","value":"Fitness"}
        ]
      },
      {
        "key": "hair",
        "label": "Cheveux",
        "options": [
          {"key":"chatain","value":"Chatain"},
          {"key":"blond","value":"Blond(e)"},
          {"key":"noir","value":"Noir(e)"},
          {"key":"rou","value":"Roux(sse)"}
        ]
      },
      {
        "key": "feature",
        "label": "Signe",
        "options": [
          {"key":"tatouage","value":"Tatouage"},
          {"key":"diamant","value":"Diamant"},
          {"key":"bague","value":"Bague"}
        ]
      },
      {
        "key": "vehicule",
        "label": "Véhicule",
        "options": [
          {"key":"limousine","value":"Limousine"},
          {"key":"moto","value":"Moto"},
          {"key":"decapotable","value":"Décapotable"}
        ]
      }
    ],
    "warrant": {
      "arrest": "Vous avez maintenant un mandat pour arrêter",
      "arrestwarrant": "**** MANDAT D'ARRÊT ****",
      "none": "Les informations saisies éliminent tous les suspects",
      "nowarrant": "Aucun mandat d'arrêt délivré.",
      "suspects" : " suspects trouvés :"
    },
    "endSuccess": {
      "wait": "oh attendez 1 seconde...",
      "thanks1": "Merci pour votre aide, la",
      "thanks2": "police a arrêté",
      "thanks4": "Interpol vous remercie pour votre travail sur cette enquête ",
      "thanks5": "Beau boulot,",
      "thanks6": "Vous avez mérité une promotion "
    },
    "endFail": {
      "loser": "Mauvais ! Nul ! Perdant ! Victime ! LOSER ! Mauvais policier ",
      "timeOut": "Temps écoulé",
      "noWarrant": "Vous n'avez pas de mandat d'arrêt"
    }
  },
};

export default Config;