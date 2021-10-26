# This is a binary search tree where it compares if on the left is smaller and on the right is always larger,
# Uses a depth first search DFS.

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

    def contains?(value)
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

    def print_in_order
        # Prints left, then self, then right
        # Most common printing of data is this way.
        if left != nil
            left.print_in_order
        end
        puts self.data
        if right != nil
            right.print_in_order
        end
    end

    def print_pre_order
        # Prints self, then left, then right
        puts self.data
        if left != nil
            left.print_pre_order
        end
        if right != nil
            right.print_pre_order
        end
    end

end

