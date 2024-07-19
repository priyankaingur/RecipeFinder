import React, { useState } from 'react';

// ExpandableSection Component
const ExpandableSection = ({ title, items, isOpen, onToggle }) => {
    return (
        <div key={title} className={`mt-4 flex flex-wrap bg-third-surface bg-opacity-5 shadow-md border-2 rounded-2xl p-4 m-2 border-primary ${isOpen ? 'border-blue-500' : 'border-gray-200'}`}>
            <button
                onClick={onToggle}
                className={`w-full text-left py-2 px-4 font-semibold text-gray-700 h-fit ${isOpen ? 'bg-gray-200' : 'bg-gray-100'} hover:bg-gray-200 rounded-t-lg transition-colors duration-300`}
            >
                {title} {isOpen ? '▲' : '▼'}
            </button>
            {isOpen && (
                <ul className="rounded-b-lg w-full p-4 bg-third-surface bg-opacity-5 shadow-md rounded-2xl ">
                    {items.map((item, index) => (
                        <li key={index} className="py-1 border-b border-gray-200 text-gray-600">
                            {item.name ? `${item.name}: ${item.amount} ${item.unit || ''}` : `${item.title}: ${item.amount}`}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// Main Component
const Nutrients = ({ data }) => {
    const [openSectionIndex, setOpenSectionIndex] = useState(null);

    const handleToggleSection = (index) => {
        setOpenSectionIndex(openSectionIndex === index ? null : index);
    };

    return (
        <div className="mt-4 flex flex-col space-y-4">
            <ExpandableSection
                title="Nutrients"
                items={data.nutrients}
                isOpen={openSectionIndex === 0}
                onToggle={() => handleToggleSection(0)}
            />
            <ExpandableSection
                title="Properties"
                items={data.properties}
                isOpen={openSectionIndex === 1}
                onToggle={() => handleToggleSection(1)}
            />
            <ExpandableSection
                title="Flavonoids"
                items={data.flavonoids}
                isOpen={openSectionIndex === 2}
                onToggle={() => handleToggleSection(2)}
            />
        </div>
    );
};

export default Nutrients;
