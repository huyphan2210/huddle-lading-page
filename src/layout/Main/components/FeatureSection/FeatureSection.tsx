import { FC } from "react";
import "./FeatureSection.scss";
import Feature from "./components/Feature/Feature";
import growTogetherImg from "../../../../assets/images/illustration-grow-together.svg";
import flowingConversationImg from "../../../../assets/images/illustration-flowing-conversation.svg";
import yourUsersImg from "../../../../assets/images/illustration-your-users.svg";

const features = [
  {
    featureImage: (
      <img src={growTogetherImg} loading="lazy" title="Grow Together" />
    ),
    featureTitle: "Grow Together",
    featureContent:
      "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
  },
  {
    featureImage: (
      <img
        src={flowingConversationImg}
        loading="lazy"
        title="Flowing Conversations"
      />
    ),
    featureTitle: "Flowing Conversations",
    featureContent:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
  },
  {
    featureImage: <img src={yourUsersImg} loading="lazy" title="Your Users" />,
    featureTitle: "Your Users",
    featureContent:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
  },
];

const FeatureSection: FC = () => {
  return (
    <section className="feature-section">
      {features.map(({ featureImage, featureTitle, featureContent }, index) => (
        <Feature
          featureImage={featureImage}
          featureTitle={featureTitle}
          featureContent={featureContent}
          isReversed={index % 2 !== 0}
        />
      ))}
    </section>
  );
};

export default FeatureSection;
