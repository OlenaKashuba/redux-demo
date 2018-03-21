import reducer from '../src/reducers/search';

describe('get search reducer', () => {
  it('should return a search term', () => {
    expect(reducer('we are the best team in the universe', {})).toEqual('we are the best team in the universe');
  });

});
