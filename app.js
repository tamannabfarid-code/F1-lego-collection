// Expanded Database including real-world F1 locations, engines, and historical stats
const garageDatabase = {
    ferrari: {
        team: "Ferrari", modelName: "SF-24", logo: "logo ferrari.png", 
        model: "3d ferrari.glb", background: "background ferrari.png",
        base: "Maranello, Italy", flag: "🇮🇹", engine: "Ferrari v6",
        rank: { start: "5.15", finish: "4.21" },
        champs: ["2008", "2007", "2004", "2003", "2002", "2001", "2000", "1999"],
        stats: { drag: 32, speed: 98, downforce: 92 },
        standings: { pos: "2", pts: "200", wins: "4" },
        drivers: { d1Num: "16", d1Name: "Leclerc", d1Img: "driver leclerc.png", d1Color: "#e10600", d2Num: "55", d2Name: "Sainz", d2Img: "driver sainz.png", d2Color: "#ffcc00" },
        tyres: { pFront: "25.0 psi", pRear: "23.0 psi", cFront: "-2.75°", cRear: "-1.50°" }
    },
    aston: {
        team: "Aston Martin", modelName: "AMR23", logo: "logo aston martin.png", 
        model: "3d aston martin.glb", background: "background aston martin.png",
        base: "Silverstone, UK", flag: "🇬🇧", engine: "Mercedes v6",
        rank: { start: "8.50", finish: "9.10" },
        champs: [], // Aston doesn't have legacy World Championships under this name
        stats: { drag: 45, speed: 85, downforce: 90 },
        standings: { pos: "5", pts: "110", wins: "0" },
        drivers: { d1Num: "14", d1Name: "Alonso", d1Img: "driver alonso.png", d1Color: "#006f62", d2Num: "18", d2Name: "Stroll", d2Img: "driver stroll.png", d2Color: "#ffffff" },
        tyres: { pFront: "24.0 psi", pRear: "22.0 psi", cFront: "-3.00°", cRear: "-1.75°" }
    },
    mercedes: {
        team: "Mercedes", modelName: "W12", logo: "logo mercedes.png", 
        model: "3d mercedes.glb", background: "background mercedes.png",
        base: "Brackley, UK", flag: "🇬🇧", engine: "Mercedes v6",
        rank: { start: "4.10", finish: "3.80" },
        champs: ["2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"],
        stats: { drag: 30, speed: 99, downforce: 95 },
        standings: { pos: "3", pts: "175", wins: "2" },
        drivers: { d1Num: "63", d1Name: "Russell", d1Img: "driver russell.png", d1Color: "#00d2be", d2Num: "44", d2Name: "Hamilton", d2Img: "driver hamilton.png", d2Color: "#ff007f" },
        tyres: { pFront: "25.5 psi", pRear: "23.5 psi", cFront: "-2.50°", cRear: "-1.40°" }
    },
    mclaren: {
        team: "McLaren", modelName: "MCL60", logo: "logo mclaren.png", 
        model: "3d mclaren.glb", background: "background mclaren.png",
        base: "Woking, UK", flag: "🇬🇧", engine: "Mercedes v6",
        rank: { start: "3.20", finish: "2.90" },
        champs: ["2008", "1999", "1998", "1991", "1990", "1989", "1988", "1985"],
        stats: { drag: 36, speed: 92, downforce: 89 },
        standings: { pos: "1", pts: "240", wins: "6" },
        drivers: { d1Num: "4", d1Name: "Norris", d1Img: "driver norris.png", d1Color: "#ff8000", d2Num: "81", d2Name: "Piastri", d2Img: "driver piastri.png", d2Color: "#ffffff" },
        tyres: { pFront: "24.5 psi", pRear: "22.5 psi", cFront: "-2.80°", cRear: "-1.60°" }
    },
    haas: {
        team: "Haas", modelName: "VF-24", logo: "logo haas vr-20.png", 
        model: "3d haas vr-20.glb", background: "background haas vr-20.png",
        base: "Kannapolis, USA", flag: "🇺🇸", engine: "Ferrari v6",
        rank: { start: "14.50", finish: "15.20" },
        champs: [],
        stats: { drag: 51, speed: 80, downforce: 75 },
        standings: { pos: "7", pts: "32", wins: "0" },
        drivers: { d1Num: "27", d1Name: "Hulkenberg", d1Img: "driver hulkenberg.png", d1Color: "#ef1b24", d2Num: "20", d2Name: "Magnussen", d2Img: "driver magnussen.png", d2Color: "#ffffff" },
        tyres: { pFront: "23.5 psi", pRear: "21.0 psi", cFront: "-3.15°", cRear: "-1.90°" }
    }
};

