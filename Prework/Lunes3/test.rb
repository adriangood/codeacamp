def median(me)
par=[]
impar=[]
 	me.each do |x|
 	 	par<<x.length
 end 	 
 p par
# a.sort                    #=> ["a", "b", "c", "d", "e"]
#  a.sort 

	
end
 median([-3, 5, 3]) #== 0
 # median([2, 3, 4, 5]) #== 3.5
 # median([1, 8, 10]) #== 8