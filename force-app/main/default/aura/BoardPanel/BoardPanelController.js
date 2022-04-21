({
    startGame : function(component, event, helper) {
        let gameModeComboBox = component.find("gameMode");
        let value = gameModeComboBox.get("v.value");
        component.set("v.slectedMode", value);

        let selectValue = component.get("v.slectedMode");
        if(selectValue){
            let childCmp = component.find("boardComp");
            childCmp.startGame();
        }
        // helper.helperMethod();
        // console.log(selectValue);
        // alert('start game');
        
    },
    reshuffleBoard : function(component, event, helper) {
        component.set("v.reshuffleDisabled",true);
        let childCmp = component.find("boardComp");
        childCmp.reshuffleBoard();


    },
    
    onResultHandler: function(component, event,helper) {
        var result = event.getParam("result");
        if(result === "win"){
            // console.log("win here");
            component.set("v.reshuffleDisabled",true);
             helper.helperMethod(component,event,result);

             //if win show toast 
             helper.showToast(component, event,helper,"success");
        }else if(result === "lose"){
            // console.log("lose here");
            component.set("v.reshuffleDisabled",false);
             helper.helperMethod(component,event,result);
             helper.showToast(component, event,helper,"lose");
        }
    },
})