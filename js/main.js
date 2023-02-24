document.getElementById('files').onchange = function () {
    var src = URL.createObjectURL(this.files[0])
    document.getElementById('image').src = src
}

$(document).ready(function ($) {

    $(document).on('click', '.btn_print', function (event) {
        event.preventDefault();

        //credit : https://ekoopmans.github.io/html2pdf.js

        var element = document.getElementById('container_content');

        //easy
        //html2pdf().from(element).save();

        //custom file name
        //html2pdf().set({filename: 'code_with_mark_'+js.AutoCode()+'.pdf'}).from(element).save();

        //more custom settings
        var opt =
        {
            margin: 0,
            filename: 'pageContent_' + js.AutoCode() + '.pdf',
            image: { type: 'png', quality: 6 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
        };
        // New Promise-based usage:
        html2pdf().set(opt).from(element).save();
    });
});

function changeColor() {
    document.getElementById("p1-0").style.backgroundColor = document.getElementById("p1").value;
    document.getElementById("p1-1").style.backgroundColor = document.getElementById("p1").value;
    document.getElementById("p1-2").style.backgroundColor = document.getElementById("p1").value;
    document.getElementById("p4-0").style.backgroundColor = document.getElementById("p4").value;
    document.getElementById("p3-0").style.backgroundColor = document.getElementById("p3").value;
    document.getElementById("p2-0").style.color = document.getElementById("p2").value;
    document.getElementById("p0-0").style.color = document.getElementById("p0").value;
    document.getElementById("image").style.borderColor = document.getElementById("p0").value;
    document.getElementById("p4-0").style.borderColor = document.getElementById("p0").value;
    
}

function reset(){
    document.getElementById("p0").value = "#ffffff";
    document.getElementById("p1").value = "#FFC107";
    document.getElementById("p2").value = "#555555";
    document.getElementById("p3").value = "#232323";
    document.getElementById("p4").value = "#131313";
    changeColor()
}