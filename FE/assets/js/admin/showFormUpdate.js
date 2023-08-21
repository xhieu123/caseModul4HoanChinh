function showFormUpdate(id) {
    axios.get('http://localhost:3000/homes' + '/' + id).then((res) => {
        let data = res.data[0];
        str = `
  <div class="mb-3">
    <label for="exampleInputId" class="form-label"> ID </label>
    <input type="text" class="form-control" id="exampleInputId" value="${data.id}">
  </div>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label"> Tên nhà </label>
    <input type="text" class="form-control" id="exampleInputName" value="${data.name}">
  </div>
  <div class="mb-3">
    <label for="exampleInputAddress" class="form-label"> Địa chỉ </label>
    <input type="text" class="form-control" id="exampleInputAddress" value="${data.address}">
  </div>
    <div class="mb-3">
    <label for="exampleInputAcreage" class="form-label"> Diện tích </label>
    <input type="text" class="form-control" id="exampleInputAcreage" value="${data.acreage}">
  </div>
  <div class="mb-3">
    <label for="exampleInputPrice" class="form-label"> Giá </label>
    <input type="text" class="form-control" id="exampleInputPrice" value="${data.price}">
  </div>
  </div>
    <div class="mb-3">
    <label for="exampleInputDes" class="form-label"> Mô tả </label>
    <input type="text" class="form-control" id="exampleInputDes" value="${data.des}">
  </div>
  <div class="mb-3">
    <label for="exampleInputStatus" class="form-label"> Trạng thái </label>
    <input type="text" class="form-control" id="exampleInputStatus" value="${data.status}">
  </div>
  <div class="mb-3">
    <label for="exampleInputImage" class="form-label"> Ảnh </label>
    <input type="text" class="form-control" id="exampleInputImage" value="${data.image}">
  </div>
  <button onclick="listProductAdmin()" class="btn btn-primary"> Trở về </button>
  <button onclick="updateProductAdmin()" class="btn btn-primary"> Xác nhận </button>
    `
    })
    document.getElementById('main').innerHTML = str
}