import * as firebase from 'firebase';

export const CREATING = 'article/CREATING';
export const SUCCESS = 'article/SUCCESS';
export const ERROR = 'article/ERROR';

export function articleCreating() {
  return {
    type: CREATING,
  };
}

export function articleSuccess(article) {
  return {
    type: SUCCESS,
    title: article.title,
    content: article.content,
  };
}

export function articleError(errorMsg) {
  return {
    type: ERROR,
    errorMsg,
  };
}

const initialState = {
  creating: false,
  success: false,
  errorMsg: '',
  title: '',
  content: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATING:
      return {
        creating: true,
        success: false,
        errorMsg: '',
        title: '',
        content: '',
      };
    case SUCCESS:
      return {
        creating: false,
        success: true,
        errorMsg: '',
        title: action.title,
        content: action.content,
      };
    case ERROR:
      return {
        creating: false,
        success: false,
        errorMsg: action.errorMsg,
        title: '',
        content: '',
      };
    default:
      return state;
  }
}

export const createArticle = ({ title, content }) => async (dispatch) => {
  if (!title || !content) {
    dispatch(articleError('필드를 모두 채워주세요.'));
    return;
  }

  const { currentUser } = firebase.auth();
  if (!currentUser) {
    return;
  }
  dispatch(articleCreating());

  try {
    const articleRef = firebase.database().ref('articles').push({
      title,
      content,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      uid: currentUser.uid,
    });
    const contentPromise = firebase.database().ref(`contents/${articleRef.key}`).set(content);
    await Promise.all([articleRef, contentPromise]);
    dispatch(articleSuccess({ title, content }));
  } catch (e) {
    dispatch(articleError(`알 수 없는 에러가 발생했습니다. 다시 시도해 주세요: ${e.message}`));
  }
};
