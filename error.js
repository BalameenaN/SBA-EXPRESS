function error(status,msg){
    let err = new error(msg);
    err.status = status;
    return err;
}

module.exports = error;