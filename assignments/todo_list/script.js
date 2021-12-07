var todoButton=document.getElementsByTagName("button")[0];
count=0
todoButton.addEventListener("click",addTODO);
var DIV=document.getElementsByTagName("div")[1];
function addTODO(){
    var Input=document.getElementsByTagName("input")[0];
    var InputValue=document.createElement("p");
    InputValue.innerHTML=Input.value;
    InputValue.addEventListener('click',function(){
        this.remove();
    });
    InputValue.setAttribute("key",count);
    DIV.append(InputValue);
    count+=1
}

