"use client";


import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LongMenu from "@/components/menu/LongMenu";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),  
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));



export default function SearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const pathname = usePathname();
    const [searchText, setSearchText] = React.useState("");
    const router = useRouter();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getTitle = (path: string) => {
        if (path == "/") return "Home";
        const segments = path.split("/").filter(Boolean);
        return segments[segments.length - 1];
    };

    const currentTitle = getTitle(pathname);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchText.trim() != "") {
            router.push(`/search?q=${encodeURIComponent(searchText.trim())}`);
        }
    };

    React.useEffect(() => {
        if (pathname !== "/search") {
            setSearchText("");
        }
    }, [pathname]);

    return (
        <Box component="header" sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "secondary.dark", color: "#ffcdff" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <LongMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        WisteriaHub | {currentTitle.charAt(0).toUpperCase() + currentTitle.slice(1)}
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ "aria-label": "search" }}
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </Search>
                    </form>
                </Toolbar>
            </AppBar>
        </Box>
    );
}