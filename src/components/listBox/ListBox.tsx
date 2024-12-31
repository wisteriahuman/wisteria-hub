import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

type Props = {
    title: string;
    items: string[];
    dense: boolean;
};

const ListBox: React.FC<Props> = ({ title, items, dense }) => {
    return (
        <>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                {title}
            </Typography>
            <Box
                sx={{
                    color: "#ffcdff",
                    backgroundColor: "#501a5e",
                    border: "2px solid #cc00cc",
                    borderRadius: "8px",
                    width: "fit-content",
                    height: "fit-content",
                }}
            >
                <List dense={dense}>
                    {items.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                    ))}
                </List>
            </Box>
        </>
    );
};

export default ListBox;