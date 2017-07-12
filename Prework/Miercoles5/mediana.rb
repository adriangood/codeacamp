def median (arr)
  comp=arr.length
  if comp%2==0
    (arr[(comp/2)]+arr[((comp/2)-1)])/2.0
  else 
    arr[comp/2]       
  end 
end

# Pruebas
p median([4, 5, 6]) == 5
p median([-3, 0, 3]) == 0
p median([2, 3, 4, 5]) == 3.5
p median([1, 8, 10])== 8
  