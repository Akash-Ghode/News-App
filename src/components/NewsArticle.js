import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <a href={data.url}><h1 className="news__title">{data.title}</h1></a>
      <img src={data.urlToImage} alt="no imge" />
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}
export default NewsArticle;
