item_to_find = 243

low = 1
high = 1000

number_of_guesses = 1

loop do
  guess = low + (high - low) / 2
 
  if item_to_find < guess
    low = guess + 1
  elsif item_to_find > guess
    high = guess - 1
  else
    break
  end
  number_of_guesses = number_of_guesses + 1
end