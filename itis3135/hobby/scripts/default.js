window.onload = function()
{
    document.getElementById("homeClick").onclick = showHome;
    document.getElementById("csgoClick").onclick = showCsgo;
    document.getElementById("valorantClick").onclick = showValorant;
    document.getElementById("rocketClick").onclick = showRocket;
    document.getElementById("leagueClick").onclick = showLeague;
    home.style.display = 'block';
    csgo.style.display = 'none';
    valorant.style.display = 'none';
    rocket.style.display = 'none';
    league.style.display = 'none';
}

function showHome()
{
home.style.display = 'block';
csgo.style.display = 'none';
valorant.style.display = 'none';
rocket.style.display = 'none';
league.style.display = 'none';
}

function showCsgo()
{
home.style.display = 'none';
csgo.style.display = 'block';
valorant.style.display = 'none';
rocket.style.display = 'none';
league.style.display = 'none';

}

function showValorant()
{
home.style.display = 'none';
csgo.style.display = 'none';
valorant.style.display = 'block';
rocket.style.display = 'none';
league.style.display = 'none';

}

function showRocket()
{
home.style.display = 'none';
csgo.style.display = 'none';
valorant.style.display = 'none';
rocket.style.display = 'block';
league.style.display = 'none';

}

function showLeague()
{
home.style.display = 'none';
csgo.style.display = 'none';
valorant.style.display = 'none';
rocket.style.display = 'none';
league.style.display = 'block';

}