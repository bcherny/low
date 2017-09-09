export let _: any = new Proxy({}, {
  get(target: any, key: string) {
    return proxy(key)
  }
})

function proxy(...keys: string[]) {
  return new Proxy(function() {}, {
    apply(target, thisArg: any, args: any[]) {
      let res = args[0]
      keys.forEach(k => res = res[k])
      return res
    },
    get(target: any, key: string) {
      return proxy(...keys, key)
    }
  })
}