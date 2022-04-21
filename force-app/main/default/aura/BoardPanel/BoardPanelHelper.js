({
    helperMethod : function(cmp,event,result){
        console.log("helperMethod start");

        var action = cmp.get("c.AddResult");
        action.setParams({
            result:result.toUpperCase(),
            mode: cmp.get("v.slectedMode").toUpperCase()
        });
        // console.log("result: "+result+"mode: "+mode);
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                // cmp.set("v.cases", response.getReturnValue());
                console.log("response ok");

                //fire application event
                this.notifyGameResultUpdate(cmp, event);
                
            }else{
                console.log("response err");
            }
        });
        $A.enqueueAction(action);

        console.log("end");
    },

    notifyGameResultUpdate: function (cmp, event) {
        var appEvent = $A.get("e.c:NotifyGameResultUpdate");
        appEvent.fire();
    },

    showToast : function(component, event, helper,message) {
        var toastEvent = $A.get("e.force:showToast");
        if(message === "success"){
            toastEvent.setParams({
                "title": "Success!",
                "message": "The record has been updated successfully.",
                "type":"success",
            });
        }else{
            toastEvent.setParams({
                "title": "Lose!",
                "message": "The record has been updated Failer.",
                "type":"error",
            });
        }
 
        toastEvent.fire();
    },
})