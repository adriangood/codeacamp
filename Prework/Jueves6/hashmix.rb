def hashvalue (val)
	val.each { |key,value| p "la llave del hash es '#{key}' y su valor es '#{value}'"}	
end
val={
	"Matematicas" => 1,
	"Historia" => 2,
	"Literatura"=> 3
		}
hashvalue(val)

