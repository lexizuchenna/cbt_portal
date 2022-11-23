import { Menu, Button } from "semantic-ui-react";
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Menu stackable inverted size="massive">
      <Menu.Item header>
        <h1 style={{ color: "#2185D0" }}>CBT PORTAL</h1>
      </Menu.Item>

      <Menu.Item position="right">
        {/* <Button
          color="teal"
        //   icon="cloud download"
          labelPosition="left"
          content="Login"
          onClick=''
        /> */}
        <Link to='/login'>Login to Quiz</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
