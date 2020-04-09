def project_specific_class my_str
  arr = my_str.split ""
  almost = arr.join "_"
  p almost.split "_\n"
end

puts "Give me the class name to convert"  
  STDOUT.flush  
  classname = gets 
  project_specific_class classname

