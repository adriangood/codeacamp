def total_between_age (array,min_age,max_age)
mx_age=0
mn_age=0	
	array.each{ |x| (min_age..max_age).each { |y| x==y ? mx_age+=1: mn_age+=1}}
	mx_age		
end
p total_between_age([10, 20, 30, 40, 50, 60], 20, 40)==3
p total_between_age([18, 19, 20, 23, 24, 27], 20, 27)==4