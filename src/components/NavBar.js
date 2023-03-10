import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { PageContext } from "../context/PageContext";
function NavBar() {
  const { page, setPage } = React.useContext(PageContext);
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      style={{ display: "flex" }}
    >
      <AppBar
        position="static"
        style={{ background: "white", boxShadow: "none" }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ color: "#1484CB" }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#1484CB", cursor: "pointer" }}
            onClick={() => setPage(0)}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#1484CB", cursor: "pointer" }}
            onClick={() => setPage(1)}
          >
            Products
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#1484CB", cursor: "pointer" }}
            onClick={() => setPage(2)}
          >
            About
          </Typography>
          <Button color="inherit">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADzklEQVR4nO2Yf2gTVxzAn/tDhtAxoSobduwPoa3O/qC1MhdM3q0rFKkMsWNqSVvYhgjiX2OmydaVtbZWapXWHxXF9l6MUNg0KXR/+EcN5kIpVMkl98yaLFXTtPlxuaRjs/9Y37ikUWcqXDpt7iQf+MBxf3zffe4d748DIEeOHDmyyqaBB3s2XfTN5Pf5/Ot7vbVAaWy8MO3P7/OR93u95OMzU8Rs5/40M7h7dHzqPaAE8vt8fvHh87o9pOC0m1jseEmOGRubfhfInfW93tq8bo9/3Qn3o3Xt7tqbDFduYbBHjBix4W+BErnJ4K8Tu8DgW0CJ/GrFHyQDuDghZA1QIntNwpM6U4xUG+c9FB23QTo+QqE4DdF8F4Xmj0Fa0FK0UFc9JKjgYHRbtSnyIZATB4f5IIX+IknnlzG+jLEFio7NQjrGUXTMBunYCIViNERCF4WEZPQ1oa76mqCCpjcc/c1vQWvmAYmIdI3CK4wSCkUfQ8Q/ohB/D6LoLcrIm6Ax0gdR5GeI+KMQhQ9AxNd8bgqX11yPFrS2knckBRy5EWpflQDjcvLLGEmKIsOSAg6ev1+h6ZgiNT3exarO6cmdpx4yu87MWFXngmOqgZBVfTnCqK9GJ6nBmBvS8QBE8X9WIwAaw2MSPyKypsrALZbpMCl9Jpe0JWnJS5a24IWyn3CovM3trezwsDtO+iaqeh7advX7b6sG5qy7Lwdt6qvhCc0Qz2roqBciPpRxAAr3SwwAoOYEDmcSILo9oSvNT/Qv6yTbRA2uxyVtOFDa/oe7omtqckePj9l59oH10/P+26pLAevuK3OMejA4SQ2F3RCFA9RQ8LDkgC9PcbY3HqD/r1tTGlKyCYuXLNQ7NZID6ntdJ+UWsEV3d4PkgC86nJ/JKkDPRkAmbG11ra3Qc09lE2BwSD2BngN/wVH5BLDST6AUmjbn73IJKPrRcSTjgHKd66h8Alh1xgElP7hUcgnYkskJlKLw+/t5pce5xWwHFOnZUMYP/2wXdNiT7YDilZxALwQMZz+A7V95wHGsy3ZA0UpOoBRlOqzOdkBhC1u54oDhO66PvrvILVQaVj+g2MD+XWxwdIL/g8XOXRf/UpgZPDo67tgMlIbFzgXEgBsTzgKgRCxLAYp8+yIWO2dKfUKK3IXRccdmC8Pxz3/8rq5mBt95PRF2zmRmXLOKDEhxqLG5q6GxmbyoeA/IdG4aDY1Ns+Lwffu/SphYSNs8B2Q6N40GbVMgbaHG5hkg07mStrpB29Qp17lp1NfXr00sJr4xbVNAvBbvAZnOzZHjbedf5PTvpg+FQXcAAAAASUVORK5CYII=" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
