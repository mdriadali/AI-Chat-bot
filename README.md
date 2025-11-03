# AI Chat Bot

A backend service for handling chat interactions using Express.js, Mongoose, and Google's Gemini API. This project implements a powerful chatbot system with natural language processing capabilities powered by Gemini AI.

## Technologies Used

- **Express.js** - Fast, unopinionated web framework for Node.js
- **Mongoose** - MongoDB object modeling tool
- **Gemini API** - Google's advanced language model for AI interactions
- **Node.js** - JavaScript runtime environment

## Project Structure

```
├── index.js            # Main application entry point
├── model/
│   └── chatSchema.js   # Database schema for chat messages
├── utils/
│   ├── ChatBotApi.js   # API integration for chat functionality
│   ├── chats.js        # Chat management utilities
│   ├── database.js     # Database connection and configuration
│   └── StartServer.js  # Server initialization utilities
```

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager
- MongoDB (for database)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mdriadali/AI-Chat-bot.git
- Node.js (v18 or higher)
- npm (v8 or higher) or yarn package manager
- MongoDB (v4.4 or higher)
- Google Cloud account with Gemini API access
- API key for Gemini AI

## Technologies Used

- **Express.js** - Fast, unopinionated web framework for Node.js
- **Mongoose** - MongoDB object modeling tool
- **Gemini API** - Google's advanced language model for AI interactions
- **Node.js** - JavaScript runtime environment
2. Install dependencies:
```bash
npm install
```

- Node.js (v18 or higher)
- npm (v8 or higher) or yarn package manager
3. Create a `.env` file in the root directory:
```env
PORT=port_number
DATABASE_URL=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```
- Google Cloud account with Gemini API access
- API key for Gemini AI
```bash
npm start
```

## Features

- Real-time chat functionality
- AI-powered responses using Gemini API
- Intelligent conversation handling
- Message history storage with MongoDB
- RESTful API endpoints with Express.js
- Structured data modeling with Mongoose
- Environment-based configuration
- Error handling

## API Documentation

### Endpoints

```
POST /api/chat
- Send a message to the chatbot
- Request body: { "id":"00","msg":"your massage"}
- Response: { "answer": "AI generated response" }



## Environment Variables

- `PORT`: Server port number (default: 4000)
- `MONGODB_URI`: MongoDB connection string
- `GEMINI_API_KEY`: Google Gemini API key


Details about the available API endpoints and their usage will be documented here.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)

## License

- Express.js community
- Mongoose documentation
- Google Gemini API team
- MongoDB team
- Contributors and testers
## Author

- **mdriadali**

## Acknowledgments

- List any third-party services or libraries used
- Credits to contributors and inspiration sources
