// Big Bang
var numberOfParticules = 500;
var duration = 3000;
var midScreenX = window.innerWidth / 2;
var midScreenY = window.innerHeight / 2;
var radius = 2 * Math.sqrt(midScreenX * midScreenX + midScreenY * midScreenY);
var fragment = document.createDocumentFragment();
var wrapper = document.createElement('div');
wrapper.id = 'big-bang';
wrapper.classList.add('wrapper');
fragment.appendChild(wrapper);

for (var i = 0; i < numberOfParticules; i++) {
    var hue = Math.round(360 / numberOfParticules * i);
    var angle = Math.random() * Math.PI * 2;
    var el = document.createElement('div');
    el.classList.add('particule');
    el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
    el.style.width = '1px';
    el.style.height = '1px';
    anime({
        targets: el,
        width: ['1px', '10px'],
        height: ['1px', '10px'],
        left: [midScreenX + 'px', Math.cos(angle) * radius + midScreenX + 'px'],
        top: [midScreenY + 'px', Math.sin(angle) * radius + midScreenY + 'px'],
        delay: (duration / numberOfParticules) * i,
        duration: duration,
        easing: 'easeInExpo',
        loop: false
    });
    wrapper.appendChild(el);
}

document.body.appendChild(fragment);
$(document).ready(function () {
    setTimeout(function () {

        // Remove Big Bang animation particles
        var big_bang = document.getElementById('big-bang');
        big_bang.remove();

        // Add title
        var title = document.createElement('div');
        title.classList.add('subsection');
        var title_text = document.createElement('h1');
        title_text.classList.add('topic');
        title_text.innerHTML = 'The Solar System';
        title.appendChild(title_text);
        var contents = document.getElementById('page-contents');
        contents.prepend(title);

        // Add side navigation
        var side_nav = document.createElement('div');
        side_nav.innerHTML =
            `<a class="menu" href="#"><i class="fa fa-bars"></i></a>
            <nav class="side-nav">
                <ul>
                    <li><a class="side-nav-link" href="#" onClick=pop('mercury')><i class="fa fa-mercury"></i><em>Mercury</em></a></li>
                    <li><a class="side-nav-link" href="#" onClick=pop('venus')><i class="fa fa-venus"></i><em>Venus</em></a></li>
                    <li><a class="side-nav-link" href="#" onClick=pop('earth')><i class="fa fa-earth"></i><em>Earth</em></a></li>
                    <li><a class="side-nav-link" href="#" onClick=pop('mars')><i class="fa fa-mars"></i><em>Mars</em></a></li>
                    <li><a class="side-nav-link" href="#" onClick=pop('jupiter')><i class="fa fa-jupiter"></i><em>Jupiter</em></a></li>
                    <li><a class="side-nav-link" href="#" onClick=pop('saturn')><i class="fa fa-saturn"></i><em>Saturn</em></a></li>
                    <li><a class="side-nav-link" href="#" onClick=pop('uranus')><i class="fa fa-uranus"></i><em>Uranus</em></a></li>
                    <li><a class="side-nav-link" href="#" onClick=pop('neptune')><i class="fa fa-neptune"></i><em>Neptune</em></a></li>
                </ul>
            </div>`
        document.body.prepend(side_nav);

        // Load solar system
        var solar_sys = document.getElementById('solar-sys');
        solar_sys.innerHTML = 
            `<svg id="orbits" width="800" height="800" viewBox="0 0 800 800">

                <circle id="sun" cx="400" cy="400" r="35" fill="gold"></circle>

                <path id="mercury-orbit" fill="none" stroke="white" stroke-width="1"
                    d="M 400, 400
                    m -75, 0
                    a 75, 75 0 1, 1 150, 0
                    a 75, 75 0 1, 1 -150, 0" />

                <path id="venus-orbit" fill="none" stroke="white" stroke-width="1"
                    d="M 400, 400
                    m -100, 0
                    a 100, 100 0 1, 1 200, 0
                    a 100, 100 0 1, 1 -200, 0" />

                <path id="earth-orbit" fill="none" stroke="white" stroke-width="1"
                    d="M 400, 400
                    m -125, 0
                    a 125, 125 0 1, 1 250, 0
                    a 125, 125 0 1, 1 -250, 0" />

                <path id="mars-orbit" fill="none" stroke="white" stroke-width="1"
                    d="M 400, 400
                    m -150, 0
                    a 150, 150 0 1, 1 300, 0
                    a 150, 150 0 1, 1 -300, 0" />

                <path id="jupiter-orbit" fill="none" stroke="white" stroke-width="1"
                    d="M 400, 400
                    m -200, 0
                    a 200, 200 0 1, 1 400, 0
                    a 200, 200 0 1, 1 -400, 0" />

                <path id="saturn-orbit" fill="none" stroke="white" stroke-width="1"
                    d="M 400, 400
                    m -250, 0
                    a 250, 250 0 1, 1 500, 0
                    a 250, 250 0 1, 1 -500, 0" />

                <path id="uranus-orbit" fill="none" stroke="white" stroke-width="1"
                    d="M 400, 400
                    m -275, 0
                    a 275, 275 0 1, 1 550, 0
                    a 275, 275 0 1, 1 -550, 0" />

                <path id="neptune-orbit" fill="none" stroke="white" stroke-width="1"
                    d="M 400, 400
                    m -300, 0
                    a 300, 300 0 1, 1 600, 0
                    a 300, 300 0 1, 1 -600, 0" />
            </svg>

            <div class="planet" id="mercury" onclick=pop('mercury')></div>
            <div class="planet" id="venus" onclick=pop('venus')></div>
            <div class="planet" id="earth" onclick=pop('earth')></div>
            <div class="planet" id="mars" onclick=pop('mars')></div>
            <div class="planet" id="jupiter" onclick=pop('jupiter')></div>
            <div class="planet" id="saturn" onclick=pop('saturn')></div>
            <div class="planet" id="uranus" onclick=pop('uranus')></div>
            <div class="planet" id="neptune" onclick=pop('neptune')></div>

            <div id="mercury-info" class="modal">
                <div class="modal-content">
                    <h2>Mercury</h2>
                    <span class="close" id="mercury-close">&times;</span>
                    <div class="split">
                        <img src="img/mercury.png" alt="NA">
                        <p>Mercury's eccentric orbit takes the small planet as close as 47 million km (29 million miles) and as far as 70 million km (43 million miles) from the sun. If one could stand on the scorching surface of Mercury when it is at its closest point to the sun, the sun would appear more than three times as large as it does when viewed from Earth.</p>
                    </div>
                </div>
            </div>

            <div id="venus-info" class="modal">
                <div class="modal-content">
                    <h2>Venus</h2>
                    <span class="close" id="venus-close">&times;</span>
                    <div class="split">
                        <img src="img/venus.png" alt="NA">
                        <p>Venus is the second planet from the sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus is named for the ancient Roman goddess of love and beauty, the counterpart to the Greek goddess Aphrodite.</p>
                    </div>
                </div>
            </div>

            <div id="earth-info" class="modal">
                <div class="modal-content">
                    <h2>Earth</h2>
                    <span class="close" id="earth-close">&times;</span>
                    <div class="split">
                        <img src="img/earth.png" alt="NA">
                        <p>Earth is the third planet from the sun and the fifth largest in the solar system. Just slightly larger than nearby Venus, Earth is the biggest of the terrestrial planets. Our home planet is the only planet in our solar system known to harbor living things. The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is an English/German word, which simply means the ground.</p>
                    </div>
                </div>
            </div>

            <div id="mars-info" class="modal">
                <div class="modal-content">
                    <h2>Mars</h2>
                    <span class="close" id="mars-close">&times;</span>
                    <div class="split">
                        <img src="img/mars.png" alt="NA">
                        <p>Mars is a cold desert world. It is half the diameter of Earth and has the same amount of dry land. Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons and weather, but its atmosphere is too thin for liquid water to exist for long on the surface. There are signs of ancient floods on Mars, but evidence for water now exists mainly in icy soil and thin clouds.</p>
                    </div>
                </div>
            </div>

            <div id="jupiter-info" class="modal">
                <div class="modal-content">
                    <h2>Jupiter</h2>
                    <span class="close" id="jupiter-close">&times;</span>
                    <div class="split">
                        <img src="img/jupiter.png" alt="NA">
                        <p>Jupiter is the fifth planet from our sun and the largest planet in the solar system. Jupiter's stripes and swirls are cold, windy clouds of ammonia and water. The atmosphere is mostly hydrogen and helium, and its iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years. Jupiter is surrounded by more than 50 moons (with more a dozen more awaiting confirmation). Scientists are most interested in the Galilean satellites — the four largest moons discovered by Galileo Galilei in 1610: Europa, Callisto, Ganymede and Io. Jupiter also has three rings, but they are very hard to see and not nearly as intricate as Saturn's. Jupiter is named for the king of ancient Roman gods.</p>
                    </div>
                </div>
            </div>

            <div id="saturn-info" class="modal">
                <div class="modal-content">
                    <h2>Saturn</h2>
                    <span class="close" id="saturn-close">&times;</span>
                    <div class="split">
                        <img src="img/saturn.png" alt="NA">
                        <p>The second largest planet in our solar system, adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings -- made of chunks of ice and rock -- but none are as spectacular or as complicated as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball of mostly hydrogen and helium. Surrounding by 53 confirmed and nine provisional moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries. The farthest planet from Earth observable by the unaided human eye, Saturn has been known since ancient times and is named for the Roman god of agriculture and wealth. The Greek equivalent was Cronos, the father of Zeus/Jupiter.</p>
                    </div>
                </div>
            </div>

            <div id="uranus-info" class="modal">
                <div class="modal-content">
                    <h2>Uranus</h2>
                    <span class="close" id="uranus-close">&times;</span>
                    <div class="split">
                        <img src="img/uranus.png" alt="NA">
                        <p>The seventh planet from the sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the sun like a rolling ball. The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. William Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.</p>
                    </div>
                </div>
            </div>

            <div id="neptune-info" class="modal">
                <div class="modal-content">
                    <h2>Neptune</h2>
                    <span class="close" id="neptune-close">&times;</span>
                    <div class="split">
                        <img src="img/neptune.png" alt="NA">
                        <p>Dark, cold and whipped by supersonic winds, Neptune is the last of the hydrogen and helium gas giants in our solar system. More than 30 times as far from the sun as Earth, the planet takes almost 165 Earth years to orbit our sun. In 2011 Neptune completed its first orbit since its discovery in 1846. "We see (Neptune) as Columbus saw America from the coast of Spain.</p>
                    </div>
                </div>
            </div>`;

        // Add animations
        animate();
        planetEvent();
    }, 5000);
});

