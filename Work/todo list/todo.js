document.querySelector("#push").onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("please enter a task")   
    }
    else{
        document.querySelector("#tasks").innerHTML
        += `
             <div class="task">
                    <span id="taskname">
                        ${document.querySelector("#newtask input").value}
                    </span>
                    <button class="delete">
                        <i class="far fa-trash-alt">DELETE</i>
                    </button>
             </div>
           `;
            // Remove todos
            let current_tasks = document.querySelectorAll(".delete");
            for(let i=0; i<current_tasks.length; i++){
               current_tasks[i].onclick = function(){   
                this.parentNode.remove(); 
               }
           }
        //  Underline todos
        let tasks = document.querySelectorAll(".task  ");
            for(let i=0; i<tasks.length; i++){
               tasks[i].onclick = function(){   
                this.classList.toggle("completed")
               }
           }
        // clear input field
           document.querySelector("#newtask input").value ="";

    }
}
 