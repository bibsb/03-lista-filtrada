import { useState } from 'react';

import './App.css';

function App() {
  const [filterInput, setFilterInput] = useState('');
  const [userList] = useState([
    'Maria Flores',
    'Lola Perez',
    'Encarna Asusnción',
    'Julio Puertos',
    'Luís Fontana',
    'Manolo Gómez',
  ]);
  const [filteredUserList, setFilteredUserList] = useState([
    'Maria Flores',
    'Lola Perez',
    'Encarna Asusnción',
    'Julio Puertos',
    'Luís Fontana',
    'Manolo Gómez',
  ]);

  const filter = () => {
    const tempUserList = [...userList];
    const tempFilteredUserList = tempUserList.filter((user) =>
      user.toLocaleLowerCase().includes(filterInput.toLocaleLowerCase())
    );
    setFilteredUserList(tempFilteredUserList);
  };
  const reset = () => {
    setFilteredUserList(userList);
    setFilterInput('');
  };

  return (
    <>
      <input type="button" value="Filtrar" onClick={() => filter()} />
      <input type="button" value="Reiniciar" onClick={() => reset()} />
      <input
        type="text"
        id="filter"
        placeholder="Buscar..."
        value={filterInput}
        onChange={(e) => setFilterInput(e.target.value)}
      />
      <ul>
        {filteredUserList.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
