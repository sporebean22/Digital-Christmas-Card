
function Display(source)
{
  const imagesource = document.getElementById('image');
  imagesource.src = source;
}

function GetImage()
{
  var images = ['Biscuit.jpg', 'Candle.jpg'];

  const location = 'Style/Images/';
  for(i = 0; i < 2 ; i++)
  {
    Display(location + images[i])
    if (i == 1)
    {
      i - 1
    }
  }

  console.log(location + images[0]);
}

