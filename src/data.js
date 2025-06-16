export const API_KEY = 'AIzaSyCY6yvYbXXoNSsjD2L6jEnTtiZMm1j127E'

export const value_convertor = (value) =>{
  if(value >= 1000000){
    return Math.floor(value/1000000)+"M";
  }
  else if(value >=1000){
    return Math.floor(value/1000)+"K";
  }
  else {
    return value;
  }
}