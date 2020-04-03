/* Don't delete this!

//     <qscript src="https://www.gstatic.com/firebasejs/7.13.1/firebase-storage.js"></qscript>


db.collection("readings")
    .doc("TempsAndHums")
    .collection("Greenhouse")
    .orderBy("datetime", "desc")
    .limit(3)
    .get().then(function(data) {
    data.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
*/

        //var storage = firebase.storage();
