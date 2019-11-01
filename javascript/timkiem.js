let listBooksLocal = JSON.parse(localStorage.getItem('listBooksLocal'));
let searchValue = localStorage.getItem('searchName');
let container = document.getElementById('container');
let display = '';
let name = document.getElementsByClassName('name');
let price = document.getElementsByClassName('price');
let searchList = listBooksLocal.slice();
searchList = searchList.filter(function(element){
    let name = element.name;
    let vietnam = nonAccentVietnamese(element.name);
    searchValue = nonAccentVietnamese(searchValue);
    return vietnam.includes(searchValue);
})
for(let i = 0; i < searchList.length; i++){
    display+= `<a href = "./sanpham.html" class="item" onclick="myFunction(this)"><div>`;
    display+= `<img src='${searchList[i].srcImg}'><br>`;
    display+= `<span class="name">${searchList[i].name}</span><br><p class="price">${searchList[i].price}</p> VND`;
    display+= '</div></a>';
}

container.innerHTML = display;
function filter(){
    display = '';
    let index = select.selectedIndex;
    let newList = searchList;
    if(index == 0){
        newList = searchList;
    }
    if(index == 1){
            newList = searchList.sort(function(a, b){
                let c = a.name.toUpperCase()
                let d = b.name.toUpperCase()
                if(c > d) return 1;
                if(c < d) return -1;
                return 0;
                
            })
        }
    if(index == 2){
        newList = searchList.sort(function(a, b){
                let c = a.name.toUpperCase()
                let d = b.name.toUpperCase()
                if(c < d) return 1;
                if(c > d) return -1;
                return 0;
            })
        }
    if(index == 3){
        newList = searchList.sort(function(a, b){
            return a.price - b.price;
        });
    }
    if(index == 4){
        newList = searchList.sort(function(a, b){
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
function nonAccentVietnamese(str) {
    str = str.toLowerCase();
//     We can also use this instead of from line 11 to line 17
//     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
//     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
//     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
//     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
//     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
//     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
//     str = str.replace(/\u0111/g, "d");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
}
function goToSubCategory(a){
    let subcategoryValue = a.innerHTML;
    localStorage.setItem('subcategoryName', subcategoryValue);

}
function goToCategory(a){
    let categoryValue = a.innerText;
    localStorage.setItem('categoryName', categoryValue);
}
let searchName = document.getElementById('search');
searchName.innerHTML = `Kết quả tìm kiếm cho: <b>${searchValue}</b>`;