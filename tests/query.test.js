import reducer from '../src/reducers/query';

describe('get query reducer', () => {
  it('should return a new query', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('should return query string', () => {
    expect(reducer(undefined, {type: 'UPDATE_QUERY', query: '123'})).toEqual('123');
  });

});
