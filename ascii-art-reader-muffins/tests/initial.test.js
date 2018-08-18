let functions = require('../index.js')

test('test initial set up', function () {
    let expected = 0
    let actual = 0
    expect(actual).toEqual(expected)
})

test('the comments can be viewed', done => {
    function callback(data) {
        console.log(data);
      expect(data).toBe('hello');
      done();
    }
    functions.viewComment(callback);
});



  