class Node
    attr_accessor :value, :pointer

    def initialize(value, pointer = nil)
        self.value = value
        self.pointer = pointer
    end
end
  
class LinkedList
    attr_accessor :head

    def add(value)
        if head
            self.find_end.pointer = Node.new(value)
        else
            self.head = Node.new(value)
        end
    end

    def insert(value, index)
        old_node = self.retrieve(index)
        if index > 0
            previous_node = self.retrieve(index - 1)
            previous_node.pointer = Node.new(value, old_node)
            true
        elsif index == 0
            self.head = Node.new(value, old_node)
            true
        else
            false
        end
    end
  
    def delete(index)
        old_node = self.retrieve(index)
        if index > 0
            previous_node = self.retrieve(index - 1)
            previous_node.pointer = old_node.pointer
            true
        elsif index == 0
            self.head = old_node.pointer
            true
        else
            false
        end
    end
  
    def retrieve(index)
        node = head
        index.times do
            node = node.pointer
        end
        node
    end
  
    def print_all
        node = head
        if self.head
            loop do
                if node.pointer
                    print node.value.to_s + ", "
                    node = node.pointer
                else
                    print node.value.to_s
                    puts ""
                    return true
                end
            end
        else
            head
        end
    end

    def find_end
        if head
            node = head
            loop do
                if node.pointer
                    node = node.pointer
                else
                    return node
                end
            end
        else
            head
        end
    end

end