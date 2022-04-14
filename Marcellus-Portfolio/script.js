function clicou(){
    document.getElementById("idade").innerHTML = "20 years old";
    document.getElementById("ingles").innerHTML = "Fluent English";
    document.getElementById("espanhol").innerHTML = "Basic Spanish";
    document.getElementById("portugues").innerHTML = "Native Portuguese speaker";
    document.getElementById("interesses").innerHTML = "Interests:";
    document.getElementById("bancodados").innerHTML = "Data Base";
    document.getElementById("machinelearning").innerHTML = "AI and Machine Learning";
    document.getElementById("formacao").innerHTML = "Education";
    document.getElementById("pucminas").innerHTML = "Pontifical Catholic University";
    document.getElementById("tecnologo").innerHTML = "Degree in Systems Analysis and Development";
    document.getElementById("puc1").innerHTML = "During my lessons, I've learned about:";
    document.getElementById("puc2").innerHTML = "- Front-end Web Development (HTML, CSS, JS and Bootstrap)";
    document.getElementById("puc3").innerHTML = "- Back-end Web Development (C#)";
    document.getElementById("puc4").innerHTML = "- Basic Web Design (UI, UX and Colors)";
    document.getElementById("puc5").innerHTML = "- Entity Framework";
    document.getElementById("puc6").innerHTML = "- Data Base and DBMS (SQL Server)";
    document.getElementById("puc7").innerHTML = "- Agile methodologies (SCRUM and RUP)";
    document.getElementById("puc8").innerHTML = "Expected graduation in Jun/2023";
    document.getElementById("cursos").innerHTML = "Programming Courses and Bootcamps";
    document.getElementById("dio1").innerHTML = "At Digital Innovation One, I've made these courses:";
    document.getElementById("dio2").innerHTML = "- Essential Programming Logic";
    document.getElementById("dio3").innerHTML = "- Agile methodologies with SCRUM";
    document.getElementById("dio4").innerHTML = "- Computational Thinking";
    document.getElementById("dio5").innerHTML = "- Introduction to Git and Github";
    document.getElementById("dio6").innerHTML = "- Learn about data structure and algorithms";
    document.getElementById("helloworld").innerHTML = "Hello, World!";
    document.getElementById("dontunderstand").innerHTML = "Não entende Inglês?";
    document.getElementById("click").onclick = function() {clicou2()};
};

function clicou2(){
    document.location.reload(true);
}