import logo from './logo.svg';
import './App.css';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';


function App() {
  return (
    <div className="App">
      <Dropdown>
        <MenuButton>My account</MenuButton>
        <Menu>
          <MenuItem >Profile</MenuItem>
          <MenuItem >
            Language settings
          </MenuItem>
          <MenuItem >Log out</MenuItem>
        </Menu>
      </Dropdown>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React gaurav
        </a>
      </header>
    </div>
  );
}

export default App;
