


window.onload=()=>{
// import Task from "To-Do-List\\task.js";
// import Project from "To-Do-List\\project.js";
// import ToDo from "To-Do-List\\todo.js";
    alert("Loading");
    const button1=document.getElementById("addProject");
    button1.addEventListener('click',createProject);

    
    function createProject(){
        const title=document.getElementById("title");
        title.innerHTML+=`
        <h3>Add Project</h3><br>
        `
        const div=document.getElementById("data");
        div.innerHTML+=
        `
        <form>
        <input type="text" id="projectTitle" name="projectTitle" placeholder="Title"><br><br>
        <button id="add"><span>Add</button> <button><span>Cancel</button>
        </form> 
        `
    }

    const add = document.getElementById("add");
    console.log(add);
    add.onclick=()=>{
    const projectTitle=document.getElementById("projectTitle").value;
    console.log(projectTitle);
    }

}