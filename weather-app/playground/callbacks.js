var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Mela'
    };
    setTimeout(() => {
        callback(user);
    },3000);
};

getUser(22, (userObject) => {
    console.log(userObject);
});