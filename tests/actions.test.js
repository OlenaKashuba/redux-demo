import * as actions from '../src/actions/index';
// import * as types from '../../constants/ActionTypes';
describe('actions',()=> {
  it('should update query',()=>{
    const query = 'cat'
    const expectedAction = {
      type:'UPDATE_QUERY',
      query:query
    }
    expect(actions.updateQuery(query)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('reloads video', ()=> {
    const videoId = 'abcdefg';
    const expectedAction = {
      type: 'UPDATE_VIDEO_ID',
      videoId: videoId
    };
    expect(actions.reloadVideo(videoId)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should add video to favourites', () => {
    const result = {id: 2,
                    title: 'cats'}
    const expectedAction = {
      type: 'ADD_TO_FAV',
      result: result
    };
    expect(actions.addToFav(result)).toEqual(expectedAction);
  });
});
