import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, url, author, date, source } = props;

  return (
    <div container="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "flex-end",
            right: "0",
          }}
        >
          <span
            className="badge rounded-pill bg-danger"
            style={{ left: "85%", zIndex: 1 }}
          >
            {source}
          </span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://th.bing.com/th/id/R.177c2aa34a39821464a08f108e577d3f?rik=E6on3EJVDGOmSg&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f4707746%2fimages%2fo-BREAKING-NEWS-facebook.jpg&ehk=aOZD%2b3ct2JGBC7gowQvtiafkD2%2fQugxJAKZDR7bzdJw%3d&risl=&pid=ImgRaw&r=0"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
