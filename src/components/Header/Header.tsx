import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const AppBarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: none;

  &:visited {
    color: white;
  }
`;

const DrawerLink = styled(Link)`
  color: #black;
  text-decoration: none;

  &:visited {
    color: black;
  }
`;

const drawerWidth = 240;
const navItems = ["Home", "Linear Regression", "Logistic Regression"];

export const Header = (props: Props): JSX.Element => {
  const title = "ML With TensorFlow";
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { pathname } = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      data-testid="app-header-drawer"
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to={`/`}>{title}</Link>
      </Typography>
      <Divider />
      <nav data-testid="desktop-navigation" role="navigation">
        <List>
          {navItems.map((item) => {
            if (item === "Home") {
              return (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText
                      primary={<DrawerLink to={`/`}>{item}</DrawerLink>}
                    />
                  </ListItemButton>
                </ListItem>
              );
            } else {
              return (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText
                      primary={
                        <DrawerLink
                          to={`/${item.toLowerCase().replace(" ", "-")}`}
                        >
                          {item}
                        </DrawerLink>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            }
          })}
        </List>
      </nav>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ height: 64, display: "flex", width: "100%" }}
      data-testid="app-header"
    >
      <CssBaseline />
      <AppBar component="nav" sx={{ height: 64 }} position="static">
        <Toolbar sx={{ minHeight: 64 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, fontSize: { md: "2rem" } }}
          >
            <Link to={`/`}>{title}</Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {navItems.map((item) => {
              // only return a button if the current path is not the same as the item
              if (
                pathname === `/${item.toLowerCase().replace(" ", "-")}` ||
                (item === "Home" && pathname === "/")
              ) {
                return null;
              } else if (item === "Home") {
                return (
                  <Button key={item} sx={{ color: "#fff" }}>
                    <AppBarLink role="link" to={`/`}>
                      {item}
                    </AppBarLink>
                  </Button>
                );
              } else {
                return (
                  <Button key={item} sx={{ color: "#fff" }}>
                    <AppBarLink
                      role="link"
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                    >
                      {item}
                    </AppBarLink>
                  </Button>
                );
              }
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
