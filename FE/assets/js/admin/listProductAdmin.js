function listProductAdmin(){
    axios.get('http://localhost:3000/homes').then(res=>{
    let str=`
     <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
               
                    <h1 class="mb-5">Danh Sách Căn Hộ<span class="text-primary text-uppercase"></span>
                    
                    </h1>
                    <h1><button type="button" class="btn btn-success" onclick="showFormAdd()">Thêm Sản Phẩm</button></h1>
                    
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
      <button class="btn btn-sm btn-primary rounded py-2 px-4" onclick="showFormUpdate(${item.id})"> Chỉnh sửa</button>
      <button class="btn btn-sm btn-dark rounded py-2 px-4 add" onclick="deleteProductAdmin(${item.id})"> Xóa</button>
    </div>
  </div>
</div>
            `
    })

    document.getElementById('main').innerHTML= str+
        ` </div>
          </div>
        </div>
                `





})}