dicc=[]
p "Escribe una palabra:"
wrd_d= gets.chomp
system("clear")
while  wrd_d !=""
	p "Escribe otra palabra(o presiona 'enter' para finalizar):"
	dicc<<wrd_d
	wrd_d= gets.chomp
	system("clear")
end
puts "Felicidades! Tu diccionario tiene '#{dicc.count}' palabras:", dicc.sort_by{ |t| t.downcase }