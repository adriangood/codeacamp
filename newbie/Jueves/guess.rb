class NumberGuessingGame

  def initialize
    @num= rand(9) # crea un valor aleatorio cuando se genera una instancia
  end

  def guess(user_num) # inserta valor desde game.guess(5)

    if @num > user_num # si se cumple la sentencia se imprime el valor
      "Too low"
    elsif @num == user_num
      "You got it"
    else
      "Too high"
    end
  end
end
game = NumberGuessingGame.new # crea instancia para objeto
input=""
option=""
while option != "y"

  while input != "You got it" # segundo while este

    p "Ingresa un numero del 0 al 9"
    enter_num= gets.chomp.to_i
    p input=game.guess(enter_num)
    # "quieres seguir jugando"
    # in_=gets.chomp
  end
  p "Deseas salir del juego (y/n)"
  option=gets.chomp
  input="" #le damos valor nuevo a input para que vuelva a entrar al 2 while
  game=NumberGuessingGame.new # creamos otra instancia para darle otro valor al juego
end
