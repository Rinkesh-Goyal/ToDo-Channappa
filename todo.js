// window.onload=(e)=>{
//     //alert("Hello");


//     const button=document.getElementById("addTask");
//     button.addEventListener('click',createTask);

//     const button1=document.getElementById("addProject");
//     button1.addEventListener('click',createProject);

//     function createTask(){
//         const title=document.getElementById("title");
//         title.innerHTML+=`
//         <h3>Add Task</h3><br>
//         `
//         const div=document.getElementById("data");
//         div.innerHTML+=`
        
//         <form>
//         <input type="text" id="fname" name="fname" placeholder="Title"><br><br>
//         <input type="text" id="lname" name="lname" placeholder="description"><br><br>
//         <p>Due date : </p>
//         <input type="date" id="birthday" name="birthday">
//         <br><br>
//         <p>Priority : </p>
//         <input type="radio" id="priority" name="fav_language" value="low">
//         <label for="low">Low</label>
//         <input type="radio" id="priority" name="fav_language" value="medium">
//         <label for="medium">Medium</label>
//         <input type="radio" id="priority" name="fav_language" value="high">
//         <label for="high">High</label><br>
//         <button><span>Add</button> <button><span>Cancel</button>
//         </form>    
//         `
//     }


import * as task from "C:\\Users\\Channappa\\Downloads\\To-Do-List\\To-Do-List\\task.js";
import * as project from "C:\\Users\\Channappa\\Downloads\\To-Do-List\\To-Do-List\\project.js";

let Project = project.default;

export default class ToDo{

    static addProject(projectName){
        const pr = new Project(projectName);
        pr.addProject(projectName);
    }

}




