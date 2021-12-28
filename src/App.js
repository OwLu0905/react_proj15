import './App.css';
import { useState, useEffect } from 'react'; 
import Content from './Content';
import Header from './Header';

function App() {
  
  const reqUrl =  (value) => {
    let url = "https://jsonplaceholder.typicode.com/";
    const result = url + value;
    return result;
  };

  const [urls, setUrls] = useState('');
  const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState('')
  // const [fetchError, setFetchError] = useState(null);

  const handleClick = async (url) => {
    // url.preventDefault();
    const response = await fetch(url);
    const result = await response.json();
    setUrls(url);
    setItems(result);
  }


  return (
    <div className="App">
      <h1>Fetch Data practice</h1>
      <Header 
      reqUrl={reqUrl}
      handleClick={handleClick}
      />
      <Content 
      urls={urls}
      items={items}
    />
    </div>
  );
}

export default App;
