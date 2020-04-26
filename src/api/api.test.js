import MockAdadpter from 'axios-mock-adapter';

import {api, sendRequest} from './api';

describe(`Api calls work correctly`, () => {
  it(`Sends get request correctly`, () => {
    const apiMock = new MockAdadpter(api);
    const onSuccess = jest.fn();
    const dispatch = jest.fn();
    apiMock
      .onGet(`/questions`)
      .reply(200, [{fake: true}]);

    return sendRequest({
      url: `/questions`,
      onSuccess,
      dispatch,
    })
    .then(() => {
      expect(onSuccess).toHaveBeenNthCalledWith(1, [{fake: true}]);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: `SET_FETCHING`,
        payload: true,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: `SET_FETCHING`,
        payload: false,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: `SET_ERROR`,
        payload: null,
      });
    });
  });

  it(`Handles not successful response`, () => {
    const apiMock = new MockAdadpter(api);
    const onSuccess = jest.fn();
    const dispatch = jest.fn();
    apiMock
      .onGet(`/questions`)
      .reply(500);

    return sendRequest({
      url: `/questions`,
      onSuccess,
      dispatch,
    })
    .then(() => {
      expect(onSuccess).toHaveBeenCalledTimes(0);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: `SET_FETCHING`,
        payload: true,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: `SET_FETCHING`,
        payload: false,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: `SET_ERROR`,
        payload: {
          message: `Questions are not available right now. Please, try again later`,
        },
      });
    });
  });
});


