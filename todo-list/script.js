document.getElementById("addTaskText").addEventListener("click",
    function () {
        const text = document.getElementById("taskInput").value;
        if (text.trim() !== "") {
            const item = document.createElement("li");
            item.textContent = text;
            const tl = document.getElementById("taskList");
            tl.appendChild(item);
        }
    });
