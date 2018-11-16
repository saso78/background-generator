<script type="text/javascript">

function BackgroundEven(){
document.body.style.backgroundColor="#DA0505";
}
function BackgroundOdd(){
document.body.style.backgroundColor="#000000";
}

function Random() {

return Math.floor(Math.random()*37);
}

var rando= Random();
function Change(){
if(rando%2 == 0)
{
BackgroundEven();
} 
else{
BackgroundOdd();
}
}
}

</script>

<input type="text" name="Result" value="" id="Random" size="5"/>
<input type="button" value="Spin" onclick="document.getElementById('Random').value=Random();Change();" />
</input>


<input type="button" value="Spin" onclick="Change(document.getElementById('Random').value=Random());" />

function Change(currentNum) {
  if(currentNum % 2 == 0)
    BackgroundEven();
  else
    BackgroundOdd();
}