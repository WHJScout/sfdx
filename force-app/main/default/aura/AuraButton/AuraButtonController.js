({
    getInput : function(cmp, evt) {
        var myName = cmp.find("name").get("v.value");
        var myText = cmp.find("outName");
        var greet = "Hi, " + myName;
        myText.set("v.value", greet);
    },
    
    getInput1 : function(cmp, evt) {
		console.log("aa");
    }

})