function animate() {
    var mercury_path = anime.path('#mercury-orbit');

    var mercuryPath = anime({
        targets: '#mercury',
        translateX: mercury_path,
        translateY: mercury_path,
        rotate: mercury_path,   
        duration: 1000,
        loop: true,
        easing: 'linear'
    });

    var venus_path = anime.path('#venus-orbit');

    var venusPath = anime({
        targets: '#venus',
        translateX: venus_path,
        translateY: venus_path,
        rotate: venus_path,
        easing: 'linear',
        duration: 3000,
        loop: true
    });

    var earth_path = anime.path('#earth-orbit');

    var earthPath = anime({
        targets: '#earth',
        translateX: earth_path,
        translateY: earth_path,
        rotate: earth_path,
        easing: 'linear',
        duration: 5000,
        loop: true
    });

    var mars_path = anime.path('#mars-orbit');

    var marsPath = anime({
        targets: '#mars',
        translateX: mars_path,
        translateY: mars_path,
        rotate: mars_path,
        easing: 'linear',
        duration: 9500,
        loop: true
    });

    var jupiter_path = anime.path('#jupiter-orbit');

    var jupiterPath = anime({
        targets: '#jupiter',
        translateX: jupiter_path,
        translateY: jupiter_path,
        rotate: jupiter_path,
        easing: 'linear',
        duration: 59500,
        loop: true
    });

    var saturn_path = anime.path('#saturn-orbit');

    var saturnPath = anime({
        targets: '#saturn',
        translateX: saturn_path,
        translateY: saturn_path,
        rotate: saturn_path,
        easing: 'linear',
        duration: 147500,
        loop: true
    });

    var uranus_path = anime.path('#uranus-orbit');

    var uranusPath = anime({
        targets: '#uranus',
        translateX: uranus_path,
        translateY: uranus_path,
        rotate: uranus_path,
        easing: 'linear',
        duration: 480000,
        loop: true
    });

    var neptune_path = anime.path('#neptune-orbit');

    var neptunePath = anime({
        targets: '#neptune',
        translateX: neptune_path,
        translateY: neptune_path,
        rotate: neptune_path,
        easing: 'linear',
        duration: 924000,
        loop: true
    });

    var pluto_path = anime.path('#pluto-orbit');

    var plutoPath = anime({
        targets: '#pluto',
        translateX: pluto_path,
        translateY: pluto_path,
        rotate: pluto_path,
        easing: 'linear',
        duration: 1240000,
        loop: true
    });

}

function planetEvent() {
    var planets = document.getElementsByClassName('planet');
    console.log(planets);
    for (i = 0; i < planets.length; i++) {
        var curr = planets[i];
        console.log(planets[i].id);
        curr.onclick = pop(curr.id);
    }
}

function pop(planet) {

    var modal_id = planet + '-info';
    var modal = document.getElementById(modal_id);
    modal.style.display = "block";

    var close_id = planet + '-close';
    var close = document.getElementById(close_id);
    close.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



