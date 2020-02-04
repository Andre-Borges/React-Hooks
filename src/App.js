import React, { useState, useEffect } from 'react';

// useState -> criar estados na função sem escrever elas em formato de classe.
// useEffect -> Sobrepões metodos do ciclo de vida (componentDidMount(), componentDidUpdate(), componentWillUnmount())

function App() {
  // [estado, função para atualizar estado]
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  // Executa uma unica vez -> componentDidMount()
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // Executa toda vez que o valor de tech for alterado -> componentDidUpdate()
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
