def replace_vowels(vow)
arr_v=[]
  vow.each do |x|
  
	 arr_v<<x.gsub(/[aeiou]/, 'x') # se puede utilizar el metodo destructivo para no guardar en una variable
	 															#x.gsub!(/[aeiou]/, 'x')
	 end
	 arr_v 			
end

 p replace_vowels(['banana', 'apple']) == ["bxnxnx", "xpplx"]

#  def replace_vowels(vow)

#   vow.map { |x|
#    x.gsub(/[a,e,i,o,u]/, 'x')
# 				 }
# end

#  p replace_vowels(['banana', 'apple']) #== ["bxnxnx", "xpplx"]