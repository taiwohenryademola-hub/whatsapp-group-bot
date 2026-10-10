const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>WhatsApp Bot Panel</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #101820;
          color: white;
          text-align: center;
          padding: 30px 15px;
        }
        .card {
          max-width: 450px;
          margin: 30px auto;
          padding: 25px;
          background: #1c2a35;
          border-radius: 15px;
        }
        button {
          background: #20c879;
          color: #07140d;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <h1>🤖 WhatsApp Bot Panel</h1>
      <div class="card">
        <h2>Bot Dashboard</h2>
        <p>Project created successfully!</p>
        <p>Bot connection: Not configured</p>
        <button onclick="alert('Your panel is working!')">
          Test Panel
        </button>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Panel running on port ${PORT}`);
});
