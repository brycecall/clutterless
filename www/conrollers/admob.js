document.addEventListener('deviceready', function () {
    var admobid = {};
    
    if (/(android)/i.test(navigator.userAgent)) { // for android & amazon-fireos
        admobid = {
            banner: 'ca-app-pub-8941304934472173/7626081274'
        };
    } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
        admobid = {
            banner: 'ca-app-pub-8941304934472173/7474743270'
        };
    }

    if (AdMob) AdMob.createBanner({
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        autoShow: true,
        overlap: true
    });

    console.log("AdMob Ready");
}, false);
