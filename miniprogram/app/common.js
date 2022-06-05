

const _weapps_app_common = {}

function getDefaultModule(targetModule) {
  if (!targetModule) {
    return
  }
  const keys = Object.keys(targetModule)
  if (keys.length === 1 && keys[0] === 'default') {
    return targetModule.default
  }
  return targetModule
}

Object.defineProperties(_weapps_app_common, {
  
})

export default _weapps_app_common
