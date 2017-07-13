def shortest (arr_str)
#arr=[]   #arreglo contenedor de la longitud de los parametros
#arr_final=[] # arreglo para contener los valores con menos longitud
	min_v=arr_str.sort_by{|x| x.length}
	# arr_str.each do |x| # recorre el arreglo de parametros
	#  arr<<x.length # te da la longitud de los parametros y los deposita en el arreglo  arr
	# end
# min=arr.sort.min	 # Ordena los numeros de menor a mayor y los deposita en min, Indicar la pocision despues de ordenarlos
p min=min_v.first.length
arr_str.map{|y| y if min == y.length}.compact	 # map te asigna en un arreglo los valores, usar compact para quitar los nil 
#arr_str.each{|y| arr_final << y if min == y.length    }	
	# arr_str.each do |y| # recorre el arreglo original y lo deposita en y 
	# 	if min == y.length	  #  compara la primera pocision con la longitud de caracteres del parametro original
	#  		  arr_final<<y  # asigna a un arreglo los valores de la condicion if
	#   end  
#arr_final
end

p shortest(['uno', 'dos', 'tres', 'cuatro', 'cinco']) #== ["uno", "dos"]
#p shortest(['gato', 'perro', 'elefante', 'jirafa']) == ["gato"]
#p shortest(['verde', 'rojo', 'negro', 'morado']) == ["rojo"]
# min[0] " Accede a la posicion 0 de un arreglo"
# min.first  "Accede a la posicion 0 de un arreglo"
# min.min 	" Accede a la posicion 0 de un arreglo"