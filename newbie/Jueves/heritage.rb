class Animal
  REPRODUCIRSE = " se reproducen"
  def animal
    REPRODUCIRSE
  end
end

class Mammal < Animal
    CALIENTES = "sangre caliente"
    def warm_blooded?
      CALIENTES
    end
end

class Bird < Animal
  VOLAR= "vuela vuela...."
  def bird
    VOLAR
  end
end

class Reptile < Animal
  FEO="feos y verdes"
  def has_scales?
    FEO
  end
end

class Dog < Mammal
  PEGARSEDELACOLA = "guafff.... guafff"
  def dog
    PEGARSEDELACOLA
  end
end

class Fish < Mammal
  RAM="glup glup"
  def swim
    RAM
  end
end

class Dolphin < Mammal
    COMUNICARSE= "Hola humano infeliz"
    def Dolphin
      COMUNICARSE
    end
  end

class Cat < Mammal
    MAULLAR ="miauuuuuuuuu....miauuuuuuuuu....."
    def cat
      MAULLAR
    end
  end

class Whale < Mammal
    VIAJARXMUNDO = "soy una ballena"
    def whale
      VIAJARXMUNDO
    end
end

class Turtle < Reptile
  EXCESODEVELOCIDAD = "........."
  def turtle
    EXCESODEVELOCIDAD
  end
end

class Snake < Reptile
    ESCUPIR ="viboraaa,,,___"
    def snake
      ESCUPIR
    end
end

class Macaw < Bird
      HABLAR="Poli quiere galleta"
      def macaw
        HABLAR
      end
end
  #test

   firulais=Dog.new
p  firulais.animal
p   firulais.warm_blooded?
    gecko=Reptile.new
p   gecko.has_scales?

    rafael=Turtle.new
p   rafael.turtle
p   rafael.has_scales?

    poli=Bird.new
p   poli.bird
    polo=Macaw.new
p    polo.macaw
