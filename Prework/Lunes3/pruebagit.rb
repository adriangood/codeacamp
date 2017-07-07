def shortest(array)

array.sort { |a, b| [a.size, a] <=> [b.size, b] }
	
end
p shortest(['uno', 'dos', 'tres', 'cuatro', 'cinco']) #== ["uno", "dos"]
 p shortest(['gato', 'perro', 'elefante', 'jirafa']) #== ["gato"]
 shortest(['verde', 'rojo', 'negro', 'morado']) #== ["rojo"]