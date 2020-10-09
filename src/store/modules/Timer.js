const Timer = {
    state: () => ({
        timer: 0,
    }),
    mutations: {
        closeTimer(state) {
            clearInterval(state.timer);
        }
    }
}
export default Timer
