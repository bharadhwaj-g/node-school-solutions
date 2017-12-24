// TOPIC - Global scope
// All nested scopes follow the same rule: Each nested inner scope has access to outer scope variables, but NOT vice-versa.

function foo() {
  quux = 'nested scopes';
  var bar;
  function zip () {
    var quux;
    bar = true;
  }
  return zip;
}