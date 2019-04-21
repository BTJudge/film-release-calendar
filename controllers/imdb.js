const rp = require('request-promise');
const cheerio = require('cheerio');
const schedule = require('node-schedule');

const imdb = {
    imdbData: [],
    loading: 'empty',
    getData: function() {
        this.loading = 'loading';
        this.loadingCount = 0;
        rp('https://www.imdb.com/calendar?region=GB&ref_=rlm')
            .then((html) => {
                this.imdbData = [];
                const $ = cheerio.load(html);
                $('#main').find('h4').each(function() {
                    let filmDateString = $(this).text();
                    let filmDate = Date.parse($(this).text());
                    $(this).next().find('li').each(function() {
                        let baseURL = 'https://www.imdb.com';
                        let filmTitle = $(this).children().text();
                        let filmLink = $(this).children().attr('href');
                        let filmImage = '/images/favicon/android-chrome-512x512.png';

                        // Create dates for Google Calendar links
                        // Release day
                        let date = new Date(filmDate);
                        let year = date.getFullYear();
                        let month = date.getMonth() + 1;
                        if (month.toString.length === 1) {
                            month = '0' + month;
                        }
                        let day = date.getDate();
                        // Day after
                        let date2 = new Date (date);
                        date2.setDate(date2.getDate() + 1);
                        let year2 = date2.getFullYear();
                        let month2 = date2.getMonth() + 1;
                        if (month2.toString.length === 1) {
                            month2 = '0' + month2;
                        }
                        let day2 = date2.getDate();

                        //Create Film Object
                        let filmObject = {
                            filmTitle: filmTitle,
                            filmLink: baseURL + filmLink,
                            filmDate: filmDate,
                            filmDateString: filmDateString,
                            filmImage: filmImage,
                            filmCalendarLink: 'https://calendar.google.com/calendar/r/eventedit?text=' + filmTitle + '&dates=' + year + month + day + '/' + year2 + month2 + day2 +'&details=' + baseURL + filmLink
                        };
                        imdb.imdbData.push(filmObject);
                    });

                });
            })
            .then(() => {
                this.getImages();
            })
            .then(() => {
                this.loading = 'done';
            })
            .catch((err) => {
                console.log(err);
            });
    },
    getImages: function () {
        this.imdbData.forEach(function(element){
            rp(element.filmLink)
                .then((html) => {
                    const $ = cheerio.load(html);
                    const posterElement = $('.poster').children().children();
                    let filmImage = posterElement.attr('src');
                    if (posterElement.length > 0) {
                        element.filmImage = filmImage;
                    }
                });
        });
    }
};

schedule.scheduleJob('0 * * *', function(){
    imdb.getData();
});

module.exports = imdb;