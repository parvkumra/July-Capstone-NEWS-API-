import React from 'react';

function Newscard({ author, content, title, urlimg, srcname, publishedat, desc, url }) {
 
 

 
  const handleReadMore = () => {
    if (url) {
      window.open(url, '_blank'); 
    }
  };

  return (
    <div className='flex flex-col justify-center items-center border-2 m-4 p-4 rounded bg-white' style={{ flexBasis: 'calc(33.33% - 2rem)' }}>
      {urlimg ? (
        <img src={urlimg} alt='News' className='w-full h-auto' onError={(e) => e.target.style.display = 'none'} />
      ) : (
        <div className='w-full h-64 bg-gray-200 flex items-center justify-center'>
          <span>No image available</span>
        </div>
      )}
      <h2 className='text-xl font-bold mt-2'>{title}</h2>
      <p className='text-sm text-gray-600'>{author} </p>
      <p className='text-sm text-gray-600'>{srcname}</p>
      <div className='mt-2'>{desc}</div>
      <div className='mt-2'>{content}</div>
      <div className='mt-4'>
        <button
          onClick={handleReadMore}
          className='p-3 bg-blue-300 text-white'
        >
          Read Article
        </button>
      </div>
    </div>
  );
}

export default Newscard;
