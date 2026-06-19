// public/site-helper.js
// 轻量级提示卡片、关键词徽章和访问说明生成器

(function() {
  'use strict';

  var siteConfig = {
    baseUrl: 'https://index-zh-hth.com.cn',
    keyword: '华体会',
    tagColors: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6']
  };

  var sampleTips = [
    '首次访问请稍候，系统正在加载资源。',
    '站点支持现代浏览器，推荐使用Chrome或Edge。',
    '如遇页面显示异常，请尝试清除缓存后刷新。',
    '所有内容仅供学习参考，请遵守当地法律法规。',
    '遇到问题可通过站内反馈渠道联系管理员。'
  ];

  var badgeData = [
    { label: '体育', icon: '⚽' },
    { label: '电竞', icon: '🎮' },
    { label: '真人', icon: '🎲' },
    { label: '彩票', icon: '🎰' },
    { label: '棋牌', icon: '🃏' }
  ];

  function createTipCard(container, tipText) {
    var card = document.createElement('div');
    card.className = 'helper-tip-card';
    card.style.cssText = 'background:#f9f9fb;border-left:4px solid #2c3e50;padding:12px 16px;margin:10px 0;border-radius:4px;font-size:14px;color:#333;box-shadow:0 1px 3px rgba(0,0,0,0.08);';
    card.textContent = tipText;
    container.appendChild(card);
  }

  function createBadge(container, badge) {
    var span = document.createElement('span');
    span.className = 'helper-keyword-badge';
    var colorIndex = Math.floor(Math.random() * siteConfig.tagColors.length);
    var bgColor = siteConfig.tagColors[colorIndex];
    span.style.cssText = 'display:inline-block;padding:4px 10px;margin:4px;border-radius:12px;background:' + bgColor + ';color:#fff;font-size:13px;font-weight:500;white-space:nowrap;';
    span.innerHTML = badge.icon + ' ' + badge.label;
    container.appendChild(span);
  }

  function createAccessNotice(container, url) {
    var notice = document.createElement('div');
    notice.className = 'helper-access-notice';
    notice.style.cssText = 'background:#fff3cd;border:1px solid #ffc107;padding:10px 14px;margin:10px 0;border-radius:4px;font-size:13px;color:#856404;';
    var strong = document.createElement('strong');
    strong.textContent = '访问说明：';
    notice.appendChild(strong);
    notice.appendChild(document.createTextNode(' 当前页面基于 ' + url + ' 构建，核心关键词为 "' + siteConfig.keyword + '"。'));
    container.appendChild(notice);
  }

  function initHelper() {
    var wrapper = document.getElementById('site-helper-root');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.id = 'site-helper-root';
      wrapper.style.cssText = 'max-width:600px;margin:20px auto;padding:16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;';
      var target = document.body || document.documentElement;
      target.insertBefore(wrapper, target.firstChild);
    }

    // 清除原有内容，避免重复
    wrapper.innerHTML = '';

    // 标题
    var title = document.createElement('h3');
    title.textContent = '站点助手';
    title.style.cssText = 'margin:0 0 12px 0;font-size:18px;color:#2c3e50;border-bottom:2px solid #ecf0f1;padding-bottom:6px;';
    wrapper.appendChild(title);

    // 提示卡片区域
    var tipSection = document.createElement('div');
    tipSection.className = 'helper-tip-section';
    var randomTip = sampleTips[Math.floor(Math.random() * sampleTips.length)];
    createTipCard(tipSection, randomTip);
    wrapper.appendChild(tipSection);

    // 关键词徽章区域
    var badgeSection = document.createElement('div');
    badgeSection.className = 'helper-badge-section';
    badgeSection.style.cssText = 'margin:12px 0;';
    var badgeTitle = document.createElement('span');
    badgeTitle.textContent = '热门分类：';
    badgeTitle.style.cssText = 'font-weight:600;margin-right:6px;color:#555;';
    badgeSection.appendChild(badgeTitle);
    badgeData.forEach(function(b) {
      createBadge(badgeSection, b);
    });
    wrapper.appendChild(badgeSection);

    // 访问说明区域
    var noticeSection = document.createElement('div');
    noticeSection.className = 'helper-notice-section';
    createAccessNotice(noticeSection, siteConfig.baseUrl);
    wrapper.appendChild(noticeSection);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHelper);
  } else {
    initHelper();
  }
})();