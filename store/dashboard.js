export const state = () => ({
    drawer: true,
});

export const mutations = {
    changeDrawer(state) {
        state.drawer = !(state.drawer);
    }
}