const powerbtn = document.getElementById("toggle");
const spotifybtn = document.getElementById("spotify");
const radiobtn = document.getElementById("radio");
const optibtn = document.getElementById("optical");
const volumeslider = document.getElementById("volume-slider");
const debug = document.getElementById("debug");

function togglePower() {
    fetch('http://192.168.0.135/YamahaExtendedControl/v1/main/setPower?power=toggle');
    // debug.textContent = "togglePower";

}

async function spotify() {
    await fetch('http://192.168.0.135/YamahaExtendedControl/v1/main/setInput?input=spotify')
    // .then(res => {
    //     if(res.ok){
    //         console.log("sukces")
    //     }else{
    //         console.log("lipa")
    //     }
    //     // Nie możesz przekształcić odpowiedzi "opaque" na JSON
    //     // res.json() -> to wywoła błąd
    // })
    // .catch(error => console.error(error)) // To jest dobrym pomysłem, aby łapać wszelkie błędy, które mogą wystąpić

}

function netRadio() {
    fetch('http://192.168.0.135/YamahaExtendedControl/v1/main/setInput?input=net_radio');
    // debug.textContent = "netRadio";

}

function optical() {
    fetch('http://192.168.0.135/YamahaExtendedControl/v1/main/setInput?input=optical1');
    // debug.textContent = "opti";

}

function setVolume() {
    fetch(`http://192.168.0.135/YamahaExtendedControl/v1/main/setVolume?volume=${this.value}`)
    .then(res => debug.textContent = res);
    // debug.textContent = this.value;
}

powerbtn.addEventListener("click", togglePower);
spotifybtn.addEventListener("click", spotify);
radiobtn.addEventListener("click", netRadio);
optibtn.addEventListener("click", optical);
volumeslider.addEventListener("input", setVolume);