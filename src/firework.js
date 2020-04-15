
    var brd;
    var seeds;
    var particles;
    var fwkPtcIniV;
    var fwkSedIniV;
    var fwkPtcIniT;
    var fwkSedIniT;
    var a;
    var g ;
    var v;
    var before;


export function firework() {

    brd = document.createElement("DIV");
    document.body.insertBefore(brd, document.getElementById("board"));
    seeds = [];
    particles = [];
    fwkPtcIniV = 0.5;
    fwkSedIniV = 0.5;
    fwkPtcIniT = 2500;
    fwkSedIniT = 1000;
    a = 0.0005;
    g = 0.0005;
    v = 0.3;

    //document.addEventListener("click", newFireWorkOnClick);
    before = Date.now();
    setInterval(frame, 5);

}

    function newFireworkParticle(x, y, angle)
    {
        var fwkPtc = document.createElement("DIV");
        fwkPtc.setAttribute('class', 'fireWorkParticle');
        fwkPtc.time = fwkPtcIniT;
        while(angle > 360)
            angle -= 360;
        while(angle < 0)
            angle += 360;
        fwkPtc.velocity = [];
        if(angle > 270)
        {
            fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
            fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
        }
        else if(angle > 180)
        {
            fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
            fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
        }
        else if(angle > 90)
        {
            fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
            fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
        }
        else
        {
            fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
            fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
        }
        fwkPtc.position = [];
        fwkPtc.position.x = x;
        fwkPtc.position.y = y;
        fwkPtc.style.left = fwkPtc.position.x + 'px';
        fwkPtc.style.top = fwkPtc.position.y + 'px';
        if(particles == null)
            particles = [];
        particles.push(fwkPtc);
        return fwkPtc;
    }

    export function newFireWorkOnClick(event)
    {
        newFireworkSeed(event.pageX , event.pageY );
    }
    function newFireworkSeed(x, y)
    {
        var fwkSed = document.createElement("DIV");
        fwkSed.setAttribute('class', 'fireWorkSeed');
        brd.appendChild(fwkSed);
        fwkSed.time = fwkSedIniT;
        fwkSed.velocity = [];
        fwkSed.velocity.x = 0;
        fwkSed.velocity.y = fwkSedIniV;
        fwkSed.position = [];
        fwkSed.position.x = x;
        fwkSed.position.y = y;
        fwkSed.style.left = fwkSed.position.x + 'px';
        fwkSed.style.top = fwkSed.position.y + 'px';
        if(seeds == null)
            seeds = [];
        seeds.push(fwkSed);
        return fwkSed;
    }

    function newFireWorkStar(x, y)
    {
        var fwkBch = document.createElement("DIV");
        fwkBch.setAttribute('class', 'fireWorkBatch');
        var a = 0;
        while(a < 360)
        {
            var fwkPtc = newFireworkParticle(x, y, a);
            fwkBch.appendChild(fwkPtc);
            a += 5;
        }
        brd.appendChild(fwkBch);
    }

    function frame()
    {
        var current = Date.now();
        var deltaTime = current - before;
        before = current;
        for(let i in seeds)
        {
            var fwkSed = seeds[i];
            fwkSed.time -= deltaTime;
            if(fwkSed.time > 0)
            {
                fwkSed.velocity.x -= fwkSed.velocity.x * a * deltaTime;
                fwkSed.velocity.y -= g * deltaTime + fwkSed.velocity.y * a * deltaTime;
                fwkSed.position.x += fwkSed.velocity.x * deltaTime;
                fwkSed.position.y -= fwkSed.velocity.y * deltaTime;
                fwkSed.style.left = fwkSed.position.x + 'px';
                fwkSed.style.top = fwkSed.position.y + 'px';
            }
            else
            {
                newFireWorkStar(fwkSed.position.x, fwkSed.position.y);
                fwkSed.parentNode.removeChild(fwkSed);
                seeds.splice(i, 1);
            }
        }
        for(let i in particles)
        {
            var fwkPtc = particles[i];
            fwkPtc.time -= deltaTime;
            if(fwkPtc.time > 0)
            {
                fwkPtc.velocity.x -= fwkPtc.velocity.x * a * deltaTime;
                fwkPtc.velocity.y -= g * deltaTime + fwkPtc.velocity.y * a * deltaTime;
                fwkPtc.position.x += fwkPtc.velocity.x * deltaTime;
                fwkPtc.position.y -= fwkPtc.velocity.y * deltaTime;
                fwkPtc.style.left = fwkPtc.position.x + 'px';
                fwkPtc.style.top = fwkPtc.position.y + 'px';
            }
            else
            {
                fwkPtc.parentNode.removeChild(fwkPtc);
                particles.splice(i, 1);
            }
        }
    }
