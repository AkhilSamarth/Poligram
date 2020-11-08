import React from 'react'
import './styles/home.css'
 
const Home = () => {
    return (
        <body>
            <div className='rectangle-red'>
                <div className='link-bar'>
                    <div className='heading'> Poligram </div>
                    <div className='slogan'> The politicians handbook for everyone. </div>
                    <div className='slogan-description'> Poligram will provide an interactive way to learn politics and politicians in America.  </div>
                </div>
            </div>
            <div className='horizontal-line'></div>
            <div className='rectangle-white'>
                <div className='slogan-black'> Features </div>
                <div className='slogan-description-black'> Poligram will feature a way to search for politicians and learn about their views on topics, take meaningful quizzes to test your knowledge, and keep up with current issues in the news.  </div>
                <div className='section-1'> News </div>
                <div className='section-1-description'> Keep up with news related to politics and all your followed politicians. </div>
            </div>
            <div className='horizontal-line'></div>
            <div className='rectangle-blue'>
                <div className='slogan'> Get in touch with us! </div>
            </div>
        </body>
    );
}
 
export default Home