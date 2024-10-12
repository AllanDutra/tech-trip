import { useEffect } from "react";
import { appConfigs } from "../../configs/App";
import { IReloadNotification } from "../../functions";
import { toast } from "react-toastify";

export const NotifyOnReload = () => {
  useEffect(() => {
    const reloadNotificationSession = sessionStorage.getItem(
      appConfigs.RELOAD_NOTIFICATION
    );

    if (!reloadNotificationSession) return;

    const { type, message } = JSON.parse(
      reloadNotificationSession
    ) as IReloadNotification;

    toast(message, { type });

    sessionStorage.removeItem(appConfigs.RELOAD_NOTIFICATION);
  }, []);

  return <></>;
};
