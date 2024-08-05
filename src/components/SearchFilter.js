import React, { useState } from 'react';
import '../components/SearchFilter.css';

const items = [
    'Mustang GT','Ford','Porsche','Land Cruiser'
    ];

    const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = items.filter((item) =>
        item.toLowerCase().includes(value)
        );
        setFilteredItems(filtered);
    };

    return (
        <div className="SearchFilter-Container" style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
            padding: '10px',
            width: '100%',
            boxSizing: 'border-box',
            marginBottom: '10px',
            }}
            className='Search-Item-Input'
        />
        <ul className="ListStyle" style={{ listStyleType: 'none', padding: '0' }}>
            {filteredItems.map((item, index) => (
            <li key={index} style={{ padding: '5px 0' }}>
                {item}
            </li>
            ))}
        </ul>
        </div>
    );
    };

export default SearchFilter;
