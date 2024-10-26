

thead = document.getElementById("thead");
tbody = document.getElementById("tbody");

tr_head = document.createElement("tr");
thead.appendChild(tr_head);

th_first = document.createElement("th");
th_first.setAttribute("scope", "col");
th_first.textContent = "n";
tr_head.appendChild(th_first);

for (var i=1; i <= 10; i++) {
    th = document.createElement("th")
    th.setAttribute("scope", "col");
    th.textContent = i;
    tr_head.appendChild(th);
}

for (var i=1; i <= 10; i++) {
    tr = document.createElement("tr");
    th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.textContent = i;
    sup = document.createElement("sup");
    sup.textContent = "n";
    th.appendChild(sup);
    tr.appendChild(th);

    for (var j=1; j <= 10; j++) {
        td = document.createElement("td")
        td.textContent = i**j;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}