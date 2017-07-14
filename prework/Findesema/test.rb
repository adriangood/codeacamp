
def food_group(str)
food_groups = {
    "grano" => ['Arroz','Trigo', 'Avena', 'Cebada', 'Harina'],
    "vegetal" => ['Zanahoria', 'Maiz', 'Elote', 'Calabaza', 'Papa'],
    "fruta" => ['Manzana', 'Mango', 'Fresa', 'Durazno', 'Piña'],
    "carne" => ['Res', 'Pollo', 'Salmon', 'Pescado', 'Cerdo'],
    "lacteo" => ['Leche', 'Yogurt', 'Queso', 'Crema']
    }

    food_groups.each do |k,v1| 
    	v1.each do |v2|
    		 if v2==str 
    		 	 return k 
    		 	 else
  					"comida no encontrada" 
    		 end
     	end
    end

end
 		p food_group('Crema') #== "lacteo"
    p food_group('Res') #== "carne"
    p food_group('Piña') #== "fruta"
    p food_group('Caña') #== "comida no encontrada"







# a="Zanahoria"


# z="grano"
# H_nw={}
# V=food_groups.each_value{|val| val}
# if b==a
# 	H_nw<<a

	
# end
# p food_groups[z]




