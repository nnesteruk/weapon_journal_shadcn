import { create, type StateCreator } from "zustand";
import { useShallow } from "zustand/react/shallow";

type InitialState<TData> = {
  selectedItem: TData | null;
};
type Actions<TData> = {
  setSelectedItem: (item: TData | null) => void;
  reset: () => void;
};

type SelectedItemStore<TData> = InitialState<TData> & Actions<TData>;

const initialState: InitialState<unknown> = { selectedItem: null };

const selectedItemStore: StateCreator<SelectedItemStore<unknown>> = (
  set,
  _,
  store,
) => ({
  ...initialState,
  setSelectedItem: (item) => set({ selectedItem: item }),
  reset: () => set(store.getInitialState()),
});

const useSelectedItemStore =
  create<SelectedItemStore<unknown>>()(selectedItemStore);

const useSelectedItem = () =>
  useSelectedItemStore(useShallow((state) => state.selectedItem));

const setSelectedItem = <TData>(item: TData | null) =>
  useSelectedItemStore.getState().setSelectedItem(item);

const resetSelectedItem = () => useSelectedItemStore.getState().reset();

export { resetSelectedItem, setSelectedItem, useSelectedItem };
