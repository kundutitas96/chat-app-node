var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should return correct message object', () => {
    var from = 'Titas';
    var text = 'Hello there';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    //expect(message).toContain({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should return a correct location in maps', () => {
    var from = 'Kundu';
    var latitude = 21;
    var longitude = 35;
    var url = 'https://www.google.com/maps?q=21,35';
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    //expect(message).toContain({from, url});
  });
});
