def fizzbuzz(num1 , num2)	
arr=[]		
		(num1..num2).each do |x|
			if( x %3==0 && x % 5==0)
				arr<<"FizzBuzz"
					elsif(x %3==0)
						arr<<"Fizz"
					elsif(x %5==0)
						arr<<"Buzz"
					else
						arr<<x
					end
   					
			end
arr
end

p fizzbuzz(3, 5) #== ["Fizz", 4, "Buzz"]
p fizzbuzz(10, 15) #== ["Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]