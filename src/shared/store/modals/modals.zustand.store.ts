import { create } from "zustand";

export const ModalTypes = {
  ADD: "add",
  EDIT: "edit",
  VIEW: "view",
  DELETE: "delete",
} as const;

type ModalStore = {
  open: boolean;
  modalType: (typeof ModalTypes)[keyof typeof ModalTypes] | null;
  openModal: (type: (typeof ModalTypes)[keyof typeof ModalTypes]) => void;
  closeModal: () => void;
};

type SelectedItemStore<TData> = {
  selectedItem: TData | null;
  setSelectedItem: (item: TData | null) => void;
};

export const useModal = create<ModalStore>((set) => ({
  open: false,
  modalType: null,
  openModal: (modalType) => {
    return set({ open: true, modalType });
  },
  closeModal: () => set({ open: false, modalType: null }),
}));

export const useSelectedItem = create<SelectedItemStore<unknown>>((set) => ({
  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
  resetSelectedItem: () => set({ selectedItem: null }),
}));
