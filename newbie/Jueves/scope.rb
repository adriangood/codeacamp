$global_var = "This is a global variable"
CONSTANT = 3.1416

def return_my_global_var
    $global_var
end

def return_my_global_var=(value)
    $global_var= value
end

p return_my_global_var
p return_my_global_var = "variable modificada"

#   local_var = "this is my local var"

  # def return_my_local_var
  #  local_var
  # end

# puts return_my_local_var
#son diferentes tipos de variables y no se puede mandar llamar un metodo fuera de el

class Dummy_class
@@class_variable = "This is a class variable"
  def initialize
    @local_var = "this is my local var"
  end

  def return_my_local_var
   @local_var
  end

 def class_variable
   @@class_variable
 end

 def class_variable=(value)
   @@class_variable = value
 end

 def return_my_global_var
     $global_var
 end

 def return_my_global_var=(value)
     $global_var= value
 end
end

valor=Dummy_class.new
#p valor.return_my_local_var
dummy_1=Dummy_class.new
dummy_2=Dummy_class.new
# p dummy_1.class_variable=  "New value for the class variable"
# p dummy_2.class_variable
# p dummy_1.class_variable == dummy_2.class_variable
#No esta declarado el metodo constructor asi que las instancias no existen
#la instancia se crea con el metodo constructor pero la variable no esta instanciada
#la variable se instancia con un @ y recibe el valor

# class Dummy_class
# # Este es un getter
#   def instance_var
#     @instance_var
#   end
#
# # Este es un setter
#   def instance_var=(value)
#     @instance_var = value
#   end
# end
# dummy_class =Dummy_class.new
#   p dummy_class.instance_var=("Bar")
#   p dummy_class.instance_var= "Baz"
p dummy_1.return_my_global_var = "modificada"
 p return_my_global_var
