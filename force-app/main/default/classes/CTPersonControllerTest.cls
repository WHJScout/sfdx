@isTest
public class CTPersonControllerTest {
    @isTest
    static void getTokenTest(){
        String str =  CTPersonController.getToken('1234');
        System.debug('result' + str);
        
    }

    @isTest
    static void getRecentHealthChangesTest(){
        Person__c person = new Person__c(name='wang',Mobile__c='135');
        insert person;
        List<Person__c> personList =  CTPersonController.getRecentHealthChanges();
        for(Person__c per:personList){
            System.debug('result' + per.Name);
        }
    }
}