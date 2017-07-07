def join_hash(v1,v2,v3)	
h={}		

		v1.each do |key1,value1|
			h[key1]=value1
			 v2.each do |key2,value2|
			 	h[key2]=value2
				v3.each do |key3,value3|
					 h[key3]=value3
				end
			end
		end
	h		
end
  fruit = {name: "pineapple"}
	weight = {weight: "1 kg"}
	taste = {taste: "good"}
p join_hash(fruit, weight, taste) == {:name=>"pineapple", :weight=>"1 kg", :taste=>"good"} 

