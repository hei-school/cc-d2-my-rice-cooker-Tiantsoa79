use std::io::{self, Write};

struct RiceCooker {
    cooked_rice: bool,
}

impl RiceCooker {
    fn new() -> RiceCooker {
        RiceCooker { cooked_rice: false }
    }

    fn cook_rice(&mut self) -> Result<(), Box<dyn std::error::Error>> {
        println!("Cuisson du riz en cours...");

        let mut water_added = false;
        let mut rice_added = false;
        let mut rice_quantity: i32 = 0;

        while !water_added || !rice_added {
            if !water_added {
                let add_water = read_line("Voulez-vous ajouter de l'eau ? (oui/non/annuler) : ")?;

                match add_water.trim().to_lowercase().as_str() {
                    "oui" => {
                        println!("Ajout d'eau...");
                        delay(1000)?;
                        water_added = true;
                    }
                    "annuler" => {
                        println!("Opération annulée.");
                        return Ok(());
                    }
                    _ => {
                        println!("Ajout d'eau...");
                        delay(1000)?;
                    }
                }
            }

            if !rice_added {
                let rice_quantity_input =
                    read_line("Entrez la quantité de riz (en kapoka) (ou annuler) : ")?;

                match rice_quantity_input.trim().to_lowercase().as_str() {
                    "annuler" => {
                        println!("Opération annulée.");
                        return Ok(());
                    }
                    _ => {
                        rice_quantity = rice_quantity_input.trim().parse()?;
                        if rice_quantity > 0 {
                            println!("Vous avez ajouté {} kapoka de riz.", rice_quantity);
                            rice_added = true;
                        } else {
                            println!("Vous avez ajouté 0 kapoka de riz.");
                        }
                    }
                }
            }

            if water_added && rice_added && rice_quantity > 0 {
                println!("Enclenchement du bouton de cuisson...");
                delay(2000)?;
                println!("Le riz cuit !");
                self.cooked_rice = true;
                self.beep();
            } else {
                if !rice_added {
                    println!("Vous avez oublié d'ajouter du riz. Recommencez.");
                }
                if !water_added {
                    println!("Vous avez oublié d'ajouter de l'eau. Recommencez.");
                }
            }
        }

        Ok(())
    }

    fn keep_warm(&mut self) -> Result<(), Box<dyn std::error::Error>> {
        let mut food_added = false;

        while !food_added {
            let add_food = read_line("Voulez-vous ajouter de la nourriture ? (oui/non/annuler) : ")?;

            match add_food.trim().to_lowercase().as_str() {
                "oui" => {
                    println!("Ajout de nourriture...");
                    delay(1000)?;
                    food_added = true;
                }
                "non" => {
                    println!("Aucune nourriture ajoutée.");
                }
                "annuler" => {
                    println!("Opération annulée.");
                    return Ok(());
                }
                _ => {
                    println!("Ajout de nourriture...");
                    delay(1000)?;
                }
            }

            if food_added {
                println!("Maintien au chaud de la nourriture.");
                delay(2000)?;
                println!("Nourriture maintenue au chaud !");
                self.beep();
            } else {
                println!("Vous avez oublié d'ajouter de la nourriture. Recommencez.");
            }
        }

        Ok(())
    }

    fn steam_cook(&mut self) -> Result<(), Box<dyn std::error::Error>> {
        let mut food_added = false;

        while !food_added {
            let add_food =
                read_line("Voulez-vous ajouter de la nourriture pour la cuisson à la vapeur ? (oui/non/annuler) : ")?;

            match add_food.trim().to_lowercase().as_str() {
                "oui" => {
                    println!("Ajout de nourriture...");
                    delay(1000)?;
                    food_added = true;
                }
                "non" => {
                    println!("Aucune nourriture ajoutée.");
                }
                "annuler" => {
                    println!("Opération annulée.");
                    return Ok(());
                }
                _ => {
                    println!("Ajout de nourriture...");
                    delay(1000)?;
                }
            }

            if food_added {
                println!("Cuisson à la vapeur terminée !");
                self.beep();
            } else {
                println!("Vous avez oublié d'ajouter de la nourriture. Recommencez.");
            }
        }

        Ok(())
    }

