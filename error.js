function error(status,msg){
    console.log("inside error fn");
    let err = new Error(msg);
    err.status = status;
    return err;
}

module.exports = error;