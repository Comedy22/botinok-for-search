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

regRouter.post('/login', async(req,res) => { 
    const {email,password} = req.body;
    const user = await User.findOne({where:{email}});
    if (!user) {
        return res.status(400).json({ message: 'Email not found' });
      }
      const isCorrect = await bcrypt.compare(password, user.hashpass);
      if (!isCorrect) {
        return res.status(400).json({ message: 'Incorrect password' });
      }
    
      req.session.user = { ...user.get(), hashpass: undefined };
      return res.status(200);
    });
    




regRouter.get('/logout', (req,res)=>{
    req.session.destroy();
    res.clearCookie('user_sid');
    return res.sendStatus(200);
})
export default regRouter
