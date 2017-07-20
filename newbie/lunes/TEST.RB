def fib(places)

  a = 0
  b = 1

  while b < places do
    puts b

     a,b = b,a+b
  end
end

fib(3)
