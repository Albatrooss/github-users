const request = require('request');
const token = process.env.GITHUB_TOKEN;
const rootURL = 'https://api.github.com/';

function index(req, res) {
  const username = req.query.username;
  const options = {
    url: `${rootURL}users/${username}`,
    headers: {
      'User-Agent': 'Albatrooss',
      Authorization: `token ${token}`,
    },
  };
  request(options, (err, response, body) => {
    if (err) console.log(err);
    const userData = JSON.parse(body);
    options.url = userData.repos_url;
    request(options, (err, response2, body) => {
      userData.repos = JSON.parse(body);
      console.log(userData.repos[0]);
      res.render('index', { userData });
    });
  });
}

module.exports = {
  index,
};
