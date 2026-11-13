(() => {
  const route = /^\/channel\/[^/]+\/analytics\/hub_overview\/?$/;
  let lastUrl;

  function openClassic() {
    if (location.href === lastUrl) return;
    lastUrl = location.href;
    if (!route.test(location.pathname)) return;

    const target = location.href.replace(/\/hub_overview(?=[/?#]|$)/, '/tab-overview');
    if (sessionStorage.getItem('classicAnalyticsAttempt') === target) return;
    sessionStorage.setItem('classicAnalyticsAttempt', target);
    location.replace(target);
  }

  openClassic();
  setInterval(openClassic, 400);
})();
