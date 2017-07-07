def longest (arr_str)
arr=[]   #arreglo contenedor de la longitud de los parametros
arr_final=[] # arreglo para contener los valores con menos longitud
	arr_str.each do |x| # recorre el arreglo de parametros
	 arr<<x.length # te da la longitud de los parametros y los deposita en el arreglo  arr
	end
max=arr.sort.max	 # Ordena los numeros de menor a mayor y los deposita en min, Indicar la pocision despues de ordenarlos

	arr_str.each do |y| # recorre el arreglo original y lo deposita en y 
		if max == y.length	  #  compara la primera pocision con la longitud de caracteres del parametro original
	 		  arr_final<<y  # asigna a un arreglo los valores de la condicion if
	  end  
	
	end
arr_final
end

p longest(['tres', 'pez', 'alerta', 'cuatro', 'tesla', 'tropas', 'siete']) == ["alerta", "cuatro", "tropas"]
p longest(['gato', 'perro', 'elefante', 'jirafa']) == ["elefante"]
p longest(['verde', 'rojo', 'negro', 'morado']) == ["morado"]
# min[0] " Accede a la posicion 0 de un arreglo"
# min.first  "Accede a la posicion 0 de un arreglo"
# min.min 	" Accede a la posicion 0 de un arreglo"