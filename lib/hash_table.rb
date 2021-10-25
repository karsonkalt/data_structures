require 'pry'

class HashTable
    # Assumed to be O1 run time, but if bad hashing it can approach On

    # Key => Hash => Index of Array
    # Need to avoid collisions, we are going to add a sub array
    # We need to store the keys with the values when taking the linkedlist approach

    LOAD_FACTOR = 0.7

    attr_accessor :array

    def initialize
        @size = 10
        @array = Array.new(@size) { [] }
        @count = 0
    end

    def []=(key, value)
        resize if (@count.to_f / @size > LOAD_FACTOR)
        slot = h(key)
        arr = @array[slot]
        kv_pair = arr.find { |pair|
            pair[0] == key
        }
        if kv_pair
            kv_pair[1] = value
        else
            @count += 1
            arr << [key, value]
        end
    end

    def [](key)
        slot = h(key)
        arr = @array[slot]
        kv_pair = arr.find { |pair|
            pair[0] == key
        }
        kv_pair[1] if kv_pair
    end

    private

    def h(key)
        key.hash % @size
    end

    def resize
        old_array = @array
        @size *= 2
        @array = Array.new(@size) { [] }
        count = 0
        old_array.each do |arr|
            array.each do |key, value|
                self[key] = value
            end
        end
    end
end