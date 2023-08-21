function updateProductAdmin() {
    let data = {
        id: document.getElementById('exampleInputId').value,
        name: document.getElementById('exampleInputName').value,
        address: document.getElementById('exampleInputAddress').value,
        acreage: document.getElementById('exampleInputAcreage').value,
        price: document.getElementById('exampleInputPrice').value,
        des: document.getElementById('exampleInputDes').value,
        status: document.getElementById('exampleInputStatus').value,
        image: document.getElementById('exampleInputImage').value
    }
    axios.put('http://localhost:3000/homes' + '/' + data.id, data).then((res) => {
        axios.get('http://localhost:3000/homes').then((res) => {
            listProductAdmin()
        })
    })
}