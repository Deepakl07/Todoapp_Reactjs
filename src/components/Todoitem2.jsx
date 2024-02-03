function TodoItem2(){

  let todoName ='Go to college';
  let todoDate ='5/10/23'

  return <div class="container">
  <div class="row">
    <div class="col-6">
      {todoName}
    </div>
    <div class="col-4">
      {todoDate}
    </div>
    <div class="col-2">
      <center>
    <button type="button" class="btn btn-danger kg-button">Delete</button>
    </center>
    </div>
    </div>
   
  </div>
}
export default TodoItem2;