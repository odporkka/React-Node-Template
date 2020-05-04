

exports.apiStatus = async (ctx) => {
    ctx.status = 200
    ctx.body = "OK!";
};