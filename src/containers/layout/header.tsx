import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
// import LanguagePopover from '../../components/LanguagePopover';
// import { changeLanguage } from '../../redux/actions/settings';
import { ColorModeContext } from '../../utils/context';

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [translation, i18n] = useTranslation('translations');
  const colorMode = React.useContext(ColorModeContext);
  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event: any) => {
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //   const handleLanguageChange = (lang) => {
  //     dispatch(changeLanguage(lang));
  //   };

  return (
    <Grid container>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {translation('nav.title')}
          </Typography>
          <Typography sx={{ textTransform: 'capitalize' }}>
            {theme.palette.mode} {translation('nav.mode')}
          </Typography>

          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color='inherit'
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleLogout}
            color='inherit'
          >
            <LogoutIcon />
          </IconButton>
          {/* <LanguagePopover handleLanguageChange={handleLanguageChange}/> */}

          {auth && (
            <div>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Header;
