import {
  START_FETCHING_LISTS_CATEGORIES,
  SUCCESS_FETCHING_LISTS_CATEGORIES,
  ERROR_FETCHING_LISTS_CATEGORIES,
  START_FETCHING_LISTS_SPEAKERS,
  SUCCESS_FETCHING_LISTS_SPEAKERS,
  ERROR_FETCHING_LISTS_SPEAKERS,
  START_FETCHING_LISTS_EVENTS,
  SUCCESS_FETCHING_LISTS_EVENTS,
  ERROR_FETCHING_LISTS_EVENTS,
} from './constants';

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
};

const initialState = {
  categories: [],
  statusCategories: statuslist.idle,
  speakers: [],
  statusSpeakers: statuslist.idle,
  events: [],
  statusEvents: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_LISTS_CATEGORIES:
      return { ...state, statusCategories: statuslist.process };

    case ERROR_FETCHING_LISTS_CATEGORIES:
      return { ...state, statusCategories: statuslist.error };

    case SUCCESS_FETCHING_LISTS_CATEGORIES:
      return {
        ...state,
        statusCategories: statuslist.success,
        categories: action.categories,
      };

    case START_FETCHING_LISTS_SPEAKERS:
      return { ...state, statusSpeakers: statuslist.process };

    case ERROR_FETCHING_LISTS_SPEAKERS:
      return { ...state, statusSpeakers: statuslist.error };

    case SUCCESS_FETCHING_LISTS_SPEAKERS:
      return {
        ...state,
        statusSpeakers: statuslist.success,
        speakers: action.speakers,
      };

    case START_FETCHING_LISTS_EVENTS:
      return { ...state, statusEvents: statuslist.process };

    case ERROR_FETCHING_LISTS_EVENTS:
      return { ...state, statusEvents: statuslist.error };

    case SUCCESS_FETCHING_LISTS_EVENTS:
      return {
        ...state,
        statusEvents: statuslist.success,
        events: action.events,
      };

    default:
      return state;
  }
}
