"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blogData";
import { getRelatedBlogs } from "@/lib/blogData";

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

/* ─── Sub-components ────────────────────────────────────────────────────────── */

function BlogHero({ post }: { post: BlogPost }) {
  return (
    <section className="hero bg--dark article-hero">
      <div className="container color--white">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/insights">Blog</Link>
            </li>
            <li className="breadcrumbs__current-page" aria-current="page">
              <span>{post.title}</span>
            </li>
          </ol>
        </nav>

        {/* Tags */}
        <div className="tags flex v--center h--start h--wrap gap-8 mt-20 txt txt--control-s mt-64 mt-24-mob color--white-secondary">
          {post.tags.map((tag, idx) => (
            <Link
              key={idx}
              href={`/insights?tag=${tag.id}`}
              className="btn btn--simple no-bottom-line"
            >
              <span>#{tag.name}</span>
            </Link>
          ))}
        </div>

        {/* Title */}
        <div className="nobr-mob title title--xxl isview slidetop new-animate trd02 mt-24 mt-16-mob">
          {post.title}
        </div>

        {/* Author info */}
        <div className="article-authors-wrap mt-48 mt-24-mob">
          <span className="auth-wrap color--dark">
            <div className="auth-avatars">
              <AuthorAvatar name={post.author.name} avatar={post.author.avatar} />
            </div>
            <span className="auth-name txt--caption-m fw-600">
              {post.author.name}
            </span>
          </span>
          <div className="details flex v--center h--start uppercase mt-12-mob">
            <span className="txt txt--caption-m color--dark-secondary fw-600">
              {post.date}
            </span>
            <span className="txt txt--caption-m color--dark-secondary fw-600">
              {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogContent({ post }: { post: BlogPost }) {
  return (
    <section className="pt-200 pb-100 pt-64-mob pb-64-mob single_article_screen alt_layout">
      <div className="container">
        {/* Summary row */}
        <div className="article_content_wrap flex v--stretch h--between pb-96 pb-64-mob">
          <div className="left flex fd--column h--between">
            <div className="txt txt--caption-m color--dark-secondary uppercase">
              summary
            </div>
          </div>
          <div className="right flex fd--column gap-40">
            <div className="txt txt--lead">
              <p>{post.summary}</p>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Article body */}
        <div className="article_content_wrap flex v--stretch h--between pt-96 pt-64-mob article-section">
          <div className="right flex fd--column gap-40">
            <div
              className="simple-text txt txt--l color--dark"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function BlogCTA() {
  return (
    <section className="cta bg--white">
      <div className="container">
        <div className="cta_content">
         
          <div className="title title--m title--with-mark mt-24 mt-20-mob text--center isview slidetop new-animate">
            Wondering about the price? We&apos;ll help you find the best solution!
          </div>
          <div className="mt-48 mt-20-mob flex v--center h--center isview slidetop">
            <Link
              className="btn btn--orange arr arr-right hover--dark btn--lg-desk"
              href="/contact-us"
            >
              <span>
                <b>Contact us</b>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogFAQ({ faqs }: { faqs: BlogPost["faqs"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="faq_section pb-200 pb-100-mob bg--white pt-200 pt-100-mob">
      <div className="container">
        <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview slidetop new-animate trd02">
          FAQ&apos;s
        </div>
      </div>
      <div className="faq-wrap mt-40 mt-32-mob">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`faq isview slidetop ${openIndex === idx ? "active" : ""}`}
          >
            <div className="container">
              <div className="flex v--start h--between">
                <div className="left">
                  <div className="txt txt--caption-m color--dark-light fw-600">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="center">
                  <div className="txt txt--l question inner-inherit">
                    <div>{faq.question}</div>
                  </div>
                  <div className="answer_wrap">
                    <div className="answer">
                      <div className="txt txt--m">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <button
                    className="btn btn--simple down dark"
                    onClick={() => {
                      setOpenIndex(openIndex === idx ? null : idx);
                      setTimeout(() => {
                        window.dispatchEvent(new Event('resize'));
                        window.dispatchEvent(new Event('scroll'));
                      }, 300);
                    }}
                  >
                    <span className="visible-text">
                      {openIndex === idx ? "Less" : "More"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlogRelated({ currentSlug, relatedPosts }: { currentSlug: string; relatedPosts?: BlogPost[] }) {
  const [related, setRelated] = useState<BlogPost[]>(relatedPosts || []);

  useEffect(() => {
    if (relatedPosts && relatedPosts.length > 0) {
      setRelated(relatedPosts);
    } else {
      const fetchRelated = async () => {
        try {
          const res = await fetch("/api/blogs");
          const json = await res.json();
          if (json.success) {
            const published = json.data.filter((p: BlogPost) => p.status === "published" && p.slug !== currentSlug);
            setRelated(published.slice(0, 2));
          }
        } catch (err) {
          console.error("Error fetching related blogs:", err);
        }
      };
      fetchRelated();
    }
  }, [currentSlug, relatedPosts]);

  if (related.length === 0) return null;

  return (
    <section className="screen_insights pt-120 pt-64-mob pb-120 pb-64-mob bg--white">
      <div className="container">
        <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
          More insights
        </div>
        <div className="mw1040 mt-16 title title--xl nobr-mob isview slidetop">
          We have <span>dozens of articles</span> written by our studio. We&apos;re{" "}
          <span>happy to share</span> them with you!
        </div>
        <div className="mt-80">
          <div className="grid col-2 col-1-mob gap-40">
            {related.map((post) => (
              <div key={post.id} className="article_card isview slidetop">
                <Link
                  href={`/blog/${post.slug}`}
                  className="img-wrap ov-hidden radius-16 view"
                >
                  <img src={post.coverImage} alt={post.title} decoding="async" />
                </Link>
                <div className="article-authors-wrap mt-24">
                  <span className="auth-wrap color--dark">
                    <div className="auth-avatars">
                      <AuthorAvatar name={post.author.name} avatar={post.author.avatar} />
                    </div>
                    <span className="auth-name txt--caption-m fw-600">
                      {post.author.name}
                    </span>
                  </span>
                  <div className="details flex v--center h--start uppercase mt-12-mob">
                    <span className="txt txt--caption-m color--dark-secondary fw-600">
                      {post.date}
                    </span>
                    <span className="txt txt--caption-m color--dark-secondary fw-600">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <div className="name-wrap mt-16">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="name title article_card-title color--dark"
                  >
                    {post.title}
                  </Link>
                </div>
                <div className="txt txt--s mt-12">
                  <p>{post.summary}</p>
                </div>
                <div className="separator"></div>
                <div className="tags flex f--start h--start h--wrap gap-8 mt-20 pt-20">
                  {post.tags.map((tag, tIdx) => (
                    <Link
                      key={tIdx}
                      href={`/insights?tag=${tag.id}`}
                      className="tag tag--light"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import ContactForm from "./ContactForm";

export default function BlogArticle({ post, relatedPosts }: { post: BlogPost; relatedPosts?: BlogPost[] }) {
  return (
    <>
      <main>
        <BlogHero post={post} />
        <BlogContent post={post} />
        <BlogCTA />
        <BlogFAQ faqs={post.faqs} />
        <BlogRelated currentSlug={post.slug} relatedPosts={relatedPosts} />
      </main>
      <ContactForm />
    </>
  );
}
