import { create, type StateCreator } from "zustand";
import { useShallow } from "zustand/react/shallow";

export const ModalTypes = {
  ADD: "add",
  EDIT: "edit",
  VIEW: "view",
  DELETE: "delete",
} as const;

type InitialState = {
  open: boolean;
  modalType: (typeof ModalTypes)[keyof typeof ModalTypes] | null;
};
type Actions = {
  openModal: (type: (typeof ModalTypes)[keyof typeof ModalTypes]) => void;
  closeModal: () => void;
};

type ModalStore = InitialState & Actions;

const initialState: InitialState = {
  open: false,
  modalType: null,
};

const modalStore: StateCreator<ModalStore> = (set) => ({
  ...initialState,
  openModal: (modalType) => {
    return set({ open: true, modalType });
  },
  closeModal: () => set({ open: false, modalType: null }),
});

const useModalStore = create<ModalStore>()(modalStore);

const useOpenModal = () => useModalStore(useShallow((state) => state.open));
const useModalType = () =>
  useModalStore(useShallow((state) => state.modalType));
const openModal = (type: (typeof ModalTypes)[keyof typeof ModalTypes]) =>
  useModalStore.getState().openModal(type);
const closeModal = () => useModalStore.getState().closeModal();

export { closeModal, openModal, useModalType, useOpenModal };
