

var elemC = document.querySelector('#elem-container');
var fixed =document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function() {
    fixed.style.display="block"
});
elemC.addEventListener("mouseleave", function() {
    fixed.style.display="none"
});


var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function() {
        var image=e.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${image})`
    })
})

var i = document.querySelector("#bg-image img");
var elems2 = document.querySelectorAll(".elems");
var paragraphs = document.querySelectorAll(".para");

elems2.forEach(function(e) {
    e.addEventListener("click", function() {
        // Change the background image
        var image = e.getAttribute("data-image");
        i.src = image;

        // Reset font color of all .elems
        elems2.forEach(function(el) {
            el.style.color = "#504B45"; 
        });

        // Change font color of the clicked .elems to white
        e.style.color = "white";

        // Hide all paragraphs
        paragraphs.forEach(function(p) {
            p.style.display = "none";
        });

        // Get the ID of the paragraph to show
        var paragraphId = e.getAttribute("content");
        var paragraph = document.getElementById(paragraphId);

        // Display the corresponding paragraph
        if (paragraph) {
            paragraph.style.display = "block";
        }
    });
});

