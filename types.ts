// types.ts

/**
 * @interface ExampleVideo
 * @description Defines the structure for a single example video within a trend.
 * Used in the expanded content view.
 */
export interface ExampleVideo {
  /** A unique identifier for the video. */
  id: number;
  /** The name of the creator who posted the video. */
  creator: string;
  /** The URL for the video's thumbnail image. */
  thumbnailUrl: string;
}

/**
 * @interface TrendingFactor
 * @description Defines the structure for the key statistics of a trend.
 */
export interface TrendingFactor {
  /** How many days have passed since the trend started gaining traction. */
  daysPassed: string;
  /** The total number of views the trend has accumulated. */
  totalViews: string;
  /** The date when the trend was first observed. */
  firstSeen: string;
  /** The percentage increase in trend velocity over a recent period. */
  growthPercentage: number;
}

/**
 * @interface DetailedAnalysis
 * @description Defines the structure for the in-depth analysis of a trend, shown in the modal.
 */
export interface DetailedAnalysis {
  /** A detailed explanation of what the trend is about. */
  about: string;
  /** A description of the primary audience for this trend. */
  audience: string;
  /** An assessment of how easily the trend can be adapted to different niches or content types. */
  versatility: string;
}

/**
 * @interface TrendData
 * @description Represents the complete data structure for a single trend slide.
 */
export interface TrendData {
  /** A unique identifier for the trend. */
  id: number;
  /** The main title of the trend. */
  title: string;
  /** The URL for the background image or video thumbnail of the trend. */
  imageUrl: string;
  /** An array of example videos related to the trend. */
  exampleVideos: ExampleVideo[];
  /** An object containing the key statistics for the trend. */
  trendingFactor: TrendingFactor;
  /** An object containing a brief summary and tag for the trend analysis. */
  analysis: {
    tag: string;
    tagColor: string;
    summary: string;
  };
  /** An object containing the detailed, in-depth analysis of the trend. */
  detailedAnalysis: DetailedAnalysis;
}