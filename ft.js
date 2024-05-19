function search(){
  if(document.getElementById('search').value==''){
    return ;
  }
  else{
    let filterr=document.getElementById('search').value.toUpperCase();
    sessionStorage.setItem('filterr' ,filterr);
    document.getElementById('search').value='';
    window.location.href="foodproducts.html";}
  }

function ty(filterr){
const filter =  sessionStorage.getItem('filterr');
  let item=document.querySelectorAll('.product');
    let l=document.getElementsByTagName('h3');
    for(var i=0;i<= l.length;i++){
      let a=item[i].getElementsByTagName('h3')[0];
      let value= a.innerHTML || a.innerText || a.textContent;
      if(value.toUpperCase().indexOf(filter) >-1){
        item[i].style.display="";
      }
      else{
        item[i].style.display="none";
      }
    }
}