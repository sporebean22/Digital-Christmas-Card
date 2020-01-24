
function Display(source)
{
  const imagesource = document.getElementById('image');
  imagesource.src = source;
}

function GetImage()
{
  var images = ['Biscuit.jpg', 'Candle.jpg'];
  var i = 0;

  document.getElementById("RandomImageButton").addEventListener('click', i => 
  {
    i++;
    console.log(i.detail)
  }, false)
  
  if (i >= 2)
  {
    i - 2
  }
      
  const location = 'Style/Images/';
  var test = (location + images[i]);
  Display(test); 
  console.log(test); 
}

