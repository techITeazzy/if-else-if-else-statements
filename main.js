function load() {
    document.getElementById("body").style.backgroundColor = 'black';
    document.getElementById("body").style.color = 'white';
}

function pressed() {
    var inp = document.getElementById("inp").value;
    if ( inp === 'red' ) {
        document.getElementById("header").style.color = 'red';
    } else if ( inp === 'green' ) {
        document.getElementById("header").style.color = 'green';
    } else if ( inp === 'yellow' ) {
        document.getElementById("header").style.color = 'yellow';
    } else if ( inp === 'blue' ) {
        document.getElementById("header").style.color = 'blue';
    } else {
        document.getElementById("header").style.color = 'grey';
    }
}
