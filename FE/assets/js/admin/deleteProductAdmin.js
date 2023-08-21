function deleteProductAdmin(id) {
    axios.delete('http://localhost:3000/homes'+`/${id}`).then((res) => {
        listProductAdmin()
    })
}