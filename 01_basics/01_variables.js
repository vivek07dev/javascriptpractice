const accountId =144553
let accountEmail="prasad@gamil.com"
var accountPassword="12345"
accountCity= "delhi"

//accountId=2//not allowed

accountEmail="hc@gamil.com"
accountPassword="54321"
accountCity="noida"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functrion scope*/

console.table([accountId,accountEmail,accountPassword,accountCity])