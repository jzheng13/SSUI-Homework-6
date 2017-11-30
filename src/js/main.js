var mecury_path = anime.path('#mecury-orbit');

var mecuryPath = anime({
    targets: '#mecury',
    translateX: mecury_path('x'),
    translateY: mecury_path('y'),
    rotate: mecury_path('angle'),   
    duration: 1000,
    loop: true,
    easing: 'linear'
});

var venus_path = anime.path('#venus-orbit');

var venusPath = anime({
    targets: '#venus',
    translateX: venus_path('x'),
    translateY: venus_path('y'),
    rotate: venus_path('angle'),
    easing: 'linear',
    duration: 3000,
    loop: true
});

var earth_path = anime.path('#earth-orbit');

var earthPath = anime({
    targets: '#earth',
    translateX: earth_path('x'),
    translateY: earth_path('y'),
    rotate: earth_path('angle'),
    easing: 'linear',
    duration: 5000,
    loop: true
});

var mars_path = anime.path('#mars-orbit');

var marsPath = anime({
    targets: '#mars',
    translateX: mars_path('x'),
    translateY: mars_path('y'),
    rotate: mars_path('angle'),
    easing: 'linear',
    duration: 9500,
    loop: true
});

var jupiter_path = anime.path('#jupiter-orbit');

var jupiterPath = anime({
    targets: '#jupiter',
    translateX: jupiter_path('x'),
    translateY: jupiter_path('y'),
    rotate: jupiter_path('angle'),
    easing: 'linear',
    duration: 59500,
    loop: true
});

var saturn_path = anime.path('#saturn-orbit');

var saturnPath = anime({
    targets: '#saturn',
    translateX: saturn_path('x'),
    translateY: saturn_path('y'),
    rotate: saturn_path('angle'),
    easing: 'linear',
    duration: 147500,
    loop: true
});

var uranus_path = anime.path('#uranus-orbit');

var uranusPath = anime({
    targets: '#uranus',
    translateX: uranus_path('x'),
    translateY: uranus_path('y'),
    rotate: uranus_path('angle'),
    easing: 'linear',
    duration: 480000,
    loop: true
});

var neptune_path = anime.path('#neptune-orbit');

var neptunePath = anime({
    targets: '#neptune',
    translateX: neptune_path('x'),
    translateY: neptune_path('y'),
    rotate: neptune_path('angle'),
    easing: 'linear',
    duration: 924000,
    loop: true
});

var pluto_path = anime.path('#pluto-orbit');

var plutoPath = anime({
    targets: '#pluto',
    translateX: pluto_path('x'),
    translateY: pluto_path('y'),
    rotate: pluto_path('angle'),
    easing: 'linear',
    duration: 1240000,
    loop: true
});


