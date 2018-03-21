import videoId from '../src/reducers/videoId';

describe('get videoId reducer', () => {
  it('should return an initial value of videoId', () => {
    expect(videoId('xsSnOQynTHs', {})).toEqual('xsSnOQynTHs');
  });

  it('should return a new videoId string', () => {
    expect(videoId('xsSnOQynTHs', {type: 'UPDATE_VIDEO_ID', videoId: 'p3452343'})).toEqual('p3452343');
  });
});
