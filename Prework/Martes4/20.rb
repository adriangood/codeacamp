 def large(str)
    if str.length>=20
        str.upcase
    else 
        str
    end
end
p large("Hola vamos a la comida") == "HOLA VAMOS A LA COMIDA"
p large("Es hora de dormir") == "Es hora de dormir"