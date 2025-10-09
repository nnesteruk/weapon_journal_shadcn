import { Typography, type TypographyProps } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

export const MyTitle: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  ...props
}) => {
  return <Typography {...props}>{children}</Typography>;
};
