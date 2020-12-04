import React, { useState, useEffect } from 'react';
import NewsSearch from './NewsSearch';
import Socket from './Socket';
import './styles/news.css';

function News() {
  const [newsData, setNewsData] = useState([]);
  const [trendNews, setTrendNews] = useState([]);
  useEffect(() => {
    Socket.emit('news api call');
    
    Socket.on('newsData', (data) => {
      setNewsData(data.newsObjectLst);
    });
    Socket.on('trendNews', (data) => {
      setTrendNews(data.TrendnewsLst);
    });

    return () => {
      Socket.off('newsData');
      Socket.off('trendNews');
    };
  }, []);
  
  console.log(trendNews);

  return (
    <div > 
    <NewsSearch />
    <div>
    {trendNews.map((newz) => (
        <p>
        <li>
          <div className="container">
          <img src={newz.img} alt="" width="800" height="500" />
          <div class="content">
            <h1><a href={newz.url} target="_blank" rel="noopener noreferrer">{newz.title}</a></h1>
            <p>
                Article:
                {newz.content}
                <a href={newz.url} target="_blank" rel="noopener noreferrer">Click Here</a>
              </p>
          </div>
          </div>
          <br />
          </li>
        </p>
      ))}
      </div>
      {newsData.map((news) => (
        <p>
          <br />
          <div className="news">
          <div className="row">
           <div className="column"><img src={news.img} alt="" width="650" height="300" /></div>
            <div className="column">
              <h2 className="headerclass">
                {news.title}
              </h2>
              <p>
                {news.content}
                <a href={news.url} target="_blank" rel="noopener noreferrer">Click Here</a>
              </p>
            </div>
          </div>
          <br />
          </div>
        </p>
      ))}
    </div>
  );
}

export default News;
