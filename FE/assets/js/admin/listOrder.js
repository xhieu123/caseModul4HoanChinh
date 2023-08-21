function listOrder(){
    let str=`<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle1
      
     </th>
     <th> <button >     </button></th>
    
      </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td> 
      <td>@mdo</td>
      <td>
      <button type="button" class="btn btn-success">Delete</button>
      <button type="button" class="btn btn-danger">Edit</button>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat </td>
      <td>
      <button type="button" class="btn btn-success">Delete</button>
      <button type="button" class="btn btn-danger">Edit</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>
      <button type="button" class="btn btn-success">Delete</button>
      <button type="button" class="btn btn-danger">Edit</button>
    </tr>
  </tbody>
</table>
`;
    document.getElementById('main').innerHTML=str
}