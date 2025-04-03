var bannerReq = new XMLHttpRequest();
var footerReq = new XMLHttpRequest();

bannerReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("banner").innerHTML = bannerReq.responseText;
       var activeEle = document.getElementById("banner").getAttribute("active-element");
       document.getElementById(activeEle).classList.add('active');
    }
};

footerReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("footer").innerHTML = footerReq.responseText;
    }
};

bannerReq.open("GET", "/banner.html", true);
footerReq.open("GET", "/footer.html", true);
bannerReq.send();
footerReq.send();