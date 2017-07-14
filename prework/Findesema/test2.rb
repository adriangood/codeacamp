 def hashvalue (val)
    val.each_value { |val1| p  val1}
end
val={
    "Matematicas" => 1,
    "Historia" => 2,
    "Literatura"=> 3
    }
 p hashvalue(["Matematicas"])