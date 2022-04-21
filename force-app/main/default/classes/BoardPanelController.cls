public with sharing class BoardPanelController {

    @AuraEnabled
    public static String AddResult(String result, String mode) {
        Word_Shuffle__c gameResultObj = new Word_Shuffle__c(Result__c=result,Mode__c=mode);
        insert gameResultObj;
        return 'success here';
    }

}