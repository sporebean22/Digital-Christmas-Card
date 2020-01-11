/*background-image: url('https://i.pinimg.com/originals/8c/e3/58/8ce35810ba8433626e5d2f34d89e334c.png');*/

function ApiRequest() {
  const userAction = async () => {
    const request = new Request
    {
      method: 'POST'
      //body: myBody,
      /*  headers: 
        {  
          'Content-Type': 'application/json'  
        }*/
    }
    const url = 'https://source.unsplash.com/collection/197200/';
    const response = await fetch(url, request).then
      (
      data => {
        console.log(data);
      }
      )
  }
}

function ImageRequest() {
  var request = new XMLHttpRequest();
  const initurl = 'https://source.unsplash.com/collection/197200/';
  const resolution = '1500x900';
  const url = initurl + resolution;
  request.open('GET', url, true);
  request.onload = response => {
    var data = JSON.parse(this.response);
  }
  const img = response;
  Display(img);
}
