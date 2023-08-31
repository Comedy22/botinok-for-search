export default function authChecker(auth) {
  return function authMw(req, res, next) {
    if (!!req.session?.user === auth) {
      return next();
    }
    return res.sendStatus(403);
  }
}