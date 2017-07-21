def factorial(value)
  a=0
  b=1
   value.times do
      c=a
    	 a=b
  	b=c*b
  end
end
p factorial(5) #== 120
# p factorial(4) #== 24
# p factorial(0) #== 1
# p factorial(1) #== 1
# p factorial(6) #== 720
