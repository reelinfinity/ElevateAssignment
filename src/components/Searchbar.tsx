import { FC, useContext, useState } from "react";
import Bars4 from "../assets/Bars4.svg";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import searchIcon from "../assets/SearchIcon.svg";
import cartIcon from "../assets/CartIcon.svg";
import userIcon from "../assets/userIcon.svg";
import { CategoryContext } from "../App";

interface SearchbarProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Searchbar: FC<SearchbarProps> = ({setSearchInput, searchInput, selectedCategory, setSelectedCategory}) => {
  const categories = useContext(CategoryContext);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  return (
    <div className="flex h-20 w-full justify-center items-center space-x-4">
      <img src={Bars4} alt="bars 4" className="h-10 w-10"/>
      <Menu as="div" className="relative text-left w-">
        <div>
          <Menu.Button className="flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {selectedCategory}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
          <Menu.Items className="absolute z-[100] right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {categories?.map((category, index) => (
              <div className="px-1 py-1" key={index} onClick={() => setSelectedCategory(category)}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-black text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {category}
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
      </Menu>
      <div className="relative w-2/5">
        <input placeholder="Search" className="outline-none p-2 w-full rounded-md" value={searchInput} onChange={(e) => {
          setSearchInput(e.target.value);
        }}/>
        <button className="absolute flex justify-center items-center h-full right-0 top-0 bg-orange-500 w-10 rounded-r-md">
          <img src={searchIcon} alt="search icon" className="h-6 w-6"/>
        </button>
      </div>
      <Menu as="div" className="relative text-left w-1/12">
        <div>
          <Menu.Button className="flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {selectedLanguage}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
          <Menu.Items className="absolute z-[100] right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1" onClick={() => setSelectedLanguage("English")}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    English
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1" onClick={() => setSelectedLanguage("Hindi")}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Hindi
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
      </Menu>
      <div className="w-fit flex items-center space-x-2">
        <img src={cartIcon} alt="cart icon" className="h-4 w-4"/>
        <div className="w-fit text-white">CART</div>
      </div>
      <div className="w-fit flex items-center">
        <img src={userIcon} alt="user icon" className="h-4 w-4"/>
      </div>
    </div>
  )
}

export default Searchbar