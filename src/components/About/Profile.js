import React, { useState } from 'react';

const Images = () => {
    const jsonData = require("./executive.json");
    const [selectedBio, setSelectedBio] = useState(null);

    const toggleBio = (id) => {
        // If the same bio is clicked, hide it; otherwise, show the selected bio
        setSelectedBio(selectedBio === id ? null : id);
    };

    return (
        <div className="flex flex-wrap justify-center mt-28">
            {jsonData.data.map((ele,idx) => (
                <div className="w-full lg:w-1/3 text-center my-4" key={idx}>
                    <img
                        src={ele["avatar_url"]}
                        alt={ele["name"]}
                        className="sm:h-64 sm:w-64 h-52 w-52 rounded-full my-2 mx-auto"
                    />
                    <h5 className="font-medium text-gray-700 text-xl mt-4">{ele["name"]}</h5>
                    <p className="text-gray-600 mt-2">{ele["position"]}</p>
                    <button
                        className="text-gray-700 my-2"
                        onClick={() => toggleBio(ele["id"])}
                    >
                        Bio {selectedBio === ele["id"] ? '\u2191' : '\u2193'}
                    </button>
                    {selectedBio === ele["id"] && (
                        <p className="text-gray-700 mt-2 sm:px-8 px-0 text-start">{ele["biography"]}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Images;
