import React, { useState, useEffect } from 'react';
import NewsSearch from './NewsSearch';
import Socket from './Socket';
import './styles/news.css';

function News() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    Socket.emit('news api call');

    Socket.on('newsData', (data) => {
      setNewsData(data.newsObjectLst);
    });

    return () => {
      Socket.off('newsData');
    };
  }, []);

  return (
    <div> 
    <NewsSearch /> 
      {newsData.map((news) => (
        <p>
          
          <div className="headerclass">{news.title}</div>
          <br />

          <div className="row">
            <div className="column">
              <p>
                Article:
                {news.content}
                <a href={news.url} target="_blank" rel="noopener noreferrer">Click Here</a>
              </p>
              <p>
                Written by:
                {news.author}
              </p>
              <p>
                Posted by:
                {news.source}
              </p>
            </div>

            <div className="column"><img src={news.img} alt="" width="300" height="300" /></div>

          </div>
          <br />

        </p>

      ))}
    </div>
  );
}

export default News;
