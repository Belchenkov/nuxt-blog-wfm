const passport = require('passport');
const { Router } = require('express');
const router = Router();

const ctr = require('../controllers/post.controller');

// Admin
// /api/post/admin
router.post(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
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

// /api/put/:id
router.put('/:id', ctr.addView);


module.exports = router;
