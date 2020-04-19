import { Component, h } from '@stencil/core';
import blogStructure from '../../assets/blog/list.json';
import { BlogPostInterface } from '../../global/definitions';

@Component({
  tag: 'cb-blog-list',
  styleUrl: 'blog-list.component.css'
})
export class BlogIndex {
  render() {
    return (
      <div class="blog-index">
        {(blogStructure as BlogPostInterface[]).map(post => {
          return (
            <div class="blog-item">
              <div class="post-image-container">
                <img class="post-image" src={post.img} />
              </div>
              <div>
                <stencil-route-link url={post.url} class="post-title">
                  <h2>{post.title}</h2>
                </stencil-route-link>
                <span class="post-meta">
                  <a href="http://twitter.com/chbinzer">
                    <img
                      alt="Author: Christian Binzer"
                      class="post-author-image"
                      src="/assets/img/Christian_Binzer.png"
                    />
                  </a>
                  <a class="post-author-name" href="http://twitter.com/chbinzer">
                    Christian Binzer
                  </a>
                  <span class="post-date">{post.date}</span>
                </span>
                <p>{post.description}</p>
                <stencil-route-link url={post.url} class="read-more">
                  Weiterlesen
                </stencil-route-link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
