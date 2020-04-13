let visibility = new Map();
visibility.set('UN', {'$':'Unknown','f':'???'});
visibility.set('VP', {'$':'Very poor - Less than 1 km','f':'<1'});
visibility.set('PO', {'$':'Poor - Between 1-4 km','f':'1-4'});
visibility.set('MO', {'$':'Moderate - Between 4-10 km','f':'4-10'});
visibility.set('GO', {'$':'Good - Between 10-20 km','f':'10-20'});
visibility.set('VG', {'$':'Very good - Between 20-40 km','f':'20-40'});
visibility.set('EX', {'$':'Excellent - More than 40 km','f':'>40'});