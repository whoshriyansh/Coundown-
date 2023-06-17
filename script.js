const endDate = "19 June 2023 01:32:56 AM"


document.getElementById('end_date').innerText = endDate;
const inputs = document.querySelectorAll('input')

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // console.log(diff)

    if (diff < 0) return;
    //covert into days
    inputs[0].value = (Math.floor(diff / 3600 / 24));
    //covert into Hours
    inputs[1].value = (Math.floor(diff / 3600) % 24);
    //covert into Minutes
    inputs[2].value = (Math.floor(diff / 60) % 60);
    //covert into Seconds
    inputs[3].value = (Math.floor(diff % 60));

}
clock()


//1day = 24 hours
//1 hours = 60 minurtes
//60 minutes= 3600 seconds 

setInterval(() => {
    clock()
}, 1000)