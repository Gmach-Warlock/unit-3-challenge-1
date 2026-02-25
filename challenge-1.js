/* 
    ? Variables
*/

let firstName = "John";
let age = 18;
let annualIncome = 26000;
let creditScore = 625;
let isCitizen = true;
let hasCriminalRecord = false;


/* 
    ? Basic Eligibility
*/

let eligibleForAccount;

if (age >= 18 && isCitizen && !hasCriminalRecord) {
    console.log("Account Approved");
    eligibleForAccount = true;
} else {
    console.log("Account Denied");
    eligibleForAccount = false;
};


/* 
    ? Premium Qualification
*/

let qualifiedForPremium;

if (annualIncome > 100000 && creditScore > 720 && eligibleForAccount) {
    console.log("Premium Approved");
    qualifiedForPremium = true;
} else {
    console.log("Standard Account Only");
    qualifiedForPremium = false;
};

/* 
    ? Risk Flag
*/

let flaggedForRisk;

if (creditScore < 550 || annualIncome < 25000) {
    console.log("Flag for Review");
    flaggedForRisk = true;
} else {
    console.log("No Risk Flags");
    flaggedForRisk = false;
}

/* 
    ? Stretch Goals
*/

let riskLevel;

if (creditScore < 550) {
    riskLevel = "High";
} else if (creditScore > 550 && creditScore < 650) {
    riskLevel = "Medium";
} else {
    riskLevel = "Low";
}

console.log(`${firstName} has a credit score of ${creditScore}, so ${firstName} has a risk level of ${riskLevel}.`);


