


class CustomExports
  def initialize()  
  end  
  def number_parse dim  
    dim = dim.split "p"
    dim = dim[0]
    dim = dim.to_i
    return dim 
  end  
end  