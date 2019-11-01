let listBooksLocal = JSON.parse(localStorage.getItem('listBooksLocal'));
let itemValue = localStorage.getItem('itemName');
let result = listBooksLocal.filter(function(item){
    return item.name === itemValue;
})
result = result[0];
let name = document.getElementById('name');
let price = document.getElementById('price');
let author = document.getElementById('author');
name.innerText = `${result.name}`;
price.innerText = `Giá : ${result.price} đ`;
author.innerText = `${result.author}`;
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
let quality = document.getElementById('quality');
let verify = document.getElementById('vertify');
let nxb = document.getElementById('nxb');
let intro = document.getElementById('intro');
let infor = document.getElementById('infor');
let img = document.getElementById('img');
vertify.style.display = 'none';
let descripText = '';
for(let j = 0; j < 250; j++){
  descripText+=result.description[j];
}
intro.innerText = descripText;
nxb.innerText = result.NXB;
let inforText = '';
inforText+=`Số trang : ${result.page}<br>`;
inforText+=`Năm xuất bản : ${result.year}<br>`;
inforText+=`Tác giả : ${result.author}`;
infor.innerHTML = inforText;
img.src = result.srcImg;
let dataString = localStorage.getItem('boxName');
let box; 
if(dataString){
  box = JSON.parse(dataString);
}
else {
  box = [];
}
console.log(box);
function add(){
  let index = box.findIndex(function(e){
    return e.name == result.name;
  });
  if( index == -1 ){
    result.quality = Number(quality.value);
    box.push(result);
  }
  else {
    box[index].quality = Number(box[index].quality)
    box[index].quality += Number(quality.value);
  }
  boxValue = JSON.stringify(box);
  localStorage.setItem('boxName', boxValue);
  vertify.style.display = 'block';
}
function login(){
  alert('Coming soon ....');
}
function readmore(){
  let readmoreBtn = document.getElementById('readmore-btn')
  descripText = '';
  if(readmoreBtn.innerText == 'Xem thêm'){
    readmoreBtn.innerText = 'Thu gọn';
    for(let j = 0; j < result.description.length; j++){
      descripText+=result.description[j];
    }
    intro.innerHTML = descripText;
  }
  else{
    readmoreBtn.innerText = 'Xem thêm';
    for(let j = 0; j < 300; j++){
      descripText+=result.description[j];
    }
    intro.innerHTML = descripText;
  }
  
}
function changed(input){
  if(input.value < 1){
    input.value = 1;
  }
}
function searchBook(){
  let value = input.value;
  localStorage.setItem('searchName', value);
  window.open('./timkiem.html');
}
// --------------------------------------------------- add-to-cart-sucess
let divAddToCart = document.getElementById('add-to-cart-sucess');
function addToCartSucess(){
  
  divAddToCart.style.display = 'block';
  setTimeout(function(){
    divAddToCart.style.display = 'none';
  },5000);
}
function closeDiv(){
  divAddToCart.style.display = 'none';
}
function goToSubCategory(a){
  let subcategoryValue = a.innerHTML;
  localStorage.setItem('subcategoryName', subcategoryValue);

}
function goToCategory(a){
  let categoryValue = a.innerText;
  localStorage.setItem('categoryName', categoryValue);
}