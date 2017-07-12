cont=1
p "99 elefantes se columpiaban.... Escribe cuantas veces quieres que se columpien"
break_widow = gets.chomp.to_i 
system ("clear")
while (1..99)
	puts "#{cont} elefantes se columpiaban...."
  cont += 1
  if (cont>break_widow)
  	puts "BUUMM..  SE ROMPIO"
  	break
	end
end

