export const emailTemplate = ({ subject, message, action, img }) => `
<html>
  <head>
    <style>
      /* Your styles go here */
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        padding: 20px;
        background-color: #f5f5f5;
        margin: 0;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 40px;
        border-radius: 10px;
        border: 1px solid #333;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }

      h2 {
        color: #007bff;
        text-align: center;
      }

      p {
        color: #333;
        font-size: 18px;
        line-height: 1.8;
      }

      .button {
        display: inline-block;
        padding: 15px 30px;
        font-size: 18px;
        color: white;
        background-color: #007bff;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 25px;
        transition: background-color 0.3s ease-in-out;
      }

      .button:hover {
        background-color: #0056b3;
      }

      .cardsignupone {
        width: 56%;
        margin-top: 2%;
        padding: 10px 30px;
        flex-shrink: 0;
        border-radius: 30px;
        background: #FFF;
        margin-left: 22%;
        margin-right: 22%;
        text-align: center;
      }

      .container img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin-top: 20px;
      }

      .spancolor1 {
        background: var(--Button-Color, linear-gradient(96deg, rgba(127, 226, 80, 0.77) -10.44%, rgba(11, 255, 196, 0.77) 108.53%, rgba(11, 138, 255, 0.77) 108.54%));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 34px;
        font-style: normal;
        font-weight: 800;
        line-height: 40px;
      }

      @media (max-width: 500px) {
        .container {
          padding: 30px;
        }
        .button {
          display: block;
          width: 100%;
          margin-top: 20px;
        }
      }
    </style>
  </head>
  <body class="cardsignupone">
    <div class="container">
      <h2>${subject}</h2>
      <p>${message}</p>
      <p>${action}</p>
      <p>${img}</p>
      <a href=${action} class="button">Learn More About Us</a>
      <img src=${img} alt="Devance Tours Image">
    </div>
  </body>
</html>
`;
