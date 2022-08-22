function formatPrice(price,formatNumber=2){
  if(typeof price !== 'number'){
    price = Number(price)
  }
  return price.toFixed(formatNumber)
}