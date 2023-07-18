/**
 * @description       : 
 * @author            : Harlinsson Chavarro (HCH)
 * @group             : 
 * @last modified on  : 06-28-2023
 * @last modified by  : Harlinsson Chavarro (HCH)
**/

public with sharing class SobjectController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Name, Industry, AnnualRevenue, Phone, Website FROM Account];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountListByQuery(String nameQuery) {
        nameQuery = '%' + nameQuery + '%';
        List<Account> accountList = [SELECT  Name, Industry, AnnualRevenue, Phone, Website FROM Account WHERE Name LIKE :nameQuery];
        
        if(accountList.isEmpty()) {
            throw new QueryException('No Record Found for given name.');
        }
        return accountList; 
    }
}