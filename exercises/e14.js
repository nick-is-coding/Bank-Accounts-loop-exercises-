
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongAccounts = [];
  for(let i = 0; i < array.length; i++) {
    let sumDeposits = 0;
    let sumWithdraws = 0;
    for(let d = 0; d < (array[i].deposits || []).length; d++) {
      sumDeposits += array[i].deposits[d];
    }
    for(let w = 0; w < (array[i].withdrawals || []).length; w++) {
      sumWithdraws += array[i].withdrawals[w];
    }
    if(array[i].balance != sumDeposits - sumWithdraws) {
      wrongAccounts.push(array[i]);
    }
  }
  return wrongAccounts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
