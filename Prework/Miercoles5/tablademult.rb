def multiplication_tables(num)
		(1..num).each do |x|
					(1..10).each do |y|
						print "#{x*y}\t" 
					end
		print "\n"
		end
 
 end
multiplication_tables(5)
