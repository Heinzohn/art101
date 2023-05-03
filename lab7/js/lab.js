// Username Sorter
// Author: Elijah Hynson <ehynson@ucsc.edu> and Wes Babb <gababb@ucsc.edu> 
// Date: 5/2/2023

function sortUserName() {
    var userName = window.prompt("Oi mate, tell me ya name so me and the boys can fix it.");
    console.log("userName =", userName);
    
    var nameSorted = userName.toLowerCase().split("").sort().join().bold();

    return nameSorted;
}

document.writeln("Yo bruv, fixed your name: ",
    sortUserName(),"<br>");
