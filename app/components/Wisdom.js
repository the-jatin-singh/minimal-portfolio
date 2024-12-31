"use client";
import { RefreshCw, CloudAlert } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const categories = ['happiness', 'alone', 'anger', 'change', 'dream', 'family'];

const Wisdom = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('happiness');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!loading) {
      fetchQuote(category);
    }
  }, [category]);

  const fetchQuote = async (category) => {
    if (loading) return;
    setLoading(true);
    setError(false);
    try {
      const apiKey = process.env.NEXT_PUBLIC_API_NINJA_KEY;
      if (!apiKey) {
        throw new Error('API key is missing');
      }
      const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: { 'X-Api-Key': apiKey }
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      if (data.length > 0) {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full flex flex-col items-start min-h-[293px]'>
      <div className='mb-4 flex gap-2'>
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setCategory(cat)}
            className={`p-2 rounded-xl cursor-pointer ${category === cat ? 'bg-darkTxt text-lightTxt' : 'bg-lightTxt/20 text-darkTxt'}`}
            disabled={loading}
          >
            {cat}
          </div>
        ))}
      </div>
      {loading ? (
        <div className='w-full flex items-center justify-center mt-4 h-[100px]'>
            <RefreshCw size={17} className='animate-spin text-lightTxt' />
        </div>
      ) : error ? (
        <div className='w-full flex flex-col gap-1 items-center justify-center mt-4 h-[100px]'>
          <CloudAlert size={50} className='text-lightTxt' />
          <p className='text-lightTxt'>Oops! Wisdom seems to be on a break. Try again later!</p>
        </div>
      ) : (
        <div className='w-full lg:text-lg text-md flex flex-col items-center justify-center gap-5 mt-4'>
          <p className='italic'>{quote}</p>
          <p className='text-lightTxt w-full text-right'>- {author}</p>
        </div>
      )}
    </div>
  );
};

export default Wisdom;