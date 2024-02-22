import { FC } from "react";
import "./Feature.scss";

export interface FeatureProps {
  featureImage: JSX.Element;
  featureTitle: string;
  featureContent: string;
  isReversed: boolean;
}

const Feature: FC<FeatureProps> = ({
  featureImage,
  featureTitle,
  featureContent,
  isReversed,
}) => {
  return (
    <div className={isReversed ? "feature reversed" : "feature"}>
      <div className="feature__img">{featureImage}</div>
      <div className="feature__text">
        <h2>{featureTitle}</h2>
        <p>{featureContent}</p>
      </div>
    </div>
  );
};

export default Feature;
