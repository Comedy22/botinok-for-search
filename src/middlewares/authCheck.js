export default function authChecker(auth) {
  return function authMw(res, req, next) {
    if (!!req.session.user === auth) {
      return next();
    }
    return res.sendStatus(403);
  }
}