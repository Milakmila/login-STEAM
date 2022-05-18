import './Navbar.css'

function Navbar(){
return(
    <nav>
    <ul id="desplegable">
    <li>
    <a href="../../../dashboard.html" >
    
      <span><i class="fa-solid fa-house icons"></i>
      <h3>Home</h3>
      </span>
    </a>
  </li>
  <li>
    <a href="../../../dashboard.html" >
      <span> <i class="fa-solid fa-calendar icons"></i>
      <h3>Calendario</h3>
      </span>
    </a>
  </li>
  <li>
    <a href="../../../dashboard.html">
      <span> <i class="fa-solid fa-book icons"></i> 
      <h3>Cursos</h3>
      </span>

    </a>
  </li>
  <li>
    <a href="../../../dashboard.html">
      <span> <i class="fa-solid fa-medal icons" ></i>
      <h3>Notas</h3>
      </span>
    </a>
  </li>
  <li>
    <a href="../../../dashboard.html">
      <span> <i class="fa-solid fa-laptop-file icons"></i>
      <h3>Recursos</h3>
      </span>
    </a>
  </li>
</ul>
</nav>
)
}

export default Navbar