function loadHomeAdmin() {
    let str = `<div class="buttonAdmin">
    <button type="button" class="btn btn-primary" onclick="listProductAdmin()">Danh sách sản phẩm </button>
    <button type="button" class="btn btn-secondary" onclick="listUser1()">Danh sách người dùng</button>
    <button type="button" class="btn btn-success" onclick="listOrder1()">Danh sách đơn hàng</button>
    <button type="button" class="btn btn-secondary" onclick="logout()">Đăng Xuất</button>
    </div>
  `
    document.getElementById('display').innerHTML = str + `<div id="main"></div>`
    listProductAdmin()
}
// function loadHomeAdmin() {
//     axios.get('http://localhost:3000/home/find').then(res => {
//         let data = res.data;
//         console.log(data)
//         let str = '';
//         data.map(item => {
//             str += `<h3>${item.name}, ${item.address}</h3>`
//         })
//         document.getElementById("display").innerHTML = str
//     })
// }
function listUser1(){
    axios.get("http://localhost:3000").then(res=>{
        let data = res.data
        let str = `<div class="container-fluid"> 
<table class="table table-striped">
                               <thead>
                                   <tr>
                                   <th scope="col">STT</th>
                                   <th scope="col">Tên người dùng</th>
                                   <th scope="col">Email</th>
                                   <th scope="col">Tên đăng nhập</th>
                                   <th scope="col"></th>  
                                   <th>                   
                                   </tr>
                               </thead>`
        data.map(item=>{
            console.log(item)
            str += `<tbody>
                       <tr>
                        <th scope="row">${item.id}</th>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.username}</td>
                        <td>
                        <button type="button" class="btn btn-danger" onclick="deleteUser(${item.id})">Xoá</button></td>
                       </tr>`
        })
        str += `</table> </div>`
        document.getElementById('main').innerHTML = str
    })
}
function deleteUser(id){
    axios.delete(`http://localhost:3000/${id}`).then(res=> {
        listUser1()
    })
}
function listOrder1(){
    axios.get("http://localhost:3000/orders").then(res=>{
        let data = res.data
        console.log(data,1)

        let str = `
<div class="container-fluid"><table class="table table-striped">
                               <thead>
                                   <tr>
                                   <th scope="col">MDH</th>
                                   <th scope="col">Tên người dùng</th>
                                   <th scope="col">Ảnh nhà</th>
                                   <th scope="col">Tên nhà</th>
                                   <th scope="col">Địa chỉ</th>
                                   <th scope="col">Diện tích</th>
                                   <th scope="col">Giá</th>  
                                   <th scope="col">TG thuê</th>  
                                   <th colspan="2" style="text-align: center"></td>                   
                                   </tr>
                               </thead>`
        data.map(item=>{
            str += `<tbody>
                       <tr>
                        <th scope="row">${item.id}</th>
                        <td>${item.user.name}</td>
                        <td><img src="${item.home.image}" alt="" style="width: 36px;height: 36px;vertical-align: middle"></td>
                        <td>${item.home.name}</td>
                        <td>${item.home.address}</td>
                        <td>${item.home.acreage}</td>
                        <td>${item.price}</td>
                        <td>${item.time}</td>
                        <td>
                        <button type="button" class="btn btn-danger" onclick="deleteOrder(${item.id})"> Xoá </button></td>
                     
                    
                     </tr>`
        })
        str += `</table> </div>`
        document.getElementById('main').innerHTML = str
    })
}
function deleteOrder(id){
    axios.delete(`http://localhost:3000/orders/${id}`).then(res => {
        listOrder1()
    })
}
function showFormAddOrder(){
    document.getElementById("main").innerHTML =`
<table>
<tr>
        <th>Id: <input type="text" id="id"><br></th>
        <th>Time: <input type="text" id="time"><br></th>
        <th>Price: <input type="text" id="price"><br></th>
        <th>UserId: <input type="text" id="userId"><br></th>
        <th>HomeId: <input type="text" id="homeId"><br></th>
        <button onclick="add()">Save</button>
        </tr>
        </table>
        `
}
function add(){
    let data = {
        id: document.getElementById("id").value,
        time: document.getElementById("time").value,
        price: document.getElementById("price").value,
        userId: document.getElementById("userId").value,
        homeId: document.getElementById("homeId").value,
    }
    axios.post("http://localhost:3000/orders",data).then(res=>{
        console.log(res)
    })
    listOrder1()
}