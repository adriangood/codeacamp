class Door
  attr_accessor :color
  def initialize(color)
    @color=color
  def spray_paint(color)
    "The #{color} door looks great!"
  end
  end
end
big_door=Door.new("verde")
p big_door.spray_paint('yellow')# == "The Yellow door looks great!"
