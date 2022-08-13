import {
  START_FETCHING_ORDERS,
  SUCCESS_FETCHING_ORDERS,
  ERROR_FETCHING_ORDERS,
  SET_DATE,
  SET_PAGE,
} from './constants';

import { getData } from '../../utils/fetch';
import debounce from 'debounce-promise';
import { clearNotif } from '../notif/actions';
import moment from 'moment';

let debouncedFetchOrders = debounce(getData, 1000);

export const startFetchingOrders = () => {
  return {
    type: START_FETCHING_ORDERS,
  };
};

export const successFetchingOrders = ({ orders, pages }) => {
  return {
    type: SUCCESS_FETCHING_ORDERS,
    orders,
    pages,
  };
};

export const errorFetchingOrders = () => {
  return {
    type: ERROR_FETCHING_ORDERS,
  };
};

export const fetchOrders = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingOrders());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let params = {
        page: getState().orders?.page || 1,
        limit: getState().orders?.limit || 10,
        startDate: moment(getState().orders?.date?.startDate).format(
          'YYYY-MM-DD'
        ),
        endDate: moment(getState().orders?.date?.endDate).format('YYYY-MM-DD'),
      };

      let res = await debouncedFetchOrders('/cms/orders', params);

      const _temp = [];
      res.data.data.order.forEach((res) => {
        _temp.push({
          name: `${res.personalDetail.firstName} ${res.personalDetail.lastName}`,
          email: res.personalDetail.email,
          title: res.historyEvent.title,
          date: res.historyEvent.date,
          orderDate: moment(res.date).format('DD-MM-YYYY, h:mm:ss a'),
          venueName: res.historyEvent.venueName,
        });
      });

      dispatch(
        successFetchingOrders({
          orders: _temp,
          pages: res.data.data.pages,
        })
      );
    } catch (error) {
      dispatch(errorFetchingOrders());
    }
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};

export const setDate = (ranges) => {
  return {
    type: SET_DATE,
    ranges,
  };
};
