def array_index(x,y)
    arr_sv=[]
    x.each do |o|   
        (1..y).each do |p|
            arr_sv<<[o,p]
        end
    end
    arr_sv
end
p array_index(["c", "b", "a"], 2)#== [["c", 1], ["c", 2], ["b", 1], ["b", 2], ["a", 1], ["a", 2]]
p array_index(["a"], 3)# == [["a", 1], ["a", 2], ["a", 3]] 