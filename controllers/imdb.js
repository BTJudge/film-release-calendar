const rp = require('request-promise');
const cheerio = require('cheerio');

const imdb = {
    imdbData: [],
    getData: async function() {
        const html = await rp('https://www.imdb.com/calendar?region=GB&ref_=rlm');
        const htmlData = cheerio('h4', html).map(async (i, e) => {

        });
        return 'There is nothing at the moment';
    }
};

module.exports = imdb;