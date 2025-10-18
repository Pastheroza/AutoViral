<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

**Live App:** https://app.viral.biaz.hurated.com

View your app in AI Studio: https://ai.studio/apps/drive/1KIsiGknH_fDaDzWVG0YEFSHHdNPDhasK

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## API Integration

The app is integrated with the live AutoViral API at `https://viral.biaz.hurated.com` which provides:

- Real-time trending hashtags
- Engagement metrics and velocity data
- Post counts and growth percentages
- Platform source information (Instagram, X, Reddit)

## Docker Deployment

The app is containerized and running on port 6000:

```bash
docker compose up --build -d
```
