# def are_anagram?(val)
# a=[]
# val.each do |word|
#  a<<word.split(//).sort!.join
#   end     
    
# a.uniq
# end

# p are_anagram?(['oscar','casor'])== (["acors"])

def canonical(word)
	word.split(//).sort.join
end                    

def are_anagrams?(word1, word2)
  canonical(word1) == canonical(word2)
end 
def anagram_for(word,dicc)
	an_r=[]
	dicc.select { |x| are_anagrams?(x,word) ? an_r << x : an_r }
	an_r
end
p anagram_for('amor',['roma','cleo', 'libro'])


# vow.map { |x|
#    x.gsub(/[a,e,i,o,u]/, 'x')

# def anagram_for(word,dicc)
# an_r=[]
# 	dicc.each do |x|
# 		if are_anagrams?(x,word) 
# 			 an_r<<x
# 		end	
# 	end		
# an_r
# end
# p anagram_for('amor',['roma','cleo', 'libro'])
