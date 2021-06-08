/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(func, context,...argus1) {
  return function(...argus2){
    func.apply(context, argus1, argus2)
  }

};

//  var alice = {
//    name: 'alice',
//    shout: function(){
//      alert(this.name);
//    }
//  }
//  var boundShout = alice.shout.bind(alice);
//  boundShout(); // alerts 'alice'
//  boundShout = alice.shout.bind({name: 'bob'});
//  boundShout(); // alerts 'bob'


//  var func = function(a, b){ return a + b };
//  var boundFunc = func.bind(null, 'foo');
//  var result = boundFunc('bar');
//  result === 'foobar'; // true

