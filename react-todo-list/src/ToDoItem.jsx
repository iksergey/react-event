import React from "react";

const ToDoItem = ({ taskItem }) => {
    const { taskTitle, taskText, taskImageUrl } = taskItem;
    return (
        <div className="card m-1" >
            <div className="row">
                <div className="col-md-2  d-flex align-items-center">
                    <img
                        width="150"
                        src={taskImageUrl}
                        className="img-fluid rounded-start"
                        alt="Task"
                    />
                </div>
                <div className="col-md-10 d-flex align-items-center">
                    <div className="card-body ">
                        <h5 className="card-title">{taskTitle}</h5>
                        <p className="card-text">{taskText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoItem;
