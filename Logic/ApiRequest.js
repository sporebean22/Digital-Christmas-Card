/*background-image: url('https://i.pinimg.com/originals/8c/e3/58/8ce35810ba8433626e5d2f34d89e334c.png');*/

function ImageRequest() 
{
  var request = new XMLHttpRequest();
  const initurl = 'https://source.unsplash.com/collection/197200/';
  const resolution = '1500x900';
  const url = initurl + resolution;

  request.open('GET', url);
  request.send();

  const img = request;
  //console.log(img);
  console.log(img.responseURL);
  Display(img.responseURL);
}
