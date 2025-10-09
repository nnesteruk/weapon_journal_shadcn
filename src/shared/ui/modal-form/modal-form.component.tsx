import { Box, Modal, Typography } from "@mui/material";
import type { PropsWithChildren } from "react";

type BasicModalProps = PropsWithChildren<{
  open: boolean;
  close: () => void;
  name: string;
  mode?: "add" | "edit";
}>;

export const ModalForm = ({
  children,
  open,
  close,
  name,
  mode = "add",
}: BasicModalProps) => {
  return (
    <Modal open={open} onClose={close}>
      <Box className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-4 border-0 rounded-xl bg-white">
        <Typography variant="h5" className="text-black">
          {name} - {mode == "add" ? "добавление" : "редактирование"}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};
