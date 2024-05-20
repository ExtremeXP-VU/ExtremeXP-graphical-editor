import { create } from 'zustand';

export type TabType = {
  name: string;
  id: string;
};

const initialTabsState = {
  tabs: [{ name: 'main', id: 'main' }],
  selectedTab: 'main',
};

export const useTabStore = create<typeof initialTabsState>()(
  () => initialTabsState
);

export const setSelectedTab = (id: string) => {
  useTabStore.setState({ selectedTab: id });
};

export const addTab = (tab: TabType) => {
  if (useTabStore.getState().tabs.some((t) => t.id === tab.id)) {
    // setSelectedTab before save the model and reset config panel may cause bugs
    // setSelectedTab(tab.id);
    return;
  }
  useTabStore.setState({ tabs: [...useTabStore.getState().tabs, tab] });
};

export const removeTab = (id: string) => {
  useTabStore.setState({
    tabs: useTabStore.getState().tabs.filter((tab) => tab.id !== id),
  });
};

export const clearTabs = () => {
  useTabStore.setState(initialTabsState);
};
