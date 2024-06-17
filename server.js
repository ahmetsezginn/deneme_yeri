const express = require('express');
const app = require('./src/app'); // veya './app'

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
