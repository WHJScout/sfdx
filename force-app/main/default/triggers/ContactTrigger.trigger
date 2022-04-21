trigger ContactTrigger on Contact (after insert, after update, after delete, after undelete) {
    switch on Trigger.operationType {
        when  AFTER_INSERT{
            /*
            for (Contact con : Trigger.new) {
                if(String.isNotBlank(con.AccountId)){
                    String accountId = con.AccountId;
                    List<AggregateResult> contacts  = [SELECT AccountId, count(ID) totalContact FROM Contact 
                                    where Active__c = true 
                                    and AccountId =: accountId
                                    group by AccountId];
                    for(AggregateResult result:contacts){
                        String accId = String.valueOf(result.get('AccountId'));
                        Integer totalContact = Integer.valueOf(result.get('totalContact'));

                        Account acc = new Account(ID=accId, Active_Contacts__c=totalContact);
                        update acc;
                    }
                }
            }
            */
            //optimize code
            Set<Id> accountIdSet = new Set<Id>();
            for (Contact con : Trigger.new) {
                if(String.isNotBlank(con.AccountId)){
                    accountIdSet.add(con.AccountId);
                }
            }
            List<AggregateResult> contacts  = [SELECT AccountId, count(ID) totalContact FROM Contact 
                                                where Active__c = true 
                                                and AccountId in : accountIdSet
                                                group by AccountId];

            List<Account> accountList = new List<Account>();
            for(AggregateResult result:contacts){
                String accId = String.valueOf(result.get('AccountId'));
                Integer totalContact = Integer.valueOf(result.get('totalContact'));

                Account acc = new Account(ID=accId, Active_Contacts__c=totalContact);
                accountList.add(acc);
            }
            update accountList;
        }when  AFTER_UPDATE{
            //optimize code
            Set<Id> accountIdSet = new Set<Id>();
            for (Contact con : Trigger.new) {
                if(String.isNotBlank(con.AccountId)){
                    accountIdSet.add(con.AccountId);
                }
            }
            List<AggregateResult> contacts  = [SELECT AccountId, count(ID) totalContact FROM Contact 
                                                where Active__c = true 
                                                and AccountId in : accountIdSet
                                                group by AccountId];

            List<Account> accountList = new List<Account>();
            for(AggregateResult result:contacts){
                String accId = String.valueOf(result.get('AccountId'));
                Integer totalContact = Integer.valueOf(result.get('totalContact'));

                Account acc = new Account(ID=accId, Active_Contacts__c=totalContact);
                accountList.add(acc);
            }
            update accountList;
        }
        when else {
            
        }
    }
}