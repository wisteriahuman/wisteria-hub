"use client";

import * as React from "react";
import Grid2 from "@mui/material/Grid2";
import { styled, keyframes } from "@mui/material/styles";

interface AnimatedCardProps {
    children: React.ReactNode;
    timeout?: number;
    delay?: number;
}

const rotateScaleIn = keyframes`
    0% {
        transform: scale(0) rotate(-45deg);
        opacity: 0;
    }
    100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
    }
`;

const AnimatedDiv = styled('div')<{
    animate: boolean;
    timeout: number; 
    delay: number;
}>(({ animate, timeout, delay, theme }) => ({
    opacity: 0,
    transform: 'scale(0) rotate(-45deg)',
    transition: `opacity ${timeout}ms ${theme.transitions.easing.easeOut}, transform ${timeout}ms ${theme.transitions.easing.easeOut}`,
    ...(animate && {
        animation: `${rotateScaleIn} ${timeout}ms ${theme.transitions.easing.easeOut} forwards`,
        animationDelay: `${delay}ms`,
    }),
}));

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, timeout = 1000, delay = 0 }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <AnimatedDiv animate={visible} timeout={timeout} delay={delay}>
            <Grid2 ref={ref}>
                {children}
            </Grid2>
        </AnimatedDiv>
    );
};

export default AnimatedCard;