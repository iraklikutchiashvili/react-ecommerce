import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { PageContext } from "../context/PageContext";
import { ProductsContext } from "../context/ProductsContext";
import BasketHoverContent from "./BasketHoverContent";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import AuthAvatar from "./AuthAvatar";

function NavBar() {
  const { page, setPage } = React.useContext(PageContext);
  const { productsQtyInBasket } = React.useContext(ProductsContext);
  const { auth } = React.useContext(AuthContext);
  const basketContentRef = React.useRef(null);
  const navRef = React.useRef(null);
  const [showNav, setShowNav] = React.useState(false);

  const showBasket = () => {
    basketContentRef.current.classList.add("show");
  };
  const hideBasket = () => {
    basketContentRef.current.classList.remove("show");
  };

  const handleBurgerClick = () => {
    setShowNav((prev) => !prev);
    navRef.current.classList.toggle("burger-nav");
  };

  const navStyles = (page, curPage) => {
    return {
      color: page === curPage ? "white" : "#1484CB",
      background: page === curPage ? "#1484CB" : "inherit",
      borderRadius: "45%",
      margin: "auto",
      padding: 1,
    };
  };

  return (
    <Box className="navbar">
      <AppBar
        position="fixed"
        style={{
          background: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <div className="burger-icon" onClick={handleBurgerClick}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: "#1484CB" }}
            >
              <CloseIcon
                className="close-icon"
                sx={{ fontSize: 35, display: showNav ? "block" : "none" }}
              />
              <MenuIcon
                sx={{ fontSize: 35, display: showNav ? "none" : "block" }}
              />
            </IconButton>
          </div>
          <div className="nav-links" ref={navRef}>
            <div className="nav-container">
              {auth.isAuth ? (
                <AuthAvatar />
              ) : (
                <Link style={{ width: "auto" }} to="auth">
                  <Avatar
                    onClick={() => {
                      setPage(4);
                      handleBurgerClick();
                    }}
                    sx={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </Link>
              )}
              <Typography variant="h6" component="div" sx={navStyles(page, 0)}>
                <Link
                  onClick={() => {
                    setPage(0);
                    handleBurgerClick();
                  }}
                  to="/"
                >
                  Home
                </Link>
              </Typography>
              <Typography variant="h6" component="div" sx={navStyles(page, 1)}>
                <Link
                  onClick={() => {
                    setPage(1);
                    handleBurgerClick();
                  }}
                  to="products"
                >
                  Products
                </Link>
              </Typography>
              <Typography variant="h6" component="div" sx={navStyles(page, 2)}>
                <Link
                  onClick={() => {
                    setPage(2);
                    handleBurgerClick();
                  }}
                  to="about"
                >
                  About
                </Link>
              </Typography>
            </div>
          </div>
          <Button
            color="inherit"
            sx={{
              transform: page === 3 && "scale(1.2)",
              margin: "auto",
              height: 75,
              transition: "all .2s ease-in-out",
              "&:hover": { bgcolor: "#fff", transform: "scale(1.2)" },
            }}
            onMouseEnter={() => showBasket()}
            onMouseLeave={() => hideBasket()}
            onClick={() => {
              setPage(3);
              window.scrollTo(0, 0);
            }}
          >
            <Link to="basket">
              <img
                alt="basket logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiklEQVR4nO2YTYhNYRjHf8glccfO+CpGpmFqFixYUMpi7IYywoKFiShRMs3CZhQpWQxSPjMbC2JDmY0sLFBYMNNkr1whgxofk67eek79vXPO7cw959xz0/3XU/f+n+d9zu92zvtxLjTUUCwVgD3ANQv3eSZ1ombgFVD24qXlcocbFahPFsH30TwhfbjLdqtdXMkbcgEwLBAOaLrkpwEXJf8WWFQvcLlCxoXLBdLBjUwBTiEvZA1ZLVxNIJPCZQqZFlwmkGnDJYY8CYyFbFm1ji/ACR9ubR2Alb3oUMBOSdwBzuQUd4VjswIukcRR8tNx4Zi0f5csMUh+umUM78KSDy35JiQ3A2iJaNpkM96X84oRY1ZYT1/B6eh+2KBTlpwA5ni5m5br9fwi8AH4AbSJvwr4aXdlnjemz3rd8Py5wB/L9YcBbpf7v97LPTd/yPPbZUy3+N3iuxrVkPmup2qDjNkaBtgiBYe83D3zh1MAHDHfzVjVERmzNGqF/2wFV73cefO/pQD41fyBiMfoIxX0SF54VL1ywWICwCbx3ZKieh3xGP2js1b0C5gl/i5pvDoBYLv4O8WfDfw2/3QlwN3SYI34G8XvTAC4RXw3KQKti+gzSW1S2CP+cvH3JQDsEX+Z+AfFd2tkpNxx6rsVXhK/YOujvxaulMZd4neJ72r8Z3nCegYKXlPHbLJW1BMrfhZyHHsKtHo/6Lqt/EVvMjywv0H0DNlqPfyF+IVd8zExNGDF4zX6f6Vgu4675rk4A3TGbsuejx1xJ0ig+XKyLtkMzkqbbGEu2ybh9uNY2u+dbt/bc5JmlLxr7J3qrztsp5RyxjEOHKBKLbYtyR1ib6ccg8AxYGG1cA39F/oLHq2fhHcJl4IAAAAASUVORK5CYII="
              />
            </Link>
            <span className="basketQty">{productsQtyInBasket}</span>
          </Button>
          <div
            onMouseEnter={() => showBasket()}
            onMouseLeave={() => hideBasket()}
            ref={basketContentRef}
            className="basket-content"
          >
            <BasketHoverContent />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
