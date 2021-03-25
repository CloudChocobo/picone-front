export const rootHebergementImage = "https://niveaubonus.fr/picone/src/icones/";

// When online =>
export const rootAPI = "https://piconebackend.herokuapp.com/";

// When Localhost =>
//export const rootAPI = "http://localhost:8080/";

export const relationTest = "besoins_physiologiques";

export const labelTest = "moods";
/*
mounted() {
    fetch(this.data.rootAPI + "mots/57/besoins_physiologiques")
        .then(function(response) {
            if (response.status !== 200) {
                console.log(
                    "La requete auprès de l'API ne s'est pas correctement effectuée" +
                        response.status
                );
                return response;
            }
            // traitement de la reponse
            response.json().then(function(data) {
                this.data.cardJSON = data;
                console.log(data);
            });
        })
        .catch(function(err) {
            console.log("Fetch Error :-S", err);
        });
},

*/

