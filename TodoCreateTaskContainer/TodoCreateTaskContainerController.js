({
	handleCreateTask : function(component, event, helper) {
        // Get the input value
        const input = document.getElementById('task-input').value;
        // Add that value to the list
        const createTaskEvent = $A.get("e.c:TodoCreateTask");
        createTaskEvent.setParam("taskName",input);
        createTaskEvent.fire();
    }
})