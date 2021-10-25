require 'spec_helper'
require 'pry'
require_relative "../lib/hash_table.rb"

RSpec.describe HashTable do
    it "sets and retrieves a value at a key" do
        hash = HashTable.new
        hash[:foo] = 3
        expect(hash[:foo]).to eq(3)
    end

    it "handles collisions" do

    end

    it "should resize the array eventually" do
    
    end
end