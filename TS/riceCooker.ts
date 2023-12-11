import { question } from 'readline-sync';

class RiceCooker {
  private cookedRice: boolean = false;

  private async cookRice(): Promise<void> {
    console.log("Cuisson du riz en cours...");

    try {
        // Vérification d'ajout d'eau avant l'enclenchement
        let waterAdded = false;
        let riceAdded = false;
        let riceQuantity: number = 0;

        // Boucle jusqu'à ce que l'utilisateur ait ajouté de l'eau et du riz
        while (!waterAdded || !riceAdded) {
           
            if (!waterAdded) {
                // Demande d'ajout d'eau (oui, non, ou annuler)
                const addWater = question('Voulez-vous ajouter de l\'eau ? (oui/non/annuler) : ');

                if (addWater.toLowerCase() === 'oui') {
                    console.log("Ajout d'eau...");
                    await this.delay(1000);
                    waterAdded = true;
                } else if (addWater.toLowerCase() === 'annuler') {
                    console.log("Opération annulée.");
                    return; // Quitte la fonction en cas d'annulation
                } else {
                    console.log("Ajout d'eau...");
                    await this.delay(1000);
                }
            }

            // Demande d'ajout de riz (kapoka)
            if (!riceAdded) {
                // Demande d'ajout de riz (kapoka) avec option d'annulation
                const riceQuantityInput = question('Entrez la quantité de riz (en kapoka) (ou annuler) : ');

                if (riceQuantityInput.toLowerCase() === 'annuler') {
                    console.log("Opération annulée.");
                    return; // Quitte la fonction en cas d'annulation
                }

                riceQuantity = Number(riceQuantityInput) || 0;

                if (riceQuantity > 0) {
                    console.log(`Vous avez ajouté ${riceQuantity} kapoka de riz.`);
                    riceAdded = true;
                } else {
                    console.log(`Vous avez ajouté 0 kapoka de riz.`);
                }
            }

            // Si l'eau et le riz ont été ajoutés avec une quantité non nulle, enclenchement du bouton de cuisson
            if (waterAdded && riceAdded && riceQuantity > 0) {
                console.log("Enclenchement du bouton de cuisson...");
                await this.delay(2000);
                console.log("Le riz cuit !");
                this.cookedRice = true;
                this.beep();
            } else {
                if (riceAdded == false) {
                    console.log(`Vous avez oublié d'ajouter du riz. Recommencez.`);
                }
                if (waterAdded == false) {
                    console.log(`Vous avez oublié d'ajouter de l'eau. Recommencez.`);
                }
            }
        }
        } catch (error) {
             console.error("Erreur lors de la cuisson du riz :", error);
        }
    }

    private async keepWarm(): Promise<void> {
        try {
            // Vérification d'ajout d'aliment avant le maintien au chaud
            let foodAdded = false;
    
            // Boucle jusqu'à ce que l'utilisateur ait ajouté un aliment
            while (!foodAdded) {
                // Demande d'ajout d'aliment (oui, non, ou annuler)
                const addFood = question('Voulez-vous ajouter de la nourriture ? (oui/non/annuler) : ');
    
                if (addFood.toLowerCase() === 'oui') {
                    console.log("Ajout de nourriture...");
                    await this.delay(1000);
                    foodAdded = true;
                } else if (addFood.toLowerCase() === 'non') {
                    console.log("Aucune nourriture ajoutée.");
                    // Continuez l'opération sans quitter la boucle
                } else if (addFood.toLowerCase() === 'annuler') {
                    console.log("Opération annulée.");
                    return; // Quitte la fonction en cas d'annulation
                } else {
                    console.log("Ajout de nourriture...");
                    await this.delay(1000);
                }

                  // Si la nourriture a été ajoutée, vérifiez avant le maintien au chaud
                if (foodAdded) {
                    console.log("Maintien au chaud de la nourriture.");
                    await this.delay(2000);
                    console.log("Nourriture maintenue au chaud !");
                    this.beep();
                } else {
                    console.log("Vous avez oublié d'ajouter de la nourriture. Recommencez.");
                }
            }
        } catch (error) {
            console.error("Erreur lors du maintien au chaud :", error);
        }
    }
    
