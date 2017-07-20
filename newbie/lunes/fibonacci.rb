require 'benchmark'
a=Benchmark.realtime do
def fibonacci_iterative(value)
a=0
b=1
value.times do

 	 a=b
	b=a+b
end

end
 p fibonacci_iterative(0)
 p fibonacci_iterative(1)
p fibonacci_iterative(2)
	p fibonacci_iterative(3)
 p fibonacci_iterative(4)
 p fibonacci_iterative(5)
end
puts
puts
#
# b=Benchmark.realtime do
# 	if value == 0
#       return 0
#   end
#   if value == 1
#   	return 1
#   end
#   if value > 1
#   	return  fibonacci_iterative(value-1) + (fibonacci_iterative(value-2))
#   end
# 	fibonacci_iterative(val)
# end
# p fibonacci_recursive(0) == 0
# p fibonacci_recursive(1) == 1
# p fibonacci_recursive(2) == 1
# p fibonacci_recursive(3) == 2
# p fibonacci_recursive(4) == 3
# p fibonacci_recursive(5) == 5
# end
# puts
# puts
# p a * 1000
# p b * 1000
