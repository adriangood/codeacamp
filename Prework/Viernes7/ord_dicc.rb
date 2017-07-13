dicc=[]
wrd_d=0
p "Escribe una palabra:"
while  wrd_d.!=""
	dicc<<wrd_d=gets.chomp
	p "Escribe otra palabra(o presiona 'enter' para finalizar):"
	break if wrd_d=="" 
		dicc<<wrd_d   
end
system("clear")


p "Felicidades! Tu diccionario tiene '#{dicc.count}' palabras:"
puts dicc