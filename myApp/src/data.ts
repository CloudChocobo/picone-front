export const rootHebergementImage = "https://niveaubonus.fr/picone/src/icones/";
export const libraryCartes = {
     
    // pour ajouter un nouvel ensemble d'icone :
    // créer un nouveau pattern ici
    // créer le fichier .vue dans views correspondant au nom du pattern (exemple : "actions" a son propre fichier .vue)
    // attention maximum 8 lignes par pattern
    // la clé redirectsTo permet de créer  un routing vers un nouveau fichier .vue lorque l'on clique sur l'icone
    // si pas de redirectsTo => pas de routing, l'icone s'ajoute dans le panier sans changer de routing
    // redirectsTo doit comporter le nom exact du fichier .vue visé (exemple : " redirectsTo: "Légumes" "pour faire le routing vers "Légumes.vue" )
    // donc attention aux majuscules/minuscules

    /*
    Dans le fichier .vue créer correspondant au nom du pattern, pensez à modifier le chemin vers le bon endroit dans libraryCarte importé dans data ()
    "
     data: () => {
    return {
      cartes : libraryCartes.objets,  <============ ici, pensez à changer le nom du pattern visé (exemple : si vous voulez utilisez fruits, écrivez : "libraryCartes.fruits")
      currentIndex: 0,
      currentId: "",
      discussion: "panier",
    };
    "
  },
    */

   humeur :
   {
       smileyBien : {image:rootHebergementImage+"smileyBien.png", description: "bien",redirectsTo:"debutPhrase"},
       smileyMoyen : {image:rootHebergementImage+"smileyMoyen.png", description: "moyen",redirectsTo:"debutPhrase"},
       smileyTriste : {image:rootHebergementImage+"smileyTriste.png", description: "triste",redirectsTo:"debutPhrase"},
       smileyEnerve : {image:rootHebergementImage+"smileyEnerve.png", description: "énervé",redirectsTo:"debutPhrase"},
       smileyMalade : {image:rootHebergementImage+"smileyMalade.png", description: "malade",redirectsTo:"debutPhrase"},
       smileyDormir : {image:rootHebergementImage+"smileyDormir.png", description: "fatigué",redirectsTo:"debutPhrase"},

   },

   debutPhrase:
   {
       je: {image: rootHebergementImage + "je.png", description: "je",redirectsTo:"Actions"},
       tu : {image:rootHebergementImage+"tu.png", description: "tu",redirectsTo:"Actions"},
       oui : {image: rootHebergementImage+"oui.png", description: "oui",redirectsTo:"Actions"},
       non : {image: rootHebergementImage+"non.png", description: "non",redirectsTo:"Actions"},
       merci : {image:rootHebergementImage+"merci.png", description: "merci",redirectsTo:"Actions"},

   },
   

    actions:
        {
            seLaver: {image: rootHebergementImage + "seLaver.png", description: "hygiène", redirectsTo:"seLaver"},
            manger : {image:rootHebergementImage+"manger.png", description: "manger",redirectsTo:"Nourriture" },
            boire : {image: rootHebergementImage+"boire.png", description: "boire", redirectsTo:"Boissons"},
            seSoigner : {image:rootHebergementImage+"seSoigner.png", description: "soins", redirectsTo:"Soin"},
            toilettes : {image: rootHebergementImage+"allerAuxToilettes.png", description: "besoins", redirectsTo:"wc"},
            dormir : {image: rootHebergementImage+"dormir.png", description: "dormir"},
            meLever : {image: rootHebergementImage+"seLever.png", description: "me lever"},
            sHabiller : {image: rootHebergementImage+"sHabiller.png", description: "s'habiller", redirectsTo:"vetements"},
            //PLUS : {image: rootHebergementImage+"PLUS.png", description: "plus", redirectsTo:"actions2"},  
           
        },

        actions2:
        {
            marcher : {image: rootHebergementImage+"marcher.png", description: "marcher"},
            manger : {image:rootHebergementImage+"manger.png", description: "manger",redirectsTo:"Nourriture" },
            boire : {image: rootHebergementImage+"boire.png", description: "boire", redirectsTo:"Boissons"},
            seSoigner : {image:rootHebergementImage+"seSoigner.png", description: "se soigner"},
            toilettes : {image: rootHebergementImage+"allerAuxToilettes.png", description: "toilettes"},
            dormir : {image: rootHebergementImage+"dormir.png", description: "dormir"},
            meLever : {image: rootHebergementImage+"meLever.png", description: "me lever"},
            avoirFaim : {image:rootHebergementImage+"avoirFaim.png", description: "avoir faim"},

        },

    nourriture:
        {
            fruits :{image: rootHebergementImage+"fruits.png", description: "fruits", redirectsTo:"fruits"},
            legumes : {image:rootHebergementImage+"legumes.png", description: "legumes", redirectsTo:"Legumes"},
            plats : {image: rootHebergementImage+"preparations.png",description:"plats", redirectsTo:"Plats"},
            boissons : {image:rootHebergementImage+"boissons.png", description: "boissons", redirectsTo:"Boissons"},
            desserts : {image:rootHebergementImage+"desserts.png", description: "desserts", redirectsTo:"Dessert"},
        },

    plats :
        {
            poulet : {image:rootHebergementImage+"poulet.png", description: "poulet"},
            sandwich : {image:rootHebergementImage+"sandwich.png", description: "sandwich"},
            couscous : {image:rootHebergementImage+"couscous.png", description: "couscous"},
            steakFrites : {image:rootHebergementImage+"steakFrites.png", description: "steak-frites"},
            tacos : {image:rootHebergementImage+"tacos.png", description: "tacos"},
            //  croqueMonsieur : {image:rootHebergementImage+"croqueMonsieur.png", description: "croque monsieur"},
            //  taboule : {image:rootHebergementImage+"taboule.png", description: "taboulé"},
            puree : {image:rootHebergementImage+"puree.png", description: "purée"},
            soupe : {image:rootHebergementImage+"soupe.png", description: "soupe"},
     
        },
        
    // douleur :
    //         {
    //             smileyTriste : {image: rootHebergementImage+"smileyTriste.png", description: "triste"},
    //             smileyMalade : {image:rootHebergementImage+"smileyMalade.png", description: "malade"},
    //             smileyDormir : {image:rootHebergementImage+"smileyDormir.png", description: "fatigué"},
    //             

    //         },



    objets :
        {
            lunettes : {image:rootHebergementImage+"lunettes.png", description: "lunettes"},
            telecommande : {image:rootHebergementImage+"telecommande.png", description: "télécommande"},
            bouteille : {image:rootHebergementImage+"bouteille.png", description: "bouteille"},
            mobilier : {image:rootHebergementImage+"meubles.png", description: "mobilier"}

        },

    mobilier :
        {
            lit : {image:rootHebergementImage+"lit.png", description: "lit"},
            chaise : {image:rootHebergementImage+"telecommande.png", description: "chaise"},
            table : {image:rootHebergementImage+"bouteille.png", description: "table"},
            tableDeChevet : {image:rootHebergementImage+"tableDeChevet.png", description: "table chevet"},
            fauteuil : {image:rootHebergementImage+"fauteuil.png", description: "fauteuil"}

        },

    corps :
        {
            dos : {image:rootHebergementImage+"dos.png", description: "dos"},
            poitrine : {image:rootHebergementImage+"poitrine.png", description: "poitrine"},
            ventre : {image:rootHebergementImage+"ventre.png", description: "ventre"},
            epaule : {image:rootHebergementImage+"epaule.png", description: "épaule"},
            tete : {image:rootHebergementImage+"tete.png", description: "tête"},
            bras : {image:rootHebergementImage+"bras.png", description: "bras"},
            jambes: {image:rootHebergementImage+"jambe.png", description: "jambes"},
            oreilles : {image:rootHebergementImage+"oreilles.png", description: "oreilles"},
        
         },

         corps2 :
         
         {
                     //  nez : {image:rootHebergementImage+"nez.png", description: "nez"},
        //  pieds   : {image:rootHebergementImage+"pieds.png", description: "pieds"},
        //  doigts : {image:rootHebergementImage+"doigts.png", description: "doigts"},
         // bouche: {image:rootHebergementImage+"bouche.png", description: "bouche"},
           oeil : {image:rootHebergementImage+"oeil.png", description: "oeil"},
        
            
        },

        personnes :

            {
                medecin : {image:rootHebergementImage+"medecin.png", description: "médecin"},
                proches : {image:rootHebergementImage+"proches.png", description: "proches"}
        //     petitEnfant : {image:rootHebergementImage+"petitEnfant.png", description: "petit-enfant"},
         //     fille : {image:rootHebergementImage+"fille.png", description: "fille"},
          //     garcon : {image:rootHebergementImage+"garcon.png", description: "garçon"},

            },

    boissons :

        {
            eau : {image:rootHebergementImage+"eau.png", description: "eau"},
            cafe : {image:rootHebergementImage+"cafe.png", description: "café"},
            jusDeFruit : {image:rootHebergementImage+"jusDeFruit.png", description: "jus fruits"},
            vin : {image:rootHebergementImage+"vin.png", description: "vin"},
            coca : {image:rootHebergementImage+"coca.png", description: "coca"},
            biere : {image:rootHebergementImage+"biere.png", description: "bière"},
            lait: {image:rootHebergementImage+"lait.png", description: "lait"},
             the : {image:rootHebergementImage+"the.png", description: "thé"},

        },

    boissons2 :
{
        //chocolatChaud : {image:rootHebergementImage+"chocolatChaud.png", description: "chocolat chaud"},
},

    legumes : 

    {
        legumes : {image:rootHebergementImage+"legumes.png", description: "legumes"},
        tomate : {image:rootHebergementImage+"tomate.png", description: "tomate"},
        aubergine: {image:rootHebergementImage+"aubergine.png", description: "aubergine"},
        carotte : {image:rootHebergementImage+"carotte.png", description: "carotte"},
        patate : {image:rootHebergementImage+"patate.png", description: "patate"},
        petitPois : {image:rootHebergementImage+"petitPois.png", description: "petit pois"},
        haricotVert : {image:rootHebergementImage+"haricotVert.png", description: "haricot"},
    //  poivron : {image:rootHebergementImage+"poivron.png", description: "poivron"},
},

// legumes2 :
//{
    //  salade : {image:rootHebergementImage+"salade.png", description: "salade"},
    //  bettrave : {image:rootHebergementImage+"bettrave.png", description: "bettrave"},
    //  champignon : {image:rootHebergementImage+"champignon.png", description: "champignon"},
    //  asperge : {image:rootHebergementImage+"asperge.png", description: "asperge"},
    //  chou : {image:rootHebergementImage+"chou.png", description: "chou"},
    //  navet : {image:rootHebergementImage+"navet.png", description: "navet"},
    //  },

    
    fruits : 

     {
        fruits :{image: rootHebergementImage+"fruits.png", description: "fruits"},
        pomme : {image:rootHebergementImage+"pomme.png", description: "pomme"},
        cerise: {image:rootHebergementImage+"cerise.png", description: "cerise"},
        poire : {image:rootHebergementImage+"poire.png", description: "poire"},
        banane : {image:rootHebergementImage+"banane.png", description: "banane"},
        fraise : {image:rootHebergementImage+"fraise.png", description: "fraise"},
        raisin : {image:rootHebergementImage+"raisin.png", description: "raisin"},
        kiwi : {image:rootHebergementImage+"kiwi.png", description: "kiwi"},
     },


     
     fruits2 :
     {
        pasteque : {image:rootHebergementImage+"pasteque.png", description: "pastèque"},
        orange : {image:rootHebergementImage+"orange.png", description: "orange"},
        citron : {image:rootHebergementImage+"citron.png", description: "citron"},
    //     mangue : {image:rootHebergementImage+"mangue.png", description: "mangue"},
    //     melon : {image:rootHebergementImage+"melon.png", description: "melon"},
    //     peche : {image:rootHebergementImage+"peche.png", description: "pêche"},
    //     prune : {image:rootHebergementImage+"prune.png", description: "prune"},
        framboise : {image:rootHebergementImage+"framboise.png", description: "framboise"},
     },

   
     vetements : 
     {
    //     pull : {image:rootHebergementImage+"pull.png", description: "pull"},
    //     pantalon: {image:rootHebergementImage+"pantalon.png", description: "pantalon"},
           slip : {image:rootHebergementImage+"slip.png", description: "slip"},
    //     robe : {image:rootHebergementImage+"robe.png", description: "robe"},
    //     jupe : {image:rootHebergementImage+"jupe.png", description: "jupe"},
    //     pyjamas : {image:rootHebergementImage+"pyjamas.png", description: "pyjamas"},
    //    gilet : {image:rootHebergementImage+"gilet.png", description: "gilet"},
           tShirt : {image:rootHebergementImage+"tShirt.png", description: "t-shirt"},
    //     soutienGorge : {image:rootHebergementImage+"soutienGorge.png", description: "soutien-gorge"},
    },

      dessert : 

    {
        fruits :{image: rootHebergementImage+"fruits.png", description: "fruits"},
        gateau : {image:rootHebergementImage+"gateau.png", description: "gâteau"},
        chocolat: {image:rootHebergementImage+"chocolat.png", description: "chocolat"},
        yaourt : {image:rootHebergementImage+"yaourt.png", description: "yaourt"},
        fromage: {image:rootHebergementImage+"fromage.png", description: "fromage"},
        compote : {image:rootHebergementImage+"compote.png", description: "compote"},
        tarte : {image:rootHebergementImage+"tarte.png", description: "tarte"},
    //    cremeDessert : {image:rootHebergementImage+"cremeDessert.png", description: "crème-dessert"},
    //     mousseAuChocolat : {image:rootHebergementImage+"mousseAuChocolat.png", description: "mousse au chocolat"},
    },


      seLaver : 

     {
           douche : {image:rootHebergementImage+"douche.png", description: "se doucher"},
           brosseADents: {image:rootHebergementImage+"dentifriceBrosseADent.png", description: "brosse à dents"},
    //     peigne : {image:rootHebergementImage+"peigne.png", description: "peigne"},
    //     couche: {image:rootHebergementImage+"couche.png", description: "couche"},
    //     dentifrice : {image:rootHebergementImage+"dentifrice.png", description: "dentifrice"},
            laverMain: {image:rootHebergementImage+"laverMain.png", description: "laver main"},
    //    rasoir : {image:rootHebergementImage+"rasoir.png", description: "rasoir"},
    //     laitCorporel : {image:rootHebergementImage+"laitCorporel.png", description: "lait corporel"},
     },



        soin : 

     {
    //     piqure: {image:rootHebergementImage+"piqure.png", description: "piqûre"},
           medicaments: {image:rootHebergementImage+"medicaments.png", description: "médicaments"},
     //      bandages : {image:rootHebergementImage+"bandages.png", description: "bandages"},
        pansement: {image:rootHebergementImage+"pansement.png", description: "pansement"},
    
    },



        wc : 
     {
        uriner: {image:rootHebergementImage+"uriner.png", description: "uriner"},
      defequer: {image:rootHebergementImage+"defequer.png", description: "déféquer"},
   
     },
};

