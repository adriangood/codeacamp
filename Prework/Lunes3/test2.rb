def mode(arr)
num_rep=[]
may=[]
	arr.each do |x|
		num_rep<<arr.count(x)
		arr.each do |y|
		may<<arr
	end
	end	
num_rep
		
p may	
end	
p mode([1, 2, 2, 3])# == [2]
  # mode([1, 2, 2, 3, 3, 4])# == [2, 3]
  # mode([1, 2, 3])# == [1, 2, 3]
  #  mode([0, 1, 2, 3, 4, 0])# == [0]