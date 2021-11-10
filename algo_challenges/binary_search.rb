low = 1
high = 1000

puts "Please think of a number between #{low} and #{high}"
puts "Press ENTER to start"
gets.chomp

number_of_guesses = 1

loop do
  # Decide what the computer should gues
  # Take the lowest end of the range to the highest end of the range, and cut it in half
  guess = low + (high - low) / 2

  puts "My guess is #{guess}. Should I guess higher or lower?"
  puts "Enter `h` if I should guess higher"
  puts "Enter `l` if I should guess lower"  
  puts "Enter `c` if my guess was correct"
  
  input = gets.chomp.downcase
 
  if input === "h"
    # Guess higher. The low end of the range becomes 1 greater than the guess.
    low = guess + 1
  elsif input === "l"
    # Guess lower. The high end of the range becomes 1 less than the guess
    high = guess - 1
  elsif input === "c"
    puts "I guessed your number of #{guess} in #{number_of_guesses} guesses!"
    break
  else
    puts "Please enter a valid input"
  end
  number_of_guesses = number_of_guesses + 1should
  puts ""
end

# This program is a "BINARY SEARCH" algorithm.
# It will always find the guess within 10 guesses becuase 2^10 = 1024
# Technically we could guess any number between 1 and 1024 within 10 guesses