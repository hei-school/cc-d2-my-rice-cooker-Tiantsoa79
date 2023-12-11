class RiceCooker
    def initialize
      @cooked_rice = false
    end
  
    def cook_rice
      puts "Cuisson du riz en cours..."
  
      begin
        water_added = false
        rice_added = false
        rice_quantity = 0
  
        until water_added && rice_added
          unless water_added
            add_water = prompt("Voulez-vous ajouter de l'eau ? (oui/non/annuler) : ")
  
            if add_water.downcase == 'oui'
              puts "Ajout d'eau..."
              delay(1000)
              water_added = true
            elsif add_water.downcase == 'annuler'
              puts "Opération annulée."
              return
            else
              puts "Ajout d'eau..."
              delay(1000)
            end
          end
  
          unless rice_added
            rice_quantity_input = prompt('Entrez la quantité de riz (en kapoka) (ou annuler) : ')
  
            if rice_quantity_input.downcase == 'annuler'
              puts "Opération annulée."
              return
            end
  
            rice_quantity = rice_quantity_input.to_i
  
            if rice_quantity > 0
              puts "Vous avez ajouté #{rice_quantity} kapoka de riz."
              rice_added = true
            else
              puts "Vous avez ajouté 0 kapoka de riz."
            end
          end
  
          if water_added && rice_added && rice_quantity > 0
            puts "Enclenchement du bouton de cuisson..."
            delay(2000)
            puts "Le riz cuit !"
            @cooked_rice = true
            beep
          else
            puts "Vous avez oublié d'ajouter du riz. Recommencez." unless rice_added
            puts "Vous avez oublié d'ajouter de l'eau. Recommencez." unless water_added
          end
        end
      rescue StandardError => e
        puts "Erreur lors de la cuisson du riz : #{e.message}"
      end
    end
  
    def keep_warm
      begin
        food_added = false
  
        until food_added
          add_food = prompt('Voulez-vous ajouter de la nourriture ? (oui/non/annuler) : ')
  
          if add_food.downcase == 'oui'
            puts "Ajout de nourriture..."
            delay(1000)
            food_added = true
          elsif add_food.downcase == 'non'
            puts "Aucune nourriture ajoutée."
          elsif add_food.downcase == 'annuler'
            puts "Opération annulée."
            return
          else
            puts "Ajout de nourriture..."
            delay(1000)
          end
  
          if food_added
            puts "Maintien au chaud de la nourriture."
            delay(2000)
            puts "Nourriture maintenue au chaud !"
            beep
          else
            puts "Vous avez oublié d'ajouter de la nourriture. Recommencez."
          end
        end
      rescue StandardError => e
        puts "Erreur lors du maintien au chaud : #{e.message}"
      end
    end
  
    def steam_cook
      begin
        food_added = false
  
        until food_added
          add_food = prompt('Voulez-vous ajouter de la nourriture pour la cuisson à la vapeur ? (oui/non/annuler) : ')
  
          if add_food.downcase == 'oui'
            puts "Ajout de nourriture..."
            delay(1000)
            food_added = true
          elsif add_food.downcase == 'non'
            puts "Aucune nourriture ajoutée."
          elsif add_food.downcase == 'annuler'
            puts "Opération annulée."
            return
          else
            puts "Ajout de nourriture..."
            delay(1000)
          end
  
          if food_added
            puts "Cuisson à la vapeur terminée !"
            beep
          else
            puts "Vous avez oublié d'ajouter de la nourriture. Recommencez."
          end
        end
      rescue StandardError => e
        puts "Erreur lors de la cuisson à la vapeur : #{e.message}"
      end
    end
  
    def cook_soup
      begin
        water_added = false
        food_added = false
  
        until water_added && food_added
          unless water_added
            add_water = prompt('Voulez-vous ajouter de l\'eau ? (oui/non/annuler) : ')
  
            if add_water.downcase == 'oui'
              puts "Ajout d'eau..."
              delay(1000)
              water_added = true
            elsif add_water.downcase == 'annuler'
              puts "Opération annulée."
              return
            else
              puts "Ajout d'eau..."
              delay(1000)
            end
          end
  
          unless food_added
            add_food = prompt('Voulez-vous ajouter de la soupe ? (oui/non/annuler) : ')
  
            if add_food.downcase == 'oui'
              puts "Ajout de soupe..."
              delay(1000)
              food_added = true
            elsif add_food.downcase == 'non'
              puts "Aucune soupe ajoutée."
            elsif add_food.downcase == 'annuler'
              puts "Opération annulée."
              return
            else
              puts "Ajout de soupe..."
              delay(1000)
            end
          end
  
          if water_added && food_added
            puts "Cuisson de la soupe terminée !"
            beep
          else
            puts "Vous avez oublié d'ajouter de la nourriture. Recommencez." unless food_added
            puts "Vous avez oublié d'ajouter de l'eau. Recommencez." unless water_added
          end
        end
      rescue StandardError => e
        puts "Erreur lors de la cuisson de la       soupe : #{e.message}"
    end
  end

  def cook_dessert
    begin
      food_added = false

      until food_added
        add_food = prompt('Voulez-vous ajouter des ingrédients pour le dessert ? (oui/non/annuler) : ')

        if add_food.downcase == 'oui'
          puts "Ajout d'ingrédients pour le dessert..."
          delay(1000)
          food_added = true
        elsif add_food.downcase == 'non'
          puts "Aucun ingrédient ajouté pour le dessert."
        elsif add_food.downcase == 'annuler'
          puts "Opération annulée."
          return
        else
          puts "Ajout d'ingrédients pour le dessert..."
          delay(1000)
        end

        if food_added
          puts "Cuisson du dessert terminée !"
          beep
        else
          puts "Vous avez oublié d'ajouter des ingrédients pour le dessert. Recommencez."
        end
      end
    rescue StandardError => e
      puts "Erreur lors de la cuisson du dessert : #{e.message}"
    end
  end

  def start
    choice = nil

    loop do
      puts "\nQue souhaitez-vous faire ?"
      puts '1. Cuire du riz'
      puts '2. Maintenir au chaud'
      puts '3. Cuisson à la vapeur'
      puts '4. Cuisson de la soupe'
      puts '5. Cuisson du dessert'
      puts '6. Quitter'

      input = prompt('Choisissez une option : ')
      choice = input.to_i

      if choice.zero?
        puts 'Choix non valide. Veuillez choisir une option valide'
        choice = 0
      end

      case choice
      when 1
        cook_rice
      when 2
        keep_warm
      when 3
        steam_cook
      when 4
        cook_soup
      when 5
        cook_dessert
      when 6
        puts 'Au revoir !'
      end
    end while choice != 6
  end

  private

  def delay(ms)
    sleep(ms / 1000.0)
  end

  def beep
    puts 'BEEP BEEP BEEP - Cuisson terminée !'
  end

  def prompt(message)
    print message
    gets.chomp
  end
end

rice_cooker = RiceCooker.new
rice_cooker.start

  