function showFormAdd() {
    let str = `
  <div class="mb-3">
    <label for="exampleInputId" class="form-label"> ID </label>
    <input type="text" class="form-control" id="exampleInputId">
  </div>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label"> Tên nhà </label>
    <input type="text" class="form-control" id="exampleInputName">
  </div>
  <div class="mb-3">
    <label for="exampleInputAddress" class="form-label"> Địa chỉ </label>
    <input type="text" class="form-control" id="exampleInputAddress">
  </div>
    <div class="mb-3">
    <label for="exampleInputAcreage" class="form-label"> Diện tích </label>
    <input type="text" class="form-control" id="exampleInputAcreage">
  </div>
  <div class="mb-3">
    <label for="exampleInputPrice" class="form-label"> Giá </label>
    <input type="text" class="form-control" id="exampleInputPrice">
  </div>
  </div>
    <div class="mb-3">
    <label for="exampleInputDes" class="form-label"> Mô tả </label>
    <input type="text" class="form-control" id="exampleInputDes">
  </div>
  <div class="mb-3">
    <label for="exampleInputStatus" class="form-label"> Trạng thái </label>
    <input type="text" class="form-control" id="exampleInputStatus">
  </div>
  <div class="mb-3">
    <label for="exampleInputImage" class="form-label"> Ảnh </label>
    <input type="text" class="form-control" id="exampleInputImage">
  </div>
  <button onclick="updateProductAdmin()" class="btn btn-primary"> Chỉnh sửa </button>
  <button onclick="saveProductAdmin()" class="btn btn-primary"> Xác nhận </button>
    `
    document.getElementById('main').innerHTML= str
}