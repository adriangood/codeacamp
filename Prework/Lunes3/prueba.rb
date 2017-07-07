def shortest (arr_str)
z=0
arr=arr_str
arr.min(2)                                  
arr.min(2) {|a, b| a.length <=> b.length }
 
end
 p shortest(['uno', 'dos', 'tres', 'cuatro', 'cinco']) #== ["uno", "dos"]
# p shortest(['gato', 'perro', 'elefante', 'jirafa']) #== ["gato"]
# p shortest(['verde', 'rojo', 'negro', 'morado'])# == ["rojo"]
