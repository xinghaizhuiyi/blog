const SidebarShow = {
    state: () => ({
        isshow: true,
    }),
    mutations: {
        sidebarshow(state) {
            // 这里的 `state` 对象是模块的局部状态
            state.isshow=false
        }
    }
}
export default SidebarShow
