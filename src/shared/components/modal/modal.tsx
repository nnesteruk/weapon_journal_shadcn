import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";
import { type DialogProps } from "@radix-ui/react-dialog";

const Modal = ({ open, onOpenChange, children, ...props }: DialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} {...props}>
      {children}
    </Dialog>
  );
};

const ModalHeader = ({
  title,
  description,
  children,
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <DialogHeader className={className}>
      {children}
      {title && <DialogTitle>{title}</DialogTitle>}
      {description && <DialogDescription>{description}</DialogDescription>}
    </DialogHeader>
  );
};

const ModalFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <DialogFooter className={className}>{children}</DialogFooter>;
};

const ModalContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <DialogContent className={className}>{children}</DialogContent>;
};

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Content = ModalContent;
Modal.Close = DialogClose;

export { Modal };
