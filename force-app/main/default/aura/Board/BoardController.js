({
    doInit: function(component, event, helper) {
        // console.log("init");
        let gameMode = component.get("v.mode");
        let column = 0;
        if(gameMode && gameMode==="hard"){
            column = 6;
        }else if(gameMode==="medium"){
            column = 4;
        }else{
            column = 3;
        }
        component.set("v.column",column);

        let words = helper.getWords(column * column);
        // console.log("Words :" + words);
        component.set("v.words", words);
        component.set("v.openFalse", false);

        let winWord = helper.getWinWord(words);
        // console.log("Win word :" + winWord);
        component.set("v.winWord", winWord);

        helper.resetBoard(component);

    },

    blockClickHandler: function(component, event, helper) {
        let clickCount = component.get("v.clickCount")+1;
        let value = event.getParam("value");
        if(value === component.get("v.winWord")){
            component.set("v.result", "YOU WIN");
            helper.disableBoard(component);
            // user has won
            helper.fireResultEvent("win");
        }else if(clickCount == 3){
            component.set("v.result", "YOU LOSE");
            helper.disableBoard(component);
            //user has lose
            helper.fireResultEvent("lose");
        }

        //  console.log("clickCount :" + clickCount);
        component.set("v.clickCount", clickCount);

  
    },

    onRender: function(cmp) {

    },

    reshuffleBoard: function (component, event, helper) {
        // console.log(444);
        let words = component.get("v.words");
        words = helper.randomizeArray(words);
        component.set("v.words",words);
        helper.resetBoard(component);
    },


    
})