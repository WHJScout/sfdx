({
    fetchResult : function(cmp) {
        var action = cmp.get("c.getWordShuffle");
        // console.log("result: "+result+"mode: "+mode);
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                 cmp.set("v.data", response.getReturnValue());
                console.log("fetchResult result update ok");
                
            }else{
                // console.log("response err");
            }
        });
        $A.enqueueAction(action);
    }
})