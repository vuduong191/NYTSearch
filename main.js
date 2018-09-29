$(document).ready(function() {
// Hi Omar, assuming you have these input below. Here I created variables with predefined values, just for you to test your codes. It's my job with JS to generate these for you
var inputTerm = "tesla"
var inputStartYear1 = "2010"
var inputEndYear1 = "2018"
// @Omar, your codes go between these two lines
// ------------------------------


// ------------------------------
// And this is what I need from you, aka your output. Here I created some arrays with predefined values, just for me to check my pieces.
var thumbnail = [
    "https://static01.nyt.com/images/2018/08/17/business/17MUSK1/17MU-thumbWide.jpg",
    "https://static01.nyt.com/images/2018/08/17/business/17MUSK1/17MU-thumbWide.jpg",
    "https://static01.nyt.com/images/2018/08/17/business/17MUSK1/17MU-thumbWide.jpg"
]
var title = ["Congress, Look at Tesla","Congress, Look at Tesla","Congress, Look at Tesla"]
var summary = [
    "Why can’t Republicans in Congress react like the Tesla board of directors to impulsive and irrational tweets?",
    "Why can’t Republicans in Congress react like the Tesla board of directors to impulsive and irrational tweets?",
    "Why can’t Republicans in Congress react like the Tesla board of directors to impulsive and irrational tweets?"        
]
var articleURL = [
    "https://www.nytimes.com/2018/08/17/opinion/letters/tesla-musk-trump.html",
    "https://www.nytimes.com/2018/08/17/opinion/letters/tesla-musk-trump.html",
    "https://www.nytimes.com/2018/08/17/opinion/letters/tesla-musk-trump.html"
]
var articleDate = ["2018-08-17","2018-08-17","2018-08-17"]
// My code will go between these lines.
// ------------------------------
    var articleRow = $("<div>")
    articleRow.addClass("article-row")
    var artTitle = $("<p>")
    artTitle.addClass("title")
    var artDate = $("<p>")
    artDate.addClass("article-date")
    var artSum = $("<p>")
    artSum.addClass("summary")    
    var artIMG = $("<img>")
    artIMG.addClass("thumbnail")
    var moreLink = $("<a>")
    moreLink.attr("target","_blank")
    moreLink.text("More...")
for(var i=0;i<thumbnail.length;i++){
    artTitle.text(title[i])
    artDate.text(articleDate[i])
    artSum.text(summary[i])
    artIMG.attr("src",thumbnail[i])
    moreLink.attr("href",articleURL[i])
    artSum.append(moreLink)
    $(".article-row").append(artTitle, artDate, artIMG,artSum)

}

// ------------------------------

})