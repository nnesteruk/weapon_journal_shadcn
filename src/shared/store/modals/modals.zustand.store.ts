import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

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

const useModal = create<ModalStore>()((set) => ({
  open: false,
  modalType: null,
  openModal: (modalType) => {
    return set({ open: true, modalType });
  },
  closeModal: () => set({ open: false, modalType: null }),
}));

export const useSelectedItem = create<SelectedItemStore<TData>>()(
  (set, _, store) => ({
    selectedItem: null,
    setSelectedItem: (item) => set({ selectedItem: item }),
    reset: () => set(store.getInitialState()),
  }),
);

const useOpenModal = () => useModal(useShallow((state) => state.open));
const useModalType = () => useModal(useShallow((state) => state.modalType));
const openModal = (type: (typeof ModalTypes)[keyof typeof ModalTypes]) =>
  useModal.getState().openModal(type);
const closeModal = () => useModal.getState().closeModal;

export { closeModal, openModal, useModalType, useOpenModal };
