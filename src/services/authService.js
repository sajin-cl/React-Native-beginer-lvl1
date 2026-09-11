

export const fakeLogin = (email, password) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                success: true,
                message: 'login successfully'
            });
        }, 3000)
    })
};