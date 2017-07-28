  class Person
    require 'faker'
    require 'csv'

    attr_accessor :first_name, :last_name, :email, :phone, :created_at #
    def initialize(first_name, last_name, email, phone, created_at)
      @first_name= first_name
      @last_name = last_name
      @email= email
      @phone = phone
      @created_at = created_at
    end
  end

  def people(num) # se le meanda un valor desde people=people(5)
    num_per=[]

    num.times do #Inserta 5 veces valores aleoatorios
      num_per<<Person.new(Faker::Name.first_name, Faker::Name.last_name, Faker::Internet.email, Faker::PhoneNumber.phone_number, Faker::Date.backward)#Agregando valores aleoatorios de la gema faker ( internet, phone_number,backward , email) al arreglo num_per
    end
    num_per[0]=Person.new('adrian','bueno','a@b.c','6798584','26/06/1989')
    num_per
  end

  people=people(15)

  class PersonWriter
    def initialize(archivo, arreglo)
      @archivo= archivo
      @arreglo= arreglo
    end

    def create_csv
      CSV.open(@archivo, "w") do |csv| #aqui se crea el archivo csv "W" que puedes escribir en el
        @arreglo.each {|value| csv<< [value.first_name, value.last_name, value.email, value.phone, value.created_at]} #introducir elementos al csv con un arreglo

      end
    end
  end
  person_writer = PersonWriter.new("people.csv", people) #crear csv
  person_writer.create_csv
  class PersonParser # esta clase sirve para manipular el csv dentro de un programa
    def initialize(file) #Recibe el documento
      @file = file
    end

    def people
      a=[]
      CSV.foreach(@file) do |row| #foreach es del metodo csv
        a<<Person.new(row[0], row[1], row[2], row[3], row[4]) #hace una instancia de la clase Person con los atributos y los agrega a un arreglo
      end
      a[0..9]
      end
  end
     parser = PersonParser.new('people.csv') # manda el archivo.csv como argumento  ylo guarda en parser
     p people = parser.people #
