
var Fir_id = BouaiciSet["Fir-id"] || ""
  , MegaMax = BouaiciSet["mega-max"] || 10
  , errTrans = false;
if (Lang_InstanceId.length && trans != false) {
    trans.unshift("أداة الترجمة")
}
if (BlogDir === "rtl") {
    errTrans = "خطأ في الترجمة"
} else {
    errTrans = "Translate Error"
}
for (var TransLabels = document.querySelectorAll("[data-word]"), tr = 0; tr < TransLabels.length; tr++) {
    if (Lang_InstanceId.length && trans != false) {
        TransLabels[tr].textContent = trans[TransLabels[tr].getAttribute("data-word")]
    } else {
        TransLabels[tr].innerHTML = '<span class="trans-error">' + errTrans + "</span>"
    }
}
function popUp(e, t) {
    return e.preventDefault(),
    window.open(t.href, "_blank", "height=570,width=600"),
    false
}
for (var SubMitems = document.querySelectorAll("#" + menu_instanceId + " .sub, #" + menu_instanceId + " .ssub"), si = 0; si < SubMitems.length; si++)
    SubMitems[si].querySelector("a").innerHTML = SubMitems[si].querySelector("a").innerHTML.replace(/_/g, "");
for (var MainMitems = document.querySelectorAll("#" + menu_instanceId + " .drop-menu, #" + menu_instanceId + " .bot-menu"), mi = 0; mi < MainMitems.length; mi++) {
    var item = MainMitems[mi];
    item.querySelector("ul") ? item.querySelector("ul li") || (item.removeChild(item.querySelector("ul")),
    item.removeAttribute("class")) : item.removeAttribute("class")
}
var SubMenus = document.querySelectorAll(".bot-menu");
for (si = 0; si < SubMenus.length; si++) {
    item = SubMenus[si];
    var ul = item.getElementsByTagName("ul")[0];
    item.onmouseover = function() {
        992 < window.innerWidth && (BlogDir == "rtl" ? this.getBoundingClientRect().left < 200 && (ul.style.right = "auto",
        ul.style.left = "200px") : window.innerWidth - this.getBoundingClientRect().right < 200 && (ul.style.left = "auto",
        ul.style.right = "200px"))
    }
    ,
    item.onmouseout = function() {
        ul.removeAttribute("style")
    }
}
for (var MegaItems = document.querySelectorAll(".MegaItem"), gi = 0; gi < MegaItems.length; gi++) {
    item = MegaItems[gi].querySelector("a");
    var label = decodeURIComponent(item.href.split("#")[1]);
    item.setAttribute("data-label", label),
    item.href = "/search/label/" + label + "?max-results=" + MegaMax
}
for (var WidsHead = document.querySelectorAll('[data-title*="[SM]"],[data-title*="[AO]"],[data-title*="[GL]"]'), wh = 0; wh < WidsHead.length; wh++) {
    var head = WidsHead[wh]
      , headTitle = head.getAttribute("data-title");
    if (-1 != headTitle.indexOf("[GL]")) {
        var Nums = headTitle.match(/\[.+?\]/g);
        Nums = Nums[1] ? Nums[1].replace(/(\[|\])/g, "") : 3;
        head.parentNode.querySelector(".studio-widget").classList.add("gl-" + Nums)
    }
    var newTitle = headTitle.replace(/(\[SM\]|\[AO\]|\[GL.+\])/, "");
    head.setAttribute("data-title", newTitle);
    head.querySelector("h6").textContent = newTitle
}
var PostLinks = document.querySelectorAll(".separator a");
for (pl = 0; pl < PostLinks.length; pl++)
    PostLinks[pl].addEventListener("click", function(c) {
        c.preventDefault()
    });
