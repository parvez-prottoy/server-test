const home = (req, res) => {
  try {
    res.send(`<h1>App server is running...</h1>`);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
const health = (req, res) => {
  try {
    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { home, health };
