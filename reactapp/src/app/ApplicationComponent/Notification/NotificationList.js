import React from "react";
import { Dropdown, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  markAsRead,
  removeNotificationById,
  addNotification,
} from "../../State/notification/notificationActions";

export default function NotificationList() {
  const notificationList = useSelector((state) => state.notificationReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (id, path) => {
    dispatch(markAsRead(id));
    navigate(path);
  };

  const unreadNotification = notificationList.reduce(
    (count, noti) => (noti.isRead ? count : count + 1),
    0
  );

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success">
        <i className="fa fa-bell" />
        <Badge pill bg="danger">
          {unreadNotification}
        </Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {notificationList.map((notification) => (
          <Dropdown.Item
            key={notification.id}
            onClick={() => handleClick(notification.id, notification.path)}
            style={{
              color: notification.isRead ? "gray" : "black",
              fontWeight: notification.isRead ? "normal" : "bold",
            }}
          >
            {notification.text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