// Helper function to draw fake data bars for the telemetry UI
function drawMiniChart(containerId, colorHex) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous bars
    
    // Draw 15 tiny bars with random heights between 20% and 100%
    for(let i = 0; i < 15; i++) {
        let height = Math.floor(Math.random() * 80) + 20;
        let bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.height = height + '%';
        bar.style.backgroundColor = colorHex;
        container.appendChild(bar);
    }
}

function selectCar(carKey, cardElement) {
    const carData = garageDatabase[carKey];

    // Identity & Branding
    document.getElementById('team-logo').src = carData.logo;
    document.getElementById('panel-team-name').innerText = carData.team;
    document.getElementById('panel-car-model').innerText = carData.modelName;

    // Load 3D Asset & Background
    document.getElementById('f1-viewer').setAttribute('src', carData.model);
    document.getElementById('main-stage').style.backgroundImage = `url('${carData.background}')`;

    // Drivers Update
    document.getElementById('d1-num').innerText = carData.drivers.d1Num;
    document.getElementById('d1-num').style.color = carData.drivers.d1Color;
    document.getElementById('d1-name').innerText = carData.drivers.d1Name;
    document.getElementById('d1-img').src = carData.drivers.d1Img;

    document.getElementById('d2-num').innerText = carData.drivers.d2Num;
    document.getElementById('d2-num').style.color = carData.drivers.d2Color;
    document.getElementById('d2-name').innerText = carData.drivers.d2Name;
    document.getElementById('d2-img').src = carData.drivers.d2Img;

    // Standings Update
    document.getElementById('stand-pos').innerText = carData.standings.pos;
    document.getElementById('stand-pts').innerText = carData.standings.pts;
    document.getElementById('stand-wins').innerText = carData.standings.wins;

    // Base & Tech Specs Update
    document.getElementById('team-flag').innerText = carData.flag;
    document.getElementById('team-base').innerText = carData.base;
    document.getElementById('team-engine').innerText = carData.engine;
    document.getElementById('team-chassis').innerText = carData.modelName;

    // Rank Update
    document.getElementById('rank-start').innerText = carData.rank.start;
    document.getElementById('rank-finish').innerText = carData.rank.finish;

    // Draw Mini Charts (Uses team colors for flair)
    drawMiniChart('chart-start', carData.drivers.d1Color);
    drawMiniChart('chart-finish', '#e10600');

    // Load Championships dynamically
    const champContainer = document.getElementById('champ-years');
    champContainer.innerHTML = ''; // clear old ones
    if(carData.champs.length === 0) {
        champContainer.innerHTML = '<span style="color:#666; font-size:10px;">No Recent Titles</span>';
    } else {
        carData.champs.forEach(year => {
            let badge = document.createElement('div');
            badge.className = 'champ-badge';
            badge.innerHTML = `🛡️ ${year}`;
            champContainer.appendChild(badge);
        });
    }

    // Diagnostic Progress Bars
    document.getElementById('bar-drag').style.width = carData.stats.drag + '%';
    document.getElementById('bar-speed').style.width = carData.stats.speed + '%';
    document.getElementById('bar-downforce').style.width = carData.stats.downforce + '%';

    // Right Tyre Specs Update
    document.getElementById('pressure-front').innerText = carData.tyres.pFront;
    document.getElementById('pressure-rear').innerText = carData.tyres.pRear;
    document.getElementById('camber-front').innerText = carData.tyres.cFront;
    document.getElementById('camber-rear').innerText = carData.tyres.cRear;

    // Carousel Highlighting
    document.querySelectorAll('.car-card').forEach(card => card.classList.remove('active'));
    cardElement.classList.add('active');
}

// Auto-load Ferrari on page boot
window.onload = function() {
    selectCar('ferrari', document.querySelector('.car-card'));
};
