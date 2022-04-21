public with sharing class LeadTriggerBeforeInsert {

    public static void beforeInsert(List<Lead> lds){
        for(Lead ld:lds){
            if (String.isBlank(ld.LeadSource)) {
                ld.LeadSource = 'test2';
            }
            
        }
        
    }

}