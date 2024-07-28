import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Newscard from './Newscard'; 

function SearchResults() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();

    useEffect(() => {
       
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get('query') || '';
        
        
        const fetchResults = async () => {
            if (searchQuery) {
                const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&apiKey=e4de229c72574d1cbd38b32aa44a1373`;
                
                try {
                    const response = await fetch(url);
                    const result = await response.json();
                    if (result.status === 'ok') {
                        setResults(result.articles);
                    } else {
                        setError('Error fetching search results');
                    }
                } catch (error) {
                    setError('Error fetching search results');
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchResults();
    }, [location.search]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='p-6'>
            <h1 className='text-2xl font-bold mb-4'>Search Results for "{new URLSearchParams(location.search).get('query')}"</h1>
            <div className='flex flex-wrap justify-center'>
                {results.length ? (
                    results.map((article, index) => (
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
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
}

export default SearchResults;
