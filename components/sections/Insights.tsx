"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blogData';

function AuthorAvatar({ name }: { name: string; avatar?: string }) {
  const initials = name
    ? name.substring(0, 2).toUpperCase()
    : "U";

  return (
    <div 
      className="avatar avatar-23 alignnone"
      style={{
        width: '23px',
        height: '23px',
        backgroundColor: '#f3f4f6',
        color: '#111827',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }}
      title={name}
    >
      {initials}
    </div>
  );
}

export default function Insights({ initialBlogs }: { initialBlogs?: BlogPost[] }) {
  const [activeTab, setActiveTab] = useState("all");
  const [posts, setPosts] = useState<BlogPost[]>(initialBlogs || []);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!initialBlogs) {
      const fetchBlogs = async () => {
        try {
          const res = await fetch("/api/blogs");
          const json = await res.json();
          if (json.success) {
            setPosts(json.data.filter((p: BlogPost) => p.status === "published"));
          }
        } catch (err) {
          console.error("Error fetching blogs:", err);
        }
      };
      fetchBlogs();
    }
  }, [initialBlogs]);

  // Read URL search params on mount/client-side to preserve external navigation links
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tag = searchParams.get('tag');
    if (tag) {
      setActiveTab(tag);
    }
  }, []);

  const dynamicCategories = useMemo(() => {
    const activeTags = new Set<string>();
    posts.forEach(post => {
      post.tags.forEach(tag => activeTags.add(tag.id));
    });

    const categoriesMap = new Map<string, string>();
    categoriesMap.set("all", "All");

    // Default core categories to guarantee initial list order
    const coreCategories = [
      { id: "analytics", label: "Analytics" },
      { id: "business-intelligence", label: "Business Intelligence" },
      { id: "design", label: "Design" },
      { id: "development", label: "Development" },
      { id: "news", label: "News" }
    ];
    
    coreCategories.forEach(cat => {
      if (activeTags.has(cat.id)) {
        categoriesMap.set(cat.id, cat.label);
      }
    });

    // Dynamically append any new tags present in published posts
    posts.forEach(post => {
      post.tags.forEach(tag => {
        if (!categoriesMap.has(tag.id)) {
          categoriesMap.set(tag.id, tag.name);
        }
      });
    });

    return Array.from(categoriesMap.entries()).map(([id, label]) => ({
      id,
      label
    }));
  }, [posts]);

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const filteredArticles = useMemo(() => {
    return posts.filter(article => {
      if (activeTab === "all") return true;
      return article.tags.some(tag => tag.id === activeTab);
    });
  }, [posts, activeTab]);

  // 6 cards per page pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredArticles, currentPage]);

  return (
    <section className="cases_section tabs pt-200 pt-100-mob pb-100 pb-100-mob await-action" data-tabs="">
      <div className="container">
        <h1 className="title--xxl bg-dark mw1040 mt-4 mt-8-mob isview slidetop new-animate">
          <span className="a-word"><span style={{ transitionDelay: '0s' }}>Expert</span></span>{" "}
          <span className="a-word"><span style={{ transitionDelay: '0.08s' }}>articles</span></span>
        </h1>
        
        <div className="tabs-actions disable-scrollbar mt-60 mt-24 isview slidetop">
          {dynamicCategories.map(cat => (
            <button 
              key={cat.id}
              type="button" 
              className={`btn btn--white hover--gray active--dark ${activeTab === cat.id ? 'is-active' : ''}`} 
              onClick={() => setActiveTab(cat.id)}
            >
              <span><b>{cat.label}</b></span>
            </button>
          ))}
        </div>
        
        <div className="cases-select mt-24 isview slidetop">
          <div className="select-native">
            <select 
              name="type" 
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {dynamicCategories.map(cat => (
                <option key={cat.id} value={cat.id}>Type: {cat.label}</option>
              ))}
            </select>
            <img src="/images/arrow-down.svg" className="select-native-appearance" alt="" />
          </div>
        </div>
        
        <div className="tabs-holder mt-40 mt-24-mob" data-tabs-holder="">
          <div className="cases_wrap grid col-2 col-1-mob gap-40 bg--white tabs-pane is-active">
            {displayedArticles.length > 0 ? displayedArticles.map((article) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                onTagClick={setActiveTab} 
              />
            )) : (
              <div className="col-span-2 txt txt--m py-10">No articles found in this category.</div>
            )}
            
            {filteredArticles.length > 0 && totalPages > 1 && (
              <>
                <div className="pagination mt-60 pc-visible">
                  <ul className="page-numbers flex v--center h--center gap-6">
                    {/* Previous Button */}
                    <li>
                      {currentPage === 1 ? (
                        <span className="prev page-numbers disabled btn btn--white arr revert hover--gray-light"><span></span></span>
                      ) : (
                        <button className="prev page-numbers btn btn--white arr revert hover--gray-light" onClick={() => setCurrentPage(p => Math.max(1, p - 1))}><span></span></button>
                      )}
                    </li>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                      <li key={pageNum}>
                        {currentPage === pageNum ? (
                          <span className="page-numbers current btn btn--white hover--gray-light active--dark is-active"><span><b>{pageNum}</b></span></span>
                        ) : (
                          <button className="page-numbers btn btn--white hover--gray-light" onClick={() => setCurrentPage(pageNum)}><span><b>{pageNum}</b></span></button>
                        )}
                      </li>
                    ))}

                    {/* Next Button */}
                    <li>
                      {currentPage === totalPages ? (
                        <span className="next page-numbers disabled btn btn--white arr hover--gray-light"><span></span></span>
                      ) : (
                        <button className="next page-numbers btn btn--white arr hover--gray-light" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}><span></span></button>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="mob-visible mt-60 pagination">
                  <ul className="page-numbers flex v--center h--center gap-6">
                    {/* Previous Button */}
                    <li>
                      {currentPage === 1 ? (
                        <span className="prev page-numbers disabled btn btn--white arr revert hover--gray-light"><span></span></span>
                      ) : (
                        <button className="prev page-numbers btn btn--white arr revert hover--gray-light" onClick={() => setCurrentPage(p => Math.max(1, p - 1))}><span></span></button>
                      )}
                    </li>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                      <li key={pageNum}>
                        {currentPage === pageNum ? (
                          <span className="page-numbers current btn btn--white hover--gray-light active--dark is-active"><span><b>{pageNum}</b></span></span>
                        ) : (
                          <button className="page-numbers btn btn--white hover--gray-light" onClick={() => setCurrentPage(pageNum)}><span><b>{pageNum}</b></span></button>
                        )}
                      </li>
                    ))}

                    {/* Next Button */}
                    <li>
                      {currentPage === totalPages ? (
                        <span className="next page-numbers disabled btn btn--white arr hover--gray-light"><span></span></span>
                      ) : (
                        <button className="next page-numbers btn btn--white arr hover--gray-light" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}><span></span></button>
                      )}
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Article Card Sub-Component ─────────────────────────────────────────────── */

