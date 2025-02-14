import React, { useState, useEffect } from 'react';
import Newscard from './Newscard';

function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [l, setL] = useState(0); 
    const [u, setU] = useState(9); 
    const [pgNews, setPgNews] = useState([]); 

    const fetchNews = async () => {
        const url = 'https://newsapi.org/v2/top-headlines?' +
            'country=in&' +
            'apiKey=e4de229c72574d1cbd38b32aa44a1373';

        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log('API Response:', result);
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

    useEffect(() => {
        if (news.length) {
            
            const filteredNews = news.filter(article => article.title !== '[Removed]' && article.urlToImage != null);
            const paginatedNews = filteredNews.slice(l, u);
            setPgNews(paginatedNews);
        }
    }, [news, l, u]);

    const handleNext = () => {
        
        if (u < news.length) {
            setL(l + 9);
            setU(u + 9);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <div className='mt-6'>
                <center>
                    <div className='font-nishu text-3xl font-extrabold'>TOP NEWS HEADLINES</div>
                </center>
                <div className='flex flex-wrap justify-center bg-blue-100 mt-6'>
                    {pgNews.length ? (
                        pgNews.map((article, index) => (
                            <Newscard
                                key={index}
                                author={article.author}
                                content={article.content}
                                title={article.title}
                                urlimg={article.urlToImage}
                                srcname={article.source.name}
                                publishedat={article.publishedAt}
                                desc={article.description}
                                url={article.url} 
                            />
                        ))
                    ) : (
                        'No news articles found.'
                    )}
                </div>
                <div className='flex justify-center my-4'>
                    <button onClick={handleNext} className='bg-blue-500 text-white py-2 px-4 rounded'>
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

export default News;
