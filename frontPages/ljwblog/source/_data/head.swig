<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2">
<meta name="theme-color" content="{{ theme.android_chrome_color }}">
<meta name="generator" content="Hexo {{ hexo_version }}">
<script id="hexo-configurations">
  var NexT = window.NexT || {};
  var CONFIG = {
    hostname: new URL('{{ config.url }}').hostname,
    root: '{{ config.root }}',
    scheme: '{{ theme.scheme }}',
    version: '{{ next_version }}',
    exturl: {{ theme.exturl }},
    sidebar: {{ theme.sidebar | json }},
    copycode: {{ theme.codeblock.copy_button | json }},
    back2top: {{ theme.back2top | json }},
    bookmark: {{ theme.bookmark | json }},
    fancybox: {{ theme.fancybox }},
    mediumzoom: {{ theme.mediumzoom }},
    lazyload: {{ theme.lazyload }},
    pangu: {{ theme.pangu }},
    comments: {{ theme.comments | json }},
    algolia: {
      appID: '{{ config.algolia.applicationID }}',
      apiKey: '{{ config.algolia.apiKey }}',
      indexName: '{{ config.algolia.indexName }}',
      hits: {{ theme.algolia_search.hits | json }},
      labels: {{ theme.algolia_search.labels | json }}
    },
    localsearch: {{ theme.local_search | json }},
    path: '{{ config.search.path }}',
    motion: {{ theme.motion | json }}
  };
</script>
