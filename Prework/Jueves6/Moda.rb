def mode (par)
	arr_m=[] # arreglo de para guardar valor maximo
	moda=[] #arreglo para guardar valor de moda
	
	par.each do |elem_max| # par.each do > recorre el arreglo, |elem_max| los elementos contenidos en un arreglo
		arr_m<<par.count(elem_max) #par.count(elem_max)> cuenta cuantos elementos se repiten en el arreglo
	end
	 	max=arr_m.max # saca el numero maximo de los elementos repetidos
	
	par.each do |elem_comp|
		if (par.count(elem_comp)==max) #Compara los elementos repetidos cone l valor maximo de estos
		moda<<elem_comp #regresa los elementos originales 
		end
	end 
	moda.uniq # elimina los datos repetidos
end

p mode([1, 2, 2, 3])== [2]
p mode([1, 2, 2, 3, 3, 4]) == [2, 3]
p mode([1, 2, 3]) == [1, 2, 3]
p mode([0, 1, 2, 3, 4, 0]) == [0]
	