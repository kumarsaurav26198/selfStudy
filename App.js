import React, { useEffect } from 'react';
import AuthNavigation from './navigation/AuthNavigation';

const App = () => {
  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
    console.log(hasPermission, "hasPermission");
    if (hasPermission)
    {
      return true;
    }
    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
      title: "Image gallery app permissions",
      message: "Image gallery needs your permission to access your photos",
      buttonPositive: "OK",
    });
    return status === 'granted';
  };
  return (
    <>
      <AuthNavigation />
    </>
  );
};
export default App;