def baconian_cipher(str)
    diccionario={"a"=>"AAAAA","b"=>"AAAAB","c"=>"AAABA","d"=>"AAABB","e"=>"AABAA",
         "f"=>"AABAB","g"=>"AABBA","h"=>"AABBB","i"=>"ABAAA","k"=>"ABAAB",
         "l"=>"ABABA","m"=>"ABABB","n"=>"ABBAA","o"=>"ABBAB","p"=>"ABBBA",
         "q"=>"ABBBB","r"=>"BAAAA","s"=>"BAAAB","t"=>"BAABA","v"=>"BAABB",
         "w"=>"BABAA","x"=>"BABAB","y"=>"BABBA","z"=>"BABBB"}
    res=""
    str.scan(/...../).each do |v2|
      v2
      diccionario.each do |k,v|
          res<<k if v2 == v
      end
    end
    res
end

p baconian_cipher("BAABAAABAAAABAABAAABABBBAAABAABAAAAABBABAAAAAABABAAAAAABAAABAAABAABAAAABBAAAAABAABBAB") == "teesperoalascinco"
p baconian_cipher("ABABAAAAAAAAABAABABAAAAAABAABBAABAAAABAABAAABAAABBABBABBAAABBAABABAAAAAABAABAAAB")  == "laclaveesdostres"
