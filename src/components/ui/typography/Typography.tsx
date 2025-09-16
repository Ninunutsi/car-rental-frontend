import React, { ReactNode } from "react";
import Typography, {
  TypographyProps as MuiTypographyProps,
} from "@mui/material/Typography";
import { Colors } from "@/styles/colors";

interface TypographyProps extends MuiTypographyProps {
  children: ReactNode;
}

const Title: React.FC<TypographyProps> = ({ children, ...props }) => (
  <Typography variant="h4" component="h1" {...props}>
    {children}
  </Typography>
);

const Subtitle: React.FC<TypographyProps> = ({ children, ...props }) => (
  <Typography variant="h6" component="h2" {...props}>
    {children}
  </Typography>
);

const BodyText: React.FC<TypographyProps> = ({ children, sx, ...props }) => (
  <Typography
    variant="body1"
    sx={{ color: Colors.PrimaryMain, lineHeight: 1.6, ...sx }}
    {...props}
  >
    {children}
  </Typography>
);

export const Text = {
  Title,
  Subtitle,
  BodyText,
};
