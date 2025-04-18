# News Aggregator
Fetches latest news from NewsAPI

What It Does:
Shows top news headlines (US by default)

Lets you search for any news topic

Filter news by categories (Sports, Tech, Business, etc.)

Displays news cards with images, titles, and links

# How to Run It (For Faculty/Testers)
1. Get a Free API Key
Go to NewsAPI.org → Sign up → Get free API key

2. Set Up Project
bash
# 1. Clone project
git clone https://github.com/your-username/news-aggregator.git
cd news-aggregator

# 2. Add API key
VITE_API_KEY=your_api_key_here

# 3. Install dependencies
npm install

# 4. Run locally
npm run dev
→ Open http://localhost:5173

**How It Works (Simple Code Breakdown)**
App.jsx does all the work:

Fetches news on page load

Searches when you type + press Enter

Changes categories when you click buttons

Uses fetch() to get data from NewsAPI

Stores news in articles state variable
