public class child1Class extends parent1Class {
    public integer DoMultiply(integer x, integer y){
        return x*y; 
    }
    public integer doNothing(integer x, integer y){
        return 0;
    }
    public override integer doDifference(integer x, integer y){
        return (x-y) +10;
    }
}