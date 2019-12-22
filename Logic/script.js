
function SetMessage(value)
{
  const message = document.getElementById('name');
  message.innerHTML = value;
}

function reset()
{
  const message = document.getElementById('name');
  let input = document.getElementById('input');
  input.value = null;
  message.innerText = ' ';
}

function RecieveUsersName() 
{
  let value = document.getElementById('input').value;
  console.log(`Value: ${value.length}`);
  if(value.length == 0)
    SetMessage(' ');
  else
    SetMessage(value);
}
