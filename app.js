document.querySelector('#addTask').onclick =
    () => {
        if (document.querySelector('#taskInput').value == "") {
            alert("Enater a Task");
        }
        else {
            document.querySelector('#tasks').innerHTML += `
       <div class="task">
      <span id="taskName">
           ${document.querySelector("#taskInput").value}
      </span >
      
    <div>  
    <button class="edit " id="onEdit">Edit</button>
<button class="delete">Delete</button>
</div>
</div>`;

            let countDelete = document.querySelectorAll('.delete');

            for (let i = 0; i < countDelete.length; i++) {
                let button = countDelete[i];
                button.onclick =
                    () => {

                        button.parentNode.parentNode.remove();

                    }
            }

            let countName = document.querySelectorAll('#taskName');

            for (let i = 0; i < countName.length; i++) {
                let button = countName[i];
                button.onclick =
                    () => {
                        button.classList.toggle('complete');
                        //   button.parentNode.remove();

                    }
            }

            document.querySelector("#taskInput").value = "";

        }
        let countEdit = document.querySelectorAll('.edit');

        for (let i = 0; i < countEdit.length; i++) {
            let button = countEdit[i];
            button.onclick =
                () => {

                    let n = prompt("Enter A new task");
                    button.parentNode.parentNode.querySelector("#taskName").innerText = n;


                }
        }

        document.querySelector("#taskInput").value = "";





    };