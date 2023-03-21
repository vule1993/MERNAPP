import {
  NOTIFICATION_MARK_AS_READ,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "../actionTypes";

export const markAsRead = (notificationId) => {
  return {
    type: NOTIFICATION_MARK_AS_READ,
    payload: notificationId,
  };
};
export const removeNotificationById = (notificationId) => {
  return {
    type: REMOVE_NOTIFICATION,
    payload: notificationId,
  };
};

export const addNotification = (notification) => {
  return {
    type: ADD_NOTIFICATION,
    payload: notification,
  };
};

const saveNotificationToDB = () => {};
