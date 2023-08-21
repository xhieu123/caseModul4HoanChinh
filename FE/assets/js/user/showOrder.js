
 async function showOrder(){
    const id = localStorage.getItem('id')
    const name = localStorage.getItem('name')
     if (name == null) {
         alert('Vui lòng đăng nhập để tạo đơn hàng')
         loadHome()
     } else {

         await axios.get(`http://localhost:3000/orders/${id}`).then(res=>{
        let str=` 
 <div class="container-xxl bg-white p-0">

        <!-- Header Start -->
        <div class="container-fluid bg-dark px-0">
            <div class="row gx-0">
                <div class="col-lg-3 bg-dark d-none d-lg-block">
                    <a href="index.html" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <h1 class="m-0 text-primary text-uppercase">HomeStay</h1>
                    </a>
                </div>
                <div class="col-lg-9">
                    <div class="row gx-0 bg-white d-none d-lg-flex">
                        <div class="col-lg-7 px-5 text-start">
                            <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i class="fa fa-envelope text-primary me-2"></i>
                                <p class="mb-0">info@example.com</p>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center py-2">
                                <i class="fa fa-phone-alt text-primary me-2"></i>
                                <p class="mb-0">+012 345 6789</p>
                            </div>
                        </div>
                        <div class="col-lg-5 px-5 text-end">
                            <div class="d-inline-flex align-items-center py-2">
                                <a class="me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="me-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="me-3" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="me-3" href=""><i class="fab fa-instagram"></i></a>
                                <a class="" href=""><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <a href="index.html" class="navbar-brand d-block d-lg-none">
                            <h1 class="m-0 text-primary text-uppercase">HomeStay</h1>
                        </a>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-0" id="home">
                            <button onclick="loadHomeUser()" type="button" style="color: #F1F8FF ;background: #0F172B" >Trang Chủ</button>
<button onclick="listProductUser()" type="button" style="color: #F1F8FF ;background: #0F172B" >Sản Phẩm </button>
                                <button onclick=""  type="button" style="color: #F1F8FF ;background: #0F172B">${name}</button>
                                 <button type="button" style="color: #F1F8FF ;background: #0F172B" onclick="showOrder()">Giỏ Hàng</button>
                                <button type="button" style="color: #F1F8FF ;background: #0F172B" onclick="logout()">Đăng Xuất</button>

                                <div class="nav-item dropdown">
                                    <button type="button" style="color: #F1F8FF ;background: #0F172B" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sắp Xếp </button>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <button onclick="tangdannguoidung()" class="dropdown-item" >Tăng Dần </button>
                                        <button onclick="giamdannguoidung()" class="dropdown-item">Giảm Dần</button>

                                    </div>
                                </div>


                            </div>
                            
                            <button onclick="showcart()" class="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block showCard" style="width: 300px; ">Đơn Hàng      <i class="bi bi-cart-dash-fill fa-2x"></i> <span class="soluong" id="cart-count"></span></button>
                        </div>

                      <div class="whole-cart-window " id="showCart"></div>

                    </nav>
                </div>
            </div>
        </div>
       
 <div><table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">STT</th>
      <th scope="col">Tên Căn Hộ</th>
      <th scope="col">Hình ảnh</th>
      <th scope="col">Giá</th>
      <th scope="col">TG thuê</th>
      <th scope="col">Số tiền </th>
      <th scope="col"> </th>
      <th scope="col"> </th>
    </tr>
  </thead>
  <tbody>`
        let data=res.data
       let i=1
        data.map(item=>{
            str+= ` <tr>
                <th scope="row">${i++}</th>
                <td>${item.home.name}</td>
                <td><img src="${item.home.image}" style="width: 30px; height: 40px" alt=""></td>
                <td>${item.home.price}</td>
                <td>${item.time}</td>
                <td>${item.price}</td> 
                <td> <button type="button" class="btn btn-success" onclick="xacnhan()">Xác Nhận</button>
        <button type="button" class="btn btn-danger" onclick="xoaOrder(${item.id})" >  Xoá  </button>
        
                 `
        })


        document.getElementById('display').innerHTML=str+` </tbody>
</table>
</div></div>`
    })
}}
function xoaOrder(id) {
     console.log(111111)
    axios.delete(`http://localhost:3000/orders/${id}`).then(res => {
        showOrder()
    })
 }

function xacnhan(){
    alert('Bạn đã lên đơn thành công')
    showOrder()

}