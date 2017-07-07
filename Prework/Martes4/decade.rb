def decade(fecha)

	case fecha
	
	when 1920..1942
  	p "Twenties"
	when 1943..1951
  	p "Forties"
	when 1952..1959
  	p "Fifties"
	when 1960..1974
  	p "Sixties"
	when 1975..1981
  	p "Seventies"
	when 1982..1998
  	p "Eighties"
	when 1999
		p "Nineties"
	else
  	p "Valor invalido favor de insertar una fecha desde 1920 hasta 1999"
	end
end

p decade(1920) == "Twenties"
p decade(1943) == "Forties"
p decade(1952) == "Fifties"
p decade(1960) == "Sixties"
p decade(1975) == "Seventies"
p decade(1982) == "Eighties"
p decade(1999) == "Nineties"
