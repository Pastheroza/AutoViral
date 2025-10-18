# API Requirements for Enhanced Trend Display

This document outlines the API enhancements needed for `viral.biaz.hurated.com` to provide rich, visual trend data for the AutoViral frontend app.

## Current API Structure (Working)

```json
{
  "keyword": "#TechNews2025",
  "source": "instagram", 
  "score": 88,
  "metadata": {
    "postCount": 8500,
    "engagement": "very-high",
    "velocity": "very-fast",
    "recentPosts": 890,
    "hashtags": ["#Tech", "#News", "#2025"]
  }
}
```

## Enhanced Requirements for Rich Display

### 1. Media Content

Add visual content to make trends more engaging:

```json
{
  "media": {
    "thumbnailUrl": "https://example.com/thumb.jpg",
    "videoUrl": "https://example.com/video.mp4",
    "imageUrls": ["url1", "url2", "url3"]
  }
}
```

**Benefits:**
- Replaces placeholder images with real content
- Shows actual trend visuals
- Increases user engagement

### 2. Example Posts

Provide real posts using the trend:

```json
{
  "examplePosts": [
    {
      "id": "post123",
      "creator": "@username",
      "thumbnailUrl": "https://example.com/post1.jpg",
      "postUrl": "https://instagram.com/p/ABC123/",
      "likes": 15000,
      "views": 250000,
      "caption": "Short preview text..."
    }
  ]
}
```

**Benefits:**
- Shows real creators using the trend
- Provides clickable links to actual posts
- Demonstrates trend implementation

### 3. Enhanced Metadata

Expand analytics for better insights:

```json
{
  "metadata": {
    "postCount": 8500,
    "engagement": "very-high",
    "velocity": "very-fast",
    "recentPosts": 890,
    "hashtags": ["#Tech", "#News"],
    "avgLikes": 12500,
    "avgViews": 180000,
    "topCreators": ["@user1", "@user2"],
    "peakHours": ["18:00", "20:00"],
    "demographics": {
      "ageGroups": {"18-24": 45, "25-34": 35},
      "genders": {"male": 52, "female": 48}
    }
  }
}
```

**Benefits:**
- Better trend analysis
- Audience insights
- Optimal posting times

### 4. Trend Analysis

Add AI-powered content strategy:

```json
{
  "analysis": {
    "category": "technology",
    "difficulty": "easy",
    "equipment": ["smartphone", "ring light"],
    "duration": "15-30s",
    "bestTimes": ["evening", "weekend"],
    "aiSummary": "This trend works because..."
  }
}
```

**Benefits:**
- Content creation guidance
- Equipment recommendations
- Success predictions

### 5. Platform-Specific Data

Multi-platform trend tracking:

```json
{
  "platformData": {
    "instagram": {
      "hashtagUrl": "https://instagram.com/explore/tags/technews2025/",
      "postCount": 5000,
      "avgEngagement": 8.5
    },
    "tiktok": {
      "hashtagUrl": "https://tiktok.com/@hashtag/technews2025",
      "postCount": 3500,
      "avgEngagement": 12.3
    }
  }
}
```

**Benefits:**
- Direct platform links
- Cross-platform comparison
- Platform-specific metrics

## Implementation Priority

### Phase 1: Quick Wins (High Impact, Low Effort)
1. **Media URLs** - Add `thumbnailUrl` field
2. **Example Posts** - Basic creator and post URL data
3. **Platform Links** - Direct hashtag URLs

### Phase 2: Enhanced Analytics
4. **Enhanced Metadata** - Average engagement, top creators
5. **Demographics** - Age and gender data
6. **Peak Times** - Optimal posting schedules

### Phase 3: AI Features
7. **Trend Analysis** - AI-powered insights
8. **Content Strategy** - Equipment and difficulty ratings
9. **Predictions** - Success probability scoring

## Minimal Enhancement (Immediate Implementation)

For immediate visual improvement, add just these 2 fields:

```json
{
  "thumbnailUrl": "https://example.com/image.jpg",
  "examplePosts": [
    {
      "creator": "@username", 
      "thumbnailUrl": "https://example.com/post.jpg",
      "postUrl": "https://instagram.com/p/ABC123/"
    }
  ]
}
```

## API Endpoints to Enhance

- `GET /trends` - Add media and example posts to trend list
- `GET /trends/:id` - Full detailed view with all enhancements
- `GET /trends/:id/posts` - Dedicated endpoint for example posts (optional)

## Expected Frontend Improvements

With these enhancements, the frontend will display:
- ✅ Real trend images instead of placeholders
- ✅ Clickable links to actual trending posts
- ✅ Creator profiles and engagement metrics
- ✅ Platform-specific trend data
- ✅ AI-powered content recommendations
- ✅ Audience demographics and optimal timing

This will transform the app from a basic trend viewer into a comprehensive content strategy tool.
