import reducer, {
  articleCreating,
} from './article';

describe('article', () => {
  it('test reducer', () => {
    const state = reducer(undefined, articleCreating());
    expect(state).toEqual({
      creating: true,
      success: false,
      errorMsg: '',
    });
  });
});
