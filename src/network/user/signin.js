/* eslint-disable */
// import net from '../Base'

export default {
    userSignIn(e, http, payload) {
        e.$Progress.start()
        e.isSignedIn = true
        http.post('/member/signin', {
            // net().post('user/signin', {
            phoneno: payload.phoneno,
            password: payload.password
        }).then((data) => {
            e.$Progress.finish()
            e.company = {}

            if (!Array.isArray(data.data) || data.data.length == 0) {
                // e.$swal('Message', 'Incorrect email & password!!', 'error')
                return e.$snotify.error('Incorrect email or password!')
            }
            let empty = null

            let userobject = null;
            userobject = JSON.parse(data.data[0])
            // console.log(userobject)
            if (userobject) {
                e.$store.commit('register/setLoggedIn', true)
                e.$store.commit('register/setUserDetails', userobject)
                e.$store.commit('register/setId', userobject.p_userid)
                e.$router.push('/')
            } else {
                // e.$swal('Login Error', "Incorrect email & password!", 'error')
                e.$snotify.error('Incorrect email or password!')
            }
        }).catch(error => {
            // console.log(error);
            e.$Progress.finish()
            if (error.response) {
                e.$Progress.finish()
                if (error.response.status === 500) {
                    //    return e.$swal('System Error', 'Error occurred during authentication processing!', 'error')
                    return e.$snotify.error('An error occured whiles authenticating')
                } else if (error.response.status === 200) {
                    // e.$swal('Login Error', "Incorrect email & password!", 'error')
                    return e.$snotify.error('Incorrect email or password!')
                }
                // return e.$swal('Error', 'Incorrect email & password!!', 'error')
                return e.$snotify.error('Incorrect email or password!')
            }
            // return e.$swal('Error', 'Please check you internet connection', 'error')
            return e.$snotify.error('Could not sign you in. Check your internet connection!')
        }).finally(() => {
            e.isSignedIn = false
            e.loading = false
        })
    },
}