import React from "react";
import Body from "@shared/components/layout/Body/index.jsx";
import { HeaderParent } from "@shared/components/layout/Header/index.jsx";
import ScreenTransition from "@shared/components/layout/ScreenTransition/index.js";
import Button from "@shared/components/ui/Button/index.js";
import usePWADetection from "@shared/hooks/pwa/usePWADetection.jsx";
import { useAuthStore } from "@shared/store/useAuthStore/index.js";

const Setting = () => {
  const { status } = usePWADetection();

  const logout = useAuthStore((state) => state.logout);
  return (
    <ScreenTransition>
      <HeaderParent ScreenTitle={"Setting"} />
      <Body>
        <div style={{ marginBottom: 20 }}>
          {status.isIOS && status.isIOS ? (
            <div>PWA ios</div>
          ) : (
            <h3>This device is not iOS</h3>
          )}
        </div>
        <Button onClick={logout} label={"Logout"} />
      </Body>
    </ScreenTransition>
  );
};

export default Setting;
