# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN
# Mitsubishi is not a super-well-assembled Nissan
# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def contains_letter(array, letter)
  array.select {|str| str.include?(letter)}
end

# p contains_letter(beverages_array,letter_o)
# p contains_letter(beverages_array,letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def array_sum array
  array.inject(:+)
end

# p array_sum(nums_array1)
# p array_sum(nums_array2)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# class Bike
#   attr_accessor :model, :wheels, :current_speed
#   def initialize
#     @model = model
#     @wheels = 2
#     @current_speed = 0
#   end
#   def get_model
#     @model = 'Trek'
#   end
#   def bike_info
#     p "The #@model bike has #@wheels wheels and is going #@current_speed mph."
#   end
# end

# bike_one = Bike.new
# bike_one.get_model
# bike_one.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0


class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def get_model
    @model = 'Trek'
  end
  def pedal_faster
    @current_speed += 1
  end
  def brake
    if @current_speed > 0
      @current_speed -= 1
    end
  end
  def bike_info
    p "The #@model bike has #@wheels wheels and is going #@current_speed mph"
  end
end

# bike_one = Bike.new
# bike_one.get_model
# bike_one.bike_info
# bike_one.pedal_faster
# bike_one.pedal_faster
# bike_one.pedal_faster
# bike_one.pedal_faster
# bike_one.pedal_faster
# bike_one.pedal_faster
# bike_one.pedal_faster
# bike_one.bike_info
# bike_one.brake
# bike_one.brake
# bike_one.brake
# bike_one.brake
# bike_one.bike_info
# bike_one.brake
# bike_one.bike_info
# bike_one.brake
# bike_one.bike_info
# bike_one.brake
# bike_one.bike_info
# bike_one.brake
# bike_one.bike_info
