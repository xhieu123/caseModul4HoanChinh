async function giamdantrangchu(){
    await axios.get('http://localhost:3000/homes?price=DESC').then(res=>{
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

                                <button onclick="loadHome()" type="button" style="color: #F1F8FF ;background: #0F172B" >Trang Chủ</button>
<button onclick="loadList()" type="button" style="color: #F1F8FF ;background: #0F172B" >Sản Phẩm </button>
                                <button onclick=""  type="button" style="color: #F1F8FF ;background: #0F172B">Tài Khoản</button>
                                 <button type="button" style="color: #F1F8FF ;background: #0F172B" onclick="showOrder()">Giỏ Hàng</button>
                                <button type="button" style="color: #F1F8FF ;background: #0F172B" onclick="loadLogin()">Đăng Nhập</button>

                                <div class="nav-item dropdown">
                                    <button type="button" style="color: #F1F8FF ;background: #0F172B" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sắp Xếp </button>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <button onclick="tangdantrangchu()" class="dropdown-item" oncl>Tăng Dần </button>
                                        <button onclick="giamdantrangchu()" class="dropdown-item">Giảm Dần</button>

                                    </div>
                                </div>


                            </div>

                            <button onclick="showcart()" class="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block showCard" style="width: 300px; ">Đơn Hàng      <i class="bi bi-cart-dash-fill fa-2x"></i> <span class="soluong" id="cart-count">0</span></button>
                        </div>

                     <div class="whole-cart-window " id="showCart"></div>

                    </nav>
                </div>
            </div>
        </div>
         <div class="container-fluid page-header mb-5 p-0" style="background-image: url(img/carousel-1.jpg);">
            <div class="container-fluid page-header-inner py-5">
                <div class="container text-center pb-5">
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Danh Sách Căn Hộ</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Trang Chủ</a></li>
                            <li class="breadcrumb-item"><a href="#">Sản Phẩm</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Căn Hộ</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <!-- Page Header End -->


        <!-- Booking Start -->
       <div class="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container">
                <div class="bg-white shadow" style="padding: 35px;">
                    <div class="row g-2">
                        <div class="col-md-10">
                            <div class="row g-2">
                                <div class="col-md-2">
                                 <div  data-target-input="nearest">
                                        <input id ='minPrice' type="text" class="form-control datetimepicker-input" placeholder=" Giá Thấp" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>


                                </div>
                                <div class="col-md-2">
                                    <div  data-target-input="nearest">
                                        <input id ='maxPrice' type="text" class="form-control datetimepicker-input" placeholder=" Giá Cao" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                 <div class="col-md-2">
                                    <div  data-target-input="nearest">
                                        <input  id = 'mindt' type="text" class="form-control datetimepicker-input" placeholder="Diện tích nhỏ" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                 <div class="col-md-2">
                                    <div data-target-input="nearest">
                                        <input  id = 'maxdt' type="text" class="form-control datetimepicker-input" placeholder="Diện tích lớn" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                 <div class="col-md-2">
                                    <div  data-target-input="nearest">
                                        <input  id = 'nameHome' type="text" class="form-control datetimepicker-input" placeholder="Tên Căn Hộ" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-select" id="diachi">
                                        <option selected value="">Địa chỉ</option>
                                        <option value="Hà Đông">Hà Đông</option>
                                        <option value="Hoàng Mai">Hoàng Mai</option>
                                        <option value="Đống Đa"> Đống Đa</option>
                                    </select>
</div>

                            </div>
                        </div>
                        <div class="col-md-2" id="timkiem2">
                            <button class="btn btn-primary w-100" onclick="loadListSearch()" >Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Room Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="section-title text-center text-primary text-uppercase">DANH SÁCH CĂN HỘ</h6>
                    <h1 class="mb-5"> <span class="text-primary text-uppercase" ">Dịch vụ của chúng tôi</span></h1>
                </div>
                <div class="row g-4">`
        let data= res.data
        let time=0.1
        data.map(item=>{
            time+=0.2
            str+=`
            <div class="col-lg-4 col-md-6 wow fadeInUp items" data-wow-delay="${time}s">
  <div class="room-item shadow rounded overflow-hidden">
    <div class="position-relative">
      <img class="img-fluid" src="${item.image}" alt="">
      <small class="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$<span>${item.price}</span>/Tháng</small>
    </div>
    <div class="p-4 mt-2">
      <div class="d-flex justify-content-between mb-3">
        <h5 class="mb-0">${item.name}</h5>
        <div class="ps-2">
          <small class="fa fa-star text-primary"><span id="hiddenSpan">${item.id}</span></small>
          <small class="fa fa-star text-primary"></small>
          <small class="fa fa-star text-primary"></small>
          <small class="fa fa-star text-primary"></small>
          <small class="fa fa-star text-primary"></small>
        </div>
      </div>
      <div class="d-flex mb-3">
        <small class="border-end me-3 pe-3"><i class="fa fa-bed text-primary me-2"></i>3 Bed</small>
        <small class="border-end me-3 pe-3"><i class="fa fa-bath text-primary me-2 " id="diachi1"> </i> <span>${item.address}</span></small>
        <small><i class="fa fa-wifi text-primary me-2"></i> <span>DT ${item.acreage} m2</span></small>
      </div>
      <p class="text-body mb-3">${item.des}</p>
      <button class="btn btn-sm btn-primary rounded py-2 px-4" href="">Xem chi tiết</button>
      <button class="btn btn-sm btn-dark rounded py-2 px-4 add" onclick="themvaogiohang(this)">Thuê Nhà</button>
    </div>
  </div>
</div>
            `
        })

        document.getElementById('display').innerHTML= str+
            ` 
                    
                </div>
            </div>
        </div>
        <!-- Room End -->

        <!-- Newsletter Start -->
        <div class="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="row justify-content-center">
                <div class="col-lg-10 border rounded p-1">
                    <div class="border rounded text-center p-1">
                        <div class="bg-white rounded text-center p-5">
                            <h4 class="mb-4">Subscribe Our <span class="text-primary text-uppercase">Newsletter</span></h4>
                            <div class="position-relative mx-auto" style="max-width: 400px;">
                                <input class="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email">
                                <button type="button" class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Newsletter Start -->
        

        <!-- Footer Start -->
        <div class="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div class="container pb-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-4">
                        <div class="bg-primary rounded p-4">
                            <a href="index.html"><h1 class="text-white text-uppercase mb-3">Hotelier</h1></a>
                            <p class="text-white mb-0">
\t\t\t\t\t\t\t\tDownload <a class="text-dark fw-medium" href="https://htmlcodex.com/hotel-html-template-pro">Hotelier – Premium Version</a>, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
\t\t\t\t\t\t\t</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h6 class="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <div class="row gy-5 g-4">
                            <div class="col-md-6">
                                <h6 class="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                <a class="btn btn-link" href="">About Us</a>
                                <a class="btn btn-link" href="">Contact Us</a>
                                <a class="btn btn-link" href="">Privacy Policy</a>
                                <a class="btn btn-link" href="">Terms & Condition</a>
                                <a class="btn btn-link" href="">Support</a>
                            </div>
                            <div class="col-md-6">
                                <h6 class="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                <a class="btn btn-link" href="">Food & Restaurant</a>
                                <a class="btn btn-link" href="">Spa & Fitness</a>
                                <a class="btn btn-link" href="">Sports & Gaming</a>
                                <a class="btn btn-link" href="">Event & Party</a>
                                <a class="btn btn-link" href="">GYM & Yoga</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
\t\t\t\t\t\t\t
\t\t\t\t\t\t\t<!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
\t\t\t\t\t\t\tDesigned By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>`

    })
}