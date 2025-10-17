import type { ModalType } from "../components";
import { useState } from "react";

export const useModal = <T = unknown>() => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const openModal = (type: ModalType, item?: T) => {
    setModalType(type);
    setSelectedItem(item ?? null);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setModalType(null);
    setSelectedItem(null);
  };

  return {
    open,
    modalType,
    selectedItem,
    openModal,
    closeModal,
  };
};
