import React from "react";
import "./all.css";

const NewsItem = (props) => {
  let { title, description, imgurl, newsurl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span className="badge bg-dark">Souce: {source}</span>
        <img src={imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            href={newsurl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm"
            style={{backgroundColor: "#2c3333", color:"white"}}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
