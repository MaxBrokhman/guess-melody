import MockAdadpter from 'axios-mock-adapter';

import {api, sendRequest} from './api';

describe(`Api calls work correctly`, () => {
  it(`Sends get request correctly`, () => {
    const apiMock = new MockAdadpter(api);
    const onSuccess = jest.fn();
    const dispatch = jest.fn();
    const onFailure = jest.fn();
    apiMock
      .onGet(`/questions`)
      .reply(200, [{fake: true}]);

    return sendRequest({
      url: `/questions`,
      onSuccess,
      dispatch,
      method: `get`,
    })
    .then(() => {
      expect(onSuccess).toHaveBeenNthCalledWith(1, [{fake: true}], dispatch);
      expect(onFailure).toHaveBeenCalledTimes(0);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: `SET_FETCHING`,
        payload: true,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: `SET_ERROR`,
        payload: null,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: `SET_FETCHING`,
        payload: false,
      });
    });
  });

  it(`Handles not successful response`, () => {
    const apiMock = new MockAdadpter(api);
    const onSuccess = jest.fn();
    const dispatch = jest.fn();
    const onFailure = jest.fn();
    apiMock
      .onGet(`/questions`)
      .reply(500);

    return sendRequest({
      url: `/questions`,
      onSuccess,
      dispatch,
      method: `get`,
      onFailure,
    })
    .then(() => {
      expect(onSuccess).toHaveBeenCalledTimes(0);
      expect(onFailure).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: `SET_FETCHING`,
        payload: true,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: `SET_FETCHING`,
        payload: false,
      });
    });
  });
});
