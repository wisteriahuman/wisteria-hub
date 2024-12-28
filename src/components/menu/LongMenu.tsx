import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation"

interface LongMenuProps {
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
}

const options: { [key: string]: string } = {
    "ホーム": "/",
    "制作物": "projects",
    "プロフィール": "profile",
    "このサイトについて": "about",
    "アーカイブ": "archive",
};

const ITEM_HEIGHT = 48;

const LongMenu: React.FC<LongMenuProps> = ({ anchorEl, open, onClose }) => {
    const router = useRouter();
    
    const handleMenuItemClick = (path: string) => {
        router.push(path);
        onClose();
    }
    
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
            {Object.entries(options).map(([option, path]) => (
                <MenuItem
                    key={option}
                    selected={path === "/"}
                    onClick={() => handleMenuItemClick(path)}
                >
                    {option}
                </MenuItem>
            ))}
        </Menu>
    );
};

export default LongMenu;