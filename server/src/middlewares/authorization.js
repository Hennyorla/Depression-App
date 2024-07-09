const checkUserIsAdmin = (req, res, next) => {
    if(req.user){
        if(req.user.role === 'admin'){
            return next();
        } else {
            return res.status(403).json({ message: "You are not permitted to carry out this action" });
        }
    }else {
        return res.status(401).json({ message: "You are not authenticated" });
    }
}


const checkUserIsProfessional = (req, res, next) => {
    if(req.user){
        if(req.user.role === 'professional'){
            return next();
        } else {
            return res.status(403).json({ message: "You are not permitted to carry out this action" });
        }
    }else {
        return res.status(401).json({ message: "You are not authenticated" });
    }
}


module.exports = {checkUserIsAdmin, checkUserIsProfessional};



