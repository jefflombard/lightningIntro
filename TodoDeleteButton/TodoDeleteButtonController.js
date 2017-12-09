({
	handleClick : function(component, event, helper) {
		// Get the Array Index
		const arrayIndex = component.get('v.arrayIndex');
		// Dispatch an Event to delete the proper task
        const deleteEvent = $A.get("e.c:TodoDeleteTask");
        deleteEvent.setParam("arrayIndex",arrayIndex);
        deleteEvent.fire();
	}
})