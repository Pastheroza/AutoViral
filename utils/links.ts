// Utility functions for generating platform links

export const generateHashtagLink = (hashtag: string, platform: string = 'instagram'): string => {
  const cleanHashtag = hashtag.replace('#', '');
  
  switch (platform.toLowerCase()) {
    case 'instagram':
      return `https://www.instagram.com/explore/tags/${cleanHashtag}/`;
    case 'x':
    case 'twitter':
      return `https://x.com/search?q=${encodeURIComponent(hashtag)}`;
    case 'tiktok':
      return `https://www.tiktok.com/tag/${cleanHashtag}`;
    case 'reddit':
      return `https://www.reddit.com/search/?q=${encodeURIComponent(hashtag)}`;
    default:
      return `https://www.google.com/search?q=${encodeURIComponent(hashtag)}`;
  }
};

export const generateCreatorLink = (creator: string, platform: string = 'instagram'): string => {
  const cleanCreator = creator.replace('@', '');
  
  switch (platform.toLowerCase()) {
    case 'instagram':
      return `https://www.instagram.com/${cleanCreator}/`;
    case 'x':
    case 'twitter':
      return `https://x.com/${cleanCreator}`;
    case 'tiktok':
      return `https://www.tiktok.com/@${cleanCreator}`;
    case 'reddit':
      return `https://www.reddit.com/user/${cleanCreator}`;
    default:
      return `https://www.google.com/search?q=${encodeURIComponent(creator)}`;
  }
};
