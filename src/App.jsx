import './News.css';
import { useEffect, useState } from 'react';

const categories = ['General', 'Business', 'Technology', 'Entertainment', 'Health', 'Science', 'Sports'];

function App() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const apiKey = '16efdcd15e45449da42f193476303d7b';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
      .catch(err => console.error('Error fetching news:', err));
  }, []);

  function handleSearch() {
    const apiKey = '16efdcd15e45449da42f193476303d7b';
    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
      .catch(err => console.error('Search failed:', err));
  }

  function handleCategoryClick(category) {
    const apiKey = '16efdcd15e45449da42f193476303d7b';
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category.toLowerCase()}&apiKey=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
      .catch(err => console.error('Category fetch failed:', err));
  }

  return (
    <>
      <header style={{ 
        backgroundColor: '#ffe4e1', 
        padding: '10px', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: '18px', 
        color: '#d26474',
        borderBottom: '1px solid #f5c6cb'
      }}>
        Made by Sultan, Sasmit, and Kriva
      </header>

      <div>
        <h1 style={{ textAlign: 'center' }}>📰 Top News Headlines</h1>

        <div style={{ textAlign: 'center', margin: '20px' }}>
          <input
            type="text"
            placeholder="Search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '10px',
              width: '300px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #ccc'
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: '10px 15px',
              marginLeft: '10px',
              fontSize: '16px',
              borderRadius: '8px',
              backgroundColor: '#0077cc',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              style={{
                margin: '5px',
                padding: '8px 12px',
                borderRadius: '20px',
                border: '1px solid #e0919a',
                backgroundColor: '#fff0f5',
                color: '#b3395b',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="news-container">
          {articles.map((article, idx) => (
            <div key={idx} className="news-card">
              {article.urlToImage && (
                <img src={article.urlToImage} alt="News" style={{ width: '100%', borderRadius: '6px' }} />
              )}
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noreferrer">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
