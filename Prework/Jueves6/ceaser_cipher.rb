def caesar_cipher(original_text, rotate_number)
  original_alphabet = "abcdefghijklmnopqrstuvwxyz"
  cipher_text = ""
  original_text.split("").each do |letter|
    if "?.,! ".include?(letter)
      cipher_text << letter
    else
      cipher_alphabet = original_alphabet[(original_alphabet.index(letter.downcase) + rotate_number) % original_alphabet.size]
      if letter == letter.upcase
        cipher_text << cipher_alphabet.upcase
      else
        cipher_text << cipher_alphabet
      end
    end
  end
   cipher_text
end

p caesar_cipher("Mission fallida!",1)=="Njttjpo gbmmjeb!"
p caesar_cipher("No, puede ser?", 10)=="Xy, zeono cob?"

#Algoritmo criptacion tipo cesar...