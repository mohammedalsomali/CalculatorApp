import { IonButton, IonMenuButton, IonToggle, IonItem, IonMenuToggle  } from "@ionic/react";
import React, { useEffect } from "react";

export const NavButtons = () => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 900 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  // MediaQueryListEvent { isTrusted: true, media: "(min-width: 768px)", matches: true ...}
  console.log(mQuery.matches);

  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <IonMenuButton />
      ) : (
        <>
          
          <IonMenuToggle>
          <IonButton routerLink={"/home"}> <IonMenuButton></IonMenuButton> </IonButton>
          </IonMenuToggle>
          
        </>
      )}
    </div>
  );
};