localStorage.setItem('listBooksLocal', JSON.stringify(list));
let containerSach = document.getElementsByClassName('container-sach');


let containerKyNang = document.getElementById('container-kynang');
let containerVanHoc = document.getElementById('container-vanhoc');
let containerKinhTe = document.getElementById('container-kinhte');
let display = '';
let listBooksLocal = JSON.parse(localStorage.getItem('listBooksLocal'));
function show(theloai){
    display = '';
    let newList = [];
    for(let i = 0; i < listBooksLocal.length; i++){
        if(listBooksLocal[i].Category == theloai) newList.push(listBooksLocal[i]);
    }
    for(let i = 0; i < newList.length; i++){
        display+= `<a href = "./sanpham.html" class="item" onclick="myFunction(this)"><div>`;
        display+= `<img src="${newList[i].srcImg}"><br>`;
       
        display+= `<span class="name">${newList[i].name}</span><br><p class="price">${newList[i].price}</p> VND`;
        display+= '</div></a>';
    }
    return display;
}
containerKyNang.innerHTML = show('Kỹ năng');
containerVanHoc.innerHTML = show('Văn học');
containerKinhTe.innerHTML = show('Kinh tế');
function myFunction(a){
    let itemValue = a.getElementsByTagName('span')[0].innerHTML;
    localStorage.setItem('itemName', itemValue);
}
let input = document.getElementById('input');

function searchBook(){
    let value = input.value;
    localStorage.setItem('searchName', value);
    window.open('./timkiem.html');
  }
function goToSubCategory(a){
    let subcategoryValue = a.innerHTML;
    localStorage.setItem('subcategoryName', subcategoryValue);

}
function goToCategory(a){
    let categoryValue = a.innerText;
    localStorage.setItem('categoryName', categoryValue);
}