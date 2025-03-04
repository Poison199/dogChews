'use client';

import React, { useState, useEffect } from 'react';
import PostItemOne from '@/components/PostItemOne';
import Preloader from '@/components/Preloader';

export default function Posts() {
  const [items, setItems] = useState<any | []>([]);
  const [item, setItem] = useState(null); // Initialize as `null` to indicate loading state

  const getItemsData = () => {
    fetch(`/api/postitems`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e.message));
  };

  const getSinglePostData = (id: string) => {
    fetch(`/api/postitems/${id}`)
      .then((res) => {
        if (res.status === 404) {
          console.log('Post not found');
          return;
        }
        return res.json();
      })
      .then((data) => data && setItem(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getItemsData();
    getSinglePostData('67960401a60a48b96a3455db');
  }, []);

  return (
    <section id="posts" className="posts">
      <div className="container" data-aos="fade-up">
        <div className="row g-5">
          <div className="col-lg-4">
            {/* Render `PostItemOne` only if `item` is loaded */}
            {item ? <PostItemOne large={true} item={item} /> : <Preloader />}
          </div>
          <div className="col-lg-8">
            <div className="row g-5">
              {[0, 1, 2].map((colIndex) => (
                <div key={colIndex} className="col-lg-4 border-start custom-border">
                  {items && items.length > 0 ? (
                    items
                      .filter((item: { trending: boolean; top: boolean }) => !item.trending && !item.top)
                      .slice(colIndex * 3, colIndex * 3 + 3)
                      .map(
                        (item: {
                          _id: string;
                          img: string;
                          category: string;
                          date: string;
                          title: string;
                          brief: string;
                          avatar: string;
                          author: string;
                        }) => (
                          <div
                            key={item._id}
                            onClick={(e) => {
                              e.preventDefault(); // Prevent default behavior
                              e.stopPropagation(); // Stop event propagation
                              console.log('Clicked:', item.title); // Optional: Log the click event
                            }}
                          >
                            <PostItemOne large={false} item={item} />
                          </div>
                        )
                      )
                  ) : (
                    <Preloader />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}