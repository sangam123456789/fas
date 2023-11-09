import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div style={{backgroundColor:'#648aab'}}>
      <div className="dropdown">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <button class="btn btn-secondary dropdown-toggle" style={{padding:'2px',backgroundColor:'#fffcfca6',color:'black',width:'120px'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <b>Display</b>
          </button>
          <ul className="dropdown-menu" style={{width : '280px'}}>
            <li style={{display : 'flex'}}><a className="dropdown-item" style={{width:'150px'}} href="#">Grouping</a>
                <div className="form-group col-md-4" style={{width:'120px'}}>
                  <select className="form-control" style={{padding:'2px'}}>
                    <option value="Status">Status</option>
                    <option value="User">User</option>
                    <option value="Priority">Priority</option>
                  </select>
                </div>
            </li>
            <li style={{display : 'flex'}}><a className="dropdown-item" style={{width:'150px'}} href="#">Ordering</a>
                <div className="form-group col-md-4" style={{width:'120px'}}>
                  <select className="form-control" style={{padding:'2px'}}>
                    <option value="Priority">Priority</option>
                    <option value="Title">Title</option>
                  </select>
                </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    </div>
  );
}

export default App;
