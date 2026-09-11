

export const fakeLogin = (email, password) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'sajinclofficial@gmail.com' && password === '123456789') {
                resolve({
                    success: true,
                    message: 'login successfully'
                });
            }
            else {
                reject({
                    success: false,
                    message: "Invalid email or password",
                });
            }
        }, 3000)
    })
};