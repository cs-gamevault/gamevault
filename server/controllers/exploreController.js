const exploreController = {};

exploreController.getGames = async function (req, res, next) {
  try {
    console.log('BACKEBD~');
    //  Post request to https://api.igdb.com/v4/games
    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer bnxh57j38l0ajghrmgyfr0v6wx2bwv',
        'Client-ID': 'ilmkklkvixb7dc390746kro9b6wsap',
      },
      body: 'fields name, genres.name, summary, platforms.name, cover.url ; limit 20;',
    });

    const data = await response.json();
    console.log(' ');
    console.log(' ');
    console.log(' ');
    console.log(' ');
    console.log('Ayooooo');
    console.log(data);
    //  Store data in res.locals.data
    res.locals.data = data;

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = exploreController;
