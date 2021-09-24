module.exports = ({ emailFrom, downloadLink, size, expires }) => {
  return `<html>
  <head>
  <title> Simple Transactional Email </title>
  </head>
  <body>
    <h2>email sent from ${emailFrom} </h2>
    <p>expires in ${expires} </p>
    <p> Size: ${size} </p>
    Download here  <a href="${downloadLink}"> ${downloadLink} </a>
  </body>
  </html>`;
};
