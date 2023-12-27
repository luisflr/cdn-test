(function(w, d, s, u) {
  w.RocketChat = function(c) {
      w.RocketChat._.push(c)
  };
  w.RocketChat._ = [];
  w.RocketChat.url = u;
  let h = d.getElementsByTagName(s)[0],
      j = d.createElement(s);
  j.async = true;
  j.src = 'https://trmarketing.keos.co/livechat/rocketchat-livechat.min.js?_=201903270000';
  h.parentNode.insertBefore(j, h);
})(window, document, 'script', 'https://trmarketing.keos.co/livechat') ?? 1;