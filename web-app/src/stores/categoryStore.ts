import { create } from 'zustand';
import { CategoryType, defaultCategory } from '../types/task';

type CategoryState = {
  categories: CategoryType[];
  currentCategory: CategoryType;
};

export const useCategoryStore = create<CategoryState>(() => ({
  categories: [defaultCategory],
  currentCategory: defaultCategory,
}));

export const setCategories = (categories: CategoryType[]) => {
  useCategoryStore.setState({ categories });
};

export const setCurrentCategory = (currentCategory: CategoryType) => {
  useCategoryStore.setState({ currentCategory });
};
