class Node
    attr_accessor :data, :left, :right

    def initialize(data)
        self.data = data
    end

    def insert(value)
        if value <= data
            if (left == nil)
                self.left = Node.new(value)
            else
                left.insert(value)
                # This is the recursion tree
            end
        else
            if right == nil
                self.right = Node.new(value)
            else
                right.insert(value)
                # Recursion tree
            end
        end
    end

    def contains(value)
        if value == data
            return true
        elsif value < data
            if left == nil
                return false
            else
                left.contains(value)
            end
        else
            if right == nil
                return false
            else
                right.contains(value)
            end
        end
    end

end
