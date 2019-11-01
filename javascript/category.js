let listBooksLocal = JSON.parse(localStorage.getItem('listBooksLocal'));
let container = document.getElementById('container');
let display = '';
container.innerHTML = display;
let name = document.getElementsByClassName('name');
let price = document.getElementsByClassName('price');
let categoryValue = localStorage.getItem('categoryName');

let categoryList = listBooksLocal.filter(function(book){
    
    return book.Category == categoryValue;
    
})

for(let i = 0; i < categoryList.length; i++){
    display+= `<a href = "./sanpham.html" class="item" onclick="myFunction(this)"><div>`;
    display+= `<img src='${categoryList[i].srcImg}'><br>`;
    display+= `<span class="name">${categoryList[i].name}</span><br><p class="price">${categoryList[i].price}</p> VND`;
    display+= '</div></a>';
}

container.innerHTML = display;
function filter(){
    display = '';
    let index = select.selectedIndex;
    let newList = [];
    if(index == 0){
        newList = categoryList;
    }
    if(index == 1){
            newList = categoryList.sort(function(a, b){
                let c = a.name.toUpperCase()
                let d = b.name.toUpperCase()
                if(c > d) return 1;
                if(c < d) return -1;
                return 0;
                
            })
        }
    if(index == 2){
        newList = categoryList.sort(function(a, b){
                let c = a.name.toUpperCase()
                let d = b.name.toUpperCase()
                if(c < d) return 1;
                if(c > d) return -1;
                return 0;
            })
        }
    if(index == 3){
        newList = categoryList.sort(function(a, b){
            return a.price - b.price;
        });
    }
    if(index == 4){
        newList = categoryList.sort(function(a, b){
            return b.price - a.price;
        });
    }
    
    for(let i = 0; i < newList.length; i++){
        display+= `<a href = "./sanpham.html" class="item"><div>`;
        display+= `<img src='${newList[i].srcImg}'><br>`;
        display+= `<span class="name">${newList[i].name}</span><br><p class="price">${newList[i].price}</p> VND`;
        display+= '</div></a>';
    }
    container.innerHTML = display;
}
let item = document.getElementsByClassName('item');
function myFunction(a){
    let itemValue = a.getElementsByTagName('span')[0].innerHTML;
    localStorage.setItem('itemName', itemValue);
}
function goToSubCategory(a){
    let subcategoryValue = a.innerHTML;
    localStorage.setItem('subcategoryName', subcategoryValue);

}
function goToCategory(a){
    let categoryValue = a.innerText;
    localStorage.setItem('categoryName', categoryValue);
}
function searchBook(){
    let value = input.value;
    localStorage.setItem('searchName', value);
    window.open('./timkiem.html');
  }
  let categoryName = document.getElementById('category-name');
  categoryName.innerHTML = categoryValue;