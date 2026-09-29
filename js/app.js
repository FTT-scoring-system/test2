function render(){
 const isPublic=new URLSearchParams(location.search).get("display")==="public";
 if(isPublic){
   if(!document.getElementById("publicRoot")) renderPublic();
   renderPublicScreen();
 }else{
   renderOperator();
 }
}

if(new URLSearchParams(location.search).get("display")==="public") renderPublic();
else {renderOperator();bindSync()}
