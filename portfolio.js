let nav_about = document.getElementById('nav_about');
let nav_home = document.getElementById('nav_home');
let nav_services = document.getElementById('nav_services');
let nav_project = document.getElementById('nav_project');
let nav_more = document.getElementById('nav_more');
let button_contact = document.getElementById('button_contact');
nav_about.addEventListener('click', function(){
    document.getElementById('container_tail_1').style.display = 'block';
    document.getElementById('container_tail').style.display = 'none';
    document.getElementById('container_tail_2').style.display = 'none';
    document.getElementById('container_tail_3').style.display = 'none';
    document.getElementById('container_tail_4').style.display = 'none';
    document.getElementById('container_tail_5').style.display = 'none';
    nav_about.style.backgroundColor = "aqua";
    nav_about.style.color = "black";
    nav_home.style.backgroundColor = "black";
    nav_services.style.backgroundColor = "black";
    nav_project.style.backgroundColor = "black";
    nav_more.style.backgroundColor = "black";
})

nav_home.addEventListener('click', function(){
    document.getElementById('container_tail_1').style.display = 'none';
    document.getElementById('container_tail').style.display = 'flex';
    document.getElementById('container_tail_2').style.display = 'none';
    document.getElementById('container_tail_3').style.display = 'none';
    document.getElementById('container_tail_4').style.display = 'none';
    document.getElementById('container_tail_5').style.display = 'none';
    nav_home.style.backgroundColor = "aqua";
    nav_home.style.color = "black";
    nav_about.style.backgroundColor = "black";
    nav_services.style.backgroundColor = "black";
    nav_project.style.backgroundColor = "black";
    nav_more.style.backgroundColor = "black";
})
nav_services.addEventListener('click', function(){
    document.getElementById('container_tail_1').style.display = 'none';
    document.getElementById('container_tail').style.display = 'none';
    document.getElementById('container_tail_2').style.display = 'block';
    document.getElementById('container_tail_3').style.display = 'none';
    document.getElementById('container_tail_4').style.display = 'none';
    document.getElementById('container_tail_5').style.display = 'none';
    nav_services.style.backgroundColor = "aqua";
    nav_services.style.color = "black";
    nav_about.style.backgroundColor = "black";
    nav_home.style.backgroundColor = "black";
    nav_project.style.backgroundColor = "black";
    nav_more.style.backgroundColor = "black";
})
nav_project.addEventListener('click', function(){
    document.getElementById('container_tail_1').style.display = 'none';
    document.getElementById('container_tail').style.display = 'none';
    document.getElementById('container_tail_2').style.display = 'none';
    document.getElementById('container_tail_3').style.display = 'block';
    document.getElementById('container_tail_4').style.display = 'none';
    document.getElementById('container_tail_5').style.display = 'none';
    nav_project.style.backgroundColor = "aqua";
    nav_project.style.color = "black";
    nav_about.style.backgroundColor = "black";
    nav_services.style.backgroundColor = "black";
    nav_home.style.backgroundColor = "black";
    nav_more.style.backgroundColor = "black";
})
nav_more.addEventListener('click', function(){
    document.getElementById('container_tail_1').style.display = 'none';
    document.getElementById('container_tail').style.display = 'none';
    document.getElementById('container_tail_2').style.display = 'none';
    document.getElementById('container_tail_3').style.display = 'none';
    document.getElementById('container_tail_4').style.display = 'block';
    document.getElementById('container_tail_5').style.display = 'none';
    nav_more.style.backgroundColor = "aqua";
    nav_more.style.color = "black";
    nav_about.style.backgroundColor = "black";
    nav_services.style.backgroundColor = "black";
    nav_project.style.backgroundColor = "black";
    nav_home.style.backgroundColor = "black";
})

button_contact.addEventListener('click', function(){
    document.getElementById('container_tail_1').style.display = 'none';
    document.getElementById('container_tail').style.display = 'none';
    document.getElementById('container_tail_2').style.display = 'none';
    document.getElementById('container_tail_3').style.display = 'none';
    document.getElementById('container_tail_4').style.display = 'none';
    document.getElementById('container_tail_5').style.display = 'block';
    button_contact.style.backgroundColor = "aqua";
    nav_about.style.backgroundColor = "black";
    nav_home.style.backgroundColor = "black";
    nav_services.style.backgroundColor = "black";
    nav_project.style.backgroundColor = "black";
    nav_more.style.backgroundColor = "black";
})

let download_resume = document.getElementById('download_resume');
download_resume.addEventListener('click', function(){
    let pdfurl = 'DEEPANSHUPATELRESUME.pdf';

    let anchor = document.createElement('a');

    anchor.href = pdfurl;

    anchor.download = "DEEPANSHUPATELRESUME.pdf"
    anchor.click()
})