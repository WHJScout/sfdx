({
    blockClickHandler : function(component, event, helper) {
        const open = component.get("v.open");
        // console.log('open: '+open);
        if(!open){
            component.set("v.open",true);
            //get the label value
            const label = component.get("v.label");

            // fire the block click event
            var cmpEvent = component.getEvent("onclick");
            cmpEvent.setParams({
                "value" : label});
            cmpEvent.fire();
        }
    },
})