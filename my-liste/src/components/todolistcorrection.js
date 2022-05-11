import React, { useState } from 'react';


const AddName = () => {
    const [nameList, setNameList] = useState([
        {
            id: 1,
            name: "Albert"
        },
        {
            id: 2,
            name: "Kilian"
        },
        {
            id: 3,
            name: "Mehdi"
        }
    ]);
    const [name, setName] = useState("");

    const addName = (e) => {
        e.preventDefault();
        if (name.length > 0) {
            setNameList([...nameList, { id: Date.now(), name: name }])
            setName("");
        }

    }

    const handleRemoveItem = (e) => {
        const name = e.target.getAttribute("name")
        setNameList(nameList.filter(item => item.name !== name));
}

    return (
        <>
            <form onSubmit={addName}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button type="submit">add name</button>
            </form>
            <ul>
                {
                    nameList.map((el, i) => {
                        return <li key={i}>{el.name} <span name={el.name} onClick={handleRemoveItem}>x</span></li>
                    })
                }
            </ul>
        </>
    );
}
export default AddName;
