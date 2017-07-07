edad=35
case edad
when 0..6
  puts "Infancia"
when 6..12
  puts "Niñez"
when 12..20
  puts "Adolescencia"
when 20..25
  puts "Juventud"
when 25..60
  puts "Adultez"
when 60..150
  puts "Ancianidad"
else
  puts "zombie"
end