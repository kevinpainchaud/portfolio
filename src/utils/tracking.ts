export const trackEvent = (eventName: "click_contact_button") =>
  window.umami?.track(eventName);
