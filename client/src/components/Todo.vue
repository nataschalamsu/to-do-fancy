<template>
  <div class="container">
    <div class="bg-dark p-3"><li class="nav-item">
          <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#taskModal">Add Task</button>
            <!-- The Modal -->
          <div class="modal" id="taskModal">
              <div class="modal-dialog">
                <div class="modal-content">
            
                  <!-- Modal Header -->
                  <div class="modal-header">
                    <h4 class="modal-title">New Task</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
            
                  <!-- Modal body -->
                  <div class="modal-body">
                    <form action="/action_page.php">
                      <div class="form-group">
                        <label for="name">Task:  </label>
                        <input type="text" class="form-control" id="task">
                      </div>
                      <div class="form-group">
                        <label for="tag">Tag: </label>
                        <input type="email" class="form-control" id="email">
                      </div>
                    </form>
                  </div>
                  <!-- Modal footer -->
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save Task</button>
                  </div>
                </div>
              </div>
            </div>
      
      <div class="justify-content-between row p-3">
        <div class="col-lg-4 col-md-6 mb-4 h-75 w-75 bg-info p-1">
          <p class="text-justify">Task:</p>
          <p class="text-justify">Tag:</p>
          <p class="text-justify">Status:</p>
          <button type="submit" class="btn btn-success">Done</button>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 h-75 w-75 bg-warning p-1">
          <p class="text-justify">Task:</p>
          <p class="text-justify">Tag:</p>
          <p class="text-justify">Status:</p>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 h-75 w-75 bg-success p-1">
          <p class="text-justify">Task:</p>
          <p class="text-justify">Tag:</p>
          <p class="text-justify">Status:</p>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 h-75 w-75 bg-success p-1">
          <p class="text-justify">Task:</p>
          <p class="text-justify">Tag:</p>
          <p class="text-justify">Status:</p>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 h-75 w-75 bg-success p-1">
          <p class="text-justify">Task:</p>
          <p class="text-justify">Tag:</p>
          <p class="text-justify">Status:</p>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 h-75 w-75 bg-success p-1">
          <p class="text-justify">Task:</p>
          <p class="text-justify">Tag:</p>
          <p class="text-justify">Status:</p>
        </div>
    </div>
  </div>
</div>
</template>
