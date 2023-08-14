if (typeof window !== 'undefined' && window['__POWERED_BY_QIANKUN__']) {
  // 修改变量，以修复构建资源加载问题
  // https://qiankun.umijs.org/zh/faq#%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%AE%E5%BA%94%E7%94%A8%E5%8A%A0%E8%BD%BD%E7%9A%84%E8%B5%84%E6%BA%90%E4%BC%9A-404
  __webpack_public_path__ = new URL(
    process.env.BASE_URL,
    window['__INJECTED_PUBLIC_PATH_BY_QIANKUN__']
  ).toString()
}
