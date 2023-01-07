import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
// import {logoFinal} from "../assets/logo.jpeg";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" m={2} ml={5} mt={2} sx={{ position:  "sticky", background: '#fff', top: 0, justifyContent: "space-between" }}>
    <Link to="/" p={4} style={{ display: "flex", alignItems: "right" }}>
      <img src={logo} alt="logo" height={75} />
      {/* <img src={logoFinal} alt="logo" height={75} /> */}
    </Link>
    <Typography variant="h3" fontWeight="bold" mb={2} sx={{ color: "black" }}>PostIT! : <Typography variant="h6" sx={{color:"#383838"}}>The All New Video Streaming Application</Typography></Typography>
    <SearchBar />
  </Stack>
);

export default Navbar;