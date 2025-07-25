"use strict";


function hide(selector) {
  selector.style.display = "none";
}

function show(selector) {
  selector.style.display = "block";
}

function emailCheck(content) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test (content);
}

const btnCheck = document.querySelector(".personal-info .content2 form .submit");

btnCheck.addEventListener ("click", function () {
    const content = document.querySelector(".personal-info .content2 form .email").value;
    // console.log (content);
    if (emailCheck (content)) {
        hide (document.querySelector(".personal-info .content2 form"));
        show (document.querySelector(".personal-info .content2 .content2-hide"));
    } else {
        alert ("error");
    }
})

const btnCheckJob = document.querySelectorAll (".job-info .view-more");
const contentJob = document.querySelectorAll (".job-info .content");
let v = new Array(btnCheckJob.length).fill (0);

for (let i = 0; i < btnCheckJob.length; i ++) {
    btnCheckJob[i].addEventListener ("click", function () {

        // show (".job-info .section .smaller-section");
        
        if (v[i] == 0) {
            show (contentJob[i]);
            btnCheckJob[i].textContent = "▲ View less"
        } else {
            hide (contentJob[i]);
            btnCheckJob[i].textContent = "▼ View more"
        }

        v[i] ^= 1;
    })
}
