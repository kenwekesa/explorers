// emailTemplate.js
export const emailTemplate =() => `
<html>
  <head>
    <style>
      /* Your styles go here */
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        padding: 20px;
        background-color: #f5f5f5;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      h1 {
        color: #333;
      }

      p {
        color: #555;
      }

      .button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: white;
        background-color: #007bff;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 15px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Devance Tours</h2>
      <p>Your registratin was successful.</p>
      <a href="http://localhost:3000/booked/" class="button">View Details</a>
    </div>
  </body>
</html>
`;