import React from 'react';

const PortfolioPiece = (props) => {
  return (
    <div className="portfolio-piece">
      <h3>{props.title}</h3>

      <div className="">
        <a href={props.siteURL} target="_blank">
          <img className="piece" src={props.imgSrc1} alt={props.imgAlt1} />
        </a>
      </div>

      <div className="piece-text">
        <p className="piece-title">Overview</p>
        <p>{props.pieceText}</p>

        <p className="tech">Technologies</p>
        <p>{props.tech}</p>

        <a href={props.siteURL} target="_blank">
          <ion-icon className="see-more" name="exit-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default PortfolioPiece;
