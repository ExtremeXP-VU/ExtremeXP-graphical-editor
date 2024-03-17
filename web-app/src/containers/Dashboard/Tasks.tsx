import './common.scss';
import './tasks.scss';
import { useState, useEffect, useCallback, useMemo } from 'react';
import useRequest from '../../hooks/useRequest';
import { message } from '../../utils/message';
import { Outlet, useNavigate } from 'react-router-dom';
import Popover from '../../components/general/Popover';
import {
  CategoriesResponseType,
  CreateCategoryResponseType,
  UpdateCategoryResponseType,
  DeleteCategoryResponseType,
} from '../../types/requests';

import {
  useCategoryStore,
  setCategories,
  setCurrentCategory,
} from '../../stores/categoryStore';

const Tasks = () => {
  const categories = useCategoryStore((state) => state.categories);
  const currentCategory = useCategoryStore((state) => state.currentCategory);

  const [searchInput, setSearchInput] = useState('');
  const [createCategoryName, setCreateCategoryName] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [categoryNameInput, setCategoryNameInput] = useState('');

  const [showPopover, setShowPopover] = useState(false);

  const { request: categoriesRequest } = useRequest<CategoriesResponseType>();
  const { request: createCategoryRequest } =
    useRequest<CreateCategoryResponseType>();
  const { request: updateCategoryRequest } =
    useRequest<UpdateCategoryResponseType>();
  const { request: deleteCategoryRequest } =
    useRequest<DeleteCategoryResponseType>();

  const navigate = useNavigate();

  const filteredCategory = useMemo(() => {
    return categories.filter((category) => {
      return category.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }, [categories, searchInput]);

  const getCategories = useCallback(() => {
    categoriesRequest({
      url: `task/categories`,
    })
      .then((data) => {
        if (data.data.categories) {
          setCategories(data.data.categories);
        }
      })
      .catch((error) => {
        if (error.name === 'AxiosError') {
          message('Please login first');
        }
      });
  }, [categoriesRequest, categories]);

  useEffect(() => {
    getCategories();
  }, []);

  // set the first category as the current category when enter the page
  useEffect(() => {
    if (categories.length > 0 && currentCategory.id_category === 'default') {
      setCurrentCategory(categories[0]);
    }
  }, [categories, currentCategory.id_category]);

  useEffect(() => {
    navigate(`/dashboard/categories/${currentCategory?.id_category}/tasks`);
  }, [currentCategory.id_category]);

  // FIXME: Add category name validation
  const isCategoryNameValid = (name: string) => {
    if (!name) {
      message('Category name can not be empty');
      return false;
    }
    if (name.length > 50) {
      message('Category name should be less than 50 characters');
      return false;
    }
    return true;
  };

  const handleCreateCategory = () => {
    if (!isCategoryNameValid(createCategoryName)) return;
    createCategoryRequest({
      url: `task/categories/create`,
      method: 'POST',
      data: {
        name: createCategoryName,
      },
    })
      .then(() => {
        getCategories();
      })
      .catch((error) => {
        if (error.name === 'AxiosError') {
          message('Please login first');
        }
        message(error.response.data?.message || 'unknown error');
      });
    setCreateCategoryName('');
  };

  const handleSelectCategory = (index: number) => {
    if (isEditing) return;
    setCurrentCategory(filteredCategory[index]);
  };

  const handleStartEditing = (name: string) => {
    setCategoryNameInput(name);
    setIsEditing(!isEditing);
  };

  const handleChangeNameKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      updateCategoryName();
    }
  };

  const updateCategoryName = () => {
    setIsEditing(false);
    if (!isCategoryNameValid(categoryNameInput)) return;
    if (currentCategory.name === categoryNameInput) return;

    updateCategoryRequest({
      url: `task/categories/${currentCategory.id_category}/update`,
      method: 'PUT',
      data: {
        name: categoryNameInput,
      },
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        if (error.name === 'AxiosError') {
          message('Please login first');
        }
        message(error.response.data?.message || 'unknown error');
      });
  };

  function handleOpenPopover() {
    setShowPopover(true);
  }

  function closeMask() {
    setShowPopover(false);
  }

  function handleCancelDelete() {
    closeMask();
  }

  const handleDeleteCategory = () => {
    deleteCategoryRequest({
      url: `task/categories/${currentCategory.id_category}/delete`,
      method: 'DELETE',
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        if (error.name === 'AxiosError') {
          message('Please login first');
        }
        message(error.response.data?.message || 'unknown error');
      });
    closeMask();
  };

  return (
    <>
      <div className="page dashboard__page">
        <div className="dashboard__common__panel">
          <div className="dashboard__common__panel__new">
            <input
              type="text"
              placeholder="enter a new category name"
              className="dashboard__common__panel__new__input"
              value={createCategoryName}
              onChange={(e) => setCreateCategoryName(e.target.value)}
            />
            <button
              className="dashboard__common__panel__new__button"
              onClick={handleCreateCategory}
            >
              create
            </button>
          </div>
          <div className="dashboard__common__panel__search">
            <span className="iconfont">&#xe60a;</span>
            <input
              type="text"
              disabled={isEditing}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="dashboard__common__panel__folders">
            <div className="dashboard__common__panel__folders__header">
              <span>Category name</span>
            </div>
            <ul className="dashboard__common__panel__folders__list">
              {filteredCategory.map((category, index) => (
                <li
                  className={`dashboard__common__panel__folders__list__item ${
                    currentCategory.name === category.name ? 'selected' : ''
                  }`}
                  key={category.id_category}
                  onClick={() => handleSelectCategory(index)}
                >
                  <div className="dashboard__common__panel__folders__list__item__name">
                    <span className="iconfont">&#xe706;</span>
                    {isEditing &&
                    currentCategory.id_category === category.id_category ? (
                      <input
                        type="text"
                        value={categoryNameInput}
                        onChange={(e) => setCategoryNameInput(e.target.value)}
                        onKeyUp={handleChangeNameKeyPress}
                      />
                    ) : (
                      <span>{category.name}</span>
                    )}
                  </div>
                  {!category.is_official && (
                    <div className="dashboard__common__panel__folders__list__item__operations">
                      <span
                        className="iconfont edit"
                        onClick={() => handleStartEditing(category.name)}
                      >
                        &#xe63c;
                      </span>
                      <span
                        className="iconfont delete"
                        onClick={handleOpenPopover}
                      >
                        &#xe634;
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="dashboard__common__right">
          <div className="dashboard__common__right__board">
            <div className="dashboard__common__right__header category__header">
              <div className="dashboard__common__right__header__info__name">
                <span>{currentCategory.name}</span>
              </div>
            </div>
            <div className="dashboard__common__right__content category__content">
              <Outlet />
            </div>
          </div>
        </div>
        <Popover show={showPopover} blankClickCallback={closeMask}>
          <div className="popover__delete">
            <div className="popover__delete__text">
              {`Do you want to delete ${currentCategory.name}? All tasks in this category
              will be deleted as well.`}
            </div>
            <div className="popover__delete__buttons">
              <button
                className="popover__delete__buttons__cancel"
                onClick={handleCancelDelete}
              >
                cancel
              </button>
              <button
                className="popover__delete__buttons__confirm"
                onClick={handleDeleteCategory}
              >
                confirm
              </button>
            </div>
          </div>
        </Popover>
      </div>
    </>
  );
};

export default Tasks;
