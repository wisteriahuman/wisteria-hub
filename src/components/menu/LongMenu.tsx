import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface LongMenuProps {
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
}

const options = [
    "Home",
    "App",
    "pages",
    "About",
    "Archive",
];

const ITEM_HEIGHT = 48;

const LongMenu: React.FC<LongMenuProps> = ({ anchorEl, open, onClose }) => {
    return (
        <Menu
            id="long-menu"
            MenuListProps={{
                "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            slotProps={{
                paper: {
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                    },
                },
            }}
        >
            {options.map((option) => (
                <MenuItem
                    key={option}
                    selected={option === "Home"}
                    onClick={onClose}
                >
                    {option}
                </MenuItem>
            ))}
        </Menu>
    );
};

export default LongMenu;