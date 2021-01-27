export const rootHebergementImage = "https://niveaubonus.fr/picone/src/icones/";
export const libraryCartes = {
     
    actions:
        {
            seLaver: {image: rootHebergementImage + "seLaver.png", description: "se laver"},
            manger : {image:rootHebergementImage+"manger.png", description: "manger"},
            boire : {image: rootHebergementImage+"boire.png", description: "boire"},
            seSoigner : {image:rootHebergementImage+"seSoigner.png", description: "se soigner"},
            toilettes : {image: rootHebergementImage+"allerAuxToilettes.png", description: "toilettes"},
            dormir : {image: rootHebergementImage+"dormir.png", description: "dormir"},
            meLever : {image: rootHebergementImage+"meLever.png", description: "me lever"},
            marcher : {image: rootHebergementImage+"marcher.png", description: "marcher"}

        },

    nourriture:
        {
            fruits :{image: rootHebergementImage+"fruits.png", description: "fruits"},
            legumes : {image:rootHebergementImage+"legumes.png", description: "legumes", redirectsTo:"Noemielegumes"},
            plats : {image: rootHebergementImage+"preparations.png",description:"plats"},
            boissons : {image:rootHebergementImage+"boissons.png", description: "boissons", redirectsTo:"boissons"},
            tacos : {image:rootHebergementImage+"tacos.png", description: "tacos"},
        },

    plats :
        {
            poulet : {image:rootHebergementImage+"poulet.png", description: "poulet"},
            sandwich : {image:rootHebergementImage+"sandwich.png", description: "sandwich"},
            gateau : {image:rootHebergementImage+"gateau.png", description: "gâteau"},
            yaourt : {image:rootHebergementImage+"yaourt.png", description: "yaourt"}

        },
//
        douleur :
            {
                smileyTriste : {image: rootHebergementImage+"smileyTriste.png", description: "triste"},
                smileyMalade : {image:rootHebergementImage+"smileyMalade.png", description: "malade"},
                smileyDormir : {image:rootHebergementImage+"smileyDormir.png", description: "fatigué"},
                allerAuxToilettes : {image:rootHebergementImage+"allerAuxToilettes.png", description: "toilettes"}

            },

        sensations :
            {
                avoirFaim : {image:rootHebergementImage+"avoirFaim.png", description: "avoir faim"},
                smileyTriste : {image:rootHebergementImage+"smileyTriste.png", description: "triste"},
                smileyMalade : {image:rootHebergementImage+"smileyMalade.png", description: "malade"},
                smileyDormir : {image:rootHebergementImage+"smileyDormir.png", description: "fatigué"},
                allerAuxToilettes : {image:rootHebergementImage+"allerAuxToilettes.png", description: "toilettes"}

            },

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
            tableDeChevet : {image:rootHebergementImage+"tableDeChevet.png", description: "table chevet"}

        },

    corps :
        {
            dos : {image:rootHebergementImage+"dos.png", description: "dos"},
            poitrine : {image:rootHebergementImage+"poitrine.png", description: "poitrine"},
            ventre : {image:rootHebergementImage+"ventre.png", description: "ventre"},
            epaule : {image:rootHebergementImage+"epaule.png", description: "épaule"}
        },

        personnes :

            {
                medecin : {image:rootHebergementImage+"medecin.png", description: "médecin"},
                proches : {image:rootHebergementImage+"proches.png", description: "proches"}

            },

    boissons :

        {
            eau : {image:rootHebergementImage+"eau.png", description: "eau"},
            cafe : {image:rootHebergementImage+"cafe.png", description: "café"},
            jusDeFruit : {image:rootHebergementImage+"jusDeFruit.png", description: "jus fruits"},

        },

    legumes : 

    {
        tomate : {image:rootHebergementImage+"tomate.png", description: "tomate"},
        aubergine: {image:rootHebergementImage+"aubergine.png", description: "aubergine"},
        carotte : {image:rootHebergementImage+"carotte.png", description: "carotte"},
    }

};