function resizeImg(g, R, _) {
    try {
        var e = BouaiciSet["sup-web"] || false
    } catch (t) {
        e = false
    }
    try {
        var t = e ? "-e30-rw" : "-e30"
          , i = R === _ ? "s" + R + "-c" + t : "w" + parseInt(R) + "-h" + parseInt(_) + "-p" + t;
        g = -1 !== g.indexOf("img.youtube.com") || -1 !== g.indexOf("ytimg.com") ? g.replace("/default", "/mqdefault") : -1 !== g.indexOf("googleusercontent") && -1 != g.indexOf("=") ? g.replace(g.split("=")[g.split("=").length - 1], i) : g.replace(/(:\/\/)/, "").split("/").length < 7 ? g.replace(g.split("/")[g.split("/").length - 1], i + "/" + g.split("/")[g.split("/").length - 1]) : g.replace(g.split("/")[g.split("/").length - 2], i)
    } finally {
        return g
    }
}
function LazyImages(i, s, a) {
    function g() {
        for (var g = document.querySelectorAll("img[" + i + "]"), R = 0; R < g.length; R++) {
            var _ = g[R];
            if (_.getBoundingClientRect().top - document.body.getBoundingClientRect().top < window.pageYOffset + window.innerHeight || a) {
                if (s)
                    var e = _.closest(s).offsetWidth
                      , t = _.closest(s).offsetHeight;
                else
                    t = _.hasAttribute("width") && _.hasAttribute("height") ? (e = Math.ceil(_.getAttribute("width")),
                    Math.ceil(_.getAttribute("height"))) : _.hasAttribute("data-original-width") && _.hasAttribute("data-original-height") ? (e = Math.ceil(_.getAttribute("data-original-width")),
                    Math.ceil(_.getAttribute("data-original-height"))) : (e = Math.ceil(_.parentNode.offsetWidth),
                    Math.ceil(_.parentNode.offsetHeight));
                e = resizeImg(_.getAttribute(i), e, t),
                _.setAttribute("src", e),
                _.removeAttribute(i),
                _.removeAttribute("class"),
                _.removeAttribute("style"),
                _.parentNode.classList.remove("LazyLoad")
            }
        }
    }
    a ? g() : document.addEventListener("scroll", g)
}
if (LazyImages("data-src"),
window.addEventListener("scroll", function() {
    if (100 <= window.pageYOffset && document.body.getAttribute("data-auth") != "true") {
        document.body.setAttribute("data-auth", "true");
        var g = document.createElement("link");
        g.rel = "stylesheet",
        g.href = "https://www.blogger.com/dyn-css/authorization.css?targetBlogID=" + blogId,
        document.head.appendChild(g),
        g = document.querySelectorAll(".qed");
        for (var R = 0; R < g.length; R++) {
            var _ = g[R].closest(".widget")
              , e = _.classList[1]
              , t = _.getAttribute("id");
            _ = _.closest(".section").getAttribute("id"),
            g[R].setAttribute("class", "item-control blog-admin"),
            g[R].innerHTML = '<a class="quickedit" href="https://www.blogger.com/rearrange?blogID=' + blogId + "&widgetType=" + e + "&widgetId=" + t + "&action=editWidget&sectionId=" + _ + '" onclick="popUp(event,this);"></a>'
        }
    }
}),
isStorage)
    if (null != sessionStorage.scripts) {
        var style = document.createElement("style");
        style.innerHTML = sessionStorage.fontawesome,
        document.head.appendChild("style"),
        document.querySelector("#Icons").innerHTML = "<svg>" + sessionStorage.icons + "</svg>",
        eval(sessionStorage.scripts)
    } else
        GetScriptsAndIcons();
else
    GetScriptsAndIcons();
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}
function GetScriptsAndIcons() {
    var getFeeds = document.createElement("script");
    getFeeds.src = "https://raw.githack.com/bouaicidz/V7/main/just-teste.js",
    document.head.appendChild(getFeeds),
    (getFeeds = document.createElement("script")).src = "https://raw.githack.com/bouaicidz/V7/main/Icon.js",
    document.head.appendChild(getFeeds)
}
function Scripts(a) {
    eval(a.entry.content.$t)
}
function Icons(getSvg) {
    var R = document.createElement("html");
    R.innerHTML = getSvg.entry.content.$t,
    getSvg = R.getElementsByTagName("style")[0],
    document.head.appendChild(getSvg),
    sessionStorage.fontawesome = getSvg.innerHTML,
    R = R.getElementsByTagName("svg")[0],
    document.querySelector("#Icons").innerHTML = "<svg>" + R.innerHTML + "</svg>",
    sessionStorage.icons = R.innerHTML
}


