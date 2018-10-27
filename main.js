$(document).ready(function() {
var inputTerm;
var inputStartYear1;
var inputEndYear1;
var noOfRecord;

$("#search").on("click", function(){
    inputTerm = $("#inputterm").val().trim();
    inputStartYear1 = $("#inputstartyear").val().trim();
    inputEndYear1 = $("#inputendyear").val().trim();
    noOfRecord = parseFloat($("#limit").val().trim());
console.log(inputEndYear1+" "+inputStartYear1+" "+inputTerm+" "+noOfRecord)
//  NYTimes search API
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "24778e6dc7a245e484e24d080235ddb0",
    'q': inputTerm,
    'begin_date': inputStartYear1+"0101",
    'end_date': inputEndYear1+"1231",
    'sort': "newest",
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
    var result = result.response.docs;
    var title = [];
    var summary = [];
    var articleURL= [];
    var articleDate = [];
    for(var i = 0; i<noOfRecord;i++){
        if (result[i]!==null) {
            title.push(result[i].headline.main)
            summary.push(result[i].snippet)
            articleURL.push(result[i].web_url)
            articleDate.push(result[i].pub_date.substring(0,10))
        }
    }
    console.log(title.length)

    //     var articleRow = $("<div>")
    //     articleRow.addClass("article-row")
    //     var artTitle = $("<p>")
    //     artTitle.addClass("title")
    //     var artDate = $("<p>")
    //     artDate.addClass("article-date")
    //     var artSum = $("<p>")
    //     artSum.addClass("summary")    
    //     var moreLink = $("<a>")
    //     moreLink.attr("target","_blank")
    //     moreLink.text(" More...")

    // for(var i=0;i<title.length;i++){
    //     artTitle.text(title[i])
    //     artDate.text(articleDate[i])
    //     artSum.text(summary[i])
    //     moreLink.attr("href",articleURL[i])
    //     artSum.append(moreLink)
    //     articleRow.empty()
    //     articleRow.append(artTitle, artDate, artSum)
    //     console.log("row "+i+ articleRow)
    //     $("#article-container").append(articleRow);
    //     console.log("this is "+i+JSON.stringify($("#article-container")))
    // }

    // The attempt above not works, and I don't know why
    var articleRow = "";
    for (var i=0;i<title.length;i++){
        articleRow = "<div class=article-row>"+
            "<p class = title>"+ title[i] +"</p>"+
            "<p class = article-date>"+ articleDate[i] +"</p>"+
            "<p class = summary>"+ summary[i] +
            "<a target='_blank' href='"+articleURL[i]+"'> More...</a></p></div";
        console.log(articleRow)
        $("#article-container").append(articleRow);
    }
}).fail(function(err) {
  throw err;
});

// End of ajax
})
$("#clear").on("click", function(){
    $("#article-container").empty()
})

// ------------------------------

})