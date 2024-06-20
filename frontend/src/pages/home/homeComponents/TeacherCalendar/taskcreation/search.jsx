import React, { useState } from 'react';
import { data } from "./data.jsx";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setDropdownVisible(true);
    };

    const handleItemClick = (item) => {
        if (!selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]);
        }
        setDropdownVisible(false);
        setSearchTerm('');
    };

    const handleRemoveItem = (item) => {
        setSelectedItems(selectedItems.filter(i => i !== item));
    };

    const filteredData = data.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedItems.includes(item)
    );

    return (
        <div className="relative">
            {dropdownVisible && (
                <div className="absolute bottom-4 mb-12 mt-2 bg-white rounded-lg shadow-lg w-full max-h-60 overflow-y-auto z-50">
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleItemClick(item)}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            >
                                {item}
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-gray-500">No item found</div>
                    )}
                </div>
            )}
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                onClick={() => setDropdownVisible(true)}
                
                placeholder="Search for classes, students, divisions"
                className="px-4 py-2 rounded-[25px] mb- bg-[#f5f5f5] w-full outline-none"
            />
            <div className="mt-2 flex flex-wrap gap-2">
                {selectedItems.map((item, index) => (
                    <div key={index} className="flex items-center px-3 py-1 border-[#0148b7] border text-[#444444] rounded-full mb-2">
                        {item}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-4 h-4 ml-2 cursor-pointer"
                            onClick={() => handleRemoveItem(item)}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
