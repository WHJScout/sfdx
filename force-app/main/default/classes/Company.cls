/**
 * Company Class
 * Stores information about the company
 * and its customers
 * */
/*
 * enter apex code
 * 
Company sfdcfacts = new Company();
sfdcfacts.companyName = 'SFDCFacts Academy';
sfdcfacts.ceo = 'Manish Choudhari';
sfdcfacts.employeeCount = 6;
sfdcfacts.revenue = 1000000;


sfdcfacts.addNewCustomer('CLR Infotech', 'clrinfotech.com', 'clrinfotech@gmail.com', 7778889990L);
sfdcfacts.addNewCustomer('Forcepanda', 'forcepanda.com', 'forcepanda@gmail.com', 7778889990L);
sfdcfacts.addNewCustomer('Udemy', 'udemy.com', 'udemy@gmail.com', 6668889990L);


sfdcfacts.getAllCustomers();

*/
public class Company {
	public String companyName;
    public String ceo;
    public Integer employeeCount;
    public Long revenue;

    // List of all customers
    private List<Client> customers = new List<Client>();

    // add new customer
    public void addNewCustomer(String name, String website, String email, Long phone) {
        Client customer = new Client(name, website, email, phone);
        customers.add(customer);
    }

    // print the list of all customers
    public void getAllCustomers(){
        for(Client customer : customers){
            System.debug('Customer Name: '+customer.clientName+', Website: '+customer.website+', Phone: '+customer.phone+', Email: '+customer.email);
        }
    }

    // private inner class to store customer information
    private class Client {
        public String clientName;
        public String website;
        public String email;
        public Long phone;

        Client (String clientName, String website, String email, Long phone){
            this.clientName = clientName;
            this.website = website;
            this.email = email;
            this.phone = phone;
        }
    }
}