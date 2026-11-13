(() => {
  const flag = 'WebFEAllStudioByChannel__enable_analytics_hub_web';

  function patch(config) {
    if (!config || typeof config.set !== 'function') return config;
    const set = config.set;
    config.set = function (...args) {
      const flags = args.length === 1 ? args[0]?.EXPERIMENT_FLAGS :
        args[0] === 'EXPERIMENT_FLAGS' ? args[1] : null;
      if (flags) flags[flag] = false;
      return set.apply(this, args);
    };
    return config;
  }

  let config = patch(window.ytcfg);
  Object.defineProperty(window, 'ytcfg', {
    configurable: true,
    get: () => config,
    set: value => { config = patch(value); }
  });
})();
