import { useRouter } from "next/router";
import { bool, func } from "prop-types";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import icons
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useTheme } from "@material-ui/core/styles";
import { useDrawerStyles } from "./styles";

const menuList = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/dashboard",
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
  {
    title: "Testing",
    icon: <SettingsIcon />,
    path: "/testing",
  },
];

const MenuDrawer = ({ isOpen, onClose }) => {
  const classes = useDrawerStyles();
  const theme = useTheme();
  const router = useRouter();

  const handleClickMenu = (path) => {
    router.push(path);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={onClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {menuList.map((menu, index) => (
          <ListItem button key={index} onClick={() => handleClickMenu(menu.path)}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

MenuDrawer.propTypes = {
  isOpen: bool.isRequired,
  onClose: func.isRequired,
};

export default MenuDrawer;
