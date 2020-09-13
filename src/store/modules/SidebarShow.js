const SidebarShow = {
    state: () => ({
        isshow: true,
    }),
    mutations: {
        sidebarshow(state) {
            state.isshow=!state.isshow
        }
    }
}
export default SidebarShow
