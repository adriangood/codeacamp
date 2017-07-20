require 'benchmark'
a=Benchmark.realtime do
def fibonacci_iterative(value)
a=0
b=1
 value.times do
    c=a
  	 a=b
	b=c+b
end
return a
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

# b=Benchmark.realtime do
# def fibonacci_recursive(value)
#   if value == 0
#       return 0
#   end
#   if value == 1
#   	return 1
#   end
#   if value > 1
#   	return  fibonacci_recursive(value-1) + (fibonacci_recursive(value-2))
#   end
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
