function saveProductAdmin() {
    let data = {
        name: document.getElementById('exampleInputName').value,
        address: document.getElementById('exampleInputAddress').value,
        acreage: document.getElementById('exampleInputAcreage').value,
        price: document.getElementById('exampleInputPrice').value,
        des: document.getElementById('exampleInputDes').value,
        status: document.getElementById('exampleInputStatus').value,
        image: document.getElementById('exampleInputImage').value
    }
    axios.post("http://localhost:3000/homes", data).then((res) => {
        listProductAdmin()
    })
}