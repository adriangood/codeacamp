def hashvalue (val)
	val.each_value { |value| p value}	
end
val={
	"Matematicas" => 1,
	"Historia" => 2,
	"Literatura"=> 3
		}
hashvalue(val)





# h = { "a" => 100, "b" => 200 }
# h.each_value {|value| puts value }


# h = { "a" => 100, "b" => 200 }
# h.each {|key, value| puts "#{key} is #{value}" }

# h = { "a" => 100, "b" => 200 }
# h.each_key {|key| puts key }