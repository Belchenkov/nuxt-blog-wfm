const passport = require('passport');
const { Router } = require('express');
const router = Router();

const upload = require('../middleware/upload');
const ctr = require('../controllers/post.controller');

// Admin
// /api/post/admin
router.post(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  upload.single('image'),
  ctr.create
);

// /api/get/admin
router.get(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  ctr.getAll
);

// /api/get/admin/:id
router.get(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.getById
);

// /api/put/admin/:id
router.put(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.update
);

// /api/delete/admin/:id
router.delete(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  ctr.remove
);

// Base
// /api/get
router.get('/', ctr.getAll);

// /api/get/:id
router.get('/:id', ctr.getById);

// /api/put/add/view/:id
router.put('/add/view/:id', ctr.addView);


module.exports = router;
