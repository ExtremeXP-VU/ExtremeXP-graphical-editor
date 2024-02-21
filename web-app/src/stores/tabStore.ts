import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TabType = {
  name: string;
  id: string;
};

const initialTabsState = {
  tabs: [{ name: "main", id: "main" }],
};

export const useTabStore = create<typeof initialTabsState>()(
  persist(() => initialTabsState, { name: "tabs-store" })
);

export const getTabs = () => useTabStore.getState().tabs;

export const addTab = (tab: TabType) => {
  useTabStore.setState({ tabs: [...useTabStore.getState().tabs, tab] });
  console.log(useTabStore.getState().tabs);
};

export const removeTab = (id: string) => {
  useTabStore.setState({
    tabs: useTabStore.getState().tabs.filter((tab) => tab.id !== id),
  });
};

export const clearTabs = () => {
  useTabStore.setState(initialTabsState);
  useTabStore.persist.clearStorage();
};
