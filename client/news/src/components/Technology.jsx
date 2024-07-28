import React, { useEffect, useState } from 'react';
import Newscard from './Newscard'; 
import { Link } from 'react-router-dom'; 

function Technology() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchNews = async () => {
        const url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' + 'category=technology' +
            '&apiKey=e4de229c72574d1cbd38b32aa44a1373';

        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
            if (result.status === 'ok') {
                setNews(result.articles);
            } else {
                console.error('Error fetching news:', result);
                setError('Error fetching news');
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            setError('Error fetching news');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <header className="bg-blue-500 text-white p-4 text-center">
                <h1 className="text-2xl font-bold">Technology News</h1>
                <Link to="/home" className="mt-2 inline-block text-white bg-gray-700 hover:bg-gray-600 p-2 rounded">
                    Back to Home
                </Link>
            </header>
            <div className="flex flex-wrap justify-center mt-4">
                {news.map((item, index) => (
                    <Newscard
                        key={index}
                        author={item.author}
                        content={item.content}
                        title={item.title}
                        urlimg={item.urlToImage}
                        srcname={item.source.name}
                        publishedat={item.publishedAt}
                        desc={item.description}
                        url={item.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default Technology;
