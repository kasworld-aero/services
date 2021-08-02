$('document').ready(function() {
  $.getJSON("https://spreadsheets.google.com/feeds/list/1uT8y69qqzCxdHjh7_nR-41wwLAdnT2SUWYDJ8RyP6Hg/1/public/values?alt=json", function(data) {
    //start each
    var entry = data.feed.entry[Math.floor(Math.random() * data.feed.entry.length)]; 
    $('#kasads').html('<div class="bc-banner text-center" style="background-image: url('+ entry.gsx$bgimg.$t +');background-position: center center;background-size: 100% auto;"><a href="https://adsforexchange.blogspot.com/"><img src="https://s.clipartkey.com/mpngs/s/103-1030941_info-icon-blue-png-clipart-png-download-info.png" alt="Ads For Exchange" class="bc-info"/> </a><a href="' + entry.gsx$url.$t +'"> <div class="bc-banner-body"> <h2 style="color:'+ entry.gsx$txtcolor.$t +';">'+ entry.gsx$htxt.$t +'</h'+'2>  <p style="color:'+ entry.gsx$txtcolor.$t +';">'+ entry.gsx$ptxt.$t +'</p>  <center><span class="bc-btn" style="background: '+ entry.gsx$btnbgcolor.$t +';"><h3 style="color:'+ entry.gsx$btntxtcolor.$t +'">'+ entry.gsx$btntxt.$t +'</h3></span></cen'+'ter> </di'+'v> </d'+'iv></a>'); 
  });
});
document.write('<link rel="stylesheet" type="text/css" href="https://kasworld-aero.github.io/old/virus/rads/new-min.css">');
