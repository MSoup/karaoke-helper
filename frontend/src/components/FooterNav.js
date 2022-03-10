// Footer nav bar

import { Button, ButtonGroup } from "@mui/material";

function Footer() {
  return (
    <div className="Footer">
      <ButtonGroup variant='contained' sx={{height: '100%'}} fullWidth>
        <Button
          onClick={() => console.log('Home')}
        >
          Home
        </Button>
        <Button
          onClick={() => console.log('Search')}
        >
          Search
        </Button>
        <Button
          onClick={() => console.log('Settings')}
        >
          Settings
        </Button>
        <Button
          onClick={() => console.log('Profile')}
        >
          Profile
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Footer;