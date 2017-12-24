// TOPIC - Scope-chains and access variables.
// All nested scopes follow the same rule: Each nested inner scope has access to outer scope variables, but NOT vice-versa.

function foo() {
  var bar;
  function zip () {
    var quux;
  }
}