// async function popDB (html) {

//    await puppeteer
//     .launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
//     .then(function (browser) {
//         return browser.newPage();
//     })
//     .then(function (page) {
//         return page.goto(url).then(function () {
//             return page.content();
//         });
//     })
//     .then(function (html) {

//         $('.excerpt', html).each(function () {
//             let result = {};

//             result.title = $(this).children('.title').text();
//             result.link = "https://hackernoon.com" + $(this).children('.title').children('a').attr('href');

//             Article.create(result)
//                 .then(function (dbArticle) {
//                     console.log(dbArticle);
//                 })
//                 .catch(function (err) {
//                     console.log(err);
//                 });
//         })
//     })

//     return "db populated"
// }
