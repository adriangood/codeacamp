class Person
  attr_accessor :first_name, :last_name, :email
  def initialize(first_name, last_name, email)
    @first_name = first_name
    @last_name = last_name
    @email = email
  end
 def name
   "#{@first_name} #{@last_name}"
 end

 def information
   puts "Name :  #{name}"
   "Email:" " #{@email}"
 end

end
person = Person.new('Daniel', 'Garcia', 'daniel@mail.com')
puts person.name
# => Daniel Garcia
puts person.information
# => Name: Daniel Garcia
# => Email: daniel@mail.com
