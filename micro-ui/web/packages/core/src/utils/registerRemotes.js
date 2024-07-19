import { registerApplication, start } from 'single-spa';

export default (queryClient) => {
  

  registerApplication({
    name: "app1",
    app: () => import("../../../App1/src/AppWrapper"),
    activeWhen: `/${window.contextPath ? window.contextPath : "core-digit-ui"}/employee/app1`,
    customProps: {
      title: "App1 is running on host",
      queryClient
    },
  });

  registerApplication({
    name: "app2",
    app: () => import("../../../App2/src/AppWrapper"),
    activeWhen: `/${window.contextPath ? window.contextPath : "core-digit-ui"}/employee/App2`,
    customProps: {
      title: "App2 is running on host",
      queryClient
    },
  });

  start();
};
