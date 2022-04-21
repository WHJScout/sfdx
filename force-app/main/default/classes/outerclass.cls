public class outerclass{

    private integer pri;
    protected integer pro;

    public class innerclass{

        public innerclass()
        {

            outerclass obj = new outerclass();
            obj.pri = 6; //can access private
            obj.pro = 7;

        }

    }

}