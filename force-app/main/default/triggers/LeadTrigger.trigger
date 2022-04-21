trigger LeadTrigger on Lead (before insert) {
    
    System.debug(Trigger.operationType);
    switch on Trigger.operationType {
        when BEFORE_INSERT {
            System.debug('is trigger '+ Trigger.isExecuting);
            //LeadTriggerBeforeInsert.beforeInsert(Trigger.New);
        }
        when BEFORE_UPDATE{

        }
        when else {
            System.debug('something else');
        }
    }


    

}