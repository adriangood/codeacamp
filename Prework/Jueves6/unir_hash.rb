def join_hash(v1,v2,v3)	
h={}		
val=[v1,v2,v3] #Se insertan parametros en un arreglo
	val.each do |x|# Los parametros se recorren con un each
		x.each do |key,value| #se hace un each para un hash con los parametros
			h[key]=value		# y se depositan los valores en un each hash
		end
	end
	h		
end
fruit = {name: "pineapple"}
weight = {weight: "1 kg"}
taste = {taste: "good"}
p join_hash(fruit, weight, taste) == {:name=>"pineapple", :weight=>"1 kg", :taste=>"good"} 

