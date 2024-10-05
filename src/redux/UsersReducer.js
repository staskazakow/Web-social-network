const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const FOOLLOW_CHANGE = "FOOLLOW_CHANGE";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOOGLE_FOLLOW_PROGRESS = "TOOGLE_FOLLOW_PROGRESS"
let Users_state = {
  users: [],
  totalUsersCount: 100,
  pageSize: 5,
  currentPage: 1,
  isFetching: false,
  toogleFollowInProgress: []
};
const UsersReducer = (state = Users_state, action) => {
  switch (action.type) {
    case FOOLLOW_CHANGE:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.id) {
            return {
              ...e,
              followed: !e.followed,
            };
          }
          return e;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case CHANGE_PAGE:
      return { ...state, currentPage: action.page };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOOGLE_FOLLOW_PROGRESS: 
    return {...state, toogleFollowInProgress: action.progress ?
      [...state.toogleFollowInProgress, action.userId] :
      state.toogleFollowInProgress.filter(id => id !== action.userId)
     }
    default:
      return state;
  }
};
export const ToogleFollowProgress = (progress,userId) => ({
  type: TOOGLE_FOLLOW_PROGRESS,
  progress,
  userId
})
export const ToogleIsFetching = (isFetching) => ({
  type: TOOGLE_IS_FETCHING,
  isFetching: isFetching,
});
export const PageChange = (page) => ({
  type: CHANGE_PAGE,
  page: page,
});
export const SetTotalCount = (count) => ({
  type: SET_TOTAL_COUNT,
  count: count,
});
export const OnFollowChange = (id, followState) => ({
  type: FOOLLOW_CHANGE,
  id: id,
});
export const SetUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};
export default UsersReducer;
