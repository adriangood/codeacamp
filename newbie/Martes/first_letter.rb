def first_letters(letter)
 a=[]
 letter.split.each { |x| a<<x.chars.first}
   a
end

p first_letters("Hoy es miercoles y hace sol") == ["H", "e", "m", "y", "h", "s"]
p first_letters("tienes ocho candados indios nuevos omega") == ["t", "o", "c", "i", "n", "o"]
