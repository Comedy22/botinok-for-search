import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const regRouter = express.Router();

regRouter.get('/', (req, res) => {
    res.render('Layout', {});
});
regRouter.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    const hashpass = await bcrypt.hash(password, 10);
    const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { hashpass, name },
    })
    if (created) {
        req.session.user = { ...user.get(), hashpass: undefined }
        return res.sendStatus(200);
    }
    return res.status(400).json({ message: 'User already exists' });
})
export default regRouter
