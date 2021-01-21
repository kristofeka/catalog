import React, {useEffect, useState} from 'react';
import Product from './Product';

const Catalog = () => {

  const APP_ID = '99437040';
  const APP_KEY = '9d6cff654a096b09a6c40559a786e58b';

  const [produk, setProduk] = useState([])
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getData();
  }, [query])

  const getData = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setProduk(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">search</button>
      </form>
      {produk.map(produk =>  (
        <Product 
          key={produk.recipe.label}
          title={produk.recipe.label}
          label={produk.recipe.calories}
          image={produk.recipe.image}/>
      ))}
    </div>
  );
}

export default Catalog;