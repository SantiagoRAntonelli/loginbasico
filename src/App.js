import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="col">
        <div className="col">
        </div>
        <div className="row">
        <form className="col mb-5">
          <h1 className="text">Inicie sesion</h1>
          <div class="form-floating">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"required/>
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-5">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña"required/>
          <label for="floatingPassword">Contraseña</label>
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
        </div>
        </form>
        <form className="col mb-5">
          <h1 className="text">Registrarse</h1>
          <div class="form-floating">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="Nombre" required/>
          <label for="floatingInput">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="Apellido"required/>
          <label for="floatingInput">Apellido</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"required/>
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña"required/>
          <label for="floatingPassword">Contraseña</label>
        </div>
        <div class="form-floating mb-5">
          <input type="password" class="form-control" id="floatingInput" placeholder="Repita Contraseña"required/>
          <label for="floatingInput">Repita Contraseña</label>
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
        </div>
        </form>
        </div>
      </div>
    </div>
    </div>
  )}

export default App;