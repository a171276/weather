firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

db.collection("readings").doc("TempsAndHums").collection("Greenhouse").orderBy("datetime", "desc").limit(3)
.onSnapshot(function(data) {
    var readings = [];
    data.forEach(function(doc) {
        readings.push(doc.data());
    });
    render("greenhouse", readings, "Greenhouse")
    //console.log(readings);
});

db.collection("readings").doc("TempsAndHums").collection("Outside").orderBy("datetime", "desc").limit(3)
.onSnapshot(function(data) {
    var readings = [];
    data.forEach(function(doc) {
        readings.push(doc.data());
    });
    render("outside", readings, "Outside")
    //console.log(readings);
});

let render = function(id, col, name) {
    var n = 0;
    var ret = "";
    ret +=  "<h1>"+name+"</h1>";
    col.forEach(e => {
        n++;
        d = moment(e.datetime).format("dddd MMMM Do"); 
        t = e.datetime.substr(11,5);
        ret += "<div class='holder n"+n+"'>";
        ret += "<span class='temphum'>";
        ret += " 🌡 " + e.temperature + "°  ☔ " + e.humidity + "%";
        ret += "</span><br />";
        ret += "<span class='datetime'>";
        ret += " ⌚ " + t + " 📆 " + d;
        ret += "</span>";
        ret += "</div>";
    });
    document.getElementById(id).innerHTML = ret;
}

