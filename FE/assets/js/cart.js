let cartCount = 0;
 document.getElementById('cart-count').textContent=cartCount
let giohang = new Array();

// function updateCartCount() {
//     let cartCountElement = document.getElementById('cart-count');
//     if (cartCountElement) {
//         cartCountElement.textContent = cartCount;
//     }
// }

function themvaogiohang(button) {


    let boxsp = button.parentElement.parentElement
    let tenNha = button.parentElement.parentElement.querySelector('h5').textContent;
    let anh = boxsp.querySelector('img').getAttribute('src');
    let elemet = boxsp.querySelectorAll('small span')
    let id = elemet[2].textContent
    let diachi = elemet[1].textContent
    let gia = elemet[0].textContent;
    let home = new Array(tenNha, anh, diachi, gia, id);
    cartCount++;
    // updateCartCount();
    giohang.push(home);
    //lưu giỏ hàng trên sesionstorage
    // sessionStorage.setItem("giohang1", JSON.stringify(giohang))
    // let gh = JSON.parse(sessionStorage.getItem("giohang1"));
    // console.log(gh.length)

    document.getElementById('cart-count').textContent = cartCount
}


function showMyCart() {
    if (giohang.length == 0) {
        document.getElementById('showCart').innerHTML = `<div class="whole-cart-window " id="showCart"></div>`
    } else {
        let str = ` 
                             <h3>HomeStay</h3>

                             <div class="cart-wrapper" >`
        for (let i = 0; i < giohang.length; i++) {

            str += ` <div class="cart-item">
                             <img src="${giohang[i][1]}">
                             <div class="details">
                             <h6>${giohang[i][0]}</h6>

                             <span class="quantity">Time <input type="number" min="1" style="width: 40px" id="thoigian+${i}" onclick="tinhtien(${i})"> tháng</span>
                            <span class="quantity" >$<span id="gia">${giohang[i][3]}</span>/tháng </span>
                              
                             <span class="price">Tổng tiền: <span id="tongtien+${i}">0</span>$ </span>


                            </div>
                             <div class="cancel" ><i class="bi bi-x-square" onclick="xoa(${i})"></i></div>

                            </div>`


        }
        document.getElementById('showCart').innerHTML = str + `
                             </div>
                             <div class="tong" >Thanh toán : <span id="thanhtoan">0</span> $</div>
                             <div style="padding: 10px">
                             <div class="checkout" onclick="logout()">Đăng xuất</div>
                             <div class='donHang' onclick="showgiohang_thanhtoan()" >Đơn Hàng</div>
                             </div>                            
`


    }

}

document.getElementById('showCart').style.display = 'none'

function tinhtien(i) {
    let tongcu = parseInt(document.getElementById(`tongtien+${i}`).textContent)

    let gia = parseInt(giohang[i][3])
    let thoigian = parseInt(document.getElementById(`thoigian+${i}`).value)
    let tong = gia * thoigian
    document.getElementById(`tongtien+${i}`).textContent = tong

    let thanhtoan = parseInt(document.getElementById('thanhtoan').textContent)

    document.getElementById('thanhtoan').textContent = tong + thanhtoan - tongcu


    // sessionStorage.setItem("giohang", JSON.stringify(giohang))


}

function showcart() {
    showMyCart()
    let x = document.getElementById('showCart')
    if (x.style.display == 'block') {
        x.style.display = 'none'
    } else {
        x.style.display = 'block'
    }
}

function xoa(i) {
    giohang.splice(i, 1);
    showMyCart();
    cartCount--;
    document.getElementById('cart-count').textContent = cartCount
}

async function showgiohang_thanhtoan() {
    const name = localStorage.getItem('name')
    const id = localStorage.getItem('id')
    sessionStorage.setItem("giohang", JSON.stringify(giohang))

   if (name == null) {
        alert('Vui lòng đăng nhập để tạo đơn hàng')
        loadHome()
    } else {

        let gh = sessionStorage.getItem("giohang");
        let giohang = JSON.parse(gh);
       console.log(giohang)

        for (let i = 0; i < giohang.length; i++) {
            giohang[i].push(document.getElementById(`thoigian+${i}`).value)
            giohang[i].push(document.getElementById(`tongtien+${i}`).textContent)
            let data = {
                time: giohang[i][5],
                price: giohang[i][6],
                    user: { id: id },
                home: { id: giohang[i][2] }

            };
            console.log(data)
         await  axios.post("http://localhost:3000/orders", data)
                .then(res => {

                })
                .catch(err => {
                    console.log(err);
                });
        }
    await  showOrder()
        }



}
