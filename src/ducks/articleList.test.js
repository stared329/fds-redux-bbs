import reducer, {
  articleListLoading, LOADING, articleListSuccess, SUCCESS,
} from './articleList';

describe('articleList', () => {
  it('articleListLoading 동작 여부 확인', () => {
    const action = articleListLoading();
    expect(action).toEqual({
      type: LOADING,
    });
  });

  it('articleListSuccess 동작 여부 확인', () => {
    const action = articleListSuccess(['test']);
    expect(action).toEqual({
      type: SUCCESS,
      articles: ['test'],
    });
  });

  it('reducer initial state test', () => {
    const state = reducer(undefined, {});
    expect(state.loading).toBe(false);
    expect(state.articles).toEqual([]);
  });

  it('state when passed articleListLoading', () => {
    const state = reducer(undefined, articleListLoading());
    expect(state.loading).toBe(true);
    expect(state.articles).toEqual([]);
  });

  it('apply to articleListLoading has articles', () => {
    const state = reducer({
      loading: false,
      articles: [1, 2, 3],
    }, articleListLoading());
    expect(state.loading).toBe(true);
    expect(state.articles).toEqual([1, 2, 3]);
  });
});
