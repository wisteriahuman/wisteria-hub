import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CardTemplateProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    tags: string[];
    description: React.ReactNode;
    buttonText: string;
    onClick: () => void;
}

export default function CardTemplate({
    icon,
    title,
    subtitle,
    tags,
    description,
    buttonText,
    onClick,
}: CardTemplateProps) {
    return (
        <Card
            sx={{
                minWidth: 275,
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.05)" },
                backgroundColor: "#2d1e36",
                color: "#ffcdff",
                border: "2px solid #cc00cc",
                borderRadius: "8px",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "secondary.light",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "16px",
                    width: "fit-content",
                    height: "fit-content",
                }}
            >
                {icon}
            </Box>
            <CardContent>
                <Typography gutterBottom sx={{ color: "secondary.light", fontSize: 14 }}>
                    {subtitle}
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ color: "secondary.light", mb: 1.5 }}>
                    {tags.join(" | ")}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        backgroundColor: "#66bb6a",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "16px",
                        "&:hover": {
                            backgroundColor: "#4caf50",
                        },
                    }}
                    onClick={onClick}
                >
                    {buttonText}
                </Button>
            </CardActions>
        </Card>
    );
}