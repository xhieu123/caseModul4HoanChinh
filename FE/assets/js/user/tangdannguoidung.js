 async function tangdannguoidung(){
 await tangdantrangchu();
     const name = localStorage.getItem('name');
     document.getElementById('home').innerHTML= `   <div class="navbar-nav mr-auto py-0" id="home">
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


                            </div>`

}