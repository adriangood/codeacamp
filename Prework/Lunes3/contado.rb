def user
	x=0
	loop do
				p ("introduce valor aleatorio para finalizar escribe 'ya'")
		y=gets.chomp
		
	break if y=='ya'
		x+=1
	end
	"numero de entradas #{x}"
end
 p user