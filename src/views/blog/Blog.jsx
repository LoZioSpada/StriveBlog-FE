import React, { useEffect, useState } from "react";
import { Container, Image, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor";
import BlogLike from "../../components/likes/BlogLike";
import posts from "../../data/posts.json";
import "./styles.css";


const Blog = props => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await fetch(`http://localhost:3030/api/blogPosts/${id}`)

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      const data = await response.json()
      setBlog(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPost()
  }, []);

  return loading ? (
    <div className="d-flex mt-5">
      <Spinner animation="border" variant="primary" className="mx-auto" />
    </div>
  ) : (
    <div className="blog-details-root">
      <Container>
        <Image className="blog-details-cover" src={blog.cover} fluid />
        <h1 className="blog-details-title">{blog.title}</h1>

        <div className="blog-details-container">
          <div className="blog-details-author">
            <BlogAuthor {...blog.author} />
          </div>
          <div className="blog-details-info">
            <div>{blog.createdAt}</div>
            <div>{`lettura da ${blog.readTime.value} ${blog.readTime.unit}`}</div>
            <div
              style={{
                marginTop: 20,
              }}
            >
              <BlogLike defaultLikes={["123"]} onChange={console.log} />
            </div>
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        ></div>
      </Container>
    </div>
  );
}


export default Blog;
