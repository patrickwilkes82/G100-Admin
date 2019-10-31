//Get Input Element
let filterInput = document.getElementById('filterInput');
//Add Event Listener
filterInput.addEventListener('keyup', searchSummaries);

function searchSummaries() {
    //Get Value of Input
    let searchValue = document.getElementById('filterInput').value.toUpperCase();

    //Get details ul
    let ul = document.getElementById('detailsList');

    //Get li's from ul
    let li = ul.querySelectorAll('li.detailsItem');

    //Loop through detailsItem li's
    for(let i = 0;i < li.length;i++) {
        let summary = li[i].getElementsByTagName('summary')[0];
        //If matched
        if (summary.innerHTML.toUpperCase().indexOf(searchValue) > -1) {
            li[i].style.display = '';
        }else {
            li[i].style.display = 'none';
        }
        }
    }