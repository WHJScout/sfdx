@isTest
public class Covid19Test {

    @isTest
    public static void test1(){
        
      Covid19 co = new Covid19(1);
        Integer areaNum = co.getTreated();
        co.treatPatient();
        
        //System.assertEquals(2, co.getTreated(),'2222');
        //System.assertEquals(2, Covid19.recoveredInCountry,'111');
        
    }
    
    @isTest
    public static void test2(){
        
      Covid19 co = new Covid19(-1);
        Integer areaNum = co.getTreated();
        
        //System.assertEquals(1, co.getTreated(),'3333');
        
    }
    
}