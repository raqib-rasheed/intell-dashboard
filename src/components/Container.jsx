import ParentFiling from "./patent-filing/PatentFiling";
import SearchPopularity from "./google-search-popularity/SearchPopularity";
import TickerMentions from "./ticker-mentions/TickerMentions";
import JobPosts from "./job-posts/JobPosts";
import BrandSentiment from "./brand-sentiment/BrandSentiment";
import Insights from "./insights/Insights";
import BrandMentions from "./brand-mentions/BrandMentions";
import SeaShipments from "./sea-shipments/SeaShipments";
import SocialMediaFollowers from "./social-media-followers/SocialMediaFoloowers";

export const graphsToDisplay = [
  Insights,
  BrandSentiment,
  ParentFiling,
  SearchPopularity,
  SeaShipments,
  TickerMentions,
  JobPosts,
  BrandMentions,
  SocialMediaFollowers
];