    private async steamCook(): Promise<void> {
        try {
            // Vérification d'ajout d'aliment avant la cuisson à la vapeur
            let foodAdded = false;
    
            // Boucle jusqu'à ce que l'utilisateur ait ajouté un aliment
            while (!foodAdded) {
                // Demande d'ajout d'aliment (oui, non, ou annuler)
                const addFood = question('Voulez-vous ajouter de la nourriture pour la cuisson à la vapeur ? (oui/non/annuler) : ');
    
                if (addFood.toLowerCase() === 'oui') {
                    console.log("Ajout de nourriture...");
                    await this.delay(1000);
                    foodAdded = true;
                } else if (addFood.toLowerCase() === 'non') {
                    console.log("Aucune nourriture ajoutée.");
                    // Continuez l'opération sans quitter la boucle
                } else if (addFood.toLowerCase() === 'annuler') {
                    console.log("Opération annulée.");
                    return; // Quitte la fonction en cas d'annulation
                } else {
                    console.log("Ajout de nourriture...");
                    await this.delay(1000);
                }

                // Si la nourriture a été ajoutée, cuisson à la vapeur
                if (foodAdded) {
                    console.log("Cuisson à la vapeur terminée !");
                    this.beep();
                } else {
                    console.log("Vous avez oublié d'ajouter de la nourriture. Recommencez.");
                }
            }
        } catch (error) {
            console.error("Erreur lors de la cuisson à la vapeur :", error);
        }
    }
    
    
    private async cookSoup(): Promise<void> {
        try {
            // Vérification d'ajout d'eau avant l'enclenchement
            let waterAdded = false;
            let foodAdded = false;
    
            // Boucle jusqu'à ce que l'utilisateur ait ajouté de l'eau et de la soupe
            while (!waterAdded || !foodAdded) {
                // Demande d'ajout d'eau (oui, non, ou annuler)
                if (!waterAdded) {
                    // Demande d'ajout d'eau (oui, non, ou annuler)
                    const addWater = question('Voulez-vous ajouter de l\'eau ? (oui/non/annuler) : ');
    
                    if (addWater.toLowerCase() === 'oui') {
                        console.log("Ajout d'eau...");
                        await this.delay(1000);
                        waterAdded = true;
                    } else if (addWater.toLowerCase() === 'annuler') {
                        console.log("Opération annulée.");
                        return; // Quitte la fonction en cas d'annulation
                    } else {
                        console.log("Ajout d'eau...");
                        await this.delay(1000);
                    }
                }
    
                // Demande d'ajout de soupe (oui, non, ou annuler)
                if (!foodAdded) {
                    const addFood = question('Voulez-vous ajouter de la soupe ? (oui/non/annuler) : ');
        
                    if (addFood.toLowerCase() === 'oui') {
                        console.log("Ajout de soupe...");
                        await this.delay(1000);
                        foodAdded = true;
                    } else if (addFood.toLowerCase() === 'non') {
                        console.log("Aucune soupe ajoutée.");
                        // Continuez l'opération sans quitter la boucle
                    } else if (addFood.toLowerCase() === 'annuler') {
                        console.log("Opération annulée.");
                        return; // Quitte la fonction en cas d'annulation
                    } else {
                        console.log("Ajout de soupe...");
                        await this.delay(1000);
                    }
                }
                
                // Si l'eau et la soupe ont été ajoutées, enclenchement de la cuisson
                if (waterAdded && foodAdded) {
                    console.log("Cuisson de la soupe terminée !");
                    this.beep();
                } else {
                    if (foodAdded == false) {
                        console.log(`Vous avez oublié d'ajouter de la nourriture. Recommencez.`);
                    }
                    if (waterAdded == false) {
                        console.log(`Vous avez oublié d'ajouter de l'eau. Recommencez.`);
                    }
                }
            }
        } catch (error) {
            console.error("Erreur lors de la cuisson de la soupe :", error);
        }
    }
    
    private async cookDessert(): Promise<void> {
        try {
            // Vérification d'ajout d'aliment avant la cuisson du dessert
            let foodAdded = false;
    
            // Boucle jusqu'à ce que l'utilisateur ait ajouté un aliment
            while (!foodAdded) {
                // Demande d'ajout d'aliment (oui, non, ou annuler)
                const addFood = question('Voulez-vous ajouter des ingrédients pour le dessert ? (oui/non/annuler) : ');
    
                if (addFood.toLowerCase() === 'oui') {
                    console.log("Ajout d'ingrédients pour le dessert...");
                    await this.delay(1000);
                    foodAdded = true;
                } else if (addFood.toLowerCase() === 'non') {
                    console.log("Aucun ingrédient ajouté pour le dessert.");
                    // Continuez l'opération sans quitter la boucle
                } else if (addFood.toLowerCase() === 'annuler') {
                    console.log("Opération annulée.");
                    return; // Quitte la fonction en cas d'annulation
                } else {
                    console.log("Ajout d'ingrédients pour le dessert...");
                    await this.delay(1000);
                }
                // Si des ingrédients ont été ajoutés, cuisson du dessert
                if (foodAdded) {
                    console.log("Cuisson du dessert terminée !");
                    this.beep();
                } else {
                    console.log("Vous avez oublié d'ajouter des ingrédients pour le dessert. Recommencez.");
                }
            }      
        } catch (error) {
            console.error("Erreur lors de la cuisson du dessert :", error);
        }
    }    

  private beep(): void {
    console.log("BEEP BEEP BEEP - Cuisson terminée !");
  }

  public async start(): Promise<void> {
    let choice: number | null = null;

    do {
      console.log("\nQue souhaitez-vous faire ?");
      console.log("1. Cuire du riz");
      console.log("2. Maintenir au chaud");
      console.log("3. Cuisson à la vapeur");
      console.log("4. Cuisson de la soupe");
      console.log("5. Cuisson du dessert");
      console.log("6. Quitter");

      // Utilisation de readline-sync pour obtenir l'entrée utilisateur
      const input = question('Choisissez une option : ');

      // Convertir l'entrée en nombre
      choice = Number(input);

      // Si la conversion échoue ou l'entrée n'est pas un nombre
      if (isNaN(choice)) {
        console.log("Choix non valide. Veuillez choisir une option valide");
        choice = 0; // ou une autre valeur par défaut
      }

      switch (choice) {
        case 1:
          await this.cookRice();
          break;
        case 2:
          await this.keepWarm();
          break;
        case 3:
          await this.steamCook();
          break;
        case 4:
          await this.cookSoup();
          break;
        case 5:
          await this.cookDessert();
          break;
        case 6:
          console.log("Au revoir !");
          break;
      }
    } while (choice !== 6);
  }

  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

const riceCooker = new RiceCooker();
riceCooker.start();
