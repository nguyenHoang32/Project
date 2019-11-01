let boxValue = JSON.parse(localStorage.getItem('boxName'));
let name = document.getElementsByClassName('name');
let author = document.getElementsByClassName('author');
let img = document.getElementsByClassName('img');
let divdisplay = document.getElementById('divdisplay');
let totalmoney = document.getElementById('total');
let display = '';
let total = 0 ;
console.log(boxValue);
if(localStorage.getItem('boxName') == null){
    display = 'Giỏ hàng không có sản phẩm';
}
else{
    for(let i = 0; i < boxValue.length; i++){
        display += `<div class="container"><img src = '${boxValue[i].srcImg}' class='image'>`;
        display += `<div class="content"><a href = './sanpham.html' onclick="myFunction(this)">${boxValue[i].name}</a>`;
        display += `<p>Tác giả:${boxValue[i].author}</p></div>`;
        display += `<div class="right">${boxValue[i].price} đ `;
        display += `<input type="number" value="${boxValue[i].quality}" onchange = "changed(this)" min = 1>`
        display += `<button class="delete" onclick="deleted(this)">Xóa</button>`
        display += `</div>`;
        display += '</div>';
        total += boxValue[i].price * Number(boxValue[i].quality);
    }
}

totalmoney.innerHTML = total + ' đ';
divdisplay.innerHTML = display;

function changed(input){
    if(input.value < 1){
        input.value = 1;
    }
    total = 0;
    let name = input.parentNode.parentNode.getElementsByClassName('content')[0].getElementsByTagName('a')[0].innerHTML;
    for(let i = 0; i < boxValue.length; i++){
        if(boxValue[i].name == name){
            boxValue[i].quality = input.value;
        }
        total += boxValue[i].price * Number(boxValue[i].quality);    
    }
    localStorage.setItem('boxName', JSON.stringify(boxValue));
    totalmoney.innerHTML = total + ' đ';
}
function buy(){
}
function deleted(button){
    let name = button.parentNode.parentNode.getElementsByClassName('content')[0].getElementsByTagName('a')[0].innerHTML;  
    // for(let i = 0; i < boxValue.length; i++){
    //     if(boxValue[i].name == name){
    //         boxValue.splice(i, 1);
    //         console.log(boxValue)
    //     }
        let index = boxValue.findIndex(function(a){
            return a.name == name;
        })
        boxValue.splice(index, 1);
        localStorage.setItem('boxName', JSON.stringify(boxValue));
        console.log(boxValue);
    
        display = '';
        total = 0;
        if(boxValue.length == 0){
            display = 'Giỏ hàng không có sản phẩm';
        }
        else{
            for(let i = 0; i < boxValue.length; i++){
                display += `<div class="container"><img src = '${boxValue[i].srcImg}' class='image'>`;
                display += `<div class="content"><a href = './sanpham.html' onclick="myFunction(this)">${boxValue[i].name}</a>`;
                display += `<p>Tác giả:${boxValue[i].author}</p></div>`;
                display += `<div class="right">${boxValue[i].price}  đ`;
                display += `<input type="number" value="${boxValue[i].quality}" onchange = "changed(this)" min = 1>`
                display += `<button class="delete" onclick="deleted(this)">Xóa</button>`
                display += `</div>`;
                display += '</div>';
                total += boxValue[i].price * Number(boxValue[i].quality);
            }
        }
    
    totalmoney.innerHTML = total;
    divdisplay.innerHTML = display;
}
function myFunction(a){
        let itemValue = a.innerHTML;
        localStorage.setItem('itemName', itemValue);
}