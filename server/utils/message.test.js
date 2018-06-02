var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should return correct message object', () => {
    var from = 'Titas';
    var text = 'Hello there';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toContain({from, text});
  });
});
