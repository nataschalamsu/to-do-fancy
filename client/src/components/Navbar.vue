<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Brand -->
      <a class="navbar-brand" id="logo" href="#">{{ logo }}</a>
      
      <!-- Search -->
      <div class="justify-content-center">
        <form class="form-inline" action="/action_page.php">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-success" type="submit">Search</button>
        </form>
      </div>

      <!-- Links -->
      <div class="collapse navbar-collapse justify-content-end" id="nav-content">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="navbarDropdown" data-toggle="modal" aria-haspopup="true" aria-expanded="false" data-target="#regisModal">
              Register
            </a>
            <!-- The Modal -->
          <div class="modal" id="regisModal">
              <div class="modal-dialog">
                <div class="modal-content">
            
                  <!-- Modal Header -->
                  <div class="modal-header">
                    <h4 class="modal-title">Register</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
            
                  <!-- Modal body -->
                  <div class="modal-body">
                    <form action="/action_page.php">
                      <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name">
                      </div>
                      <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email">
                      </div>
                      <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd">
                      </div>
                      <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                  </div>
            
                  <!-- Modal footer -->
                  <div class="modal-footer">
                    <span>Already have account? Login here</span>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Login Facebook</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="navbarModal" data-toggle="modal" aria-haspopup="true" aria-expanded="false" data-target="#loginModal">
              Login
            </a>
            <!-- The Modal -->
          <div class="modal" id="loginModal">
              <div class="modal-dialog">
                <div class="modal-content">
            
                  <!-- Modal Header -->
                  <div class="modal-header">
                    <h4 class="modal-title">Login</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
            
                  <!-- Modal body -->
                  <div class="modal-body">
                    <form action="/action_page.php">
                      <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email">
                      </div>
                      <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd">
                      </div>
                      <button type="submit" class="btn btn-success">Submit</button>
                    </form>
                  </div>
            
                  <!-- Modal footer -->
                  <div class="modal-footer">
                    <span>Not a member? Register here</span>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Login Facebook</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
</template>
