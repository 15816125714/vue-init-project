// 系统名称
const SYSTEM = 'init-project';

/**
 * 全局变量，避免同一域名下不同项目存储数据冲突
 */
const global = {
  // 应用名称
  APP_NAME: SYSTEM,

  // 用户信息
  USER_INFO: SYSTEM + 'UserInfo',

  // 存储本地搜索条件名称
  FORM_DATA: SYSTEM + 'FormData',
}

/**
 * 域名 || 接口地址
 */
let domain = {}
if (process.env.NODE_ENV === 'production') {
  if (!process.env.NODE_DIR) {
    domain = { // 正式环境
      ROOT_API: 'http://localhost:9000/',
    }
  } else {
    domain = { // 测试服
      ROOT_API: 'http://localhost:9000/',
    }
  }
} else {
  domain = { // 开发环境
    ROOT_API: 'http://localhost:9000/',
  }
}

// 导出
// exports.domain = domain
export {
  global,
  domain
}