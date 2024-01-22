AFRAME.registerComponent("createButtons",{
    init:function(){
        var b1 = document.createElement("button")
        b1.innerHTML = "order now"
        b1.setAttribute("id", "orderbutton")
        var b2 = document.createElement("button")
        b2.innerHTML = "order summary"
        b2.setAttribute("id", "summarybutton")
        var buttondiv = document.getElementById("divButton")
        buttondiv.appendChild(b1)
        buttondiv.appendChild(b2)
    }
})