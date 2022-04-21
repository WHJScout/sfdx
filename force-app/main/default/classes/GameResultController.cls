public with sharing class GameResultController {
    @AuraEnabled
    public static List<Word_Shuffle__c> getWordShuffle() {
        String userId = UserInfo.getUserId();
        List<Word_Shuffle__c> wordShuffleList =
                [select Id,Name,Result__c,Mode__c,CreatedDate
                 from Word_Shuffle__c
                 WHERE CreatedById = :userId
                 ORDER BY CreatedDate DESC
                 ];
        //Add isAccessible() check
        return wordShuffleList;
    }

}