function ArticleCard({ article, onTagClick }: { article: BlogPost; onTagClick: (id: string) => void }) {
  return (
    <div className="article_card isview slidetop">
      <Link href={`/blog/${article.slug}`} className="img-wrap ov-hidden radius-16 view">
        <img src={article.coverImage} alt={article.title} decoding="async" />
      </Link>
      <div className="article-authors-wrap mt-24">
        <span className="auth-wrap color--dark">
          <div className="auth-avatars">
            <AuthorAvatar name={article.author.name} avatar={article.author.avatar} />
          </div>
          <span className="auth-name txt--caption-m fw-600">{article.author.name}</span>
        </span>
        <div className="details flex v--center h--start uppercase mt-12-mob">
          <span className="txt txt--caption-m color--dark-secondary fw-600">{article.date}</span>
          <span className="txt txt--caption-m color--dark-secondary fw-600">{article.readTime}</span>
        </div>
      </div>
      <div className="name-wrap mt-16">
        <Link href={`/blog/${article.slug}`} className="name title article_card-title color--dark">{article.title}</Link>
      </div>
      <div className="txt txt--s mt-12">
        <p>{article.summary}</p>
      </div>
      <div className="separator"></div>
      <div className="tags flex f--start h--start h--wrap gap-8 mt-20 pt-20">
        {article.tags.map((tag, tIdx) => (
          <button 
            key={tIdx} 
            className="tag tag--light border-none cursor-pointer" 
            onClick={() => onTagClick(tag.id)}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
}