    fn cook_soup(&mut self) -> Result<(), Box<dyn std::error::Error>> {
        let mut water_added = false;
        let mut food_added = false;

        while !water_added || !food_added {
            if !water_added {
                let add_water = read_line("Voulez-vous ajouter de l'eau ? (oui/non/annuler) : ")?;

                match add_water.trim().to_lowercase().as_str() {
                    "oui" => {
                        println!("Ajout d'eau...");
                        delay(1000)?;
                        water_added = true;
                    }
                    "annuler" => {
                        println!("Opération annulée.");
                        return Ok(());
                    }
                    _ => {
                        println!("Ajout d'eau...");
                        delay(1000)?;
                    }
                }
            }

            if !food_added {
                let add_food = read_line("Voulez-vous ajouter de la soupe ? (oui/non/annuler) : ")?;

                match add_food.trim().to_lowercase().as_str() {
                    "oui" => {
                        println!("Ajout de soupe...");
                        delay(1000)?;
                        food_added = true;
                    }
                    "non" => {
                        println!("Aucune soupe ajoutée.");
                    }
                    "annuler" => {
                        println!("Opération annulée.");
                        return Ok(());
                    }
                    _ => {
                        println!("Ajout de soupe...");
                        delay(1000)?;
                    }
                }
            }

            if water_added && food_added {
                println!("Cuisson de la soupe terminée !");
                self.beep();
            } else {
                if !food_added {
                    println!("Vous avez oublié d'ajouter de la nourriture. Recommencez.");
                }
                if !water_added {
                    println!("Vous avez oublié d'ajouter de l'eau. Recommencez.");
                }
            }
        }

        Ok(())
    }

    fn cook_dessert(&mut self) -> Result<(), Box<dyn std::error::Error>> {
        let mut food_added = false;

        while !food_added {
            let add_food =
                read_line("Voulez-vous ajouter des ingrédients pour le dessert ? (oui/non/annuler) : ")?;

            match add_food.trim().to_lowercase().as_str() {
                "oui" => {
                    println!("Ajout d'ingrédients pour le dessert...");
                    delay(1000)?;
                    food_added = true;
                }
                "non" => {
                    println!("Aucun ingrédient ajouté pour le dessert.");
                }
                "annuler" => {
                    println!("Opération annulée.");
                    return Ok(());
                }
                _ => {
                    println!("Ajout d'ingrédients pour le dessert...");
                    delay(1000)?;
                }
            }

            if food_added {
                println!("Cuisson du dessert terminée !");
                self.beep();
            } else {
                println!("Vous avez oublié d'ajouter des ingrédients pour le dessert. Recommencez.");
            }
        }

        Ok(())
    }

    fn beep(&self) {
        println!("BEEP BEEP BEEP - Cuisson terminée !");
    }

    fn start(&mut self) -> Result<(), Box<dyn std::error::Error>> {
        let mut choice: i32 = 0;

        loop {
            println!("\nQue souhaitez-vous faire ?");
            println!("1. Cuire du riz");
            println!("2. Maintenir au chaud");
            println!("3. Cuisson à la vapeur");
            println!("4. Cuisson de la soupe");
            println!("5. Cuisson du dessert");
            println!("6. Quitter");

            let input = read_line("Choisissez une option : ")?;

            choice = match input.trim().parse() {
                Ok(num) => num,
                Err(_) => {
                    println!("Choix non valide. Veuillez choisir une option valide");
                    continue;
                }
            };

            match choice {
                1 => self.cook_rice()?,
                2 => self.keep_warm()?,
                3 => self.steam_cook()?,
                4 => self.cook_soup()?,
                5 => self.cook_dessert()?,
                6 => {
                    println!("Au revoir !");
                    break;
                }
                _ => {
                    println!("Choix non valide. Veuillez choisir une option valide");
                }
            }
        }

        Ok(())
    }

    fn delay(ms: u64) -> Result<(), Box<dyn std::error::Error>> {
        std::thread::sleep(std::time::Duration::from_millis(ms));
        Ok(())
    }
}

fn read_line(prompt: &str) -> io::Result<String> {
    print!("{}", prompt);
    io::stdout().flush()?;
    let mut input = String::new();
    io::stdin().read_line(&mut input)?;
    Ok(input)
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut rice_cooker = RiceCooker::new();
    rice_cooker.start()?;
    Ok(())
}
