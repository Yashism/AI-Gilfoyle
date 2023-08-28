# AI-Gilfoyle

**Description:**
Inspired by Gilfoyle's AI Chatbot from Silicon Valley, this project is a Node.js application that integrates the WhatsApp Web API with the power of OpenAI's GPT-3.5 Turbo model to create a chatbot capable of generating AI-powered responses with a unique character.
It currently replies to all the messages that are sent to you. Working on it to make it only contact specific. 

**Installation Instructions:**
1. Clone the repository: `git clone https://github.com/Yashism/AI-Gilfoyle`
2. Navigate to the project directory: `AI-Gilfoyle`
3. Install dependencies: `npm install`
4. Create a `.env` file and add your OpenAI API key: `OPENAI_API_KEY=your-api-key`
5. Run the application: `node index.js`

**Use Instructions:**
1. After running the application, it will prompt you to scan a QR code to authenticate with your WhatsApp account. Use a WhatsApp QR code scanner from your phone to complete the authentication process.
2. Once authenticated, the chatbot will monitor incoming messages.
3. Send a message to the chatbot, and it will respond with AI-generated messages that mimic the style of AI-Gilfoyle, containing roasts, mean language, and casual responses.

**Contribution Instructions:**
Let's take this to another level. If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m "Description of changes"`
4. Push your changes to your forked repository: `git push origin feature-name`
5. Create a pull request on the original repository for review.

**Project Contents and File Structure:**
- `index.js`: The main script file that integrates WhatsApp Web API, OpenAI GPT-3.5 Turbo model, and event listeners for message handling.
- `package.json`: Contains project metadata and dependencies.
- `node_modules/`: Directory containing installed Node.js modules.
- `.env.example`: An example environment variables file. Rename it to `.env` and add your OpenAI API key.
- `README.md`: Documentation for the project.
