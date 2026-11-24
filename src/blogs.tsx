
import { useState } from 'react'
import { blogs } from './blogData'

export default function Blogs() {
  const [activeBlog, setActiveBlog] =
    useState<number | null>(null)

  const selectedBlog = blogs.find(
    (blog) => blog.id === activeBlog
  )

  return (
    <section className="blogs-section" id="blogs">
      <div className="section-heading">
        <span className="section-label">
          KNOWLEDGE & INSIGHTS
        </span>

        <h2>
          Latest Blogs &
          <span> Industry Insights</span>
        </h2>

        <p>
          Explore recycling technologies, environmental
          regulations and sustainable business opportunities.
        </p>
      </div>

      {selectedBlog ? (
        <article className="blog-article">
          <button
            type="button"
            className="blog-back"
            onClick={() => setActiveBlog(null)}
          >
            ← Back to All Blogs
          </button>

          <div className="blog-meta">
            {selectedBlog.category} · {selectedBlog.date}
          </div>

          <h2>{selectedBlog.title}</h2>

          <p className="blog-lead">
            {selectedBlog.description}
          </p>

          {selectedBlog.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <a href="#contact" className="primary-button">
            Get Expert Consultation →
          </a>
        </article>
      ) : (
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <article className="blog-card" key={blog.id}>
              <div className="blog-card-visual">
                <span>{blog.category}</span>
              </div>

              <div className="blog-card-body">
                <div className="blog-meta">
                  {blog.date} · {blog.readTime}
                </div>

                <h3>{blog.title}</h3>
                <p>{blog.description}</p>

                <button
                  type="button"
                  className="blog-read-more"
                  onClick={() => setActiveBlog(blog.id)}
                >
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
